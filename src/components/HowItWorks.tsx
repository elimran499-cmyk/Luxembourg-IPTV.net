import React from 'react';
import { ListChecks, QrCode, KeyRound, ArrowRight, Clock3 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowItWorksProps {
  currentLang: Language;
}

const STEP_ICONS = [ListChecks, QrCode, KeyRound];

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="how-it-works" className="lux-paper relative border-y border-ink-100 bg-ink-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.howItWorks.badge}
          icon={Clock3}
          tone="onTint"
          title={t.howItWorks.title}
          lead={t.howItWorks.subtitle}
          className="mb-14"
        />

        <div data-reveal-stagger className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {/* The rule the three steps sit on, drawn only where it reads. */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-[54px] hidden border-t-2 border-dashed border-ink-200 md:block" />

          {t.howItWorks.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] || ListChecks;
            return (
              <div
                key={step.title}
                className="lux-card lux-hover relative flex flex-col rounded-3xl border border-ink-100 bg-white p-6 sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lux-500 to-lux-700 text-white shadow-lg shadow-lux-500/25">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-black text-ink-100">0{index + 1}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-xs font-medium text-ink-500">{t.howItWorks.footnote}</p>
          <a
            href="#pricing"
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-lux-600 to-lux-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-lux-500/25 transition-all hover:from-lux-700 hover:to-lux-600 active:scale-[0.98]"
          >
            {t.nav.pricing}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
