import React from 'react';
import { ArrowRight, CalendarDays, ChevronRight, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UI } from '../data/ui';
import { WHATSAPP_URL } from '../data/contact';
import { BLOG_INDEX, BlogBlock, BlogPost, postById, postsByDate } from '../data/blog';
import { homeLabel, menuFor, pageHref } from '../data/pages';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BlogPageProps {
  currentLang: Language;
  /** Set when the address names one article; otherwise this is the listing. */
  postId?: string;
}

/**
 * The date as the language writes it, not as the file stores it. Browsers
 * have no date format for Lëtzebuergesch and fall back to American English,
 * so it borrows the German-Luxembourg one, which is how the date is written
 * here anyway: 12. September 2026.
 */
const formatDate = (iso: string, lang: Language) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(
    { lb: 'de-LU', fr: 'fr-LU', de: 'de-LU', en: 'en-GB' }[lang],
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

const Crumbs: React.FC<{ currentLang: Language; post?: BlogPost }> = ({ currentLang, post }) => (
  <nav
    aria-label="Breadcrumb"
    className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50"
  >
    <a href={pageHref(currentLang, 'home')} className="transition-colors hover:text-white">
      {homeLabel(currentLang)}
    </a>
    <ChevronRight className="h-3 w-3" />
    {post ? (
      <>
        <a href={pageHref(currentLang, 'blog')} className="transition-colors hover:text-white">
          {BLOG_INDEX[currentLang].name}
        </a>
        <ChevronRight className="h-3 w-3" />
        <span className="max-w-[16rem] truncate text-lux-300">{post.title[currentLang]}</span>
      </>
    ) : (
      <span className="text-lux-300">{BLOG_INDEX[currentLang].name}</span>
    )}
  </nav>
);

/** One article's body: paragraphs, subheadings and lists, nothing else. */
const Body: React.FC<{ blocks: BlogBlock[] }> = ({ blocks }) => (
  <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
    {blocks.map((block, index) => {
      if (block.type === 'h2') {
        return (
          <h2
            key={index}
            className="mt-10 font-display text-[22px] font-extrabold leading-tight tracking-tight text-ink-900 first:mt-0 sm:text-[28px]"
          >
            {block.text}
          </h2>
        );
      }
      if (block.type === 'ul') {
        return (
          <ul key={index} className="mt-5 space-y-2.5">
            {block.items?.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-600">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lux-500" />
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={index} className="mt-5 text-[15px] leading-relaxed text-ink-600 first:mt-0 sm:text-base">
          {block.text}
        </p>
      );
    })}
  </div>
);

/**
 * The blog: a listing of every article, and the article itself. Both live
 * under the language they are written in — `/fr/blog/`, `/de/blog/…` — so each
 * one is a page a search engine can index in its own right, and each links
 * back into the rest of the site.
 */
export const BlogPage: React.FC<BlogPageProps> = ({ currentLang, postId }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];
  const post = postId ? postById(postId) : undefined;
  const posts = postsByDate();
  const index = BLOG_INDEX[currentLang];

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32">
        <span className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lux-500/20 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-flame-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <Crumbs currentLang={currentLang} post={post} />

          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.06] tracking-tight text-balance sm:text-[46px]">
            {post ? post.title[currentLang] : index.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {post ? post.excerpt[currentLang] : index.lead}
          </p>

          {post && (
            <p className="mt-5 flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                <time dateTime={post.date}>{formatDate(post.date, currentLang)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.minutes} min
              </span>
            </p>
          )}
        </div>
      </section>

      {post ? (
        <article className="bg-white">
          <Body blocks={post.body[currentLang]} />

          {/* The article ends where the site sells: the packs, then the rest
              of the blog. */}
          <div className="mx-auto max-w-2xl px-4 pb-14 sm:px-6">
            <div className="flex flex-col gap-2.5 rounded-3xl bg-ink-950 p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="font-display text-lg font-extrabold text-white">{ui.footerClosing}</p>
              <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
                <a
                  href={pageHref(currentLang, 'pricing')}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lux-600 to-lux-500 px-5 text-sm font-bold text-white"
                >
                  {t.nav.pricing}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lux-glass-whatsapp inline-flex h-11 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </article>
      ) : null}

      {/* The listing, and on an article the other articles under it. */}
      <section className="border-t border-ink-100 bg-ink-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          {post && (
            <h2 className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
              {index.name}
            </h2>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter((entry) => entry.id !== post?.id)
              .map((entry) => (
                <a
                  key={entry.id}
                  href={pageHref(currentLang, 'blog', entry.id)}
                  className="group flex flex-col rounded-3xl bg-white p-5 ring-1 ring-ink-100 transition-all hover:-translate-y-0.5 hover:ring-lux-200"
                >
                  <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-400">
                    <time dateTime={entry.date}>{formatDate(entry.date, currentLang)}</time>
                    <span>{entry.minutes} min</span>
                  </p>
                  <h3 className="mt-3 font-display text-lg font-extrabold leading-snug tracking-tight text-ink-900 transition-colors group-hover:text-lux-700">
                    {entry.title[currentLang]}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-500">
                    {entry.excerpt[currentLang]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-lux-600">
                    {index.readMore}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
          </div>

          {/* Back into the site, from every article and from the listing. */}
          <nav className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
            {menuFor(currentLang)
              .filter((entry) => entry.id !== 'blog')
              .map((entry) => (
                <a
                  key={entry.id}
                  href={entry.href}
                  className="rounded-full bg-white px-4 py-2 text-xs font-bold text-ink-600 ring-1 ring-ink-100 transition-colors hover:text-lux-700 hover:ring-lux-200"
                >
                  {entry.label}
                </a>
              ))}
          </nav>
        </div>
      </section>
    </>
  );
};
