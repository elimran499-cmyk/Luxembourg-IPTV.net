import React from 'react';
import { CreditCard, Shield, Zap, Lock, Apple, Bitcoin, QrCode } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TrustBannerProps {
  currentLang: Language;
}

export const TrustBanner: React.FC<TrustBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="border-y border-ink-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-widest text-ink-400">
          {t.trustBanner.title}
        </p>

        {/* Payment rail — Payconiq first, because that is what Luxembourg uses. */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2.5 rounded-2xl border-2 border-flame-200 bg-white px-4 py-2.5 shadow-sm transition-transform hover:scale-[1.02]">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-flame-500 text-white">
              <QrCode className="h-4 w-4" />
            </span>
            <span className="text-left">
              <span className="flex items-center gap-1.5">
                <span className="font-display text-sm font-extrabold tracking-tight text-ink-900">Payconiq</span>
                <span className="rounded bg-flame-50 px-1 text-[9px] font-bold uppercase text-flame-600">LU N°1</span>
              </span>
              <span className="block text-[10px] text-ink-400">by Bancontact & Spuerkeess</span>
            </span>
          </span>

          {[
            { label: 'Apple Pay', icon: Apple },
            { label: 'VISA & Mastercard', icon: CreditCard },
            { label: 'iDEAL Benelux', icon: CreditCard },
            { label: 'USDT / Bitcoin', icon: Bitcoin }
          ].map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-ink-200 bg-white px-3.5 py-2.5 text-xs font-bold text-ink-600 transition-colors hover:border-ink-300"
            >
              <Icon className="h-3.5 w-3.5 text-lux-500" />
              {label}
            </span>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-ink-100 pt-6 text-[11px] font-medium text-ink-500">
          <span className="flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-emerald-500" />
            Chiffrement SSL 256-bit
          </span>
          <span className="hidden text-ink-300 sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            {t.trustBanner.instantActivation}
          </span>
          <span className="hidden text-ink-300 sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-lux-500" />
            Zéro log de connexion (conforme RGPD)
          </span>
        </div>
      </div>
    </section>
  );
};
