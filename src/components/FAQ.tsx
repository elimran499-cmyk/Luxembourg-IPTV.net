import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { Language } from '../types';
import { translations } from '../data/translations';
import { WHATSAPP_URL } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FAQProps {
  currentLang: Language;
}

export const FAQ: React.FC<FAQProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  /* Everything closed to begin with: six open-able questions read as a short
     list, where one open answer turned the section into a wall of text. */
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.faq.badge}
          icon={HelpCircle}
          title={t.faq.title}
          lead={t.faq.subtitle}
          className="mb-10"
        />

        <div data-reveal className="space-y-2">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen ? 'border-lux-300 bg-white shadow-lg shadow-lux-500/5' : 'border-ink-200 bg-white'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left text-sm font-bold text-ink-900 sm:px-6"
                  >
                    <span className="leading-snug">{item.question}</span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? 'rotate-180 bg-lux-600 text-white' : 'bg-ink-100 text-ink-500'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div className="lux-fade-in border-t border-ink-100 px-5 pb-4 pt-3 text-xs leading-relaxed text-ink-600 sm:px-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-ink-50 p-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3.5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-sm font-bold text-ink-900">
                Besoin d'aide pour configurer votre boîtier ?
              </h3>
              <p className="mt-0.5 text-xs text-ink-500">{t.faq.contactSupport}</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-glass-whatsapp flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3 text-xs font-bold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Assistance WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
