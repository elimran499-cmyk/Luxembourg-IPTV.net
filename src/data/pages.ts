import { Language } from '../types';
import { DEFAULT_LANG, LOCALES, localeMeta, SITE } from './seo';
import { translations } from './translations';
import { BLOG_INDEX, POSTS, postBySlug, postById } from './blog';

/**
 * Every entry in the menu is a page of its own.
 *
 * The site is still one landing page you can read top to bottom, but each
 * section it holds also lives at its own address, in every language:
 * `/fr/chaines/`, `/de/sender/`, `/lb/senderen/`, `/en/channels/`. A search
 * engine can index a page per section per language instead of a single
 * document, and each of those pages carries its own title, description,
 * canonical and hreflang set.
 *
 * The slugs are written in the language of the page they belong to — a French
 * reader gets `/fr/abonnements/`, not `/fr/pricing/` — because the words in a
 * URL are read by the same people the page is for.
 */

export type SectionId =
  | 'channels'
  | 'films'
  | 'pricing'
  | 'devices'
  | 'isp'
  | 'features'
  | 'faq';

export type PageId = 'home' | SectionId | 'blog';

/** The blog sits at the same depth as a section, under every language. */
export const BLOG_SLUG = 'blog';

/** The menu, in the order it is shown and in the order it is crawled. */
export const SECTIONS: { id: SectionId; slug: Record<Language, string> }[] = [
  {
    id: 'channels',
    slug: { lb: 'senderen', fr: 'chaines', de: 'sender', en: 'channels' }
  },
  {
    id: 'films',
    slug: { lb: 'filmer-serien', fr: 'films-series', de: 'filme-serien', en: 'films-series' }
  },
  {
    id: 'pricing',
    slug: { lb: 'abonnementer', fr: 'abonnements', de: 'preise', en: 'pricing' }
  },
  {
    id: 'devices',
    slug: { lb: 'apparater', fr: 'appareils', de: 'geraete', en: 'devices' }
  },
  {
    id: 'isp',
    slug: { lb: 'internet-test', fr: 'test-connexion', de: 'anbieter-test', en: 'isp-test' }
  },
  {
    id: 'features',
    slug: { lb: 'technologie', fr: 'technologie', de: 'technologie', en: 'technology' }
  },
  {
    id: 'faq',
    slug: { lb: 'faq', fr: 'faq', de: 'faq', en: 'faq' }
  }
];

export const PAGES: PageId[] = ['home', ...SECTIONS.map((section) => section.id), 'blog'];

/** What the home page is called in the menus and in a breadcrumb. */
const HOME_LABEL: Record<Language, string> = {
  lb: 'Start',
  fr: 'Accueil',
  de: 'Start',
  en: 'Home'
};

const slugOf = (page: SectionId, lang: Language) =>
  SECTIONS.find((section) => section.id === page)!.slug[lang];

/**
 * The address of a page: `/fr/`, `/fr/abonnements/`, `/fr/blog/`, and — with a
 * post — `/fr/blog/ligue-des-champions-luxembourg/`.
 */
export const pageHref = (lang: Language, page: PageId, postId?: string): string => {
  const base = localeMeta(lang).path;
  if (page === 'home') return base;
  if (page === 'blog') {
    const post = postId ? postById(postId) : undefined;
    return post ? `${base}${BLOG_SLUG}/${post.slug[lang]}/` : `${base}${BLOG_SLUG}/`;
  }
  return `${base}${slugOf(page, lang)}/`;
};

/** Its absolute URL, for canonicals, hreflang and the sitemap. */
export const pageUrl = (lang: Language, page: PageId, postId?: string): string =>
  `${SITE.origin}${pageHref(lang, page, postId)}`;

export interface Route {
  lang: Language;
  page: PageId;
  /** Set when the address names one article of the blog. */
  postId?: string;
}

/**
 * Read an address: the first segment names the language, the second the page,
 * and under the blog a third names the article. The bare domain — and
 * anything that matches nothing — is the home page in the site's own language.
 */
export const routeFromPath = (pathname: string): Route => {
  const [first, second, third] = pathname.split('/').filter(Boolean).map((s) => s.toLowerCase());
  const lang = LOCALES.find((locale) => locale.code === first)?.code ?? DEFAULT_LANG;
  if (!second) return { lang, page: 'home' };
  if (second === BLOG_SLUG) {
    const post = third ? postBySlug(lang, third) : undefined;
    return { lang, page: 'blog', postId: post?.id };
  }
  const section = SECTIONS.find((entry) => entry.slug[lang] === second);
  return { lang, page: section ? section.id : 'home' };
};

/** Every address the site answers on, in one language. */
export const routesFor = (lang: Language): Route[] => [
  { lang, page: 'home' },
  ...SECTIONS.map((section) => ({ lang, page: section.id as PageId })),
  { lang, page: 'blog' as PageId },
  ...POSTS.map((post) => ({ lang, page: 'blog' as PageId, postId: post.id }))
];

export interface PageContent {
  /** Short menu label, also the last crumb of the breadcrumb. */
  name: string;
  /** The page's own heading, and the base of its title tag. */
  heading: string;
  /** One line under the heading, and the base of the meta description. */
  lead: string;
}

/**
 * A section page takes its words from the section it shows, so a page never
 * needs copy written twice — change the section and the page follows.
 */
export const pageContent = (lang: Language, page: PageId, postId?: string): PageContent => {
  const t = translations[lang];
  if (page === 'blog') {
    const post = postId ? postById(postId) : undefined;
    if (post) return { name: BLOG_INDEX[lang].name, heading: post.title[lang], lead: post.excerpt[lang] };
    return {
      name: BLOG_INDEX[lang].name,
      heading: BLOG_INDEX[lang].heading,
      lead: BLOG_INDEX[lang].lead
    };
  }
  switch (page) {
    case 'channels':
      return { name: t.nav.channels, heading: t.channelsSection.title, lead: t.channelsSection.subtitle };
    case 'films':
      return {
        name: t.nav.films,
        heading: `${t.vod.title} ${t.vod.titleAccent}`.trim(),
        lead: t.vod.subtitle
      };
    case 'pricing':
      return { name: t.nav.pricing, heading: t.pricing.title, lead: t.pricing.subtitle };
    case 'devices':
      return { name: t.nav.devices, heading: t.devices.title, lead: t.devices.subtitle };
    case 'isp':
      return { name: t.nav.ispCheck, heading: t.ispCheck.title, lead: t.ispCheck.subtitle };
    case 'features':
      return { name: t.nav.features, heading: t.features.title, lead: t.features.subtitle };
    case 'faq':
      return { name: t.nav.faq, heading: t.faq.title, lead: t.faq.subtitle };
    default:
      return {
        name: HOME_LABEL[lang],
        heading: localeMeta(lang).title,
        lead: localeMeta(lang).description
      };
  }
};

/** The home page's label, for a breadcrumb or a back link. */
export const homeLabel = (lang: Language) => HOME_LABEL[lang];

/**
 * The two links that behave differently on the landing page: there the packs
 * and the top of the page are a scroll away, everywhere else they are a page.
 */
export const pricingHref = (lang: Language, page: PageId) =>
  page === 'home' ? '#pricing' : pageHref(lang, 'pricing');

export const brandHref = (lang: Language, page: PageId) =>
  page === 'home' ? '#top' : pageHref(lang, 'home');

/** The menu, resolved for one language: label and address per entry. */
export const menuFor = (lang: Language): { id: PageId; href: string; label: string }[] => [
  ...SECTIONS.map((section) => ({
    id: section.id as PageId,
    href: pageHref(lang, section.id),
    label: pageContent(lang, section.id).name
  })),
  { id: 'blog' as PageId, href: pageHref(lang, 'blog'), label: BLOG_INDEX[lang].name }
];
