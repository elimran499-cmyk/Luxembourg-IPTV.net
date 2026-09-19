/**
 * Logo sets for the line-up section. Files live in public/images, so the paths
 * are absolute URLs the browser resolves at request time. The lists are cut for
 * Luxembourg: French, German, Belgian and Portuguese-facing brands and leagues,
 * because that is who actually lives in the Grand Duchy.
 */

export interface LogoItem {
  id: string;
  name: string;
  src: string;
  /**
   * The artwork is white on transparent, so it disappears on the page's white
   * card and gets an inked chip behind it instead. Measured from the files,
   * not guessed: only the Champions League star ball is that light.
   */
  onDark?: boolean;
}

export const CHANNEL_LOGOS: LogoItem[] = [
  { id: 'rtl', name: 'RTL', src: '/images/channel_logos/RTL.webp' },
  { id: 'netflix', name: 'Netflix', src: '/images/channel_logos/Netflix.webp' },
  { id: 'disney', name: 'Disney+', src: '/images/channel_logos/Disney+.webp' },
  { id: 'prime', name: 'Amazon Prime Video', src: '/images/channel_logos/Amazon_Prime.webp' },
  { id: 'hbomax', name: 'HBO Max', src: '/images/channel_logos/HBO_Max.webp' },
  { id: 'paramount', name: 'Paramount+', src: '/images/channel_logos/Paramount+.webp' },
  { id: 'skyshowtime', name: 'SkyShowtime', src: '/images/channel_logos/Sky_Showtime.webp' },
  { id: 'bbc', name: 'BBC', src: '/images/channel_logos/BBC.webp' },
  { id: 'espn', name: 'ESPN', src: '/images/channel_logos/ESPN.webp' },
  { id: 'viaplay', name: 'Viaplay', src: '/images/channel_logos/Viaplay.webp' },
  { id: 'vrt', name: 'VRT', src: '/images/channel_logos/VRT.webp' },
  { id: 'vtm', name: 'VTM', src: '/images/channel_logos/VTM.webp' },
  { id: 'spi', name: 'SPI International', src: '/images/channel_logos/SPI_International.webp' }
];

export const SPORTS_LOGOS: LogoItem[] = [
  { id: 'ligue1', name: 'Ligue 1', src: '/images/sports_logos/Ligue_1.webp' },
  { id: 'bundesliga', name: 'Bundesliga', src: '/images/sports_logos/Bundesliga.webp' },
  { id: 'premierleague', name: 'Premier League', src: '/images/sports_logos/Premier_League.webp' },
  { id: 'laliga', name: 'La Liga', src: '/images/sports_logos/La_Liga.webp' },
  { id: 'seriea', name: 'Serie A', src: '/images/sports_logos/Serie_A.webp' },
  { id: 'primeiraliga', name: 'Primeira Liga', src: '/images/sports_logos/Primeira_Liga.webp' },
  { id: 'eredivisie', name: 'Eredivisie', src: '/images/sports_logos/Eredivisie.webp' },
  { id: 'ucl', name: 'UEFA Champions League', src: '/images/sports_logos/UEFA_Champions_League.webp', onDark: true },
  { id: 'uel', name: 'UEFA Europa League', src: '/images/sports_logos/UEFA_Europa_League.webp' },
  { id: 'uecl', name: 'UEFA Conference League', src: '/images/sports_logos/UEFA_Conference_League.webp' },
  { id: 'f1', name: 'Formule 1', src: '/images/sports_logos/Formula_1.webp' },
  { id: 'ufc', name: 'UFC', src: '/images/sports_logos/UFC.webp' },
  { id: 'nfl', name: 'NFL', src: '/images/sports_logos/NFL.svg' },
  { id: 'tourdefrance', name: 'Tour de France', src: '/images/sports_logos/Tour_de_France.webp' },
  { id: 'worldcup', name: 'Coupe du Monde FIFA', src: '/images/sports_logos/FIFA_World_Cup.webp' }
];
