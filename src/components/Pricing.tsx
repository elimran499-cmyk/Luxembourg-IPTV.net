import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  Check,
  ShieldCheck,
  Sparkles,
  CreditCard,
  Clock,
  ArrowRight,
  Bitcoin,
  Apple,
  QrCode,
  MonitorSmartphone,
  Crown
} from 'lucide-react';
import { Language, VodTitle } from '../types';
import { translations } from '../data/translations';
import {
  PACK_GROUPS,
  PACK_NAMES,
  PACK_NOUNS,
  PACK_PITCH,
  PACK_COLOURS,
  PackSelection,
  buildSelection,
  perMonth
} from '../data/packs';
import { TOP_FILMS } from '../data/vod';
import { openWhatsApp, orderMessage } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AnimatedPrice } from './AnimatedPrice';

interface PricingProps {
  currentLang: Language;
}

const PAYMENT_METHODS = [
  { label: 'Payconiq by Bancontact', icon: QrCode, accent: true },
  { label: 'VISA / Mastercard', icon: CreditCard },
  { label: 'Apple Pay', icon: Apple },
  { label: 'iDEAL Benelux', icon: CreditCard },
  { label: 'Bitcoin / USDT', icon: Bitcoin }
];

const TMDB_IMG = 'https://image.tmdb.org/t/p/w342';

/**
 * A montage per pack, heavily veiled. Each pack cuts to its own set, so
 * switching reads as a change of scene rather than a change of numbers.
 */
const BACKDROPS: Record<string, VodTitle[]> = {
  premium: TOP_FILMS.slice(0, 9),
  standard: TOP_FILMS.slice(4, 13),
  'family-2': TOP_FILMS.slice(8, 17),
  'family-3': TOP_FILMS.slice(2, 11),
  'family-5': TOP_FILMS.slice(6, 15)
};

export const Pricing: React.FC<PricingProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeGroupId, setActiveGroupId] = useState(PACK_GROUPS[0].id);

  const group = PACK_GROUPS.find((g) => g.id === activeGroupId) || PACK_GROUPS[0];
  const names = PACK_NAMES[currentLang];
  const nouns = PACK_NOUNS[currentLang];
  const pitch = PACK_PITCH[currentLang];
  const palette = PACK_COLOURS[group.id] ?? PACK_COLOURS.premium;

  /*
   * The active tab is marked by one pill that slides between the tabs rather
   * than by a background that blinks on each of them: the movement is what
   * ties the old choice to the new one. Its position is measured, because the
   * tabs are sized by their labels, which change with the language.
   */
  const tabsRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const placePill = () => {
    const container = tabsRef.current;
    const active = container?.querySelector<HTMLElement>('[data-active="true"]');
    if (!container || !active) return;
    setPill({
      left: active.offsetLeft,
      top: active.offsetTop,
      width: active.offsetWidth,
      height: active.offsetHeight
    });
  };

  useLayoutEffect(placePill, [activeGroupId, currentLang]);

  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return;

    /*
     * Watch the tabs themselves, not just their container: when the row wraps
     * the tabs share the width differently on each line, and a container-only
     * observer never fires for that — the indicator would keep the width it
     * had on the line above.
     */
    const observer = new ResizeObserver(placePill);
    observer.observe(container);
    container.querySelectorAll('button').forEach((tab) => observer.observe(tab));

    // Labels are set in a webfont; their width changes when it arrives.
    document.fonts?.ready.then(placePill).catch(() => {});

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** The pack's own numbers, headlined on each of its cards. */
  const packFacts = [
    `${group.channels} ${nouns.channels}`,
    `${group.vod} ${nouns.vod}`,
    `${group.devices} ${group.devices > 1 ? t.pricing.screens : t.pricing.screen}`,
    group.quality
  ];

  return (
    <section
      id="pricing"
      style={{
        ['--pack-colour' as string]: palette.light,
        ['--pack-deep' as string]: palette.deep
      }}
      className="pack-theme hero-grain relative isolate overflow-hidden bg-ink-950 py-16 sm:py-24"
    >
      {/* Poster wall, almost entirely veiled: it gives the section depth
          without ever competing with a price. */}
      <div
        key={`backdrop-${group.id}`}
        className="pack-backdrop pointer-events-none absolute inset-0 -z-10 grid grid-cols-3 gap-4 opacity-[0.2] sm:grid-cols-5 lg:grid-cols-9"
      >
        {(BACKDROPS[group.id] ?? BACKDROPS.premium).map((title) => (
          <span
            key={title.id}
            className="block overflow-hidden"
            style={{ backgroundImage: `linear-gradient(${title.accent[0]}, ${title.accent[1]})` }}
          >
            {title.poster && (
              <img
                src={`${TMDB_IMG}${title.poster}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            )}
          </span>
        ))}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-950/94 to-ink-950"
      />
      <span aria-hidden="true" className="pack-vignette pointer-events-none absolute inset-0 -z-10" />
      {/* The chosen pack's colour washes across the section as you switch. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, color-mix(in srgb, var(--pack-colour) 24%, transparent), color-mix(in srgb, var(--pack-deep) 28%, transparent) 50%, transparent)'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="lux-glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
            <CreditCard className="h-3.5 w-3.5" />
            {t.pricing.badge}
          </span>

          <span className="mx-auto mt-5 block h-[3px] w-12 rounded-full bg-gradient-to-r from-lux-400 via-lux-300 to-flame-400" />

          <h2 className="mt-5 font-display text-[28px] font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-[42px]">
            {t.pricing.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
            {t.pricing.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="lux-glass flex items-center gap-2 rounded-full px-3 py-1.5 text-white/80">
              <span className="h-2 w-2 rounded-full bg-flame-400" />
              <span className="font-bold text-white">Payconiq</span> {t.pricing.payconiqAccepted}
            </span>
            <span className="lux-glass flex items-center gap-2 rounded-full px-3 py-1.5 text-white/80">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              <span className="font-bold text-white">{t.pricing.instantDeliveryBadge}</span>
            </span>
          </div>
        </div>

        {/* Pack switcher */}
        <div className="mb-10 mt-10 flex flex-col items-center gap-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            {t.pricing.choosePack}
          </span>

          <div
            ref={tabsRef}
            className="lux-glass relative flex w-full max-w-3xl flex-wrap items-center justify-center gap-1.5 rounded-[26px] p-1.5"
          >
            {/* The indicator itself, carrying the pack's colour. */}
            <span
              aria-hidden="true"
              className="pack-tab-pill pointer-events-none absolute left-0 top-0 rounded-[20px]"
              style={{
                transform: `translate(${pill.left}px, ${pill.top}px)`,
                width: pill.width,
                height: pill.height,
                backgroundImage: 'linear-gradient(135deg, var(--pack-colour), var(--pack-deep))',
                boxShadow: '0 14px 34px -14px color-mix(in srgb, var(--pack-colour) 75%, transparent)'
              }}
            />

            {PACK_GROUPS.map((packGroup) => {
              const isActive = packGroup.id === activeGroupId;
              return (
                <button
                  key={packGroup.id}
                  data-active={isActive}
                  onClick={() => setActiveGroupId(packGroup.id)}
                  aria-pressed={isActive}
                  className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-[20px] px-3 py-2.5 text-xs font-bold transition-colors duration-300 ${
                    isActive ? 'text-ink-950' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {packGroup.bestValue && (
                    <Crown className={`h-3.5 w-3.5 ${isActive ? 'text-ink-950/70' : 'text-amber-300/70'}`} />
                  )}
                  {names[packGroup.id]}
                </button>
              );
            })}
          </div>

          {/* What the chosen pack is, in one line and four numbers. */}
          <div key={`meta-${group.id}`} className="pack-card flex flex-col items-center gap-2 text-center">
            <p className="text-sm font-semibold" style={{ color: 'var(--pack-colour)' }}>
              {pitch[group.id]}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] font-semibold text-white/50">
              <span className="flex items-center gap-1.5">
                <MonitorSmartphone className="h-3.5 w-3.5" />
                {group.devices} {group.devices > 1 ? t.pricing.screens : t.pricing.screen}
              </span>
              <span className="text-white/20">•</span>
              <span>{group.channels} {nouns.channels}</span>
              <span className="text-white/20">•</span>
              <span>{group.vod} {nouns.vod}</span>
              <span className="text-white/20">•</span>
              <span>{group.quality}</span>
            </div>
          </div>
        </div>

        {/* The three terms of the chosen pack */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-7 lg:pt-10">
          {group.cards.map((card) => {
            const featured = Boolean(card.featured);
            return (
              <div
                key={card.months}
                /*
                  No overflow clipping here: the ribbon hangs over the top edge
                  and used to get sliced in half by it. The beam is clipped by
                  its own layer inside instead.
                */
                style={{
                  ['--ring-colour' as string]: 'var(--pack-colour)',
                  ...(featured
                    ? {
                        ['--tw-ring-color' as string]: 'color-mix(in srgb, var(--pack-colour) 55%, transparent)',
                        boxShadow: '0 34px 90px -40px color-mix(in srgb, var(--pack-colour) 80%, transparent)'
                      }
                    : {})
                }}
                className={`pack-card pack-glass relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 sm:p-7 ${
                  featured ? 'pack-spotlight ring-1 lg:-translate-y-3' : 'ring-1 ring-white/10'
                }`}
              >
                {/* The pack's colour, laid inside the glass. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, color-mix(in srgb, var(--pack-colour) 22%, transparent) 0%, transparent 38%, color-mix(in srgb, var(--pack-deep) 30%, transparent) 100%)'
                  }}
                />

                <div className="relative">
                  <div className="mb-4 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                        {card.months} {t.pricing.months}
                      </h3>
                      <p className="mt-1 text-[11px] text-white/45 sm:text-xs">
                        {names[group.id]} • {group.devices}{' '}
                        {group.devices > 1 ? t.pricing.screens : t.pricing.screen}
                      </p>
                    </div>

                    {featured && (
                      <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-ink-900">
                        Top
                      </span>
                    )}
                  </div>

                  {/* The bonus month, stated inside the card so no badge has to
                      hang over its edge. */}
                  {card.bonusMonth && (
                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-flame-500 to-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white">
                      <Sparkles className="h-3 w-3" />
                      {t.pricing.bonusMonth}
                    </span>
                  )}

                  <div className="mb-5 border-b border-white/10 pb-5">
                    <AnimatedPrice
                      value={card.price}
                      className="tabular block font-display text-[38px] font-black leading-none tracking-tight text-white sm:text-[48px]"
                    />
                    <span className="mt-1.5 block text-xs font-bold" style={{ color: 'var(--pack-colour)' }}>
                      {t.pricing.perMonth} {perMonth(card)} / {nouns.month}
                    </span>
                  </div>

                  <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/40">
                    {t.pricing.includedTitle}
                  </p>

                  {/*
                    What this pack actually contains, first and in full weight:
                    Standard carries a smaller line-up than the rest, so the
                    counts belong on the card rather than only in the strip
                    above it.
                  */}
                  <ul className="mb-3.5 space-y-1.5">
                    {packFacts.map((fact) => (
                      <li key={fact} className="flex items-start gap-2.5 text-[13px] font-bold text-white sm:text-sm">
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ring-1"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--pack-deep) 55%, transparent)',
                            color: 'var(--pack-colour)',
                            ['--tw-ring-color' as string]: 'color-mix(in srgb, var(--pack-colour) 55%, transparent)'
                          }}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>

                  {/* Everything every pack shares. The first shared line names
                      the quality, which the facts above already state. */}
                  <ul className="mb-6 space-y-2 border-t border-white/10 pt-3.5">
                    {t.pricing.features.slice(1).map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-[13px] text-white/70 sm:text-sm">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative space-y-3">
                  <button
                    id={`select-pack-${card.id}`}
                    onClick={() =>
                      openWhatsApp(orderMessage(buildSelection(group, card, currentLang), currentLang))
                    }
                    className={`lux-sheen flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold transition-transform active:scale-[0.98] sm:py-4 ${
                      featured ? 'lux-glass-whatsapp text-white' : 'bg-white text-ink-900 hover:bg-white/90'
                    }`}
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t.pricing.order}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-white/45">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    {group.guaranteeDays} {t.pricing.guarantee}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment rail */}
        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
            {t.pricing.billingInfo}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {PAYMENT_METHODS.map(({ label, icon: Icon, accent }) => (
              <span
                key={label}
                className={`lux-glass flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-bold ${
                  accent ? 'text-white' : 'text-white/70'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${accent ? 'text-flame-400' : 'text-lux-300'}`} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
