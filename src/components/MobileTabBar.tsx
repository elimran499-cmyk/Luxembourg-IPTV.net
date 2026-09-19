import React, { useEffect, useState } from 'react';
import { Home, Tv, Clapperboard, Tag } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { WHATSAPP_URL } from '../data/contact';

interface MobileTabBarProps {
  currentLang: Language;
}

/**
 * Phone-only tab bar. The five destinations a visitor actually uses, always a
 * thumb away, with the active pill following the section under the reader —
 * so the bar doubles as a position indicator on a very long landing page.
 */
export const MobileTabBar: React.FC<MobileTabBarProps> = ({ currentLang }) => {
  const [active, setActive] = useState('top');

  // The bar is five columns wide on a 360px phone, so every label has to fit
  // in roughly eight characters — hence its own short strings per language
  // rather than the longer ones the header nav uses.
  const SHORT_LABELS: Record<Language, { home: string; channels: string; films: string; pricing: string }> = {
    fr: { home: 'Accueil', channels: 'Chaînes', films: 'Films', pricing: 'Tarifs' },
    de: { home: 'Start', channels: 'Sender', films: 'Filme', pricing: 'Preise' },
    en: { home: 'Home', channels: 'Channels', films: 'Movies', pricing: 'Plans' },
    lb: { home: 'Start', channels: 'Sender', films: 'Filmer', pricing: 'Präisser' }
  };

  const labels = SHORT_LABELS[currentLang];

  const tabs = [
    { id: 'top', label: labels.home, icon: Home },
    { id: 'channels', label: labels.channels, icon: Tv },
    { id: 'films', label: labels.films, icon: Clapperboard },
    { id: 'pricing', label: labels.pricing, icon: Tag }
  ];

  useEffect(() => {
    const ids = tabs.map((tab) => tab.id);
    const onScroll = () => {
      // The section whose top has passed 40% of the viewport is the one being
      // read; anything above that line has scrolled out of attention.
      const line = window.scrollY + window.innerHeight * 0.4;
      let next = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) next = id;
      });
      setActive((current) => (current === next ? current : next));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // Tab ids are static; the labels alone change with the language.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /*
      A floating glass bar rather than a strip welded to the screen edge: it
      clears the home indicator, lets the page show through underneath, and
      gives the active tab room for a pill of its own.
    */
    <nav
      className="fixed inset-x-3 z-30 sm:hidden"
      style={{ bottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
      aria-label="Navigation rapide"
    >
      <div className="lux-glass-light flex items-center gap-1 rounded-[26px] p-1.5">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`relative flex flex-1 flex-col items-center gap-1 rounded-[20px] px-1 py-2 text-[10px] font-bold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-b from-lux-500 to-lux-600 text-white shadow-lg shadow-lux-500/30'
                  : 'text-ink-400 active:bg-ink-50'
              }`}
            >
              <Icon
                className={`h-[18px] w-[18px] transition-transform duration-300 ${
                  isActive ? 'scale-110 text-white' : 'text-ink-400'
                }`}
              />
              <span className="max-w-full truncate">{label}</span>
            </a>
          );
        })}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 rounded-[20px] px-1 py-2 text-[10px] font-bold text-emerald-700"
        >
          <span className="lux-glass-whatsapp flex h-[26px] w-[26px] items-center justify-center rounded-full">
            <WhatsAppIcon className="h-[15px] w-[15px] text-white" />
          </span>
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
