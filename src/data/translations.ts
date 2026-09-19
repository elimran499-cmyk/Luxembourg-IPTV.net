import { Language, FAQItem } from '../types';

export interface TranslationContent {
  nav: {
    channels: string;
    films: string;
    features: string;
    pricing: string;
    devices: string;
    ispCheck: string;
    faq: string;
    clientPortal: string;
    serverStatus: string;
  };
  hero: {
    badge: string;
    h1Part1: string;
    h1Gradient: string;
    h1Part2: string;
    subheadline: string;
    ctaPlans: string;
    guaranteeText: string;
    serverLatency: string;
    activeUsersLux: string;
    livePlaying: string;
    previewChannel: string;
  };
  trustBanner: {
    title: string;
    instantActivation: string;
    payconiqNotice: string;
  };
  ispCheck: {
    badge: string;
    title: string;
    subtitle: string;
    selectPrompt: string;
    testButton: string;
    testing: string;
    resultTitle: string;
    resultLatency: string;
    resultStatus: string;
    resultNote: string;
  };
  channelsSection: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    luxembourg: string;
    sports: string;
    cinema: string;
    liveEPG: string;
    nowPlaying: string;
    upNext: string;
    statsTotalChannels: string;
    statsVod: string;
    stats4kStreams: string;
  };
  vod: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    filmsLabel: string;
    seriesLabel: string;
    ofLabel: string;
    filmsMeta: string;
    seriesMeta: string;
    cta: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      title: string;
      desc: string;
    }[];
    footnote: string;
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    billingInfo: string;
    instantDeliveryBadge: string;
    payconiqAccepted: string;
    /** Labels for the pack grid: one pack, three terms. */
    months: string;
    bonusMonth: string;
    perMonth: string;
    screens: string;
    screen: string;
    guarantee: string;
    choosePack: string;
    order: string;
    includedTitle: string;
    features: string[];
  };
  devices: {
    badge: string;
    title: string;
    subtitle: string;
    setupBadge: string;
    viewGuide: string;
    appsIncluded: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    contactSupport: string;
    items: FAQItem[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  footer: {
    tagline: string;
    luxNotice: string;
    rights: string;
    disclaimer: string;
    quickLinks: string;
    legal: string;
    support: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  fr: {
    nav: {
      channels: "Chaînes & VOD",
      films: "Films & Séries",
      features: "Technologie",
      pricing: "Abonnements",
      devices: "Appareils",
      ispCheck: "Test Connexion FAI",
      faq: "FAQ",
      clientPortal: "Accès Client",
      serverStatus: "Serveurs LuxConnect: 99.98% En Ligne"
    },
    hero: {
      badge: "HÉBERGÉ À LUXEMBOURG & FRANCFORT • LATENCE < 10MS",
      h1Part1: "Luxembourg IPTV",
      h1Gradient: "sans coupure",
      h1Part2: ": l'abonnement 4K du Grand-Duché",
      subheadline: "Luxembourg IPTV, c'est 80 000 chaînes en direct et 200 000 films et séries en 4K UHD : RTL Télé Lëtzebuerg, Canal+, DAZN, BeIN Sports et Sky, optimisés pour la fibre POST, Tango et Orange.",
      ctaPlans: "Voir les Offres (€)",
      guaranteeText: "Activation en moins de 3 minutes • Sans renouvellement automatique • Paiement Payconiq disponible",
      serverLatency: "Ping Luxembourg : 6 ms",
      activeUsersLux: "Plus de 4 800 foyers au Luxembourg",
      livePlaying: "En Direct Actuellement",
      previewChannel: "RTL Télé Lëtzebuerg HD"
    },
    trustBanner: {
      title: "Compatible avec vos opérateurs et méthodes de paiement au Luxembourg :",
      instantActivation: "Livraison instantanée par Email & WhatsApp",
      payconiqNotice: "Paiement ultra-sécurisé via Payconiq by Bancontact ou Carte Bancaire"
    },
    ispCheck: {
      badge: "OPTIMISATION OPÉRATEURS LOCAUX",
      title: "Vérifiez la vitesse avec votre Fournisseur Luxembourgeois",
      subtitle: "Nos serveurs sont directement interconnectés aux nœuds internet LU-CIX à Bettembourg et Luxembourg-Ville pour zéro coupure.",
      selectPrompt: "Sélectionnez votre opérateur :",
      testButton: "Tester la Compatibilité",
      testing: "Analyse du routage CDN Luxembourg...",
      resultTitle: "Routage Optimal Détecté !",
      resultLatency: "Latence estimée :",
      resultStatus: "100% Compatible 4K HDR sans VPN",
      resultNote: "Aucun bridage IPTV détecté sur ce réseau au Luxembourg."
    },
    channelsSection: {
      badge: "BOUQUET COMPLET",
      title: "Les chaînes Luxembourg IPTV : locales, françaises, allemandes et portugaises",
      subtitle: "Qualité originale 4K UHD et FHD 60 FPS avec Replay 7 jours et Guide des programmes (EPG) interactif.",
      searchPlaceholder: "Rechercher une chaîne (ex: RTL, Canal, DAZN, Sky...)",
      all: "Toutes les chaînes",
      luxembourg: "Luxembourg & Benelux",
      sports: "Sport en Direct",
      cinema: "Cinéma & Séries",
      liveEPG: "Guide TV EPG",
      nowPlaying: "En cours",
      upNext: "À suivre",
      statsTotalChannels: "+80 000 Chaînes",
      statsVod: "+200 000 Films & Séries",
      stats4kStreams: "4K UHD 60 FPS"
    },
    vod: {
      badge: "CINÉMATHÈQUE 4K",
      title: "200 000 films et séries inclus avec Luxembourg IPTV",
      titleAccent: "en 4K & 8K",
      subtitle: "Nouveautés ajoutées chaque jour : blockbusters, coffrets complets, animés et documentaires, avec sous-titres FR, DE et EN.",
      filmsLabel: "Films les mieux notés",
      seriesLabel: "Séries les mieux notées",
      ofLabel: "sur",
      filmsMeta: "4K • HDR10+ • DOLBY VISION",
      seriesMeta: "SAISONS COMPLÈTES • ÉPISODES LE JOUR MÊME",
      cta: "Voir la bibliothèque complète"
    },
    howItWorks: {
      badge: "ACTIVATION EN 3 ÉTAPES",
      title: "De la commande au premier match : moins de 3 minutes",
      subtitle: "Aucun matériel à installer, aucun technicien à faire venir. Votre abonnement fonctionne sur l'appareil que vous avez déjà.",
      steps: [
        {
          title: "Choisissez votre formule",
          desc: "3, 6 ou 12 mois, sans renouvellement automatique imposé. Toutes les formules donnent accès à la totalité du bouquet."
        },
        {
          title: "Payez avec Payconiq ou carte",
          desc: "Scannez le QR code depuis votre application bancaire (Spuerkeess, BIL, BGL, POST) ou payez par carte, Apple Pay et crypto."
        },
        {
          title: "Recevez vos identifiants",
          desc: "Lien M3U et codes Xtream envoyés par e-mail et WhatsApp. Vous les collez dans TiviMate ou Smarters, et la TV démarre."
        }
      ],
      footnote: "Délai moyen constaté d'activation : 2 min 45 s • Garantie satisfait ou remboursé jusqu'à 14 jours"
    },
    features: {
      badge: "EXCELLENCE TECHNOLOGIQUE",
      title: "Pourquoi Luxembourg IPTV est le choix N°1 au Luxembourg",
      subtitle: "Une infrastructure de pointe conçue spécifiquement pour le Benelux, éliminant tout gel d'image même lors des grands matchs.",
      items: [
        {
          title: "Serveurs LuxConnect & Francfort",
          desc: "Hébergé dans des datacenters Tier IV à Bettembourg et Francfort. Peering direct avec LU-CIX pour une latence inférieure à 10ms."
        },
        {
          title: "Technologie Anti-Freeze™ 4.0",
          desc: "Système de basculement dynamique redondant. Si un flux subit une congestion, votre boîtier bascule instantanément sans coupure."
        },
        {
          title: "Guide TV Intégré (EPG) & Replay 7j",
          desc: "Guide électronique complet en FR, DE et EN. Rattrapez vos émissions et journaux RTL manqués jusqu'à 7 jours en arrière."
        },
        {
          title: "Support Dédié 7j/7 (FR / DE / EN / LB)",
          desc: "Une équipe multilingue disponible par WhatsApp et ticket pour vous assister dans l'installation sur votre Smart TV ou boîtier."
        }
      ]
    },
    pricing: {
      badge: "TARIFS TRANSPARENTS EN EUROS (€)",
      title: "Tarifs Luxembourg IPTV : des formules simples, sans frais cachés",
      subtitle: "Activez votre accès en quelques minutes. Tous les forfaits incluent la totalité des chaînes, la VOD 4K et l'assistance WhatsApp.",
      billingInfo: "Paiement unique sans renouvellement automatique imposé.",
      instantDeliveryBadge: "Livraison Immédiate < 3 min",
      payconiqAccepted: "Payconiq disponible au paiement",
      months: "mois",
      bonusMonth: "+1 mois offert",
      perMonth: "soit",
      screens: "écrans simultanés",
      screen: "écran",
      guarantee: "jours satisfait ou remboursé",
      choosePack: "Choisissez votre pack",
      order: "Commander",
      includedTitle: "Inclus dans chaque pack :",
      features: [
        "Qualité HD, 4K UHD et 8K",
        "RTL Télé Lëtzebuerg, Canal+, Sky & DAZN",
        "Films & séries mis à jour chaque jour",
        "Guide TV (EPG) et replay 7 jours",
        "Anti-Freeze™ sur serveurs Luxembourg & Francfort",
        "Compatible POST, Tango, Orange — sans VPN",
        "Support WhatsApp 7j/7 en FR, DE, EN & LB"
      ]
    },
    devices: {
      badge: "COMPATIBILITÉ UNIVERSELLE",
      title: "Fonctionne sur tous vos écrans et applications",
      subtitle: "Compatible avec vos applications favorites : TiviMate, IPTV Smarters Pro, IBO Player, XCIPTV, ou directement sur votre Smart TV.",
      setupBadge: "Configuration guidée en 3 minutes chrono",
      viewGuide: "Voir le guide d'installation",
      appsIncluded: "Codes Xtream & Liens M3U fournis dès la commande"
    },
    faq: {
      badge: "QUESTIONS FRÉQUENTES",
      title: "Luxembourg IPTV : abonnement, installation et paiement expliqués",
      subtitle: "Des réponses transparentes et précises pour profiter sereinement de vos programmes.",
      contactSupport: "Vous avez une question spécifique ? Notre support WhatsApp luxembourgeois vous répond en 5 minutes.",
      items: [
        {
          id: "faq-isp",
          question: "Est-ce compatible avec mon fournisseur POST, Tango ou Orange Luxembourg ?",
          answer: "Oui, à 100%. Nos flux sont hébergés sur des réseaux reliés directement au point d'échange LU-CIX (Luxembourg Commercial Internet Exchange). Contrairement à d'autres services, nos flux ne subissent aucun bridage ni ralentissement aux heures de pointe sur les réseaux POST Fibre, Tango ou Orange."
        },
        {
          id: "faq-payconiq",
          question: "Comment payer avec Payconiq by Bancontact ?",
          answer: "Payconiq est le moyen de paiement numéro un au Luxembourg. Lors de votre commande, choisissez simplement 'Payconiq' : vous scannerez instantanément le QR code sécurisé depuis votre application bancaire (BGL BNP Paribas, BCEE Spuerkeess, BIL, POST Finance, ING, etc.) et votre accès sera activé sur-le-champ."
        },
        {
          id: "faq-delay",
          question: "Combien de temps prend l'activation après la commande ?",
          answer: "L'activation est entièrement automatisée. Dès validation de votre commande, vous recevez vos identifiants (lien M3U et accès Xtream Codes) par email et sur votre WhatsApp en moins de 3 minutes."
        },
        {
          id: "faq-apps",
          question: "Quelles applications recommandez-vous pour regarder la TV ?",
          answer: "Pour les boîtiers Android TV et Firestick, nous conseillons vivement TiviMate IPTV ou IPTV Smarters Pro pour leur fluidité exceptionnelle. Pour les Smart TV Samsung (Tizen) et LG (webOS), IBO Player ou Bob Player offrent une ergonomie parfaite."
        },
        {
          id: "faq-guarantee",
          question: "Proposez-vous une garantie de remboursement ?",
          answer: "Absolument. Nous offrons une garantie satisfait ou remboursé de 7 jours sur le pack Standard et de 14 jours sur les packs Premium et Famille. Si notre service ne correspond pas à vos attentes ou si vous rencontrez le moindre problème technique non résolu par notre équipe, nous vous remboursons intégralement sans discussion."
        },
        {
          id: "faq-privacy",
          question: "Mes données personnelles sont-elles sécurisées ?",
          answer: "Oui. Nous appliquons rigoureusement les normes luxembourgeoises et européennes de confidentialité (RGPD / CNPD). Aucune donnée de navigation n'est enregistrée et toutes les transactions sont chiffrées en 256-bit SSL."
        }
      ]
    },
    testimonials: {
      badge: "AVIS CLIENTS VÉRIFIÉS",
      title: "Approuvé par des milliers de résidents au Luxembourg",
      subtitle: "Découvrez les retours de nos abonnés à Luxembourg-Ville, Esch-sur-Alzette, Differdange et Strassen."
    },
    footer: {
      tagline: "Le service de diffusion IPTV haute fidélité pour le Grand-Duché de Luxembourg.",
      luxNotice: "Serveurs optimisés Luxembourg & Francfort Tier IV. Conforme aux standards de sécurité et confidentialité RGPD.",
      rights: "Tous droits réservés. luxembourgiptv.net.",
      disclaimer: "Toutes les marques et logos cités appartiennent à leurs propriétaires respectifs. Luxembourg IPTV fournit une solution technique de diffusion sécurisée.",
      quickLinks: "Navigation Rapide",
      legal: "Mentions Légales",
      support: "Support Client"
    },
  },

  de: {
    nav: {
      channels: "Sender & VOD",
      films: "Filme & Serien",
      features: "Technologie",
      pricing: "Abonnements",
      devices: "Geräte",
      ispCheck: "ISP Speed Test",
      faq: "FAQ",
      clientPortal: "Kundenportal",
      serverStatus: "LuxConnect Server: 99.98% Online"
    },
    hero: {
      badge: "GEHOSTET IN LUXEMBURG & FRANKFURT • LATENZ < 10MS",
      h1Part1: "Luxembourg IPTV",
      h1Gradient: "ohne Aussetzer",
      h1Part2: ": das 4K-Abo fürs Großherzogtum",
      subheadline: "Luxembourg IPTV: 80.000 Live-Sender und 200.000 Filme & Serien in 4K UHD — RTL Télé Lëtzebuerg, Sky, DAZN, Canal+ und BeIN Sports, optimiert für POST, Tango und Orange.",
      ctaPlans: "Angebote ansehen (€)",
      guaranteeText: "Freischaltung in unter 3 Minuten • Keine Vertragsbindung • Payconiq & Krypto verfügbar",
      serverLatency: "Ping Luxemburg: 6 ms",
      activeUsersLux: "Über 4.800 Haushalte in Luxemburg",
      livePlaying: "Jetzt Live",
      previewChannel: "RTL Télé Lëtzebuerg HD"
    },
    trustBanner: {
      title: "Kompatibel mit Ihren luxemburgischen Providern und Zahlungsarten:",
      instantActivation: "Sofortige Bereitstellung per E-Mail & WhatsApp",
      payconiqNotice: "Sichere Bezahlung via Payconiq by Bancontact, Kreditkarte oder Krypto"
    },
    ispCheck: {
      badge: "LOKALE PROVIDER-OPTIMIERUNG",
      title: "Prüfen Sie Ihre Verbindung mit luxemburgischen Internetanbietern",
      subtitle: "Unsere Stream-Cluster sind direkt an LU-CIX Knotenpunkte in Bettemburg und Luxemburg-Stadt angebunden – ohne Drosselung.",
      selectPrompt: "Wählen Sie Ihren Anbieter:",
      testButton: "Kompatibilität prüfen",
      testing: "Luxemburg CDN-Routen werden analysiert...",
      resultTitle: "Optimale Route Gefunden!",
      resultLatency: "Geschätzte Latenz:",
      resultStatus: "100% 4K HDR tauglich ohne VPN",
      resultNote: "Keine IPTV-Drosselung in diesem Netzwerk in Luxemburg festgestellt."
    },
    channelsSection: {
      badge: "KOMPLETTES SENDERPAKET",
      title: "Die Sender von Luxembourg IPTV: luxemburgisch, deutsch, französisch",
      subtitle: "Kristallklare 4K UHD und FHD 60 FPS Streams mit 7-Tage-Replay und elektronischer Programmzeitschrift (EPG).",
      searchPlaceholder: "Sender suchen (z.B. RTL, Sky Sport, DAZN, ZDF...)",
      all: "Alle Sender",
      luxembourg: "Luxemburg & Benelux",
      sports: "Live Sport",
      cinema: "Kino & Serien",
      liveEPG: "EPG TV-Guide",
      nowPlaying: "Läuft gerade",
      upNext: "Danach",
      statsTotalChannels: "+80.000 Sender",
      statsVod: "+200.000 Filme & Serien",
      stats4kStreams: "4K UHD 60 FPS"
    },
    vod: {
      badge: "4K MEDIATHEK",
      title: "200.000 Filme und Serien, inbegriffen bei Luxembourg IPTV",
      titleAccent: "in 4K & 8K",
      subtitle: "Täglich neue Titel: Blockbuster, komplette Staffeln, Anime und Dokus, mit Untertiteln auf DE, FR und EN.",
      filmsLabel: "Bestbewertete Filme",
      seriesLabel: "Bestbewertete Serien",
      ofLabel: "von",
      filmsMeta: "4K • HDR10+ • DOLBY VISION",
      seriesMeta: "KOMPLETTE STAFFELN • FOLGEN AM SELBEN TAG",
      cta: "Komplette Bibliothek ansehen"
    },
    howItWorks: {
      badge: "AKTIVIERUNG IN 3 SCHRITTEN",
      title: "Von der Bestellung bis zum Anpfiff: weniger als 3 Minuten",
      subtitle: "Keine Hardware, kein Techniker. Ihr Abo läuft auf dem Gerät, das Sie bereits besitzen.",
      steps: [
        {
          title: "Paket auswählen",
          desc: "3, 6 oder 12 Monate, ohne aufgezwungene Verlängerung. Jedes Paket enthält das komplette Senderangebot."
        },
        {
          title: "Mit Payconiq oder Karte zahlen",
          desc: "QR-Code in Ihrer Banking-App scannen (Spuerkeess, BIL, BGL, POST) oder per Karte, Apple Pay und Krypto bezahlen."
        },
        {
          title: "Zugangsdaten erhalten",
          desc: "M3U-Link und Xtream-Codes per E-Mail und WhatsApp. Einfach in TiviMate oder Smarters einfügen — das Fernsehen läuft."
        }
      ],
      footnote: "Durchschnittliche Aktivierung: 2 Min 45 Sek • Bis zu 14 Tage Geld-zurück-Garantie"
    },
    features: {
      badge: "SPITZENTECHNOLOGIE",
      title: "Warum Luxembourg IPTV die Nr. 1 in Luxemburg ist",
      subtitle: "Moderne Serverinfrastruktur mit Ausfallsicherheit – kein Ruckeln oder Pufferung bei Spitzenspielen.",
      items: [
        {
          title: "LuxConnect & Frankfurt Rechenzentren",
          desc: "Hosting in Tier-IV Rechenzentren in Bettemburg und Frankfurt mit direktem LU-CIX Peering unter 10ms Ping."
        },
        {
          title: "Anti-Freeze™ 4.0 Technologie",
          desc: "Intelligentes CDN-Loadbalancing. Bei Serverengpässen schaltet die Verbindung ohne Unterbrechung auf Ausweichrouten um."
        },
        {
          title: "Integrierter TV-Guide & 7-Tage-Replay",
          desc: "Umfassender EPG auf Deutsch, Französisch und Englisch. Verpasste Sendungen der letzten 7 Tage einfach nachholen."
        },
        {
          title: "Mehrsprachiger Support (DE / FR / EN / LB)",
          desc: "Kundenservice an 7 Tagen pro Woche über WhatsApp und Ticketsystem für einfache Einrichtung auf Smart TV oder Box."
        }
      ]
    },
    pricing: {
      badge: "TRANSPARENTE PREISE IN EURO (€)",
      title: "Preise von Luxembourg IPTV: faire Konditionen ohne versteckte Kosten",
      subtitle: "In wenigen Minuten einsatzbereit. Alle Pakete enthalten vollen Zugriff auf alle Sender, 4K VOD und WhatsApp-Hilfe.",
      billingInfo: "Einmalige Zahlung ohne automatische Verlängerungsfalle.",
      instantDeliveryBadge: "Sofortige Freischaltung < 3 Min",
      payconiqAccepted: "Payconiq Bezahlung verfügbar",
      months: "Monate",
      bonusMonth: "+1 Monat gratis",
      perMonth: "entspricht",
      screens: "gleichzeitige Geräte",
      screen: "Gerät",
      guarantee: "Tage Geld-zurück-Garantie",
      choosePack: "Wählen Sie Ihr Paket",
      order: "Jetzt bestellen",
      includedTitle: "In jedem Paket enthalten:",
      features: [
        "Qualität in HD, 4K UHD und 8K",
        "RTL Télé Lëtzebuerg, Canal+, Sky & DAZN",
        "Filme & Serien, täglich aktualisiert",
        "TV-Guide (EPG) und 7 Tage Replay",
        "Anti-Freeze™ auf Servern in Luxemburg & Frankfurt",
        "Kompatibel mit POST, Tango, Orange — ohne VPN",
        "WhatsApp-Support 7/7 auf DE, FR, EN & LB"
      ]
    },
    devices: {
      badge: "UNIVERSAL KOMPATIBEL",
      title: "Läuft auf all Ihren Fernsehern & Mobilgeräten",
      subtitle: "Nutzen Sie Ihre bevorzugten Apps wie TiviMate, IPTV Smarters Pro, IBO Player oder direkt auf Ihrem Smart TV.",
      setupBadge: "Einfache Einrichtung in unter 3 Minuten",
      viewGuide: "Installationsanleitung ansehen",
      appsIncluded: "Xtream Codes & M3U-Playlists direkt nach Bestellung"
    },
    faq: {
      badge: "HÄUFIG GESTELLTE FRAGEN",
      title: "Luxembourg IPTV: Abo, Einrichtung und Zahlung erklärt",
      subtitle: "Klare und transparente Antworten für Ihr erstklassiges Fernseherlebnis.",
      contactSupport: "Haben Sie eine spezifische Frage? Unser Support antwortet Ihnen via WhatsApp innerhalb von 5 Minuten.",
      items: [
        {
          id: "faq-isp",
          question: "Funktioniert der Dienst mit POST, Tango und Orange Luxemburg?",
          answer: "Ja, zu 100%. Unsere Server verfügen über direktes Peering am LU-CIX Knoten in Luxemburg. Selbst bei großen Sportübertragungen gibt es keinerlei Drosselung auf den Glasfasernetzen von POST, Tango oder Orange."
        },
        {
          id: "faq-payconiq",
          question: "Wie bezahle ich mit Payconiq by Bancontact?",
          answer: "Payconiq ist die beliebteste Zahlungsmethode in Luxemburg. Wählen Sie an der Kasse einfach Payconiq aus und scannen Sie den QR-Code mit Ihrer Bank-App (Spuerkeess, BGL, BIL, POST Finance, ING etc.). Der Zugang wird sofort freigeschaltet."
        },
        {
          id: "faq-delay",
          question: "Wie schnell erhalte ich meine Zugangsdaten?",
          answer: "Die Bereitstellung erfolgt vollautomatisch. Unmittelbar nach der Bestellung erhalten Sie Ihre Zugangsdaten (M3U Link & Xtream Codes) per E-Mail und auf WhatsApp in weniger als 3 Minuten."
        },
        {
          id: "faq-apps",
          question: "Welche Apps sind am besten geeignet?",
          answer: "Für Android TV Boxen und Firestick empfehlen wir TiviMate oder IPTV Smarters Pro. Für Samsung (Tizen) und LG (webOS) Smart TVs ist der IBO Player die beste und stabilste Lösung."
        },
        {
          id: "faq-guarantee",
          question: "Gibt es eine Geld-zurück-Garantie?",
          answer: "Ja, wir bieten 7 Tage Geld-zurück-Garantie beim Standard-Paket und 14 Tage bei den Premium- und Familienpaketen, ohne Wenn und Aber. Sollten Sie nicht vollkommen zufrieden sein, erstatten wir Ihren Betrag unkompliziert zurück."
        },
        {
          id: "faq-privacy",
          question: "Wie steht es um Datenschutz und Sicherheit?",
          answer: "Wir unterliegen strengen europäischen und luxemburgischen Datenschutzrichtlinien (DSGVO / CNPD). Es werden keine Surfdaten gespeichert und alle Verbindungen sind SSL-verschlüsselt."
        }
      ]
    },
    testimonials: {
      badge: "GEPRÜFTE KUNDENMEINUNGEN",
      title: "Geschätzt von Haushalten im gesamten Großherzogtum",
      subtitle: "Erfahrungsberichte aus Luxemburg-Stadt, Esch-sur-Alzette, Strassen und Dudelange."
    },
    footer: {
      tagline: "Der Premium 4K IPTV-Streamingdienst für das Großherzogtum Luxemburg.",
      luxNotice: "Tier-IV Rechenzentren in Bettemburg & Frankfurt. Konform mit europäischen DSGVO-Standards.",
      rights: "Alle Rechte vorbehalten. luxembourgiptv.net.",
      disclaimer: "Erwähnte Marken und Warenzeichen sind Eigentum der jeweiligen Rechteinhaber.",
      quickLinks: "Navigation",
      legal: "Rechtliches",
      support: "Kundendienst"
    },
  },

  en: {
    nav: {
      channels: "Channels & VOD",
      films: "Movies & Series",
      features: "Technology",
      pricing: "Plans",
      devices: "Devices",
      ispCheck: "ISP Speed Test",
      faq: "FAQ",
      clientPortal: "Client Portal",
      serverStatus: "LuxConnect Servers: 99.98% Online"
    },
    hero: {
      badge: "HOSTED IN LUXEMBOURG & FRANKFURT • LATENCY < 10MS",
      h1Part1: "Luxembourg IPTV",
      h1Gradient: "without buffering",
      h1Part2: ": the Grand Duchy's 4K subscription",
      subheadline: "Luxembourg IPTV gives you 80,000 live channels and 200,000 films and series in 4K UHD — RTL Télé Lëtzebuerg, Canal+, Sky Sports, DAZN and BeIN Sports, tuned for POST, Tango and Orange fibre.",
      ctaPlans: "View Plans (€)",
      guaranteeText: "Activation in under 3 minutes • No commitment • Payconiq & Crypto accepted",
      serverLatency: "Luxembourg Ping: 6 ms",
      activeUsersLux: "Over 4,800 Households in Luxembourg",
      livePlaying: "Live Now",
      previewChannel: "RTL Télé Lëtzebuerg HD"
    },
    trustBanner: {
      title: "Compatible with your local Luxembourg internet providers and payment options:",
      instantActivation: "Instant delivery via Email & WhatsApp",
      payconiqNotice: "Secured checkout with Payconiq by Bancontact, Credit Cards & Crypto"
    },
    ispCheck: {
      badge: "LOCAL ISP OPTIMIZATION",
      title: "Verify your connection speed with Luxembourg ISPs",
      subtitle: "Our CDN nodes are directly peered with LU-CIX in Bettembourg and Luxembourg City to ensure zero ISP throttling.",
      selectPrompt: "Select your provider:",
      testButton: "Test Compatibility",
      testing: "Analyzing Luxembourg CDN routing...",
      resultTitle: "Optimal Routing Detected!",
      resultLatency: "Estimated Latency:",
      resultStatus: "100% 4K HDR Capable without VPN",
      resultNote: "No IPTV bandwidth throttling detected on this Luxembourg network."
    },
    channelsSection: {
      badge: "PREMIUM CHANNEL LINEUP",
      title: "Luxembourg IPTV channels: local, French, German and Portuguese",
      subtitle: "Crystal clear 4K UHD and FHD 60 FPS streams with 7-day replay and interactive Electronic Program Guide (EPG).",
      searchPlaceholder: "Search channel (e.g., RTL, Canal+, DAZN, Sky, BBC...)",
      all: "All Channels",
      luxembourg: "Luxembourg & Benelux",
      sports: "Live Sports",
      cinema: "Movies & Series",
      liveEPG: "EPG TV Guide",
      nowPlaying: "Now Playing",
      upNext: "Up Next",
      statsTotalChannels: "+80,000 Channels",
      statsVod: "+200,000 Movies & Shows",
      stats4kStreams: "4K UHD 60 FPS"
    },
    vod: {
      badge: "4K FILM LIBRARY",
      title: "200,000 films and series included with Luxembourg IPTV",
      titleAccent: "in 4K & 8K",
      subtitle: "New titles every day: blockbusters, full box sets, anime and documentaries, with EN, FR and DE subtitles.",
      filmsLabel: "Top rated films",
      seriesLabel: "Top rated series",
      ofLabel: "of",
      filmsMeta: "4K • HDR10+ • DOLBY VISION",
      seriesMeta: "FULL BOX SETS • EPISODES SAME DAY",
      cta: "Browse the full library"
    },
    howItWorks: {
      badge: "ACTIVE IN 3 STEPS",
      title: "From order to kick-off in under 3 minutes",
      subtitle: "No hardware to install, no engineer visit. Your subscription runs on the device you already own.",
      steps: [
        {
          title: "Pick your plan",
          desc: "3, 6 or 12 months, with no forced auto-renewal. Every plan unlocks the entire line-up."
        },
        {
          title: "Pay with Payconiq or card",
          desc: "Scan the QR code in your banking app (Spuerkeess, BIL, BGL, POST) or pay by card, Apple Pay and crypto."
        },
        {
          title: "Get your credentials",
          desc: "M3U link and Xtream codes by e-mail and WhatsApp. Paste them into TiviMate or Smarters and the TV starts."
        }
      ],
      footnote: "Average activation time: 2 min 45 s • Up to 14-day money-back guarantee"
    },
    features: {
      badge: "CUTTING-EDGE INFRASTRUCTURE",
      title: "Why Luxembourg IPTV is #1 for Luxembourg Residents",
      subtitle: "Built specifically for Benelux viewers with redundant dual-CDN infrastructure to eliminate buffering during big events.",
      items: [
        {
          title: "LuxConnect & Frankfurt Datacenters",
          desc: "Hosted in Tier-IV facilities in Bettembourg and Frankfurt. Direct peering with LU-CIX for ultra-low latency below 10ms."
        },
        {
          title: "Anti-Freeze™ 4.0 Engine",
          desc: "Dynamic failover algorithm. If a stream encounters congestion, your player seamlessly switches paths without a single frame drop."
        },
        {
          title: "Full EPG & 7-Day Catch-Up Replay",
          desc: "Comprehensive TV guide in EN, FR, and DE. Easily catch up on missed RTL shows and live sports from the past 7 days."
        },
        {
          title: "Dedicated Multilingual Support",
          desc: "Available 7 days a week via WhatsApp and support tickets in French, German, English, and Luxembourgish."
        }
      ]
    },
    pricing: {
      badge: "TRANSPARENT PRICING IN EUROS (€)",
      title: "Luxembourg IPTV pricing: simple plans, no hidden fees",
      subtitle: "Get set up within 3 minutes. All plans include full channel catalog, 4K VOD, and direct WhatsApp assistance.",
      billingInfo: "One-off payment with no auto-renewal trap.",
      instantDeliveryBadge: "Instant Delivery < 3 min",
      payconiqAccepted: "Payconiq available at checkout",
      months: "months",
      bonusMonth: "+1 month free",
      perMonth: "that is",
      screens: "simultaneous screens",
      screen: "screen",
      guarantee: "day money-back guarantee",
      choosePack: "Choose your pack",
      order: "Order now",
      includedTitle: "Included in every pack:",
      features: [
        "HD, 4K UHD and 8K quality",
        "RTL Télé Lëtzebuerg, Canal+, Sky & DAZN",
        "Films & series updated every day",
        "TV guide (EPG) and 7-day replay",
        "Anti-Freeze™ on Luxembourg & Frankfurt servers",
        "Works on POST, Tango, Orange — no VPN needed",
        "WhatsApp support 7 days a week in EN, FR, DE & LB"
      ]
    },
    devices: {
      badge: "UNIVERSAL COMPATIBILITY",
      title: "Works on every screen and popular player",
      subtitle: "Compatible with TiviMate, IPTV Smarters Pro, IBO Player, XCIPTV, Apple TV, Firestick, and Smart TVs.",
      setupBadge: "Quick 3-minute setup",
      viewGuide: "View setup guide",
      appsIncluded: "Xtream Codes & M3U playlist provided instantly"
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Luxembourg IPTV: subscription, setup and payment explained",
      subtitle: "Clear answers to help you stream seamlessly and securely.",
      contactSupport: "Have a specific question? Our Luxembourg WhatsApp support team replies in under 5 minutes.",
      items: [
        {
          id: "faq-isp",
          question: "Is this compatible with POST, Tango, and Orange Luxembourg?",
          answer: "Yes, 100%. Our servers connect directly to the LU-CIX internet exchange in Luxembourg. Unlike generic providers, our streams do not experience ISP throttling on POST Fiber, Tango, or Orange networks."
        },
        {
          id: "faq-payconiq",
          question: "Can I pay using Payconiq by Bancontact?",
          answer: "Yes! Payconiq is the standard payment method in Luxembourg. Just pick Payconiq at checkout and scan the secure QR code using your Spuerkeess, BGL, BIL, POST Finance, or ING app for immediate activation."
        },
        {
          id: "faq-delay",
          question: "How long does activation take after placing an order?",
          answer: "It is fully automated. Right after ordering, your credentials (M3U URL and Xtream Codes) are delivered to your email and WhatsApp within 3 minutes."
        },
        {
          id: "faq-apps",
          question: "Which apps do you recommend?",
          answer: "For Android TV boxes and Amazon Firestick, we highly recommend TiviMate IPTV or IPTV Smarters Pro. For Samsung (Tizen) and LG (webOS) Smart TVs, IBO Player provides the smoothest navigation."
        },
        {
          id: "faq-guarantee",
          question: "Do you offer a money-back guarantee?",
          answer: "Yes, we offer a 7-day money-back guarantee on the Standard pack and 14 days on the Premium and Family packs. If you are not satisfied or face technical issues our team cannot fix, you will receive a prompt full refund."
        },
        {
          id: "faq-privacy",
          question: "How is my privacy protected?",
          answer: "We adhere strictly to Luxembourg and European GDPR / CNPD privacy regulations. No viewing activity is tracked or logged, and all transactions are secured with 256-bit SSL encryption."
        }
      ]
    },
    testimonials: {
      badge: "VERIFIED REVIEWS",
      title: "Trusted by thousands of residents in Luxembourg",
      subtitle: "Hear from subscribers in Kirchberg, Esch-sur-Alzette, Strassen, and Differdange."
    },
    footer: {
      tagline: "The premier 4K IPTV streaming service designed for the Grand Duchy of Luxembourg.",
      luxNotice: "Tier-IV Luxembourg & Frankfurt datacenters. Compliant with GDPR data protection laws.",
      rights: "All rights reserved. luxembourgiptv.net.",
      disclaimer: "All trademarks and logos remain the property of their respective owners.",
      quickLinks: "Quick Navigation",
      legal: "Legal Info",
      support: "Customer Support"
    },
  },

  lb: {
    nav: {
      channels: "Senderen & VOD",
      films: "Filmer & Serien",
      features: "Technologie",
      pricing: "Abonnementer",
      devices: "Apparater",
      ispCheck: "Internet Test",
      faq: "FAQ",
      clientPortal: "Clienten Portal",
      serverStatus: "LuxConnect Serveren: 99.98% Online"
    },
    hero: {
      badge: "GEHOST ZU LËTZEBUERG & FRANKFURT • LATENZ < 10MS",
      h1Part1: "Luxembourg IPTV",
      h1Gradient: "ouni Ënnerbriechung",
      h1Part2: ": den 4K Abonnement fir d'Land",
      subheadline: "Luxembourg IPTV: 80.000 Live-Senderen an 200.000 Filmer a Serien an 4K UHD — RTL Télé Lëtzebuerg, Chamber TV, Canal+, DAZN a Sky Sports, optimiséiert fir POST, Tango an Orange.",
      ctaPlans: "Offeren ukucken (€)",
      guaranteeText: "Aktivéierung an ënner 3 Minutten • Kee Kontrakt • Payconiq gëtt ënnerstëtzt",
      serverLatency: "Ping Lëtzebuerg: 6 ms",
      activeUsersLux: "Iwwer 4.800 Stéit zu Lëtzebuerg",
      livePlaying: "Elo Live",
      previewChannel: "RTL Télé Lëtzebuerg HD"
    },
    trustBanner: {
      title: "Kompatibel mat Ären Lëtzebuerger Fournisseuren a Bezuelmethoden:",
      instantActivation: "Direkt Liwwerung per E-Mail & WhatsApp",
      payconiqNotice: "Sécher bezuelen mat Payconiq by Bancontact oder Kreditkaart"
    },
    ispCheck: {
      badge: "OPTIMISATIOUN FIR LËTZEBUERGER FOURNISSEUREN",
      title: "Iwwerpréift Är Verbindung mat Ärem Lëtzebuerger Provider",
      subtitle: "Eis Serveren sinn direkt mat LU-CIX zu Beetebuerg a Lëtzebuerg-Stad verbonnen fir maximal Stabilitéit.",
      selectPrompt: "Wielt Äre Fournisseur:",
      testButton: "Kompatibilitéit testen",
      testing: "Lëtzebuerger CDN gëtt analyséiert...",
      resultTitle: "Optimal Verbindung fonnt!",
      resultLatency: "Geschätzte Latenz:",
      resultStatus: "100% 4K HDR ouni VPN méiglech",
      resultNote: "Keng Drosselung an dësem Netzwierk zu Lëtzebuerg festgestallt."
    },
    channelsSection: {
      badge: "KOMPLETTEN BOUQUET",
      title: "D'Senderen vu Luxembourg IPTV: lokal, franséisch an däitsch",
      subtitle: "Kristallkloer 4K UHD an FHD 60 FPS Streams mat 7 Deeg Replay an interaktivem Programm-Guide (EPG).",
      searchPlaceholder: "Sender sichen (z.B. RTL, Canal+, DAZN, Sky...)",
      all: "All Senderen",
      luxembourg: "Lëtzebuerg & Benelux",
      sports: "Live Sport",
      cinema: "Kino & Serien",
      liveEPG: "EPG Programm-Guide",
      nowPlaying: "Am Moment",
      upNext: "Duerno",
      statsTotalChannels: "+80.000 Senderen",
      statsVod: "+200.000 Filmer & Serien",
      stats4kStreams: "4K UHD 60 FPS"
    },
    vod: {
      badge: "4K FILMOTHÉIK",
      title: "200.000 Filmer a Serien abegraff bei Luxembourg IPTV",
      titleAccent: "an 4K & 8K",
      subtitle: "All Dag nei Titelen: Blockbuster, komplett Staffelen, Anime an Dokumentaresch, mat Ënnertitelen op LB, FR an DE.",
      filmsLabel: "Bescht bewäert Filmer",
      seriesLabel: "Bescht bewäert Serien",
      ofLabel: "vun",
      filmsMeta: "4K • HDR10+ • DOLBY VISION",
      seriesMeta: "KOMPLETT STAFFELEN • EPISODEN DEE SELWECHTEN DAG",
      cta: "Ganz Bibliothéik kucken"
    },
    howItWorks: {
      badge: "AKTIVÉIERUNG AN 3 SCHRËTT",
      title: "Vun der Bestellung bis bei den Ufank: manner wéi 3 Minutten",
      subtitle: "Keng Hardware ze installéieren, keen Techniker néideg. Ären Abonnement leeft op deem Apparat deen Dir scho hutt.",
      steps: [
        {
          title: "Wielt Ären Abonnement",
          desc: "3, 6 oder 12 Méint, ouni automatesch Verlängerung. All Formule gëtt Iech Zougang zum ganze Bouquet."
        },
        {
          title: "Bezuelt mat Payconiq oder Kaart",
          desc: "Scannt de QR-Code an Ärer Bank-App (Spuerkeess, BIL, BGL, POST) oder bezuelt mat Kaart, Apple Pay a Krypto."
        },
        {
          title: "Kritt Är Zougangsdaten",
          desc: "M3U-Link an Xtream-Coden per E-Mail a WhatsApp. Dir setzt se an TiviMate oder Smarters an — an de Fernseh leeft."
        }
      ],
      footnote: "Duerchschnëttlech Aktivéierung: 2 Min 45 Sek • Bis zu 14 Deeg Suen-zréck-Garantie"
    },
    features: {
      badge: "HÉICHWÄERTEG TECHNOLOGIE",
      title: "Firwat Luxembourg IPTV d'Nummer 1 zu Lëtzebuerg ass",
      subtitle: "Modern Infrastruktur ouni Pufferung a conftabel Replay fir déi bescht Matcher an Neiegkeeten.",
      items: [
        {
          title: "LuxConnect & Frankfurt Serveren",
          desc: "Hosting an Tier-IV Rechenzentren zu Beetebuerg a Frankfurt mat direktem LU-CIX Peering ënner 10ms."
        },
        {
          title: "Anti-Freeze™ 4.0 Technologie",
          desc: "Automatesch Ëmschaltung op Ersatz-Serveren ouni Bildënnerbriechung beim kucken."
        },
        {
          title: "EPG Guide & 7 Deeg Replay",
          desc: "Komplett Fernsehprogramm op Lëtzebuergesch, Franséisch an Däitsch. Verpassten RTL Emissiounen einfach nokucken."
        },
        {
          title: "Support op 4 Sproochen (LB / FR / DE / EN)",
          desc: "Hëllef 7 Deeg an der Woch iwwer WhatsApp fir Ären Smart TV oder Är TV-Box anzeriichten."
        }
      ]
    },
    pricing: {
      badge: "TRANSPARENT PRÄISER AN EURO (€)",
      title: "Präisser vu Luxembourg IPTV: einfach Offeren ouni verstoppte Käschten",
      subtitle: "Bannent 3 Minutten aktivéiert. All Abonnement enthält all Senderen, 4K VOD a WhatsApp Hëllef.",
      billingInfo: "Eemoleg Bezuelung ouni automatesch Verlängerung.",
      instantDeliveryBadge: "Direkt Aktivéierung < 3 Min",
      payconiqAccepted: "Payconiq gëtt akzeptéiert",
      months: "Méint",
      bonusMonth: "+1 Mount gratis",
      perMonth: "dat sinn",
      screens: "gläichzäiteg Ecranen",
      screen: "Ecran",
      guarantee: "Deeg Suen-zréck-Garantie",
      choosePack: "Wielt Äre Pack",
      order: "Elo bestellen",
      includedTitle: "An all Pack abegraff:",
      features: [
        "Qualitéit an HD, 4K UHD an 8K",
        "RTL Télé Lëtzebuerg, Canal+, Sky & DAZN",
        "Filmer & Serien, all Dag aktualiséiert",
        "TV-Guide (EPG) a Replay 7 Deeg",
        "Anti-Freeze™ op Serveren zu Lëtzebuerg & Frankfurt",
        "Kompatibel mat POST, Tango, Orange — ouni VPN",
        "WhatsApp-Support 7/7 op LB, FR, DE & EN"
      ]
    },
    devices: {
      badge: "FIR ALL APPARAT",
      title: "Funktionéiert op all Ären Ecranen",
      subtitle: "Kompatibel mat TiviMate, IPTV Smarters Pro, IBO Player, Apple TV, Firestick a Smart TV.",
      setupBadge: "Ageriicht a manner wéi 3 Minutten",
      viewGuide: "Installatiouns-Guide uweisen",
      appsIncluded: "Xtream Coden & M3U Playlist direkt no der Bestellung"
    },
    faq: {
      badge: "DACK GESTALLTE FROEN",
      title: "Luxembourg IPTV: Abonnement, Installatioun a Bezuelung erkläert",
      subtitle: "Kloer Äntwerten fir ouni Suergen ze kucken.",
      contactSupport: "Hutt Dir eng spezifesch Fro? Eist Team äntwert Iech op WhatsApp bannent 5 Minutten.",
      items: [
        {
          id: "faq-isp",
          question: "Funktionéiert et mat POST, Tango an Orange Lëtzebuerg?",
          answer: "Jo, zu 100%. Eis Serveren sinn direkt un LU-CIX zu Beetebuerg ugebonnen. Et gëtt keng Drosselung op de Glasfaser-Netzer vu POST, Tango oder Orange."
        },
        {
          id: "faq-payconiq",
          question: "Wéi bezuelen ech mat Payconiq by Bancontact?",
          answer: "Wielt beim Bezuelen einfach Payconiq aus a scannt de séchere QR-Code mat Ärer Bank App (Spuerkeess, BGL, BIL, POST Finance, ING asw.). Den Zougang gëtt direkt fräigeschalt."
        },
        {
          id: "faq-delay",
          question: "Wéi laang dauert d'Aktivéierung no der Bestellung?",
          answer: "D'Aktivéierung geschitt vollautomatesch. Bannent 3 Minutten kritt Dir Är Zougangsdaten (M3U a Xtream Coden) per E-Mail an op WhatsApp geschéckt."
        },
        {
          id: "faq-apps",
          question: "Wéi eng Applikatiounen empfeelt Dir?",
          answer: "Fir Android TV a Firestick empfeele mir TiviMate oder IPTV Smarters Pro. Fir Samsung an LG Smart TV bitt IBO Player déi bescht Leeschtung."
        },
        {
          id: "faq-guarantee",
          question: "Gëtt et eng Suen-zeréck Garantie?",
          answer: "Jo, mir bidden 7 Deeg Suen-zeréck Garantie beim Standard-Pack an 14 Deeg bei de Premium- a Famillepacken. Wann Dir net zefridde sidd, kritt Dir Äre ganze Betrag ouni Diskussioun zeréckbezuelt."
        },
        {
          id: "faq-privacy",
          question: "Wéi sécher sinn meng perséinlech Donnéeën?",
          answer: "Mir respektéieren déi europäesch an lëtzebuergesch Dateschutzgesetzer (RGPD / CNPD). Keng Daten gi weiderginn an all Transaktioun ass SSL-verschlësselt."
        }
      ]
    },
    testimonials: {
      badge: "VERIFIZÉIERT MEENUNGEN",
      title: "Vertraut vu Dausende Stéit am Grand-Duché",
      subtitle: "Liest wat eis Clienten zu Lëtzebuerg-Stad, Esch, Déifferdeng a Stroossen soen."
    },
    footer: {
      tagline: "Den héichwäertegen 4K IPTV Service fir d'Groussherzogtum Lëtzebuerg.",
      luxNotice: "Tier-IV Serveren zu Beetebuerg a Frankfurt. Konform mat RGPD Standards.",
      rights: "All Rechter reservéiert. luxembourgiptv.net.",
      disclaimer: "All ernimmte Marken gehéieren hire jeeweilege Proprietairen.",
      quickLinks: "Navigatioun",
      legal: "Rechtleches",
      support: "Clientendéngscht"
    },
  }
};
