import fs from 'node:fs';
import path from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';
import { Language } from './src/types';
import { DEFAULT_LANG, LOCALES, SITE, localeMeta } from './src/data/seo';
import { PageId, homeLabel, pageContent, pageUrl, routeFromPath, routesFor } from './src/data/pages';
import { BLOG_INDEX, postById, postsByDate } from './src/data/blog';
import { translations } from './src/data/translations';
import { PACK_GROUPS } from './src/data/packs';

/**
 * Writes one indexable page per language, and one per entry of the menu.
 *
 * The app is a single bundle, so every language and every section would
 * otherwise share one URL and one `<head>` — which is the same as telling
 * Google the site is a single document in Luxembourgish. This plugin gives
 * each language a directory (`/lb/`, `/fr/`, `/de/`, `/en/`), each menu entry
 * a directory inside it (`/fr/abonnements/`, `/de/sender/`) and each article
 * of the blog one of its own (`/fr/blog/…/`), every one with its own title,
 * description, canonical, Open Graph locale, breadcrumb and structured data,
 * all cross-linked with `hreflang` so a search engine knows which of them is
 * the same page in another language.
 *
 * The bare domain keeps answering, in the site's own language, with its
 * canonical pointing at `/lb/` so the two never compete.
 *
 * In dev the head is built on the fly for whatever address is open; at build
 * time every page is written out, sharing the one bundle. The sitemap is
 * generated here too, from the same lists.
 */

/** The marker `index.html` leaves for the generated head to land in. */
const SLOT = '<!--seo-->';
const START = '<!--seo:start-->';
const END = '<!--seo:end-->';
const BLOCK = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;

const esc = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const asset = (file: string) => `${SITE.origin}${file}`;

/** Cut on a word, so a truncated title or description still reads as words. */
const clip = (value: string, limit: number) => {
  if (value.length <= limit) return value;
  const cut = value.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:–—-]$/, '')}…`;
};

/** `'88,99 €'` and `'39.99 €'` are both printed on the cards; schema wants `88.99`. */
const priceOf = (printed: string) => printed.replace(/[^\d,.]/g, '').replace(',', '.');

const titleOf = (lang: Language, page: PageId, postId?: string) => {
  if (page === 'home') return localeMeta(lang).title;
  const { heading } = pageContent(lang, page, postId);
  const named = heading.toLowerCase().includes(SITE.orgName.toLowerCase());
  return clip(named ? heading : `${heading} | ${SITE.orgName}`, 72);
};

const descriptionOf = (lang: Language, page: PageId, postId?: string) => {
  const locale = localeMeta(lang);
  if (page === 'home') return locale.description;
  const { lead } = pageContent(lang, page, postId);
  // A short lead alone would leave a thin snippet; the site's own line finishes it.
  return clip(lead.length < 110 ? `${lead} ${locale.description}` : lead, 165);
};

/** The same page in every language, which is what an `hreflang` set is. */
const alternates = (page: PageId, postId?: string) => {
  const links = LOCALES.flatMap((locale) =>
    locale.hreflang.map(
      (tag) =>
        `<link rel="alternate" hreflang="${tag}" href="${pageUrl(locale.code, page, postId)}" />`
    )
  );
  links.push(
    `<link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, page, postId)}" />`
  );
  return links;
};

const organization = () => ({
  '@type': 'Organization',
  '@id': `${SITE.origin}/#organization`,
  name: SITE.orgName,
  alternateName: SITE.name,
  url: `${SITE.origin}/`,
  logo: asset(SITE.logo),
  image: asset(SITE.shareCard),
  areaServed: { '@type': 'Country', name: 'Luxembourg' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: LOCALES.map((l) => l.htmlLang),
    areaServed: 'LU'
  }
});

const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.origin}/#website`,
  name: SITE.orgName,
  url: `${SITE.origin}/`,
  inLanguage: LOCALES.map((l) => l.htmlLang),
  publisher: { '@id': `${SITE.origin}/#organization` }
});

const service = (lang: Language, page: PageId) => {
  const locale = localeMeta(lang);
  const t = translations[lang];
  const url = pageUrl(lang, page);
  const flagship = PACK_GROUPS.find((group) => group.bestValue) ?? PACK_GROUPS[0];

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `${SITE.orgName} — ${t.nav.pricing}`,
    serviceType: locale.serviceType,
    description: descriptionOf(lang, page),
    url,
    inLanguage: locale.htmlLang,
    provider: { '@id': `${SITE.origin}/#organization` },
    areaServed: { '@type': 'Country', name: 'Luxembourg' },
    audience: {
      '@type': 'Audience',
      geographicArea: { '@type': 'Country', name: 'Luxembourg' }
    },
    offers: flagship.cards.map((card) => ({
      '@type': 'Offer',
      name: `${card.months} ${t.pricing.months}`,
      price: priceOf(card.price),
      priceCurrency: 'EUR',
      url,
      availability: 'https://schema.org/InStock'
    }))
  };
};

const faqPage = (lang: Language, page: PageId) => ({
  '@type': 'FAQPage',
  '@id': `${pageUrl(lang, page)}#faq`,
  inLanguage: localeMeta(lang).htmlLang,
  mainEntity: translations[lang].faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer }
  }))
});

/** An article, described as one. */
const blogPosting = (lang: Language, postId: string) => {
  const post = postById(postId)!;
  const url = pageUrl(lang, 'blog', postId);
  const words = post.body[lang]
    .map((block) => block.text ?? (block.items ?? []).join(' '))
    .join(' ')
    .split(/\s+/).length;

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title[lang],
    description: post.excerpt[lang],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: localeMeta(lang).htmlLang,
    wordCount: words,
    timeRequired: `PT${post.minutes}M`,
    image: asset(SITE.shareCard),
    mainEntityOfPage: { '@id': `${url}#webpage` },
    author: { '@id': `${SITE.origin}/#organization` },
    publisher: { '@id': `${SITE.origin}/#organization` },
    isPartOf: { '@id': `${pageUrl(lang, 'blog')}#blog` }
  };
};

/** The listing, described as the blog it is. */
const blog = (lang: Language) => {
  const url = pageUrl(lang, 'blog');
  return {
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name: `${BLOG_INDEX[lang].name} — ${SITE.orgName}`,
    description: BLOG_INDEX[lang].lead,
    inLanguage: localeMeta(lang).htmlLang,
    publisher: { '@id': `${SITE.origin}/#organization` },
    blogPost: postsByDate().map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${pageUrl(lang, 'blog', post.id)}#article`,
      headline: post.title[lang],
      description: post.excerpt[lang],
      datePublished: post.date,
      url: pageUrl(lang, 'blog', post.id)
    }))
  };
};

const structuredData = (lang: Language, page: PageId, postId?: string) => {
  const locale = localeMeta(lang);
  const url = pageUrl(lang, page, postId);
  const isHome = page === 'home';

  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: titleOf(lang, page, postId),
    description: descriptionOf(lang, page, postId),
    inLanguage: locale.htmlLang,
    isPartOf: { '@id': `${SITE.origin}/#website` },
    about: { '@id': `${SITE.origin}/#organization` },
    primaryImageOfPage: asset(SITE.shareCard)
  };

  const graph: Record<string, unknown>[] = [organization(), website(), webPage];

  if (!isHome) {
    webPage.breadcrumb = { '@id': `${url}#breadcrumb` };

    // Home ▸ page, and under the blog one crumb deeper: home ▸ blog ▸ article.
    const trail = [
      { name: homeLabel(lang), item: pageUrl(lang, 'home') },
      { name: pageContent(lang, page).name, item: pageUrl(lang, page) }
    ];
    if (postId) trail.push({ name: postById(postId)!.title[lang], item: url });

    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: trail.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item
      }))
    });
  }

  // The packs belong on the page that sells them, the questions on the page
  // that answers them — and both on the landing page, which carries everything.
  if (isHome || page === 'pricing') graph.push(service(lang, page));
  if (isHome || page === 'faq') graph.push(faqPage(lang, page));
  if (page === 'blog') graph.push(postId ? blogPosting(lang, postId) : blog(lang));

  return { '@context': 'https://schema.org', '@graph': graph };
};

/** The whole localised head, between its two markers. */
const head = (lang: Language, page: PageId, postId?: string) => {
  const locale = localeMeta(lang);
  const url = pageUrl(lang, page, postId);
  const title = titleOf(lang, page, postId);
  const description = descriptionOf(lang, page, postId);
  const social = page === 'home' ? locale.ogDescription : description;

  const lines = [
    START,
    `<link rel="canonical" href="${url}" />`,
    ...alternates(page, postId),
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="keywords" content="${esc(locale.keywords)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    `<meta property="og:type" content="${postId ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(social)}" />`,
    `<meta property="og:locale" content="${locale.ogLocale}" />`,
    ...LOCALES.filter((l) => l.code !== lang).map(
      (l) => `<meta property="og:locale:alternate" content="${l.ogLocale}" />`
    ),
    `<meta property="og:image" content="${asset(SITE.shareCard)}" />`,
    '<meta property="og:image:type" content="image/png" />',
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${esc(locale.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(social)}" />`,
    `<meta name="twitter:image" content="${asset(SITE.shareCard)}" />`,
    ...(postId
      ? [
          `<meta property="article:published_time" content="${postById(postId)!.date}" />`,
          `<meta property="article:author" content="${esc(SITE.orgName)}" />`
        ]
      : []),
    `<script type="application/ld+json">${JSON.stringify(structuredData(lang, page, postId), null, 2)}</script>`,
    END
  ];
  return lines.join('\n    ');
};

/** Swap in a page: its head block, and the `lang` the document declares. */
const localise = (html: string, lang: Language, page: PageId, postId?: string) =>
  html
    .replace(BLOCK, () => head(lang, page, postId))
    .replace(
      /<html([^>]*?)\slang="[^"]*"/,
      (_m, rest: string) => `<html${rest} lang="${localeMeta(lang).htmlLang}"`
    );

const sitemap = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const images = [
    { loc: asset(SITE.logo), title: `${SITE.orgName} — logo` },
    { loc: asset(SITE.mark), title: `${SITE.orgName} — monogram` },
    { loc: asset(SITE.shareCard), title: `${SITE.orgName} — 4K UHD` }
  ];

  const entries = LOCALES.flatMap((locale) =>
    routesFor(locale.code).map(({ page, postId }) => {
      const links = LOCALES.flatMap((other) =>
        other.hreflang.map(
          (tag) =>
            `    <xhtml:link rel="alternate" hreflang="${tag}" href="${pageUrl(other.code, page, postId)}" />`
        )
      );
      links.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(DEFAULT_LANG, page, postId)}" />`
      );

      // Image entries belong on the page that carries the brand art itself.
      const media =
        page === 'home'
          ? images.map(
              (image) => `    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${esc(image.title)}</image:title>
      <image:caption>${esc(locale.imageAlt)}</image:caption>
    </image:image>`
            )
          : [];

      const post = postId ? postById(postId) : undefined;
      const priority =
        page === 'home' ? '1.0' : page === 'pricing' ? '0.9' : postId ? '0.7' : '0.8';

      return `  <url>
    <loc>${pageUrl(locale.code, page, postId)}</loc>
    <lastmod>${post ? post.date : lastmod}</lastmod>
    <changefreq>${postId ? 'monthly' : 'weekly'}</changefreq>
    <priority>${priority}</priority>
${[...links, ...media].join('\n')}
  </url>`;
    })
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
};

export function localePages(): Plugin {
  let config: ResolvedConfig;

  return {
    name: 'locale-pages',

    configResolved(resolved) {
      config = resolved;
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // Dev serves every address from this one file, so the language and the
        // page both come from the address; the build writes the default here
        // and every other page in closeBundle, off the finished file.
        const route = ctx.server
          ? routeFromPath(ctx.originalUrl ?? ctx.path)
          : { lang: DEFAULT_LANG, page: 'home' as PageId, postId: undefined };
        return localise(
          html.replace(SLOT, () => `${START}${END}`),
          route.lang,
          route.page,
          route.postId
        );
      }
    },

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split('?')[0] !== '/sitemap.xml') return next();
        res.setHeader('Content-Type', 'application/xml');
        res.end(sitemap());
      });
    },

    closeBundle() {
      const outDir = path.resolve(config.root, config.build.outDir);
      const index = path.join(outDir, 'index.html');
      if (!fs.existsSync(index)) return;

      // The root file is the shell every other page is cut from; it keeps the
      // site's own language, with its canonical pointing at that language's
      // directory rather than at itself.
      const shell = fs.readFileSync(index, 'utf8');

      for (const locale of LOCALES) {
        for (const { page, postId } of routesFor(locale.code)) {
          const dir = path.join(
            outDir,
            pageUrl(locale.code, page, postId).slice(SITE.origin.length + 1)
          );
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(
            path.join(dir, 'index.html'),
            localise(shell, locale.code, page, postId)
          );
        }
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap());
    }
  };
}
