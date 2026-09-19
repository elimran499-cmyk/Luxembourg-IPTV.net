import React from 'react';
import { Film, Star, Tv2, Clapperboard, ArrowRight } from 'lucide-react';
import { Language, VodTitle } from '../types';
import { SectionHeading } from './SectionHeading';
import { translations } from '../data/translations';
import { TOP_FILMS, TOP_SERIES } from '../data/vod';

interface FilmsAndSeriesProps {
  currentLang: Language;
}

/** TMDB's public image CDN — a known poster path needs no API key. */
const TMDB_IMG = 'https://image.tmdb.org/t/p';

/**
 * Display-only poster. The rails are a showcase, not a picker, so clicks and
 * hover pass straight through and the loop never doubles as a control.
 */
const PosterCard: React.FC<{ title: VodTitle; indexed?: boolean }> = ({ title, indexed = false }) => (
  <div
    className="pointer-events-none relative w-[150px] shrink-0 select-none overflow-hidden rounded-2xl text-left shadow-lg shadow-ink-900/15 ring-1 ring-ink-900/10 sm:w-[180px]"
    style={{
      aspectRatio: '2 / 3',
      // Also the fallback art when a poster is missing or fails to load.
      backgroundImage: `linear-gradient(150deg, ${title.accent[0]} 0%, ${title.accent[1]} 62%, #05070D 100%)`
    }}
  >
    {title.poster && (
      <img
        src={`${TMDB_IMG}/w342${title.poster}`}
        /* The first copy of the rail carries the real description; the second
           copy is the same poster again, so it stays decorative. */
        alt={indexed ? `${title.title} (${title.year}) — ${title.kind === 'film' ? 'film' : 'série'} en ${title.quality} sur Luxembourg IPTV` : ''}
        aria-hidden={!indexed}
        /* Not lazy: the rails move by CSS transform, which never trips the
           lazy-load viewport heuristic — cards would stay blank mid-loop. */
        decoding="async"
        fetchPriority="low"
        className="absolute inset-0 h-full w-full object-cover"
      />
    )}

    <span className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-bold text-amber-300 ring-1 ring-white/15 backdrop-blur-sm">
      <Star className="h-2.5 w-2.5 fill-amber-300 text-amber-300" />
      {title.rating.toFixed(1)}
    </span>

    {title.badge && (
      <span className="absolute left-2 top-2 rounded bg-lux-500 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wider text-white shadow">
        {title.badge}
      </span>
    )}

    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 via-45% to-transparent p-3 pt-14">
      <span className="block h-[3px] w-8 rounded-full bg-gradient-to-r from-lux-400 to-flame-400" />
      <span className="mt-2 block font-display text-[15px] font-black uppercase leading-[1.1] tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.85)] sm:text-[17px]">
        {title.title}
      </span>
      <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-white/65">
        {title.year} • {title.quality}
      </span>
    </span>
  </div>
);

const MarqueeRow: React.FC<{
  items: VodTitle[];
  direction: 'left' | 'right';
  durationSeconds: number;
}> = ({ items, direction, durationSeconds }) => (
  <div className="vod-rail relative overflow-hidden">
    {/* Edge fades, so posters dissolve into the section instead of clipping. */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

    <div
      className={`vod-track gap-3 py-1 sm:gap-4 ${direction === 'left' ? 'vod-track-left' : 'vod-track-right'}`}
      style={{ ['--vod-duration' as string]: `${durationSeconds}s` }}
    >
      {items.map((title) => (
        <PosterCard key={title.id} title={title} indexed />
      ))}
      {/* Second copy makes the -50% loop seamless. */}
      {items.map((title) => (
        <PosterCard key={`${title.id}-loop`} title={title} />
      ))}
    </div>
  </div>
);

export const FilmsAndSeries: React.FC<FilmsAndSeriesProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="films" className="relative overflow-hidden border-y border-ink-100 bg-white py-20 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.vod.badge}
          icon={Clapperboard}
          title={
            <>
              {t.vod.title} <span className="lux-gradient-text">{t.vod.titleAccent}</span>
            </>
          }
          lead={t.vod.subtitle}
          className="mb-12"
        />
      </div>

      {/* Row 1 — films, scrolling left */}
      <div className="mb-8">
        <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h3 className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
            <Film className="h-4 w-4 text-lux-600" />
            {t.vod.filmsLabel}
          </h3>
          <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-ink-400 sm:inline">
            {t.vod.filmsMeta}
          </span>
        </div>
        <MarqueeRow items={TOP_FILMS} direction="left" durationSeconds={110} />
      </div>

      {/* Row 2 — series, scrolling right */}
      <div>
        <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <h3 className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
            <Tv2 className="h-4 w-4 text-flame-500" />
            {t.vod.seriesLabel}
          </h3>
          <span className="hidden text-[10px] font-semibold uppercase tracking-wider text-ink-400 sm:inline">
            {t.vod.seriesMeta}
          </span>
        </div>
        <MarqueeRow items={TOP_SERIES} direction="right" durationSeconds={130} />
      </div>

      {/* Studios the catalogue draws from, plus the way into the packs. */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-ink-100 bg-ink-50/70 px-6 py-6 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-ink-400">
            {['NETFLIX', 'Disney+', 'prime video', 'HBO Max', 'Apple TV+', 'Canal+'].map((studio) => (
              <span key={studio} className="tracking-tight">
                {studio}
              </span>
            ))}
          </div>

          <a
            href="#pricing"
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-ink-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink-800"
          >
            {t.vod.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
