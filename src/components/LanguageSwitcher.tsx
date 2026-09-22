import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';
import { LOCALES, localeMeta } from '../data/seo';

interface LanguageSwitcherProps {
  currentLang: Language;
  /** Over the dark hero the trigger is glass; on white it is frosted paper. */
  tone?: 'onDark' | 'onLight';
}

/**
 * The language switcher, same shape on a phone as on a desktop: a compact pill
 * carrying the current code, opening an inked sheet of full language names.
 *
 * Every entry is a real link to that language's own address — `/`, `/fr/`,
 * `/de/`, `/en/` — so switching loads the page already written in that
 * language, and a crawler following the menu finds all four. The pill shows
 * the code rather than a flag alone: a flag names a country, not a language.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang,
  tone = 'onLight'
}) => {
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('pointerdown', onPointer);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const active = localeMeta(currentLang);

  return (
    <div ref={wrapper} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Langue / Sprooch / Language"
        className={`flex h-10 items-center gap-1.5 rounded-full px-3 text-xs font-bold transition-all active:scale-95 ${
          tone === 'onDark' ? 'lux-glass text-white' : 'lux-glass-light text-ink-700'
        }`}
      >
        <span className="text-sm leading-none">{active.flag}</span>
        <span className="uppercase tracking-wide">{active.code}</span>
        <ChevronDown className={`h-3.5 w-3.5 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="lux-fade-in absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-2xl bg-ink-900/95 py-1.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
          {LOCALES.map((locale) => {
            const isActive = locale.code === currentLang;
            return (
              <a
                key={locale.code}
                href={locale.path}
                hrefLang={locale.htmlLang}
                lang={locale.htmlLang}
                rel="alternate"
                aria-current={isActive ? 'page' : undefined}
                className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-xs transition-colors ${
                  isActive ? 'font-bold text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-sm">{locale.flag}</span>
                  {locale.label}
                </span>
                {isActive && <Check className="h-3.5 w-3.5 text-emerald-400" />}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
