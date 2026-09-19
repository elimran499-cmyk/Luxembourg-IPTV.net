import React, { useEffect, useState } from 'react';
import { UI } from '../data/ui';
import { Play, Star, Zap, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { HERO_FEATURES } from '../data/vod';

interface MobileHeroProps {
  currentLang: Language;
}

const TMDB_IMG = 'https://image.tmdb.org/t/p/w780';

/** How long each title holds the screen. */
const HOLD_MS = 6000;

/**
 * Stand-in art per slot. A poster is a quarter-megabyte, so on a slow phone
 * the next frame can still be decoding when its turn comes; the gradient sits
 * underneath so that moment reads as a colour wash, never as a black screen.
 */
const FALLBACK_ART = [
  'linear-gradient(160deg, #B45309 0%, #3B1D08 55%, #070E18 100%)',
  'linear-gradient(160deg, #1E3A8A 0%, #172554 55%, #070E18 100%)',
  'linear-gradient(160deg, #991B1B 0%, #450A0A 55%, #070E18 100%)',
  'linear-gradient(160deg, #047857 0%, #052E2B 55%, #070E18 100%)',
  'linear-gradient(160deg, #0369A1 0%, #082F49 55%, #070E18 100%)'
];

/**
 * The phone hero: full-bleed key art that changes every few seconds, the way a
 * streaming app opens, with the offer written over it. Phones only — above sm
 * the poster wall hero takes over, where there is width for two columns.
 *
 * The film title is artwork, not a heading: the page's real H1 is the sentence
 * underneath it, so a screen reader and a search engine are told the page is
 * about Luxembourg IPTV rather than about Dune.
 */
export const MobileHero: React.FC<MobileHeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_FEATURES.length);
    }, HOLD_MS);
    return () => window.clearInterval(timer);
  }, []);

  const active = HERO_FEATURES[index];

  return (
    <section
      id="top"
      className="hero-grain relative isolate overflow-hidden bg-ink-950 sm:hidden"
    >
      {/* The page's heading. The art and its film title are decoration, so the
          sentence that says what this site is stays in the document even though
          the phone hero no longer draws it. */}
      {/* Not an H1: the wide hero below carries the page's single H1,
          and both heroes are in the markup at the same time. */}
      <p className="sr-only">
        {t.hero.h1Part1} {t.hero.h1Gradient} {t.hero.h1Part2} — {t.hero.subheadline}
      </p>

      {/* Key art. Every frame stays mounted and cross-fades, so switching
          never shows a gap while the next image decodes. */}
      {HERO_FEATURES.map((feature, i) => (
        <span
          key={feature.id}
          aria-hidden="true"
          className={`absolute inset-0 -z-10 transition-opacity duration-[1200ms] ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: FALLBACK_ART[i % FALLBACK_ART.length] }}
        >
          <img
            src={`${TMDB_IMG}${feature.poster}`}
            alt=""
            decoding="async"
            fetchPriority={i === 0 ? 'high' : 'low'}
            className={`h-full w-full object-cover [filter:saturate(1.08)_contrast(1.05)] ${
              i === index ? 'hero-kenburns' : ''
            }`}
          />
        </span>
      ))}

      {/* Scrims: one to lift the header off the art, one to carry the text. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink-950/70 via-ink-950/25 to-transparent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 via-42% to-transparent"
      />

      {/*
        Three bands rather than one stack: the badge sits under the header, the
        title takes the middle of whatever screen it is on, and the actions ride
        the bottom above the tab bar. Everything is measured in svh and safe-area
        insets, so a small phone and a tall one both land the same way.
      */}
      {/* The header floats over this, so the art runs the full height of the
          screen and the top band starts below where that header sits. */}
      <div className="relative flex min-h-[100svh] flex-col px-5">
        {/* Top band — a little air under the header, whatever the phone. */}
        <div className="flex justify-center pt-[calc(env(safe-area-inset-top)+5.5rem)]">
          <span className="lux-glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lux-300 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lux-300" />
            </span>
            {ui.heroBadgeMobile} & 8K
          </span>
        </div>

        {/* Middle band — the title of what is on screen, and nothing else. */}
        <div key={active.id} className="hero-line-in flex flex-1 flex-col items-center justify-center text-center">
          <span className="block h-[3px] w-12 rounded-full bg-gradient-to-r from-lux-400 to-flame-400" />

          <span
            aria-hidden="true"
            className="mt-4 block font-display text-[38px] font-black uppercase leading-[0.95] tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.65)]"
          >
            {active.title}
          </span>

          <span className="mt-3 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-semibold text-white/75">
            <span className="flex items-center gap-1 text-amber-300">
              <Star className="h-3 w-3 fill-amber-300" />
              {active.rating.toFixed(1)}
            </span>
            <span className="text-white/30">•</span>
            <span>{active.year}</span>
            <span className="text-white/30">•</span>
            <span>{active.meta}</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-lux-200 ring-1 ring-white/15">
              {active.tagline}
            </span>
          </span>
        </div>

        {/* Bottom band — the actions, above the tab bar and the home indicator. */}
        <div className="pb-[calc(env(safe-area-inset-bottom)+7rem)]">
          <div className="flex flex-col gap-2.5">
            <a
              id="mobile-hero-packs"
              href="#pricing"
              className="lux-glass-primary flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-white transition-transform active:scale-[0.99]"
            >
              <Play className="h-4 w-4 fill-white" />
              {t.hero.ctaPlans}
            </a>
            <a
              href="#films"
              className="lux-glass block w-full rounded-2xl py-4 text-center text-sm font-bold text-white transition-transform active:scale-[0.99]"
            >
              {t.nav.films}
            </a>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-white/60">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              {ui.activationShort}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              {ui.guaranteeShort}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-400" />
              Payconiq
            </span>
          </div>

          {/* Which frame is showing — and a way to pick one. */}
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {HERO_FEATURES.map((feature, i) => (
              <button
                key={feature.id}
                onClick={() => setIndex(i)}
                aria-label={`Voir ${feature.title}`}
                aria-current={i === index}
                className={`relative h-1 overflow-hidden rounded-full transition-all ${
                  i === index ? 'w-7 bg-white/25' : 'w-3 bg-white/25'
                }`}
              >
                {i === index && (
                  <span
                    key={feature.id}
                    className="hero-dot-fill absolute inset-0 block origin-left rounded-full bg-lux-300"
                    style={{ ['--hold' as string]: `${HOLD_MS}ms` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
