import { ChannelItem, DeviceGuide, Testimonial } from '../types';

export const CHANNELS_DATA: ChannelItem[] = [
  {
    id: 'rtl-lux',
    name: 'RTL Télé Lëtzebuerg',
    category: 'lux',
    quality: '4K UHD',
    country: 'Luxembourg',
    flag: '🇱🇺',
    epgNow: 'De Magazin & Journal 19:30',
    epgNext: 'Pisa de Wëssensmagazin',
    badge: 'LEADER LU'
  },
  {
    id: 'rtl-zwee',
    name: 'RTL Zwee HD',
    category: 'lux',
    quality: 'FHD 60fps',
    country: 'Luxembourg',
    flag: '🇱🇺',
    epgNow: 'UEFA Champions League Live',
    epgNext: 'Highlights & Analyse',
    badge: 'SPORT DIRECT'
  },
  {
    id: 'chamber-tv',
    name: 'Chamber TV Lëtzebuerg',
    category: 'lux',
    quality: 'FHD 60fps',
    country: 'Luxembourg',
    flag: '🇱🇺',
    epgNow: 'Séance Publique de la Chambre',
    epgNext: 'Actualités Parlementaires'
  },
  {
    id: 'posttv-dok',
    name: 'Dok TV & PostTV Info',
    category: 'lux',
    quality: 'FHD 60fps',
    country: 'Luxembourg',
    flag: '🇱🇺',
    epgNow: 'Kultur & Documentaire Lëtzebuerg',
    epgNext: 'Agenda Grand-Ducal'
  },
  {
    id: 'canal-plus-4k',
    name: 'Canal+ UHD 4K',
    category: 'cinema',
    quality: '4K UHD',
    country: 'France / Benelux',
    flag: '🇫🇷',
    epgNow: 'Dune: Deuxième Partie (4K HDR)',
    epgNext: 'Le Cercle Séries',
    badge: 'CINÉMA 4K'
  },
  {
    id: 'canal-sport',
    name: 'Canal+ Sport 360',
    category: 'sports',
    quality: '4K UHD',
    country: 'France',
    flag: '🇫🇷',
    epgNow: 'Grand Prix F1: Qualifications Live',
    epgNext: 'Premier League Match of the Day',
    badge: 'F1 & PL'
  },
  {
    id: 'dazn-1',
    name: 'DAZN 1 Bar HD',
    category: 'sports',
    quality: 'FHD 60fps',
    country: 'Benelux / DE',
    flag: '🇧🇪',
    epgNow: 'Bundesliga: Bayern München vs Dortmund',
    epgNext: 'Jupiler Pro League Multi-Live',
    badge: 'LIVE 60FPS'
  },
  {
    id: 'sky-sports-f1',
    name: 'Sky Sports Main Event UHD',
    category: 'sports',
    quality: '4K UHD',
    country: 'UK / Int.',
    flag: '🇬🇧',
    epgNow: 'Premier League Super Sunday',
    epgNext: 'Live Tennis ATP Masters 1000'
  },
  {
    id: 'bein-sports-1',
    name: 'BeIN Sports 1 UHD 4K',
    category: 'sports',
    quality: '4K UHD',
    country: 'France',
    flag: '🇫🇷',
    epgNow: 'UEFA Champions League Multiplex',
    epgNext: 'Club BeIN L1 & LaLiga Highlights'
  },
  {
    id: 'proximus-voo',
    name: 'Pickx + Sports / VOO Sport',
    category: 'sports',
    quality: 'FHD 60fps',
    country: 'Belgique / Benelux',
    flag: '🇧🇪',
    epgNow: 'Croky Cup & Cyclisme Classique',
    epgNext: 'Studio Foot Benelux'
  },
  {
    id: 'zdf-hd',
    name: 'ZDF HD & ZDFinfo',
    category: 'general',
    quality: 'FHD 60fps',
    country: 'Allemagne',
    flag: '🇩🇪',
    epgNow: 'heute journal & Dokumentation',
    epgNext: 'Das aktuelle Sportstudio'
  },
  {
    id: 'tf1-4k',
    name: 'TF1 4K Direct',
    category: 'general',
    quality: '4K UHD',
    country: 'France',
    flag: '🇫🇷',
    epgNow: 'Le Journal de 20 Heures',
    epgNext: 'Koh-Lanta / Film du Dimanche'
  }
];

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    id: 'tivimate',
    name: 'TiviMate IPTV',
    category: 'box',
    icon: 'Tv',
    recommendedApp: 'TiviMate Premium',
    setupTime: '2 minutes',
    steps: [
      'Installez TiviMate depuis le Google Play Store sur votre Android TV ou Firestick.',
      'Ouvrez TiviMate et sélectionnez "Ajouter une liste de lecture" > "Xtream Codes".',
      'Copiez simplement l\'URL de serveur, identifiant et mot de passe reçus par email.',
      'Profitez instantanément du Guide TV (EPG) et des flux 4K ultra-fluides.'
    ]
  },
  {
    id: 'smarters',
    name: 'IPTV Smarters Pro',
    category: 'mobile',
    icon: 'Smartphone',
    recommendedApp: 'Smarters Player Lite / Pro',
    setupTime: '3 minutes',
    steps: [
      'Téléchargez IPTV Smarters sur iOS (App Store), Android, Windows ou Mac.',
      'Choisissez "Connexion avec l\'API Xtream Codes".',
      'Renseignez les 4 champs envoyés par Luxembourg IPTV.',
      'Vos chaînes, films et séries se chargent automatiquement.'
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TV (Samsung & LG)',
    category: 'tv',
    icon: 'Monitor',
    recommendedApp: 'IBO Player / Bob Player',
    setupTime: '3 minutes',
    steps: [
      'Recherchez et installez "IBO Player" ou "Bob Player" dans le store Samsung Tizen ou LG webOS.',
      'Notez l\'adresse MAC et la Device Key affichées à l\'écran de votre téléviseur.',
      'Entrez-les sur le portail web d\'IBO ou envoyez-les à notre support WhatsApp.',
      'Nous injectons directement votre playlist Luxembourg IPTV 4K sans aucune manipulation complexe.'
    ]
  },
  {
    id: 'firestick',
    name: 'Amazon Fire TV Stick',
    category: 'box',
    icon: 'Cast',
    recommendedApp: 'Downloader > TiviMate',
    setupTime: '4 minutes',
    steps: [
      'Téléchargez l\'application gratuite "Downloader" sur votre Firestick.',
      'Entrez le code rapide fourni par Luxembourg IPTV pour installer TiviMate.',
      'Connectez-vous avec vos identifiants Xtream Codes.',
      'La télécommande Firestick contrôle directement la navigation et le Replay.'
    ]
  },
  {
    id: 'mag-formuler',
    name: 'MAG / Formuler IPTV',
    category: 'box',
    icon: 'HardDrive',
    recommendedApp: 'MyTVOnline 2/3 / Stalker Portal',
    setupTime: '2 minutes',
    steps: [
      'Rendez-vous dans les paramètres réseau ou portail de votre boîtier MAG / Formuler.',
      'Fournissez votre adresse MAC (00:1A:79...) lors de votre commande.',
      'Renseignez notre URL de portail ultra-rapide Luxembourg.',
      'Redémarrez le boîtier pour charger le portail natif.'
    ]
  },
  {
    id: 'apple-tv',
    name: 'Apple TV & iOS',
    category: 'tv',
    icon: 'Laptop',
    recommendedApp: 'UHF / GSE Smart IPTV / IPTVX',
    setupTime: '3 minutes',
    steps: [
      'Installez UHF ou IPTVX depuis l\'App Store Apple TV 4K.',
      'Ajoutez votre compte via le format Xtream Codes.',
      'Bénéficiez du décodage matériel Dolby Vision et HDR10+ avec la puce Apple.'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Marc W.',
    location: 'Luxembourg-Kirchberg',
    rating: 5,
    comment: 'Client chez POST Fibre 1Gbps, j\'avais essayé plusieurs services IPTV étrangers qui ramaient tous les soirs de Champions League. Avec Luxembourg IPTV, la différence de latence est flagrante : RTL Télé Lëtzebuerg et Canal+ tournent en 4K sans une seule micro-coupure. Activation avec Payconiq en 2 minutes.',
    verifiedLux: true,
    isp: 'POST Luxembourg Fibre',
    date: 'Hier'
  },
  {
    id: 'test-2',
    author: 'Jean-Claude & Nathalie S.',
    location: 'Strassen, Lëtzebuerg',
    rating: 5,
    comment: 'Superbe expérience sur notre Apple TV 4K et TiviMate dans le salon. Le guide TV EPG est toujours à jour en français et allemand, et le Replay 7 jours pour le Journal de RTL est très pratique. Support WhatsApp ultra réactif en luxembourgeois et français !',
    verifiedLux: true,
    isp: 'Tango Fibre',
    date: 'Il y a 3 jours'
  },
  {
    id: 'test-3',
    author: 'Patrick K.',
    location: 'Esch-sur-Alzette',
    rating: 5,
    comment: 'Le paiement avec Payconiq by Bancontact m\'a immédiatement rassuré. Reçu les codes sur WhatsApp 90 secondes plus tard. Les chaînes de sport comme DAZN, Sky Sport et BeIN en 60 images par seconde sont impeccables pour la F1 et la Bundesliga.',
    verifiedLux: true,
    isp: 'Orange Luxembourg',
    date: 'Il y a 5 jours'
  }
];

export const LUX_ISPS = [
  { id: 'post', name: 'POST Luxembourg (Fibre / 5G)', ping: '5 ms', quality: 'Excellente (Tier 1 LU-CIX)' },
  { id: 'tango', name: 'Tango Luxembourg', ping: '7 ms', quality: 'Optimale (Direct Peering)' },
  { id: 'orange', name: 'Orange Luxembourg', ping: '6 ms', quality: 'Excellente (CDN Fast-Path)' },
  { id: 'eltrona', name: 'Eltrona Telecom', ping: '8 ms', quality: 'Très Bonne (Routage Direct)' },
  { id: 'other', name: 'Autre / Connexion 4G/5G', ping: '11 ms', quality: 'Compatible 4K' }
];
