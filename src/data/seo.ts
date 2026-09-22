import { Language } from '../types';

/**
 * One page per language, each at its own address.
 *
 * The site used to switch language in place, on a single URL: good for a
 * reader, useless for a crawler, which only ever saw the Luxembourgish copy.
 * Every language now has a directory of its own — `/lb/`, `/fr/`, `/de/`,
 * `/en/` — so Google can index four pages and serve each one to the country
 * that reads it. The `hreflang` list on each locale is what names those
 * countries. The bare domain still answers, in Lëtzebuergesch, and points its
 * canonical at `/lb/` so the two never compete for the same ranking.
 *
 * This file is the single source of truth for that: the build plugin reads it
 * to write the per-language HTML and the sitemap, and the app reads it to know
 * which language the current address is asking for.
 */

export const SITE = {
  origin: 'https://luxembourgiptv.net',
  /** `og:site_name` and the organisation's `alternateName`. */
  name: 'luxembourgiptv.net',
  orgName: 'Luxembourg IPTV',
  logo: '/images/brand/luxembourg-iptv-logo.png',
  mark: '/images/brand/luxembourg-iptv-logo-mark.png',
  shareCard: '/images/brand/luxembourg-iptv-share-card.png'
};

export interface LocaleMeta {
  code: Language;
  /** Where the language lives, always with its trailing slash. */
  path: string;
  /** The `lang` attribute and the `inLanguage` value. */
  htmlLang: string;
  ogLocale: string;
  /**
   * Every hreflang this page claims: the bare language, then the countries it
   * is meant to rank in. Luxembourg reads all four; the French, German and
   * Belgian editions exist because a large part of the audience crosses the
   * border to work here and searches from home.
   */
  hreflang: string[];
  label: string;
  flag: string;
  title: string;
  description: string;
  ogDescription: string;
  keywords: string;
  imageAlt: string;
  serviceType: string;
}

/**
 * The site's own language. It has a directory like the others, and is also
 * what the bare domain serves to anyone who arrives without one.
 */
export const DEFAULT_LANG: Language = 'lb';

export const LOCALES: LocaleMeta[] = [
  {
    code: 'lb',
    path: '/lb/',
    htmlLang: 'lb',
    ogLocale: 'lb_LU',
    hreflang: ['lb', 'lb-LU'],
    label: 'Lëtzebuergesch',
    flag: '🇱🇺',
    title: 'Luxembourg IPTV | IPTV Abo an 4K ouni Ënnerbriechung',
    description:
      'Luxembourg IPTV: IPTV Abonnement an 4K UHD mat 80.000 Senderen an 200.000 Filmer. RTL Télé Lëtzebuerg, Serveren zu Lëtzebuerg, Payconiq an Aktivéierung an 3 Minutten.',
    ogDescription:
      'Luxembourg IPTV: 80.000 Live-Senderen an 200.000 Filmer an 4K UHD, ouni Ënnerbriechung op POST, Tango an Orange. Ouni Engagement, 14 Deeg Garantie.',
    keywords:
      'luxembourg iptv, iptv lëtzebuerg, abonnement iptv luxembourg, iptv 4k luxembourg, iptv ouni ënnerbriechung',
    imageAlt: 'Luxembourg IPTV — IPTV Abo an 4K UHD ouni Ënnerbriechung',
    serviceType: 'IPTV Abonnement an 4K UHD zu Lëtzebuerg'
  },
  {
    code: 'fr',
    path: '/fr/',
    htmlLang: 'fr',
    ogLocale: 'fr_LU',
    hreflang: ['fr', 'fr-LU', 'fr-BE', 'fr-FR'],
    label: 'Français',
    flag: '🇫🇷',
    title: 'Luxembourg IPTV | Abonnement IPTV 4K sans coupure',
    description:
      'Luxembourg IPTV : 80 000 chaînes en direct et 200 000 films et séries en 4K UHD. RTL Télé Lëtzebuerg, serveurs au Luxembourg, Payconiq, activation en 3 minutes.',
    ogDescription:
      'Luxembourg IPTV : 80 000 chaînes et 200 000 films en 4K UHD, sans coupure sur la fibre POST, Tango et Orange. Sans engagement, garantie 14 jours.',
    keywords:
      'iptv luxembourg, abonnement iptv luxembourg, iptv 4k luxembourg, iptv sans coupure luxembourg, rtl télé lëtzebuerg iptv',
    imageAlt: 'Luxembourg IPTV — abonnement IPTV 4K UHD sans coupure',
    serviceType: 'Abonnement IPTV 4K UHD au Luxembourg'
  },
  {
    code: 'de',
    path: '/de/',
    htmlLang: 'de',
    ogLocale: 'de_LU',
    hreflang: ['de', 'de-LU', 'de-DE', 'de-BE'],
    label: 'Deutsch',
    flag: '🇩🇪',
    title: 'Luxembourg IPTV | IPTV-Abo in 4K ohne Aussetzer',
    description:
      'Luxembourg IPTV: 80.000 Live-Sender und 200.000 Filme & Serien in 4K UHD. RTL Télé Lëtzebuerg, Server in Luxemburg, Payconiq, Aktivierung in 3 Minuten.',
    ogDescription:
      'Luxembourg IPTV: 80.000 Sender und 200.000 Filme in 4K UHD, ruckelfrei über POST, Tango und Orange. Ohne Vertragsbindung, 14 Tage Garantie.',
    keywords:
      'iptv luxemburg, iptv abo luxemburg, iptv 4k luxemburg, iptv ohne aussetzer luxemburg, rtl télé lëtzebuerg iptv',
    imageAlt: 'Luxembourg IPTV — IPTV-Abo in 4K UHD ohne Aussetzer',
    serviceType: 'IPTV-Abo in 4K UHD in Luxemburg'
  },
  {
    code: 'en',
    path: '/en/',
    htmlLang: 'en',
    ogLocale: 'en_GB',
    hreflang: ['en', 'en-LU', 'en-GB', 'en-IE'],
    label: 'English',
    flag: '🇬🇧',
    title: 'Luxembourg IPTV | 4K IPTV subscription without buffering',
    description:
      'Luxembourg IPTV: 80,000 live channels and 200,000 films and series in 4K UHD. RTL Télé Lëtzebuerg, servers in Luxembourg, Payconiq, activation in 3 minutes.',
    ogDescription:
      'Luxembourg IPTV: 80,000 channels and 200,000 films in 4K UHD, with no buffering on POST, Tango and Orange fibre. No commitment, 14-day guarantee.',
    keywords:
      'iptv luxembourg, luxembourg iptv subscription, 4k iptv luxembourg, iptv without buffering luxembourg, rtl télé lëtzebuerg iptv',
    imageAlt: 'Luxembourg IPTV — 4K UHD IPTV subscription without buffering',
    serviceType: 'IPTV subscription in 4K UHD in Luxembourg'
  }
];

export const localeMeta = (code: Language): LocaleMeta =>
  LOCALES.find((l) => l.code === code) ?? LOCALES[0];

/** The address a language is reached at: `/lb/`, `/fr/`, and so on. */
export const localeHref = (code: Language): string => localeMeta(code).path;

/** The absolute URL of a language, for canonicals, hreflang and the sitemap. */
export const localeUrl = (code: Language): string => `${SITE.origin}${localeHref(code)}`;

/**
 * Which language an address is asking for, read from its first segment.
 * Anything else — the bare domain, a deep link, a stray path — is the default.
 */
export const localeFromPath = (pathname: string): Language => {
  const segment = pathname.split('/').filter(Boolean)[0]?.toLowerCase();
  return LOCALES.find((l) => l.code === segment)?.code ?? DEFAULT_LANG;
};
