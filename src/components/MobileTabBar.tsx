import React from 'react';
import { Home, Tv, Clapperboard, Tag } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Language } from '../types';
import { WHATSAPP_URL } from '../data/contact';
import { PageId, pageHref } from '../data/pages';

interface MobileTabBarProps {
  currentLang: Language;
  /** The page being read, which is the tab that lights up. */
  page: PageId;
}

/**
 * Phone-only tab bar. The five destinations a visitor actually uses, always a
 * thumb away. Each one is now a page of its own, so the tabs are links
 * between pages and the pill marks the page being read.
 */
export const MobileTabBar: React.FC<MobileTabBarProps> = ({ currentLang, page }) => {

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

  const tabs: { id: PageId; label: string; icon: typeof Home }[] = [
    { id: 'home', label: labels.home, icon: Home },
    { id: 'channels', label: labels.channels, icon: Tv },
    { id: 'films', label: labels.films, icon: Clapperboard },
    { id: 'pricing', label: labels.pricing, icon: Tag }
  ];


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
          const isActive = page === id;
          return (
            <a
              key={id}
              href={pageHref(currentLang, id)}
              aria-current={isActive ? 'page' : undefined}
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
