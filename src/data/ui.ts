import { Language } from '../types';

/**
 * Strings that used to sit hard-coded in French inside the components. With
 * Lëtzebuergesch as the site's default language they had to become real
 * translations — a page that opens in Luxembourgish cannot label its own
 * buttons in French.
 */
export const UI: Record<Language, {
  tickerActivation: string;
  tickerPayment: string;
  tickerServers: string;
  tickerSupport: string;
  tickerChannels: string;
  tickerVod: string;
  guaranteeLong: string;
  reviewsSuffix: string;
  guaranteeShort: string;
  activationShort: string;
  heroBadgeMobile: string;
  whatsappHelp: string;
  whatsappDaily: string;
  whatsappSupport: string;
  sslEncryption: string;
  noLogs: string;
  footerClosing: string;
  footerFacts: string;
  faqHelpTitle: string;
  reviewsBase: string;
  statChannels: string;
  statChannelsNote: string;
  statVod: string;
  statVodNote: string;
  statAntifreeze: string;
  statAntifreezeNote: string;
  groupLux: string;
  groupSport: string;
  groupCinema: string;
  nowShowing: string;
  upNext: string;
  liveChip: string;
  proofLocal: string;
  proofUptime: string;
  proofPayment: string;
  proofIsp: string;
  ispExchange: string;
  ispJitter: string;
  ispDropRisk: string;
  ispReady: string;
  ispFastPath: string;
  featureDatacenters: string;
  featureCdn: string;
  featureReplay: string;
  featureSupportLangs: string;
  noThrottleTitle: string;
  noThrottleBody: string;
  uptimeChip: string;
}> = {
  lb: {
    tickerActivation: 'Aktivéierung an 3 Minutten',
    tickerPayment: 'Payconiq, Kaart & Krypto',
    tickerServers: 'Serveren Lëtzebuerg & Frankfurt',
    tickerSupport: 'WhatsApp Hëllef 7/7',
    tickerChannels: '80.000 Live-Senderen',
    tickerVod: '200.000 Filmer & Serien',
    guaranteeLong: '14 Deeg Garantie oder Suen zréck',
    reviewsSuffix: 'op 1.240 verifizéiert Avisen',
    guaranteeShort: '14 Deeg Garantie',
    activationShort: 'Aktivéierung < 3 Min',
    heroBadgeMobile: '🇱🇺 IPTV Lëtzebuerg • 4K UHD',
    whatsappHelp: 'WhatsApp Hëllef 24/7 (LU)',
    whatsappDaily: 'WhatsApp 7/7',
    whatsappSupport: 'WhatsApp Support',
    sslEncryption: 'SSL 256-Bit Verschlësselung',
    noLogs: 'Keng Verbindungsdaten gespäichert (RGPD)',
    footerClosing: 'Prett fir de Match vun haut den Owend an 4K?',
    footerFacts: '80.000 Senderen • 200.000 Filmer & Serien • Aktivéierung an 3 Minutten',
    faqHelpTitle: 'Braucht Dir Hëllef fir Är Box anzeriichten?',
    reviewsBase: 'Baséiert op méi wéi 1.240 verifizéiert Avisen vun Awunner zu Lëtzebuerg',
    statChannels: 'Live-Senderen',
    statChannelsNote: 'Lëtzebuerg, Frankräich, België, Däitschland, UK & Welt',
    statVod: 'Filmer & Serien op Ufro',
    statVodNote: 'Netflix, Prime, Disney+, Canal+ & Replay 7 Deeg',
    statAntifreeze: 'Anti-Freeze™ Dual-CDN',
    statAntifreezeNote: 'Direkt Streams, ouni degradéierend Re-Encodage',
    groupLux: 'Lëtzebuerg & Benelux',
    groupSport: 'Sport live',
    groupCinema: 'Kino & Serien',
    nowShowing: 'Um Programm',
    upNext: 'Duerno',
    liveChip: 'Live • 80.000 Senderen',
    proofLocal: 'RTL Télé Lëtzebuerg & Chamber TV an 4K',
    proofUptime: 'Anti-Freeze™ 99,9 % Disponibilitéit garantéiert',
    proofPayment: 'Bezuelung mat Payconiq, Kaart & Krypto',
    proofIsp: 'Kompatibel mat POST, Tango an Orange',
    ispExchange: 'Austauschpunkt: LU-CIX (Lëtzebuerg)',
    ispJitter: 'Jitter',
    ispDropRisk: 'Risiko vun Ënnerbriechung',
    ispReady: 'Prett fir Äre Fernseh?',
    ispFastPath: 'IPTV Fast-Path aktiv',
    featureDatacenters: 'Datecenteren Tier-IV Beetebuerg & Frankfurt',
    featureCdn: 'Duebel CDN aktiv, Ëmschaltung an 0 ms',
    featureReplay: 'Replay 7 Deeg op RTL, TF1, Canal+ & ZDF',
    featureSupportLangs: 'WhatsApp Support op LB, FR, DE, EN',
    noThrottleTitle: 'Keng Drosselung op de Reseauen vu POST, Tango an Orange',
    noThrottleBody: 'Natier Verschlësselung vun de Videopakéiter: Ären Internetfournisseur zu Lëtzebuerg kann Ären IPTV-Debit net drosselen.',
    uptimeChip: 'Reseau-Disponibilitéit LU: 99,98 %'
  },
  fr: {
    tickerActivation: 'Activation en 3 minutes',
    tickerPayment: 'Payconiq, carte & crypto',
    tickerServers: 'Serveurs Luxembourg & Francfort',
    tickerSupport: 'Assistance WhatsApp 7j/7',
    tickerChannels: '80 000 chaînes en direct',
    tickerVod: '200 000 films & séries',
    guaranteeLong: 'Garantie 14 jours satisfait ou remboursé',
    reviewsSuffix: 'sur 1 240 avis vérifiés',
    guaranteeShort: 'Garantie 14 jours',
    activationShort: 'Activation < 3 min',
    heroBadgeMobile: '🇱🇺 IPTV Luxembourg • 4K UHD',
    whatsappHelp: 'Aide WhatsApp 24/7 (LU)',
    whatsappDaily: 'WhatsApp 7j/7',
    whatsappSupport: 'Assistance WhatsApp',
    sslEncryption: 'Chiffrement SSL 256-bit',
    noLogs: 'Zéro log de connexion (conforme RGPD)',
    footerClosing: 'Prêt à regarder le match de ce soir en 4K ?',
    footerFacts: '80 000 chaînes • 200 000 films & séries • activation en 3 minutes',
    faqHelpTitle: "Besoin d'aide pour configurer votre boîtier ?",
    reviewsBase: 'Basé sur plus de 1 240 avis vérifiés de résidents au Luxembourg',
    statChannels: 'Chaînes en direct',
    statChannelsNote: 'Luxembourg, France, Belgique, Allemagne, UK & monde',
    statVod: 'Films & séries à la demande',
    statVodNote: 'Netflix, Prime, Disney+, Canal+ & replay 7 jours',
    statAntifreeze: 'Anti-Freeze™ Dual-CDN',
    statAntifreezeNote: 'Flux directs, sans ré-encodage dégradant',
    groupLux: 'Luxembourg & Benelux',
    groupSport: 'Sport en direct',
    groupCinema: 'Cinéma & séries',
    nowShowing: "À l'affiche",
    upNext: 'À suivre',
    liveChip: 'En direct • 80 000 chaînes',
    proofLocal: 'RTL Télé Lëtzebuerg & Chamber TV 4K',
    proofUptime: 'Anti-Freeze™ 99.9% uptime garanti',
    proofPayment: 'Paiement Payconiq, carte & crypto',
    proofIsp: 'Compatible POST, Tango, Orange',
    ispExchange: "Nœud d'échange : LU-CIX (Luxembourg)",
    ispJitter: 'Gigue / jitter',
    ispDropRisk: 'Risque de coupure',
    ispReady: 'Prêt pour votre téléviseur ?',
    ispFastPath: 'IPTV Fast-Path actif',
    featureDatacenters: 'Datacenters Tier-IV Bettembourg & Francfort',
    featureCdn: 'Double CDN actif, basculement 0 ms',
    featureReplay: 'Replay 7 jours sur RTL, TF1, Canal+ & ZDF',
    featureSupportLangs: 'Assistance WhatsApp en LB, FR, DE, EN',
    noThrottleTitle: 'Zéro bridage sur les réseaux POST, Tango et Orange',
    noThrottleBody: "Chiffrement natif des paquets vidéo : votre fournisseur d'accès au Luxembourg ne peut pas brider votre débit IPTV.",
    uptimeChip: 'Uptime réseau LU : 99.98 %'
  },
  de: {
    tickerActivation: 'Aktivierung in 3 Minuten',
    tickerPayment: 'Payconiq, Karte & Krypto',
    tickerServers: 'Server Luxemburg & Frankfurt',
    tickerSupport: 'WhatsApp-Support 7/7',
    tickerChannels: '80.000 Live-Sender',
    tickerVod: '200.000 Filme & Serien',
    guaranteeLong: '14 Tage Geld-zurück-Garantie',
    reviewsSuffix: 'aus 1.240 geprüften Bewertungen',
    guaranteeShort: '14 Tage Garantie',
    activationShort: 'Aktivierung < 3 Min',
    heroBadgeMobile: '🇱🇺 IPTV Luxemburg • 4K UHD',
    whatsappHelp: 'WhatsApp-Hilfe 24/7 (LU)',
    whatsappDaily: 'WhatsApp 7/7',
    whatsappSupport: 'WhatsApp-Support',
    sslEncryption: 'SSL-256-Bit-Verschlüsselung',
    noLogs: 'Keine Verbindungsprotokolle (DSGVO-konform)',
    footerClosing: 'Bereit für das Spiel heute Abend in 4K?',
    footerFacts: '80.000 Sender • 200.000 Filme & Serien • Aktivierung in 3 Minuten',
    faqHelpTitle: 'Hilfe bei der Einrichtung Ihrer Box?',
    reviewsBase: 'Basierend auf über 1.240 geprüften Bewertungen aus Luxemburg',
    statChannels: 'Live-Sender',
    statChannelsNote: 'Luxemburg, Frankreich, Belgien, Deutschland, UK & weltweit',
    statVod: 'Filme & Serien auf Abruf',
    statVodNote: 'Netflix, Prime, Disney+, Canal+ & Replay 7 Tage',
    statAntifreeze: 'Anti-Freeze™ Dual-CDN',
    statAntifreezeNote: 'Direkte Streams, ohne verlustbehaftetes Re-Encoding',
    groupLux: 'Luxemburg & Benelux',
    groupSport: 'Sport live',
    groupCinema: 'Kino & Serien',
    nowShowing: 'Im Programm',
    upNext: 'Als Nächstes',
    liveChip: 'Live • 80.000 Sender',
    proofLocal: 'RTL Télé Lëtzebuerg & Chamber TV in 4K',
    proofUptime: 'Anti-Freeze™ 99,9 % Verfügbarkeit garantiert',
    proofPayment: 'Zahlung mit Payconiq, Karte & Krypto',
    proofIsp: 'Kompatibel mit POST, Tango, Orange',
    ispExchange: 'Austauschknoten: LU-CIX (Luxemburg)',
    ispJitter: 'Jitter',
    ispDropRisk: 'Abbruchrisiko',
    ispReady: 'Bereit für Ihren Fernseher?',
    ispFastPath: 'IPTV-Fast-Path aktiv',
    featureDatacenters: 'Tier-IV-Rechenzentren Bettemburg & Frankfurt',
    featureCdn: 'Doppeltes CDN aktiv, Umschaltung in 0 ms',
    featureReplay: 'Replay 7 Tage auf RTL, TF1, Canal+ & ZDF',
    featureSupportLangs: 'WhatsApp-Support auf LB, FR, DE, EN',
    noThrottleTitle: 'Keine Drosselung in den Netzen von POST, Tango und Orange',
    noThrottleBody: 'Native Verschlüsselung der Videopakete: Ihr Anbieter in Luxemburg kann Ihre IPTV-Bandbreite nicht drosseln.',
    uptimeChip: 'Netzverfügbarkeit LU: 99,98 %'
  },
  en: {
    tickerActivation: 'Activated in 3 minutes',
    tickerPayment: 'Payconiq, card & crypto',
    tickerServers: 'Servers in Luxembourg & Frankfurt',
    tickerSupport: 'WhatsApp support 7/7',
    tickerChannels: '80,000 live channels',
    tickerVod: '200,000 films & series',
    guaranteeLong: '14-day money-back guarantee',
    reviewsSuffix: 'from 1,240 verified reviews',
    guaranteeShort: '14-day guarantee',
    activationShort: 'Activated in < 3 min',
    heroBadgeMobile: '🇱🇺 IPTV Luxembourg • 4K UHD',
    whatsappHelp: 'WhatsApp help 24/7 (LU)',
    whatsappDaily: 'WhatsApp 7/7',
    whatsappSupport: 'WhatsApp support',
    sslEncryption: '256-bit SSL encryption',
    noLogs: 'No connection logs kept (GDPR compliant)',
    footerClosing: "Ready for tonight's match in 4K?",
    footerFacts: '80,000 channels • 200,000 films & series • activated in 3 minutes',
    faqHelpTitle: 'Need a hand setting up your box?',
    reviewsBase: 'Based on more than 1,240 verified reviews from Luxembourg residents',
    statChannels: 'Live channels',
    statChannelsNote: 'Luxembourg, France, Belgium, Germany, UK & worldwide',
    statVod: 'Films & series on demand',
    statVodNote: 'Netflix, Prime, Disney+, Canal+ & 7-day replay',
    statAntifreeze: 'Anti-Freeze™ Dual-CDN',
    statAntifreezeNote: 'Direct streams, no degrading re-encode',
    groupLux: 'Luxembourg & Benelux',
    groupSport: 'Live sport',
    groupCinema: 'Cinema & series',
    nowShowing: 'Now showing',
    upNext: 'Up next',
    liveChip: 'Live • 80,000 channels',
    proofLocal: 'RTL Télé Lëtzebuerg & Chamber TV in 4K',
    proofUptime: 'Anti-Freeze™ 99.9% uptime guaranteed',
    proofPayment: 'Pay by Payconiq, card & crypto',
    proofIsp: 'Works with POST, Tango, Orange',
    ispExchange: 'Exchange point: LU-CIX (Luxembourg)',
    ispJitter: 'Jitter',
    ispDropRisk: 'Drop-out risk',
    ispReady: 'Ready for your TV?',
    ispFastPath: 'IPTV Fast-Path active',
    featureDatacenters: 'Tier-IV datacentres in Bettembourg & Frankfurt',
    featureCdn: 'Dual CDN live, 0 ms failover',
    featureReplay: '7-day replay on RTL, TF1, Canal+ & ZDF',
    featureSupportLangs: 'WhatsApp support in LB, FR, DE, EN',
    noThrottleTitle: 'No throttling on the POST, Tango and Orange networks',
    noThrottleBody: 'Video packets are encrypted end to end, so your Luxembourg provider cannot throttle your IPTV bandwidth.',
    uptimeChip: 'LU network uptime: 99.98%'
  }
};
