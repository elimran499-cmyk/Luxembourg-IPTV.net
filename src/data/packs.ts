import { Language } from '../types';

/**
 * Subscription packs, matching the grid the network's other sites sell: five
 * server packs, each over three durations, every price a one-off payment for
 * the whole term. Prices are transcribed as printed on those sites, mixed
 * decimal separators included, so a customer comparing two of them sees the
 * same number twice.
 */

export interface PackCard {
  id: string;
  months: number;
  /** Terms that throw an extra month in on top. */
  bonusMonth?: boolean;
  /** Price as printed, already carrying its currency symbol. */
  price: string;
  /** The card each pack leads with. */
  featured?: boolean;
}

/** Cards run longest term first, so the best per-month rate leads. */
export interface PackGroup {
  id: string;
  /** Simultaneous screens the pack may run. */
  devices: number;
  channels: string;
  vod: string;
  quality: string;
  guaranteeDays: number;
  /** The one pack the comparison recommends. */
  bestValue?: boolean;
  cards: PackCard[];
}

export const PACK_GROUPS: PackGroup[] = [
  {
    id: 'premium',
    devices: 1,
    channels: '+80 000',
    vod: '+200 000',
    quality: 'HD / 4K / 8K',
    guaranteeDays: 14,
    bestValue: true,
    cards: [
      { id: 'premium-12m', months: 12, price: '88,99 €', bonusMonth: true, featured: true },
      { id: 'premium-6m', months: 6, price: '57,99 €', bonusMonth: true },
      { id: 'premium-3m', months: 3, price: '39.99 €' }
    ]
  },
  {
    id: 'standard',
    devices: 1,
    channels: '+25 000',
    vod: '+120 000',
    quality: 'HD / FHD / 4K',
    guaranteeDays: 7,
    cards: [
      { id: 'standard-12m', months: 12, price: '48.99 €', featured: true },
      { id: 'standard-6m', months: 6, price: '39.99 €' },
      { id: 'standard-3m', months: 3, price: '29.99 €' }
    ]
  },
  {
    id: 'family-2',
    devices: 2,
    channels: '+80 000',
    vod: '+200 000',
    quality: 'HD / 4K / 8K',
    guaranteeDays: 14,
    cards: [
      { id: 'family-2-12m', months: 12, price: '159,99 €', bonusMonth: true, featured: true },
      { id: 'family-2-6m', months: 6, price: '89,99 €', bonusMonth: true },
      { id: 'family-2-3m', months: 3, price: '54.99 €' }
    ]
  },
  {
    id: 'family-3',
    devices: 3,
    channels: '+80 000',
    vod: '+200 000',
    quality: 'HD / 4K / 8K',
    guaranteeDays: 14,
    cards: [
      { id: 'family-3-12m', months: 12, price: '209,99 €', bonusMonth: true, featured: true },
      { id: 'family-3-6m', months: 6, price: '149,99 €', bonusMonth: true },
      { id: 'family-3-3m', months: 3, price: '74.99 €' }
    ]
  },
  {
    id: 'family-5',
    devices: 5,
    channels: '+80 000',
    vod: '+200 000',
    quality: 'HD / 4K / 8K',
    guaranteeDays: 14,
    cards: [
      { id: 'family-5-12m', months: 12, price: '299,99 €', bonusMonth: true, featured: true },
      { id: 'family-5-6m', months: 6, price: '184,99 €', bonusMonth: true },
      { id: 'family-5-3m', months: 3, price: '114.99 €' }
    ]
  }
];

/** Pack names per language — short enough to sit in a segmented control. */
export const PACK_NAMES: Record<Language, Record<string, string>> = {
  fr: {
    premium: 'Premium',
    standard: 'Standard',
    'family-2': 'Famille 2 écrans',
    'family-3': 'Famille 3 écrans',
    'family-5': 'Famille 5 écrans'
  },
  de: {
    premium: 'Premium',
    standard: 'Standard',
    'family-2': 'Familie 2 Geräte',
    'family-3': 'Familie 3 Geräte',
    'family-5': 'Familie 5 Geräte'
  },
  en: {
    premium: 'Premium',
    standard: 'Standard',
    'family-2': 'Family 2 screens',
    'family-3': 'Family 3 screens',
    'family-5': 'Family 5 screens'
  },
  lb: {
    premium: 'Premium',
    standard: 'Standard',
    'family-2': 'Famill 2 Ecranen',
    'family-3': 'Famill 3 Ecranen',
    'family-5': 'Famill 5 Ecranen'
  }
};

/**
 * Two stops per pack: a bright one that carries text and ticks on the dark
 * glass, and a deep one that gives washes and pills somewhere to fall to. Both
 * are plain values rather than classes, because the section interpolates
 * between them (see the registered --pack-colour properties).
 */
export const PACK_COLOURS: Record<string, { light: string; deep: string }> = {
  premium: { light: '#38BDF8', deep: '#0C4A96' },
  standard: { light: '#CBD5E1', deep: '#475569' },
  'family-2': { light: '#C4B5FD', deep: '#5B21B6' },
  'family-3': { light: '#6EE7B7', deep: '#065F46' },
  'family-5': { light: '#FCD34D', deep: '#92400E' }
};

/** One line per pack, saying who it is for. */
export const PACK_PITCH: Record<Language, Record<string, string>> = {
  fr: {
    premium: 'Le bouquet complet, un écran, la meilleure image.',
    standard: "L'essentiel en HD et 4K, au prix le plus bas.",
    'family-2': 'Deux écrans en même temps, sans se disputer la télé.',
    'family-3': 'Trois écrans : salon, chambre, tablette.',
    'family-5': 'Cinq écrans pour toute la maisonnée.'
  },
  de: {
    premium: 'Das komplette Angebot, ein Gerät, das beste Bild.',
    standard: 'Das Wesentliche in HD und 4K, zum tiefsten Preis.',
    'family-2': 'Zwei Geräte gleichzeitig, ohne Streit um den Fernseher.',
    'family-3': 'Drei Geräte: Wohnzimmer, Schlafzimmer, Tablet.',
    'family-5': 'Fünf Geräte für den ganzen Haushalt.'
  },
  en: {
    premium: 'The full line-up, one screen, the best picture.',
    standard: 'The essentials in HD and 4K, at the lowest price.',
    'family-2': 'Two screens at once, no arguing over the TV.',
    'family-3': 'Three screens: living room, bedroom, tablet.',
    'family-5': 'Five screens for the whole household.'
  },
  lb: {
    premium: 'De ganze Bouquet, een Ecran, dat bescht Bild.',
    standard: "D'Haaptsaach an HD a 4K, zum niddregste Präis.",
    'family-2': 'Zwee Ecranen gläichzäiteg, ouni Sträit ëm den Fernseh.',
    'family-3': 'Dräi Ecranen: Wunnzëmmer, Schlofzëmmer, Tablet.',
    'family-5': 'Fënnef Ecranen fir de ganzen Haushalt.'
  }
};

/** Nouns the pack meta line needs; the counts come from the pack itself. */
export const PACK_NOUNS: Record<Language, { channels: string; vod: string; month: string }> = {
  fr: { channels: 'chaînes', vod: 'films & séries', month: 'mois' },
  de: { channels: 'Sender', vod: 'Filme & Serien', month: 'Monat' },
  en: { channels: 'channels', vod: 'films & series', month: 'month' },
  lb: { channels: 'Senderen', vod: 'Filmer & Serien', month: 'Mount' }
};

/** Everything the checkout needs about one chosen card. */
export interface PackSelection {
  groupId: string;
  cardId: string;
  name: string;
  months: number;
  bonusMonth: boolean;
  devices: number;
  price: string;
  channels: string;
  vod: string;
  guaranteeDays: number;
}

export const buildSelection = (
  group: PackGroup,
  card: PackCard,
  lang: Language
): PackSelection => ({
  groupId: group.id,
  cardId: card.id,
  name: PACK_NAMES[lang][group.id] ?? group.id,
  months: card.months,
  bonusMonth: Boolean(card.bonusMonth),
  devices: group.devices,
  price: card.price,
  channels: group.channels,
  vod: group.vod,
  guaranteeDays: group.guaranteeDays
});

/** The pack the header and the hero point at: Premium, twelve months. */
export const DEFAULT_GROUP = PACK_GROUPS[0];
export const DEFAULT_CARD = PACK_GROUPS[0].cards[2];

/**
 * Effective monthly rate, bonus month included, formatted for display. The
 * prices carry mixed separators, so the comma is normalised before parsing.
 */
export const perMonth = (card: PackCard): string => {
  const value = Number(card.price.replace(/[^0-9,.]/g, '').replace(',', '.'));
  const months = card.months + (card.bonusMonth ? 1 : 0);
  return `${(value / months).toFixed(2).replace('.', ',')} €`;
};
