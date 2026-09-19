import React, { useEffect, useState } from 'react';
import { Zap, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { WhatsAppIcon } from './WhatsAppIcon';
import { ScrollProgress } from './ScrollProgress';
import { WHATSAPP_URL } from '../data/contact';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

/**
 * Four things and no menu: the wordmark, WhatsApp, the language, and the way
 * to the packs. Navigation lives in the page itself — the phone has its tab
 * bar, and the sections follow each other in the order people read them.
 *
 * Over the hero the bar is transparent so the artwork runs to the top of the
 * screen. Once the page scrolls it becomes frosted paper, loses a little
 * height, and grows a hairline that fills as you read — the one piece of
 * chrome that says how much of the page is left.
 */
export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <header
        className={`relative transition-all duration-300 ${
          isScrolled ? 'lux-glass-solid border-b border-ink-100 shadow-lg shadow-ink-900/5' : 'bg-transparent'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-[60px] sm:h-20'
          }`}
        >
          <a href="#top" aria-label="Luxembourg IPTV — accueil" className="shrink-0">
            <BrandLogo invert={!isScrolled} compact />
          </a>

          <div className="flex items-center gap-2">
            {/* Secondary: an icon where the bar is tight, a labelled pill where
                there is room for one. */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`hidden h-10 items-center justify-center gap-2 rounded-full text-xs font-bold transition-transform active:scale-95 sm:flex ${
                isScrolled
                  ? 'w-10 border-2 border-emerald-200 bg-emerald-50 text-emerald-700 md:w-auto md:px-4'
                  : 'lux-glass-whatsapp w-10 text-white md:w-auto md:px-5'
              }`}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <LanguageSwitcher
              currentLang={currentLang}
              onLanguageChange={onLanguageChange}
              tone={isScrolled ? 'onLight' : 'onDark'}
            />

            {/* Primary: one filled button, and it is the same one everywhere
                on the page. */}
            <a
              id="header-order-btn"
              href="#pricing"
              className={`group hidden h-10 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-bold text-white transition-transform active:scale-95 sm:flex ${
                isScrolled
                  ? 'bg-gradient-to-r from-lux-700 to-lux-500 shadow-lg shadow-lux-500/25'
                  : 'lux-glass-primary'
              }`}
            >
              <Zap className="h-4 w-4 shrink-0" />
              {t.nav.pricing}
              <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-70 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Only once the bar is solid: on the artwork it would read as a crack
            of light across the hero. */}
        {isScrolled && (
          <ScrollProgress
            className="bg-ink-100"
            barClassName="bg-gradient-to-r from-lux-600 via-lux-400 to-flame-500"
          />
        )}
      </header>
    </div>
  );
};
