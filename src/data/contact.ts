import { Language } from '../types';
import { PackSelection } from './packs';

/**
 * Ordering happens over WhatsApp — the same way the network's other sites
 * sell — so there is no checkout form to fill in and nothing to store.
 *
 * International format, digits only: no `+`, no spaces, no leading zero.
 */
const WHATSAPP_E164 = '447414662070';

/** Shown wherever the number is written out. */
export const WHATSAPP_NUMBER = '+44 7414 662070';

export const SUPPORT_EMAIL = 'support@luxembourgiptv.net';

/**
 * `wa.me` resolves to the app on a phone and to WhatsApp Web on a desktop, so
 * one link covers both.
 */
export const buildWhatsAppUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;

/** The plain "I have a question" link used by the support entry points. */
export const WHATSAPP_URL = buildWhatsAppUrl(
  'Bonjour Luxembourg IPTV, je souhaite des renseignements sur votre IPTV au Luxembourg.'
);

/** Opens the chat in a new tab, so the site is never navigated away. */
export const openWhatsApp = (message: string): void => {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
};

/**
 * The order itself, written out in the reader's language so the seller gets a
 * message they can act on without a single follow-up question.
 */
export const orderMessage = (pack: PackSelection, lang: Language): string => {
  const bonus = pack.bonusMonth;

  const templates: Record<Language, () => string> = {
    fr: () =>
      `Bonjour Luxembourg IPTV ! Je souhaite commander :\n\n` +
      `• Pack : ${pack.name}\n` +
      `• Durée : ${pack.months} mois${bonus ? ' (+1 mois offert)' : ''}\n` +
      `• Écrans : ${pack.devices}\n` +
      `• Prix : ${pack.price}\n\n` +
      `Merci de m'envoyer les détails de paiement.`,
    de: () =>
      `Hallo Luxembourg IPTV! Ich möchte bestellen:\n\n` +
      `• Paket: ${pack.name}\n` +
      `• Laufzeit: ${pack.months} Monate${bonus ? ' (+1 Monat gratis)' : ''}\n` +
      `• Geräte: ${pack.devices}\n` +
      `• Preis: ${pack.price}\n\n` +
      `Bitte senden Sie mir die Zahlungsdetails.`,
    en: () =>
      `Hello Luxembourg IPTV! I would like to order:\n\n` +
      `• Pack: ${pack.name}\n` +
      `• Term: ${pack.months} months${bonus ? ' (+1 month free)' : ''}\n` +
      `• Screens: ${pack.devices}\n` +
      `• Price: ${pack.price}\n\n` +
      `Please send me the payment details.`,
    lb: () =>
      `Moien Luxembourg IPTV! Ech wëll bestellen:\n\n` +
      `• Pack: ${pack.name}\n` +
      `• Dauer: ${pack.months} Méint${bonus ? ' (+1 Mount gratis)' : ''}\n` +
      `• Ecranen: ${pack.devices}\n` +
      `• Präis: ${pack.price}\n\n` +
      `Schéckt mir wannechgelift d'Zuelungsdetailer.`
  };

  return templates[lang]();
};
