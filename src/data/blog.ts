import { Language } from '../types';

/**
 * The blog, in the four languages the site speaks.
 *
 * Each article has an address of its own under every language —
 * `/fr/blog/iptv-post-tango-orange-coupures/`,
 * `/de/blog/iptv-post-tango-orange-aussetzer/` — and the four are declared to
 * each other with `hreflang`, exactly like the rest of the site. These posts
 * are written for this domain, whose promise is a stream that does not break;
 * the network's other sites carry their own, so no two of them publish the
 * same page twice.
 */

export interface BlogBlock {
  type: 'p' | 'h2' | 'ul';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  /** ISO date, used for `datePublished` and for the listing order. */
  date: string;
  /** Rough reading time in minutes, shown on the card. */
  minutes: number;
  slug: Record<Language, string>;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  body: Record<Language, BlogBlock[]>;
}

/** The blog's own front page, per language. */
export const BLOG_INDEX: Record<
  Language,
  { name: string; heading: string; lead: string; readMore: string }
> = {
  lb: {
    name: 'Blog',
    heading: 'Alles iwwer e Stream deen hält',
    lead: 'Wou Ënnerbriechunge wierklech hierkommen, wat Latenz mat Ärem Netz ze dinn huet, a wéi vill Debit 4K brauch.',
    readMore: 'Artikel liesen'
  },
  fr: {
    name: 'Blog',
    heading: 'Tout sur un flux qui tient',
    lead: "D'où viennent réellement les coupures, ce que la latence doit à votre réseau, et le débit que demande la 4K.",
    readMore: 'Lire l’article'
  },
  de: {
    name: 'Blog',
    heading: 'Alles über einen Stream, der hält',
    lead: 'Woher Aussetzer wirklich kommen, was Latenz mit Ihrem Netz zu tun hat, und wie viel Bandbreite 4K braucht.',
    readMore: 'Artikel lesen'
  },
  en: {
    name: 'Blog',
    heading: 'Everything about a stream that holds',
    lead: 'Where buffering actually comes from, what latency owes to your network, and how much bandwidth 4K needs.',
    readMore: 'Read the article'
  }
};

export const POSTS: BlogPost[] = [
  {
    id: 'buffering',
    date: '2026-09-15',
    minutes: 5,
    slug: {
      lb: 'iptv-post-tango-orange-ennerbriechungen',
      fr: 'iptv-post-tango-orange-coupures',
      de: 'iptv-post-tango-orange-aussetzer',
      en: 'iptv-post-tango-orange-buffering'
    },
    title: {
      lb: 'IPTV op POST, Tango an Orange: wou d’Ënnerbriechungen hierkommen',
      fr: "IPTV sur POST, Tango et Orange : d'où viennent les coupures",
      de: 'IPTV über POST, Tango und Orange: woher die Aussetzer kommen',
      en: 'IPTV on POST, Tango and Orange: where the buffering comes from'
    },
    excerpt: {
      lb: 'Bal ni ass d’Glasfaser de Problem. Hei sinn déi véier Plazen, wou e Stream tatsächlech ofrappt — an d’Rei, an där een se kontrolléiert.',
      fr: "La fibre n'est presque jamais en cause. Voici les quatre endroits où un flux casse réellement, et l'ordre dans lequel on les vérifie.",
      de: 'Die Glasfaser ist fast nie das Problem. Hier sind die vier Stellen, an denen ein Stream wirklich abreißt — und die Reihenfolge, in der man sie prüft.',
      en: 'Fibre is almost never the culprit. Here are the four places a stream actually breaks, and the order in which to check them.'
    },
    body: {
      lb: [
        { type: 'p', text: 'Wann e Stream ofrappt, ass den éischte Verdacht ëmmer de Provider. Zu Lëtzebuerg ass dat bal ëmmer falsch: d’Glasfaser vu POST, Tango an Orange huet genuch Loft. De Problem läit meeschtens tëscht dem Router an dem Fernseh.' },
        { type: 'h2', text: 'Véier Plazen, an dëser Rei' },
        { type: 'ul', items: [
          'D’WLAN: 2,4 GHz ass owes am Quartier iwwerlaascht. 5 GHz oder Kabel léist dat meeschtens direkt.',
          'De Player: eng App déi de Buffer ze kleng hält, rappt bei all klengem Zoppler of.',
          'De Server: ze wäit ewech heescht méi Sprongen a méi Geleeënheeten fir e Verloscht.',
          'De Fernseh selwer: eng al Box packt e 4K-Stream mat 60 Biller net ëmmer.'
        ] },
        { type: 'h2', text: 'De Schnelltest' },
        { type: 'p', text: 'Spillt dee selwechte Kanal op engem Handy mat mobilen Donnéeën of. Leeft en do propper, läit et net um Stream, mee um Heemnetz. Leeft en och do net, ass de Server drun — a wiessele geet a Sekonnen.' },
        { type: 'p', text: 'Halt ëmmer eng zweet Serveradress bereet. Dat ass dee schnellste Wee zréck an de Match, an de Support um WhatsApp gëtt der eng, wann Der frot.' }
      ],
      fr: [
        { type: 'p', text: "Quand un flux casse, le premier suspect est toujours l'opérateur. Au Luxembourg, c'est presque toujours faux : la fibre POST, Tango et Orange a de la marge. Le problème se trouve le plus souvent entre le routeur et le téléviseur." },
        { type: 'h2', text: 'Quatre endroits, dans cet ordre' },
        { type: 'ul', items: [
          "Le Wi-Fi : le 2,4 GHz est saturé le soir dans un immeuble. Le 5 GHz ou un câble règle l'affaire la plupart du temps.",
          'Le lecteur : une application qui garde un buffer trop court décroche au moindre à-coup.',
          "Le serveur : trop loin, c'est plus de sauts et plus d'occasions de perdre un paquet.",
          "Le téléviseur : une box ancienne ne tient pas toujours un flux 4K à 60 images."
        ] },
        { type: 'h2', text: 'Le test rapide' },
        { type: 'p', text: "Lancez la même chaîne sur un téléphone en données mobiles. Si elle passe proprement, le problème n'est pas le flux mais votre réseau domestique. Si elle casse aussi, c'est le serveur — et en changer prend quelques secondes." },
        { type: 'p', text: "Gardez toujours une seconde adresse de serveur sous la main : c'est le chemin le plus court pour revenir au match. Le support WhatsApp vous en donne une sur demande." }
      ],
      de: [
        { type: 'p', text: 'Wenn ein Stream abreißt, ist der erste Verdächtige immer der Anbieter. In Luxemburg ist das fast immer falsch: Die Glasfaser von POST, Tango und Orange hat Luft. Das Problem sitzt meist zwischen Router und Fernseher.' },
        { type: 'h2', text: 'Vier Stellen, in dieser Reihenfolge' },
        { type: 'ul', items: [
          'Das WLAN: 2,4 GHz ist abends im Haus überlastet. 5 GHz oder Kabel löst das meistens sofort.',
          'Der Player: Eine App mit zu kurzem Puffer bricht beim kleinsten Ruckler ab.',
          'Der Server: Zu weit weg heißt mehr Sprünge und mehr Gelegenheiten, ein Paket zu verlieren.',
          'Der Fernseher: Eine ältere Box hält einen 4K-Stream mit 60 Bildern nicht immer durch.'
        ] },
        { type: 'h2', text: 'Der schnelle Test' },
        { type: 'p', text: 'Spielen Sie denselben Sender auf dem Handy über Mobilfunk. Läuft er dort sauber, liegt es nicht am Stream, sondern am Heimnetz. Bricht er auch dort ab, ist der Server dran — und ein Wechsel dauert Sekunden.' },
        { type: 'p', text: 'Halten Sie immer eine zweite Serveradresse bereit. Das ist der kürzeste Weg zurück ins Spiel; der WhatsApp-Support gibt Ihnen auf Wunsch eine.' }
      ],
      en: [
        { type: 'p', text: 'When a stream breaks, the first suspect is always the operator. In Luxembourg that is almost always wrong: POST, Tango and Orange fibre has room to spare. The problem usually sits between the router and the television.' },
        { type: 'h2', text: 'Four places, in this order' },
        { type: 'ul', items: [
          'Wi-Fi: 2.4 GHz is saturated in the evening in a block of flats. 5 GHz or a cable usually settles it.',
          'The player: an app with too short a buffer drops out at the first hiccup.',
          'The server: too far away means more hops and more chances to lose a packet.',
          'The television: an older box does not always hold a 4K stream at 60 frames.'
        ] },
        { type: 'h2', text: 'The quick test' },
        { type: 'p', text: 'Play the same channel on a phone over mobile data. If it runs cleanly there, the stream is not the problem — your home network is. If it breaks there too, it is the server, and switching takes seconds.' },
        { type: 'p', text: 'Always keep a second server address to hand. It is the shortest way back into the match, and WhatsApp support will give you one on request.' }
      ]
    }
  },
  {
    id: 'lu-cix',
    date: '2026-08-29',
    minutes: 4,
    slug: {
      lb: 'latenz-lu-cix-letzebuerg',
      fr: 'latence-lu-cix-luxembourg',
      de: 'latenz-lu-cix-luxemburg',
      en: 'latency-lu-cix-luxembourg'
    },
    title: {
      lb: 'Latenz a LU-CIX: firwat de Wee wichteg ass',
      fr: 'Latence et LU-CIX : pourquoi le trajet compte',
      de: 'Latenz und LU-CIX: warum der Weg zählt',
      en: 'Latency and LU-CIX: why the route matters'
    },
    excerpt: {
      lb: 'Latenz ass net d’selwecht wéi Debit. Dëse Post erkläert, wat e Ping wierklech seet a firwat en Austauschpunkt zu Beetebuerg zielt.',
      fr: "La latence n'est pas le débit. Ce que mesure vraiment un ping, et pourquoi un point d'échange à Bettembourg change la donne.",
      de: 'Latenz ist nicht Bandbreite. Was ein Ping wirklich misst, und warum ein Austauschpunkt in Bettemburg zählt.',
      en: 'Latency is not bandwidth. What a ping really measures, and why an exchange point in Bettembourg counts.'
    },
    body: {
      lb: [
        { type: 'p', text: 'Zwee Uschlëss mat 1 Gbit/s kënne sech ganz anescht ufillen. Den Ënnerscheed heescht Latenz: net wéi vill Daten duerchginn, mee wéi laang een eenzelt Paket ënnerwee ass.' },
        { type: 'h2', text: 'Wat e Ping wierklech seet' },
        { type: 'p', text: 'E Ping vun 8 ms heescht: d’Paket ass higaang a rëmkomm an 8 Millisekonnen. Bei engem Live-Stream entscheet dat, wéi séier de Player no engem Verloscht rëm opsetzt — an domat, ob Der d’Ënnerbriechung iwwerhaapt gesitt.' },
        { type: 'h2', text: 'D’Roll vum LU-CIX' },
        { type: 'p', text: 'De LU-CIX ass den Internet-Austauschpunkt vum Land. Wann de Server dorun hänkt, bleift de Verkéier am Land, amplaz iwwer Frankfurt oder Paräis ze goen. Manner Sprongen, manner Wartezäit, manner Plazen, wou eppes schif goe kann.' },
        { type: 'p', text: 'Dofir zielt bei engem Stream d’Plaz vum Server bal esou vill wéi d’Qualitéit vum Bild.' }
      ],
      fr: [
        { type: 'p', text: "Deux lignes à 1 Gbit/s peuvent donner des sensations très différentes. La différence s'appelle la latence : non pas combien de données passent, mais combien de temps met un paquet pour faire le trajet." },
        { type: 'h2', text: 'Ce que mesure vraiment un ping' },
        { type: 'p', text: "Un ping de 8 ms signifie que le paquet est parti et revenu en huit millisecondes. Sur un direct, cela décide de la vitesse à laquelle le lecteur se remet après une perte — donc de votre capacité à voir, ou non, la coupure." },
        { type: 'h2', text: 'Le rôle du LU-CIX' },
        { type: 'p', text: "Le LU-CIX est le point d'échange internet du pays. Quand le serveur y est raccordé, le trafic reste au Luxembourg au lieu de passer par Francfort ou Paris. Moins de sauts, moins d'attente, moins d'endroits où quelque chose peut mal tourner." },
        { type: 'p', text: "C'est pourquoi, pour un flux en direct, l'emplacement du serveur compte presque autant que la qualité de l'image." }
      ],
      de: [
        { type: 'p', text: 'Zwei Anschlüsse mit 1 Gbit/s können sich völlig verschieden anfühlen. Der Unterschied heißt Latenz: nicht wie viele Daten durchgehen, sondern wie lange ein einzelnes Paket unterwegs ist.' },
        { type: 'h2', text: 'Was ein Ping wirklich misst' },
        { type: 'p', text: 'Ein Ping von 8 ms heißt: Das Paket war in acht Millisekunden hin und zurück. Bei einem Livestream entscheidet das, wie schnell der Player nach einem Verlust wieder aufsetzt — und damit, ob Sie den Aussetzer überhaupt sehen.' },
        { type: 'h2', text: 'Die Rolle des LU-CIX' },
        { type: 'p', text: 'Der LU-CIX ist der Internet-Austauschpunkt des Landes. Hängt der Server dort, bleibt der Verkehr in Luxemburg, statt über Frankfurt oder Paris zu laufen. Weniger Sprünge, weniger Wartezeit, weniger Stellen, an denen etwas schiefgehen kann.' },
        { type: 'p', text: 'Deshalb zählt bei einem Livestream der Standort des Servers fast so viel wie die Bildqualität.' }
      ],
      en: [
        { type: 'p', text: 'Two 1 Gbps lines can feel completely different. The difference is latency: not how much data gets through, but how long a single packet takes to make the trip.' },
        { type: 'h2', text: 'What a ping actually measures' },
        { type: 'p', text: 'A ping of 8 ms means the packet went out and came back in eight milliseconds. On a live stream that decides how quickly the player recovers after a loss — and therefore whether you see the interruption at all.' },
        { type: 'h2', text: 'What LU-CIX does' },
        { type: 'p', text: 'LU-CIX is the internet exchange point of Luxembourg. When a server sits on it, the traffic stays in Luxembourg instead of travelling via Frankfurt or Paris. Fewer hops, less waiting, fewer places for something to go wrong.' },
        { type: 'p', text: 'That is why, for a live stream, where the server sits matters almost as much as how good the picture is.' }
      ]
    }
  },
  {
    id: 'bandwidth',
    date: '2026-08-08',
    minutes: 3,
    slug: {
      lb: 'wei-vill-debit-fir-4k',
      fr: 'quel-debit-pour-la-4k',
      de: 'wie-viel-bandbreite-fuer-4k',
      en: 'how-much-bandwidth-for-4k'
    },
    title: {
      lb: 'Wéi vill Debit brauch een fir 4K?',
      fr: 'Quel débit faut-il vraiment pour la 4K ?',
      de: 'Wie viel Bandbreite braucht 4K wirklich?',
      en: 'How much bandwidth does 4K really need?'
    },
    excerpt: {
      lb: 'Zuelen déi zielen: pro Stream, pro Haus, an de Grond firwat de Speedtest net alles seet.',
      fr: "Les chiffres qui comptent : par flux, par foyer, et pourquoi un test de débit ne dit pas tout.",
      de: 'Die Zahlen, die zählen: pro Stream, pro Haushalt, und warum ein Speedtest nicht alles sagt.',
      en: 'The numbers that matter: per stream, per household, and why a speed test does not tell the whole story.'
    },
    body: {
      lb: [
        { type: 'p', text: 'D’Fro kënnt bei all Bestellung: laang meng Leitung fir 4K? Meeschtens jo — mee d’Zuel déi zielt ass net déi aus dem Speedtest.' },
        { type: 'h2', text: 'Pro Stream' },
        { type: 'ul', items: [
          'HD: 6 bis 10 Mbit/s.',
          'FHD mat 60 Biller: 10 bis 18 Mbit/s.',
          '4K UHD mat HDR: 25 bis 40 Mbit/s.'
        ] },
        { type: 'h2', text: 'Pro Haus' },
        { type: 'p', text: 'Zwee 4K-Streamen zur selwechter Zäit, plus een dee ladt, plus eng Konsole déi en Update zitt: da brauch een net 40, mee éischter 100 Mbit/s stabil. Stabil ass hei dat wichtegt Wuert — e Spëtzewäert am Test seet näischt iwwer den Owend.' },
        { type: 'p', text: 'Wann Dir kontrolléiere wëllt, ob Är Leitung duergeet, hëlleft eise Verbindungstest: en weist, wéi Äre Provider bei eise Serveren ukënnt.' }
      ],
      fr: [
        { type: 'p', text: "La question revient à chaque commande : ma ligne suffit-elle pour la 4K ? La réponse est le plus souvent oui — mais le chiffre qui compte n'est pas celui du test de débit." },
        { type: 'h2', text: 'Par flux' },
        { type: 'ul', items: [
          'HD : 6 à 10 Mbit/s.',
          'FHD à 60 images : 10 à 18 Mbit/s.',
          '4K UHD avec HDR : 25 à 40 Mbit/s.'
        ] },
        { type: 'h2', text: 'Par foyer' },
        { type: 'p', text: "Deux flux 4K en même temps, plus un téléchargement, plus une console qui met à jour : il ne faut alors pas 40 mais plutôt 100 Mbit/s stables. Stables est le mot important — une pointe pendant le test ne dit rien de la soirée." },
        { type: 'p', text: "Pour savoir si votre ligne suit, notre test de connexion montre comment votre opérateur arrive jusqu'à nos serveurs." }
      ],
      de: [
        { type: 'p', text: 'Die Frage kommt bei jeder Bestellung: Reicht meine Leitung für 4K? Meistens ja — aber die Zahl, die zählt, ist nicht die aus dem Speedtest.' },
        { type: 'h2', text: 'Pro Stream' },
        { type: 'ul', items: [
          'HD: 6 bis 10 Mbit/s.',
          'FHD mit 60 Bildern: 10 bis 18 Mbit/s.',
          '4K UHD mit HDR: 25 bis 40 Mbit/s.'
        ] },
        { type: 'h2', text: 'Pro Haushalt' },
        { type: 'p', text: 'Zwei 4K-Streams gleichzeitig, dazu ein Download und eine Konsole im Update: Dann braucht es nicht 40, sondern eher 100 Mbit/s stabil. Stabil ist hier das entscheidende Wort — ein Spitzenwert im Test sagt nichts über den Abend.' },
        { type: 'p', text: 'Ob Ihre Leitung mitkommt, zeigt unser Verbindungstest: Er misst, wie Ihr Anbieter bei unseren Servern ankommt.' }
      ],
      en: [
        { type: 'p', text: 'The question comes up with every order: is my line enough for 4K? Usually yes — but the number that matters is not the one from the speed test.' },
        { type: 'h2', text: 'Per stream' },
        { type: 'ul', items: [
          'HD: 6 to 10 Mbps.',
          'FHD at 60 frames: 10 to 18 Mbps.',
          '4K UHD with HDR: 25 to 40 Mbps.'
        ] },
        { type: 'h2', text: 'Per household' },
        { type: 'p', text: 'Two 4K streams at once, plus a download, plus a console pulling an update: then it is not 40 but closer to 100 Mbps, steadily. Steadily is the word that counts — a peak during the test says nothing about the evening.' },
        { type: 'p', text: 'To see whether your line keeps up, our connection test shows how your operator reaches our servers.' }
      ]
    }
  }
];

/** Newest first, which is the order the blog lists them in. */
export const postsByDate = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const postById = (id: string) => POSTS.find((post) => post.id === id);

export const postBySlug = (lang: Language, slug: string) =>
  POSTS.find((post) => post.slug[lang] === slug);
