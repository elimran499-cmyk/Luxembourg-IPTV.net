import React from 'react';
import { ShieldCheck, CheckCircle2, ChevronRight, Star, Users, Clapperboard, Gauge, Tv, Radio } from 'lucide-react';
import { Language, VodTitle } from '../types';
import { translations } from '../data/translations';
import { TOP_FILMS, TOP_SERIES } from '../data/vod';
import { MobileHero } from './MobileHero';

interface HeroProps {
  currentLang: Language;
}

const TMDB_IMG = 'https://image.tmdb.org/t/p/w342';

/** Three columns of art, each drawn from a different slice of the catalogue. */
const POSTER_COLUMNS: VodTitle[][] = [
  [...TOP_FILMS.slice(0, 5)],
  [...TOP_SERIES.slice(0, 5)],
  [...TOP_FILMS.slice(6, 11)],
  [...TOP_SERIES.slice(5, 10)]
];

const PosterColumn: React.FC<{
  titles: VodTitle[];
  direction: 'up' | 'down';
  durationSeconds: number;
  className?: string;
}> = ({ titles, direction, durationSeconds, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className={`poster-column gap-4 ${direction === 'up' ? 'poster-column-up' : 'poster-column-down'}`}
      style={{ ['--poster-duration' as string]: `${durationSeconds}s` }}
    >
      {[...titles, ...titles].map((title, index) => (
        <span
          key={`${title.id}-${index}`}
          className="relative mb-4 block overflow-hidden rounded-2xl ring-1 ring-white/10"
          style={{
            aspectRatio: '2 / 3',
            backgroundImage: `linear-gradient(150deg, ${title.accent[0]} 0%, ${title.accent[1]} 70%, #05070D 100%)`
          }}
        >
          {title.poster && (
            <img
              src={`${TMDB_IMG}${title.poster}`}
              alt=""
              aria-hidden="true"
              /* The wall moves by transform, which never trips the lazy-load
                 heuristic — a lazy poster would stay blank mid-drift. */
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </span>
      ))}
    </div>
  </div>
);

/**
 * The wide hero: one dark, full-bleed screen with the catalogue drifting behind
 * the claim, so the page opens the way a streaming app does rather than as a
 * white brochure. Phones get their own hero above `sm`, where there is no room
 * for two columns.
 */
export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const proofPoints = [
    'RTL Télé Lëtzebuerg & Chamber TV 4K',
    'Anti-Freeze™ 99.9% uptime garanti',
    'Paiement Payconiq, carte & crypto',
    'Compatible POST, Tango, Orange'
  ];

  const STAT_LABELS: Record<Language, [string, string, string, string]> = {
    fr: ['Chaînes en direct', 'Films & séries', 'Latence LU-CIX', 'Foyers au Luxembourg'],
    de: ['Live-Sender', 'Filme & Serien', 'Latenz LU-CIX', 'Haushalte in Luxemburg'],
    en: ['Live channels', 'Films & series', 'LU-CIX latency', 'Homes in Luxembourg'],
    lb: ['Live Senderen', 'Filmer & Serien', 'Latenz LU-CIX', 'Stéit zu Lëtzebuerg']
  };

  const statLabels = STAT_LABELS[currentLang];

  const stats = [
    { icon: Tv, value: '80 000+', label: statLabels[0] },
    { icon: Clapperboard, value: '200 000+', label: statLabels[1] },
    { icon: Gauge, value: '< 10 ms', label: statLabels[2] },
    { icon: Users, value: '4 800+', label: statLabels[3] }
  ];

  return (
    <div id="top">
      <MobileHero currentLang={currentLang} />

      <section className="hero-grain relative isolate hidden overflow-hidden bg-ink-950 sm:block">
        {/* The wall fills the section; the copy sits in front of it. The mask
            feathers its left edge into the page, which a rectangle of scrim
            could only approximate. */}
        <div className="hero-wall-mask absolute inset-y-0 right-0 -z-10 hidden w-[56%] lg:block" aria-hidden="true">
          <div className="grid h-full grid-cols-3 gap-4 px-4 pt-4 xl:grid-cols-4">
            <PosterColumn titles={POSTER_COLUMNS[0]} direction="up" durationSeconds={58} />
            <PosterColumn titles={POSTER_COLUMNS[1]} direction="down" durationSeconds={72} />
            <PosterColumn titles={POSTER_COLUMNS[2]} direction="up" durationSeconds={64} />
            <PosterColumn titles={POSTER_COLUMNS[3]} direction="down" durationSeconds={80} className="hidden xl:block" />
          </div>
        </div>

        {/* Scrims: the art keeps its colour on the right and dissolves under
            the type on the left, top and bottom. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/88 via-44% to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink-950 to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink-950 to-transparent"
        />
        {/* Two light leaks: azure behind the headline, the flag's red low and
            far left, so the black is never evenly black. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-[22%] -z-10 h-[460px] w-[460px] rounded-full bg-lux-500/25 blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 bottom-[-8%] -z-10 h-[320px] w-[320px] rounded-full bg-flame-500/15 blur-3xl"
        />

        <div className="mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="lux-rise max-w-2xl">
            <span className="lux-glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              <Radio className="h-3.5 w-3.5 animate-pulse text-flame-400" />
              {t.hero.badge}
            </span>

            <h1 className="mt-6 max-w-[15ch] font-display text-[40px] font-extrabold leading-[1.02] tracking-tight text-white text-balance lg:text-[60px]">
              {t.hero.h1Part1}{' '}
              <span className="bg-gradient-to-r from-lux-300 via-lux-200 to-flame-300 bg-clip-text text-transparent">
                {t.hero.h1Gradient}
              </span>{' '}
              {t.hero.h1Part2}
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 lg:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mt-7 flex max-w-xl flex-wrap gap-2">
              {proofPoints.map((point, i) => (
                <span
                  key={point}
                  className="lux-glass flex items-center gap-2 rounded-full py-1.5 pl-2.5 pr-3.5 text-[13px] font-medium text-white/85"
                >
                  <CheckCircle2
                    className={`h-3.5 w-3.5 shrink-0 ${i % 2 === 0 ? 'text-lux-300' : 'text-emerald-400'}`}
                  />
                  {point}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                id="hero-view-plans-cta"
                href="#pricing"
                className="lux-glass-primary lux-sheen group flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-base font-bold text-white transition-transform active:scale-[0.98]"
              >
                {t.hero.ctaPlans}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#films"
                className="lux-glass flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white transition-transform active:scale-[0.98]"
              >
                {t.nav.films}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/55">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Garantie 14 jours satisfait ou remboursé
              </span>
              <span className="hidden text-white/25 sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white/90">4.9 / 5</span> sur 1 240 avis vérifiés
              </span>
            </div>
          </div>

          {/* The numbers close the hero as one rail: four tiles read as four
              things to weigh up, one divided rail reads as a single fact. */}
          <div
            data-reveal
            className="lux-glass mt-12 grid max-w-3xl grid-cols-2 divide-white/10 rounded-3xl px-2 py-3 sm:grid-cols-4 sm:divide-x"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 px-3 py-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lux-200">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-lg font-extrabold leading-none tracking-tight text-white">
                    {value}
                  </span>
                  <span className="mt-1 block text-[10.5px] font-medium leading-tight text-white/55">{label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
