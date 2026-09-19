import React from 'react';
import { UI } from '../data/ui';
import { Server, Clock, Headphones, Zap, Wifi } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FeaturesProps {
  currentLang: Language;
}

const FEATURE_ICONS = [Server, Zap, Clock, Headphones];

export const Features: React.FC<FeaturesProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];

  const featureProofs = [
    { text: ui.featureDatacenters, tone: 'text-emerald-600', dot: 'bg-emerald-500' },
    { text: ui.featureCdn, tone: 'text-lux-600', dot: 'bg-lux-500' },
    { text: ui.featureReplay, tone: 'text-amber-600', dot: 'bg-amber-500' },
    { text: ui.featureSupportLangs, tone: 'text-flame-600', dot: 'bg-flame-500' }
  ];


  return (
    <section id="features" className="lux-paper relative overflow-hidden bg-ink-50 py-24">
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-lux-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.features.badge}
          icon={Zap}
          tone="onTint"
          title={t.features.title}
          lead={t.features.subtitle}
          className="mb-14"
        />

        <div data-reveal-stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          {t.features.items.map((item, index) => {
            const Icon = FEATURE_ICONS[index] || Server;
            const proof = featureProofs[index];
            return (
              <article
                key={item.title}
                className="lux-card lux-hover group flex flex-col justify-between rounded-3xl border border-ink-100 bg-white p-6 hover:border-lux-300 sm:p-8"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lux-50 text-lux-600 ring-1 ring-lux-100 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-2xl font-black text-ink-100">0{index + 1}</span>
                  </div>

                  <h3 className="mb-2 font-display text-lg font-bold text-ink-900 sm:text-xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500">{item.desc}</p>
                </div>

                {proof && (
                  <p className={`mt-6 flex items-center gap-2 border-t border-ink-100 pt-4 text-xs font-semibold ${proof.tone}`}>
                    <span className={`h-2 w-2 rounded-full ${proof.dot}`} />
                    {proof.text}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* ISP throttling reassurance */}
        <div data-reveal className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-100 bg-white p-6 sm:p-8 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
              <Wifi className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-ink-900">
                {ui.noThrottleTitle}
              </h3>
              <p className="mt-0.5 text-xs text-ink-500 sm:text-sm">
                {ui.noThrottleBody}
              </p>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-2 rounded-xl border border-ink-200 bg-white px-3.5 py-2 text-xs font-semibold text-ink-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {ui.uptimeChip}
          </span>
        </div>
      </div>
    </section>
  );
};
