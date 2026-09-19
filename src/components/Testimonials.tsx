import React from 'react';
import { UI } from '../data/ui';
import { Star, ShieldCheck, MapPin, Quote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';
import { TESTIMONIALS_DATA } from '../data/channels';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];

  return (
    <section id="reviews" className="lux-paper relative border-y border-ink-100 bg-ink-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.testimonials.badge}
          icon={Star}
          tone="onTint"
          title={t.testimonials.title}
          lead={t.testimonials.subtitle}
          className="mb-10"
        />

        <div data-reveal-stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((item) => (
            <figure
              key={item.id}
              className="lux-card lux-hover relative flex flex-col justify-between rounded-2xl border border-ink-100 bg-white p-5"
            >
              <Quote className="absolute right-4 top-4 h-6 w-6 text-ink-100" />

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  <span className="text-[11px] font-medium text-ink-400">{item.date}</span>
                </div>

                {/* Three lines is enough to sound like a person; the rest
                    was making the section twice as tall as it needed to be. */}
                <blockquote className="line-clamp-3 text-xs leading-relaxed text-ink-700">
                  « {item.comment} »
                </blockquote>
              </div>

              <figcaption className="mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
                <div>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-ink-900">
                    {item.author}
                    {item.verifiedLux && <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-400">
                    <MapPin className="h-3 w-3 text-flame-500" />
                    {item.location}
                  </span>
                </div>

                <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                  {item.isp}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-ink-500">
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-display text-sm font-bold text-ink-900">4.9 / 5</span>
          </span>
          <span className="text-ink-300">•</span>
          <span>{ui.reviewsBase}</span>
          <span className="text-ink-300">•</span>
          <span className="font-semibold text-emerald-600">99.4 % de taux de recommandation</span>
        </div>
      </div>
    </section>
  );
};
