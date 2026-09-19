import React from 'react';
import { UI } from '../data/ui';
import { MapPin, Mail, ArrowRight, Zap } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { BrandLogo } from './BrandLogo';
import { LANGUAGES } from './LanguageSwitcher';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SUPPORT_EMAIL, WHATSAPP_URL } from '../data/contact';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

/**
 * Three rows instead of four columns: who we are, how to reach us, and the
 * legal line. Everything that had its own column and two items in it — the
 * quick links, the legal list, the payment logos — is now an inline row, which
 * is what a footer is for: a place to check a detail, not a second homepage.
 */
export const Footer: React.FC<FooterProps> = ({ currentLang, onLanguageChange }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];

  const links = [
    { href: '#channels', label: t.nav.channels },
    { href: '#films', label: t.nav.films },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#devices', label: t.nav.devices },
    { href: '#faq', label: t.nav.faq }
  ];

  const legal = ['CGV', 'Confidentialité (RGPD)', 'Remboursement', 'CNPD'];

  const payments = ['Payconiq', 'VISA / Mastercard', 'Apple Pay', 'iDEAL', 'Bitcoin / USDT'];

  return (
    <footer className="border-t border-ink-100 bg-ink-50 pb-8 pt-14 text-xs text-ink-500">
      {/* Closing band: the page still ends on the offer, at half the height. */}
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-ink-950 px-6 py-8 text-center sm:px-10"
        >
          <span className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-lux-500/25 blur-3xl" />
          <span className="pointer-events-none absolute -bottom-24 -right-12 h-52 w-52 rounded-full bg-flame-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row sm:text-left">
            <div>
              <h2 className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                {ui.footerClosing}
              </h2>
              <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-white/60 sm:justify-start">
                <Zap className="h-3.5 w-3.5 text-amber-300" />
                {ui.footerFacts}
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2.5 sm:w-auto sm:flex-row">
              <a
                href="#pricing"
                className="lux-sheen flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-lux-500 to-lux-400 px-5 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.02]"
              >
                {t.nav.pricing}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-glass-whatsapp flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1 — brand, then everywhere the site goes. */}
        <div className="flex flex-col gap-6 border-b border-ink-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <BrandLogo />
            <p className="flex items-center gap-1.5 text-ink-500">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-flame-500" />
              Boulevard Konrad Adenauer, Kirchberg, L-1115 Luxembourg
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-semibold text-ink-600">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-lux-700">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Row 2 — how to reach us, how to pay, which language. */}
        <div className="flex flex-col gap-4 border-b border-ink-200 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-ink-600 transition-colors hover:text-emerald-600"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-500" />
              {ui.whatsappDaily}
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-1.5 font-semibold text-ink-600 transition-colors hover:text-lux-700"
            >
              <Mail className="h-3.5 w-3.5 text-lux-500" />
              {SUPPORT_EMAIL}
            </a>
            <span className="hidden text-ink-300 sm:inline">|</span>
            <span className="text-ink-400">{payments.join(' · ')}</span>
          </div>

          <div className="flex items-center gap-1.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  currentLang === lang.code
                    ? 'bg-lux-600 text-white'
                    : 'bg-white text-ink-500 ring-1 ring-ink-200 hover:text-ink-900'
                }`}
              >
                {lang.code}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3 — the legal line. */}
        <div className="flex flex-col gap-2 pt-5 text-[11px] text-ink-400 sm:pr-48 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legal.map((label) => (
              <a key={label} href="#top" className="transition-colors hover:text-ink-700">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
