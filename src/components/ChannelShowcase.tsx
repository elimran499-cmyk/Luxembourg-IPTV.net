import React from 'react';
import { Tv, ArrowRight, Trophy } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';
import { CHANNEL_LOGOS, SPORTS_LOGOS, LogoItem } from '../data/logos';

interface ChannelShowcaseProps {
  currentLang: Language;
}

/**
 * One rail of logos, looping without a pause: the row is rendered twice and
 * the track slides exactly one copy's width, the same trick the poster rails
 * in the films section use.
 */
const LogoRail: React.FC<{
  items: LogoItem[];
  direction: 'left' | 'right';
  durationSeconds: number;
  fadeFrom: string;
  /** Broadcasters lead the section, so their marks run larger than the leagues. */
  size?: 'lg' | 'md';
}> = ({ items, direction, durationSeconds, fadeFrom, size = 'md' }) => (
  <div className="vod-rail relative overflow-hidden">
    <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r ${fadeFrom} to-transparent sm:w-20`} />
    <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l ${fadeFrom} to-transparent sm:w-20`} />

    <div
      className={`vod-track items-center py-1 ${size === 'lg' ? 'gap-10 sm:gap-16' : 'gap-6 sm:gap-12'} ${
        direction === 'left' ? 'vod-track-left' : 'vod-track-right'
      }`}
      style={{ ['--vod-duration' as string]: `${durationSeconds}s` }}
    >
      {[...items, ...items].map((logo, index) => (
        <span
          key={`${logo.id}-${index}`}
          /* Tall crests (Serie A, the World Cup trophy) only read if the box
             has height to give them, so the rail is sized by height first. */
          className={`flex shrink-0 items-center justify-center ${
            size === 'lg' ? 'h-24 w-44 sm:h-28 sm:w-52' : 'h-20 w-32 sm:h-24 sm:w-40'
          } ${logo.onDark ? 'rounded-xl bg-ink-900 p-3' : ''}`}
        >
          <img
            src={logo.src}
            alt={index < items.length ? logo.name : ''}
            aria-hidden={index >= items.length}
            /* Not lazy: the rail moves by transform, which never trips the
               lazy-load viewport heuristic — logos would stay blank mid-loop. */
            decoding="async"
            className="max-h-full max-w-full object-contain"
          />
        </span>
      ))}
    </div>
  </div>
);

/**
 * The line-up section: what the bouquet contains, who it comes from and which
 * competitions it carries — brands as logos rather than a fake live schedule.
 */
export const ChannelShowcase: React.FC<ChannelShowcaseProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const stats = [
    {
      value: '+80 000',
      valueClass: 'text-ink-900',
      title: 'Chaînes en direct',
      note: 'Luxembourg, France, Belgique, Allemagne, UK & monde'
    },
    {
      value: '+200 000',
      valueClass: 'text-flame-600',
      title: 'Films & séries à la demande',
      note: 'Netflix, Prime, Disney+, Canal+ & replay 7 jours'
    },
    {
      value: '4K UHD 60 fps',
      valueClass: 'text-lux-600',
      title: 'Anti-Freeze™ Dual-CDN',
      note: 'Flux directs, sans ré-encodage dégradant'
    }
  ];

  const groups = [
    {
      title: 'Luxembourg & Benelux',
      flag: '🇱🇺',
      channels: 'RTL Télé Lëtzebuerg · RTL Zwee · Chamber TV · Dok TV · PostTV · Pickx+ · VOO Sport · VRT · VTM'
    },
    {
      title: 'Sport en direct',
      flag: '🏆',
      channels: 'Canal+ Sport 360 · DAZN · BeIN Sports · Sky Sports · Eurosport · F1 TV Pro · ESPN'
    },
    {
      title: 'Cinéma & séries',
      flag: '🎬',
      channels: 'Canal+ UHD · OCS · Sky Cinema · TF1 · France TV · ZDF · RTL Deutschland · SkyShowtime'
    }
  ];

  return (
    <section id="channels" className="lux-paper relative bg-ink-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.channelsSection.badge}
          icon={Tv}
          tone="onTint"
          title={t.channelsSection.title}
          lead={t.channelsSection.subtitle}
          className="mb-12"
        />

        {/* Headline numbers */}
        <div data-reveal-stagger className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.title} className="lux-card lux-hover rounded-2xl border border-ink-100 bg-white p-5 text-center">
              <span className={`block font-display text-2xl font-black tracking-tight sm:text-3xl ${stat.valueClass}`}>
                {stat.value}
              </span>
              <span className="mt-1 block text-xs font-bold text-ink-700">{stat.title}</span>
              <span className="mt-1 block text-[11px] text-ink-400">{stat.note}</span>
            </div>
          ))}
        </div>

        {/* Broadcasters and streaming services carried in the bouquet */}
        <div className="lux-card mb-4 rounded-3xl border border-ink-100 bg-white px-4 py-8 sm:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-ink-400">
            Chaînes et plateformes incluses
          </p>
          <LogoRail items={CHANNEL_LOGOS} direction="left" durationSeconds={62} fadeFrom="from-white" size="lg" />
        </div>

        {/* Competitions, the reason most subscriptions get bought */}
        <div className="mb-6 rounded-3xl border border-ink-100 bg-white/70 px-4 py-7 sm:px-8">
          <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-ink-400">
            <Trophy className="h-3.5 w-3.5 text-amber-500" />
            Compétitions diffusées en direct
          </p>
          <LogoRail items={SPORTS_LOGOS} direction="right" durationSeconds={70} fadeFrom="from-white" />
        </div>

        {/* What the bouquet is made of, by family rather than channel by channel */}
        <div data-reveal-stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-ink-100 bg-white p-5">
              <h3 className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                <span className="text-base">{group.flag}</span>
                {group.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">{group.channels}</p>
            </div>
          ))}
        </div>

        {/* Closing prompt */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-ink-100 bg-white p-5 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
              Vous ne trouvez pas votre chaîne favorite ?
            </span>
            <p className="mt-0.5 text-sm text-ink-700">
              Notre bouquet comprend plus de 80 000 flux mondiaux, dont toutes les chaînes locales du Benelux.
              Demandez-nous la liste complète sur WhatsApp.
            </p>
          </div>
          <a
            href="#pricing"
            className="flex shrink-0 items-center gap-2 rounded-2xl bg-lux-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-lux-500/25 transition-colors hover:bg-lux-700"
          >
            {t.nav.pricing}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
