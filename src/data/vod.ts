import { HeroFeature, VodTitle } from '../types';

/*
 * Catalogue sample for the Films & Séries rail. Poster paths are TMDB image
 * paths, resolved against their public CDN at render time, so no key is needed
 * and nothing is stored in the repo. Ratings are IMDb scores at the time the
 * list was compiled.
 */

export const TOP_FILMS: VodTitle[] = [
  {
    id: 'vod-punjab-95',
    poster: '/7ia3nAM4q9sBy8g3SVEVgRAcsKd.jpg',
    title: "Punjab '95",
    year: '2026',
    rating: 8.9,
    genre: 'Biography • Drama',
    kind: 'film',
    meta: '2h 49m',
    quality: '4K HDR',
    accent: ['#F59E0B', '#7C2D12'],
    badge: 'TOP RATED 2026'
  },
  {
    id: 'vod-the-odyssey',
    poster: '/5rhTDKUhPYvpdQIijFIs5VoWsON.jpg',
    title: 'The Odyssey',
    year: '2026',
    rating: 8.5,
    genre: 'Adventure • Epic',
    kind: 'film',
    meta: '2h 52m',
    quality: '8K IMAX',
    accent: ['#0EA5E9', '#0C4A6E'],
    badge: 'IMAX ENHANCED'
  },
  {
    id: 'vod-dune-two',
    poster: '/4R13kw60bx8Et4yq404IsezJPMe.jpg',
    title: 'Dune: Part Two',
    year: '2024',
    rating: 8.4,
    genre: 'Sci-Fi • Epic',
    kind: 'film',
    meta: '2h 46m',
    quality: '4K HDR10+',
    accent: ['#D97706', '#78350F'],
    badge: 'IMAX ENHANCED'
  },
  {
    id: 'vod-demon-slayer',
    poster: '/fWVSwgjpT2D78VUh6X8UBd2rorW.jpg',
    title: 'Demon Slayer: Infinity Castle',
    year: '2025',
    rating: 8.4,
    genre: 'Anime • Action',
    kind: 'film',
    meta: '2h 35m',
    quality: '4K 60FPS',
    accent: ['#EF4444', '#581C87']
  },
  {
    id: 'vod-chainsaw-man',
    poster: '/crBfxNvvsQV3rATX12EuX4W9ECo.jpg',
    title: 'Chainsaw Man: Reze Arc',
    year: '2025',
    rating: 8.3,
    genre: 'Anime • Action',
    kind: 'film',
    meta: '1h 40m',
    quality: '4K 60FPS',
    accent: ['#F97316', '#7F1D1D']
  },
  {
    id: 'vod-maharaja',
    poster: '/s0m4TM1XRAftQStgKpw024RvkJo.jpg',
    title: 'Maharaja',
    year: '2024',
    rating: 8.3,
    genre: 'Crime • Thriller',
    kind: 'film',
    meta: '2h 21m',
    quality: '4K UHD',
    accent: ['#DC2626', '#450A0A']
  },
  {
    id: 'vod-project-hail-mary',
    poster: '/yihdXomYb5kTeSivtFndMy5iDmf.jpg',
    title: 'Project Hail Mary',
    year: '2026',
    rating: 8.2,
    genre: 'Sci-Fi • Adventure',
    kind: 'film',
    meta: '2h 36m',
    quality: '8K HDR',
    accent: ['#22D3EE', '#083344'],
    badge: 'NEW RELEASE'
  },
  {
    id: 'vod-dhurandhar',
    poster: '/snBOuXDdhmTvlzMUvP9Em3Pp1u1.jpg',
    title: 'Dhurandhar',
    year: '2025',
    rating: 8.2,
    genre: 'Action • Crime',
    kind: 'film',
    meta: '3h 34m',
    quality: '4K UHD',
    accent: ['#B45309', '#1C1917']
  },
  {
    id: 'vod-wild-robot',
    poster: '/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg',
    title: 'The Wild Robot',
    year: '2024',
    rating: 8.1,
    genre: 'Animation • Family',
    kind: 'film',
    meta: '1h 42m',
    quality: '4K DolbyVision',
    accent: ['#34D399', '#065F46']
  },
  {
    id: 'vod-kantara',
    poster: '/ehQPboTPaIMkMUOoNOh8e7pZ5Rp.jpg',
    title: 'Kantara: Chapter 1',
    year: '2025',
    rating: 8.1,
    genre: 'Action • Fantasy',
    kind: 'film',
    meta: '2h 45m',
    quality: '4K UHD',
    accent: ['#84CC16', '#1A2E05']
  },
  {
    id: 'vod-one-battle',
    poster: '/lbBWwxBht4JFP5PsuJ5onpMqugW.jpg',
    title: 'One Battle After Another',
    year: '2025',
    rating: 7.6,
    genre: 'Crime • Comedy',
    kind: 'film',
    meta: '2h 41m',
    quality: '4K HDR',
    accent: ['#FB7185', '#4C0519']
  },
  {
    id: 'vod-f1-movie',
    poster: '/9PXZIUsSDh4alB80jheWX4fhZmy.jpg',
    title: 'F1: The Movie',
    year: '2025',
    rating: 7.6,
    genre: 'Sport • Drama',
    kind: 'film',
    meta: '2h 35m',
    quality: '4K 60FPS',
    accent: ['#EF4444', '#0F172A'],
    badge: 'MOTORSPORT'
  },
  {
    id: 'vod-sinners',
    poster: '/fWPgbnt2LSqkQ6cdQc0SZN9CpLm.jpg',
    title: 'Sinners',
    year: '2025',
    rating: 7.5,
    genre: 'Horror • Thriller',
    kind: 'film',
    meta: '2h 17m',
    quality: '4K HDR10+',
    accent: ['#991B1B', '#1C1917']
  },
  {
    id: 'vod-deadpool-wolverine',
    poster: '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    title: 'Deadpool & Wolverine',
    year: '2024',
    rating: 7.5,
    genre: 'Action • Comedy',
    kind: 'film',
    meta: '2h 8m',
    quality: '4K HDR',
    accent: ['#F43F5E', '#7F1D1D']
  },
  {
    id: 'vod-inside-out-2',
    poster: '/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    title: 'Inside Out 2',
    year: '2024',
    rating: 7.5,
    genre: 'Animation • Family',
    kind: 'film',
    meta: '1h 36m',
    quality: '4K DolbyVision',
    accent: ['#38BDF8', '#4338CA']
  },
  {
    id: 'vod-anora',
    poster: '/cgXk2tNYhJZLXdBDO5DidAVzQ82.jpg',
    title: 'Anora',
    year: '2024',
    rating: 7.4,
    genre: 'Drama • Comedy',
    kind: 'film',
    meta: '2h 19m',
    quality: '4K UHD',
    accent: ['#E879F9', '#581C87'],
    badge: 'BEST PICTURE'
  },
  {
    id: 'vod-frankenstein',
    poster: '/g4JtvGlQO7DByTI6frUobqvSL3R.jpg',
    title: 'Frankenstein',
    year: '2025',
    rating: 7.4,
    genre: 'Horror • Drama',
    kind: 'film',
    meta: '2h 29m',
    quality: '4K HDR',
    accent: ['#10B981', '#022C22']
  },
  {
    id: 'vod-wicked',
    poster: '/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg',
    title: 'Wicked',
    year: '2024',
    rating: 7.3,
    genre: 'Musical • Fantasy',
    kind: 'film',
    meta: '2h 40m',
    quality: '4K DolbyVision',
    accent: ['#4ADE80', '#4C1D95']
  },
  {
    id: 'vod-avatar-fire-ash',
    poster: '/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg',
    title: 'Avatar: Fire and Ash',
    year: '2025',
    rating: 7.2,
    genre: 'Sci-Fi • Adventure',
    kind: 'film',
    meta: '3h 17m',
    quality: '8K HDR',
    accent: ['#06B6D4', '#164E63']
  },
  {
    id: 'vod-spider-man-brand-new-day',
    poster: '/iPOn6DinuVyLY17YM9mKuPofV08.jpg',
    title: 'Spider-Man: Brand New Day',
    year: '2026',
    rating: 8.1,
    genre: 'Action • Superhero',
    kind: 'film',
    meta: '2h 25m',
    quality: '8K HDR',
    accent: ['#DC2626', '#1D4ED8'],
    badge: 'DAY-ONE 4K'
  }
];

export const TOP_SERIES: VodTitle[] = [
  {
    id: 'vod-steel-ball-run',
    poster: '/ogAWwbh3frWtiTyyXrZaVFtqCgp.jpg',
    title: 'Steel Ball Run: JoJo',
    year: '2026',
    rating: 9.5,
    genre: 'Anime • Adventure',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K 60FPS',
    accent: ['#A855F7', '#312E81'],
    badge: 'HIGHEST RATED'
  },
  {
    id: 'vod-dexter-resurrection',
    poster: '/8eg1Ka32Mwcs9fBLcJG1iR8CbPo.jpg',
    title: 'Dexter: Resurrection',
    year: '2025',
    rating: 9.0,
    genre: 'Crime • Thriller',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR',
    accent: ['#DC2626', '#0F172A']
  },
  {
    id: 'vod-the-pitt',
    poster: '/kvFSpESyBZMjaeOJDx7RS3P1jey.jpg',
    title: 'The Pitt',
    year: '2025',
    rating: 8.9,
    genre: 'Medical • Drama',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K UHD',
    accent: ['#0EA5E9', '#082F49']
  },
  {
    id: 'vod-xmen-97',
    poster: '/2HKBc5UiFw8JrruHq8S1Y7TnlW0.jpg',
    title: "X-Men '97",
    year: '2024',
    rating: 8.7,
    genre: 'Animation • Action',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K HDR',
    accent: ['#FBBF24', '#1E3A8A']
  },
  {
    id: 'vod-knight-seven-kingdoms',
    poster: '/k8yARbD9iYn2nRX2HvsopfKDN2r.jpg',
    title: 'A Knight of the Seven Kingdoms',
    year: '2026',
    rating: 8.6,
    genre: 'Fantasy • Drama',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR10+',
    accent: ['#65A30D', '#1C1917'],
    badge: 'NEW SEASON'
  },
  {
    id: 'vod-shogun',
    poster: '/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg',
    title: 'Shōgun',
    year: '2024',
    rating: 8.6,
    genre: 'Historical • Drama',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K DolbyVision',
    accent: ['#F87171', '#450A0A'],
    badge: 'EMMY WINNER'
  },
  {
    id: 'vod-the-penguin',
    poster: '/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg',
    title: 'The Penguin',
    year: '2024',
    rating: 8.6,
    genre: 'Crime • Drama',
    kind: 'series',
    meta: 'Mini-series',
    quality: '4K HDR',
    accent: ['#7C3AED', '#020617']
  },
  {
    id: 'vod-solo-leveling',
    poster: '/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg',
    title: 'Solo Leveling',
    year: '2024',
    rating: 8.5,
    genre: 'Anime • Action',
    kind: 'series',
    meta: 'Seasons 1-3',
    quality: '4K 60FPS',
    accent: ['#3B82F6', '#1E1B4B']
  },
  {
    id: 'vod-maul-shadow-lord',
    poster: '/fTfLd3s9yBNOzbFHD2aXvwEs93H.jpg',
    title: 'Star Wars: Maul - Shadow Lord',
    year: '2026',
    rating: 8.5,
    genre: 'Animation • Sci-Fi',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR',
    accent: ['#EF4444', '#111827'],
    badge: 'NEW SEASON'
  },
  {
    id: 'vod-fallout',
    poster: '/9etnKJc7hOZh6kPcct5mVjDl4PX.jpg',
    title: 'Fallout',
    year: '2024',
    rating: 8.3,
    genre: 'Sci-Fi • Adventure',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K DolbyVision',
    accent: ['#FACC15', '#1C1917']
  },
  {
    id: 'vod-mobland',
    poster: '/abeH7n5pcuQcwYcTxG6DTZvXLP1.jpg',
    title: 'MobLand',
    year: '2025',
    rating: 8.3,
    genre: 'Crime • Drama',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K UHD',
    accent: ['#94A3B8', '#0F172A']
  },
  {
    id: 'vod-dandadan',
    poster: '/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg',
    title: 'Dandadan',
    year: '2024',
    rating: 8.3,
    genre: 'Anime • Comedy',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K 60FPS',
    accent: ['#F472B6', '#4C1D95']
  },
  {
    id: 'vod-landman',
    poster: '/hYthRgS1nvQkGILn9YmqsF8kSk6.jpg',
    title: 'Landman',
    year: '2024',
    rating: 8.2,
    genre: 'Drama • Western',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K HDR',
    accent: ['#D97706', '#292524']
  },
  {
    id: 'vod-daredevil-born-again',
    poster: '/xDUoAsU8lQHOOoRkFiBuarmACDN.jpg',
    title: 'Daredevil: Born Again',
    year: '2025',
    rating: 8.1,
    genre: 'Superhero • Crime',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K HDR',
    accent: ['#B91C1C', '#0C0A09']
  },
  {
    id: 'vod-adolescence',
    poster: '/20i4nShZZg1g1VFHSB8xpaYM4r7.jpg',
    title: 'Adolescence',
    year: '2025',
    rating: 8.1,
    genre: 'Crime • Drama',
    kind: 'series',
    meta: 'Mini-series',
    quality: '4K UHD',
    accent: ['#60A5FA', '#1E293B'],
    badge: 'EMMY WINNER'
  },
  {
    id: 'vod-day-of-the-jackal',
    poster: '/tYLecM3WSEjlkKhkGiH5G68Dprm.jpg',
    title: 'The Day of the Jackal',
    year: '2024',
    rating: 8.1,
    genre: 'Thriller • Action',
    kind: 'series',
    meta: 'Seasons 1-2',
    quality: '4K HDR',
    accent: ['#0891B2', '#164E63']
  },
  {
    id: 'vod-dept-q',
    poster: '/8WdxigrmISyE84bxViHDX2hTI4T.jpg',
    title: 'Dept. Q',
    year: '2025',
    rating: 8.1,
    genre: 'Crime • Mystery',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K UHD',
    accent: ['#475569', '#020617']
  },
  {
    id: 'vod-pluribus',
    poster: '/7gjWVglueBuvfeMSdY2tXhLZRCW.jpg',
    title: 'Pluribus',
    year: '2025',
    rating: 7.9,
    genre: 'Sci-Fi • Drama',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR10+',
    accent: ['#2DD4BF', '#134E4A']
  },
  {
    id: 'vod-welcome-to-derry',
    poster: '/nyy3BITeIjviv6PFIXtqvc8i6xi.jpg',
    title: 'It: Welcome to Derry',
    year: '2025',
    rating: 7.9,
    genre: 'Horror • Mystery',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR',
    accent: ['#DC2626', '#1E1B4B']
  },
  {
    id: 'vod-spider-noir',
    poster: '/oD8WSVqz84ZRfelkr7JPeJwR9Iv.jpg',
    title: 'Spider-Noir',
    year: '2026',
    rating: 7.7,
    genre: 'Superhero • Noir',
    kind: 'series',
    meta: 'Season 1',
    quality: '4K HDR',
    accent: ['#1F2937', '#B91C1C'],
    badge: 'DAY-ONE 4K'
  }
];

/**
 * Titles that headline the phone hero. Portrait posters, so the art fills a
 * phone screen with only light cropping instead of a landscape still that has
 * to zoom into a fraction of its width.
 */
export const HERO_FEATURES: HeroFeature[] = [
  {
    id: 'hero-dune-two',
    title: 'Dune: Part Two',
    poster: '/4R13kw60bx8Et4yq404IsezJPMe.jpg',
    backdrop: '/eZ239CUp1d6OryZEBPnO2n87gMG.jpg',
    year: '2024',
    meta: '2h 46m',
    rating: 8.4,
    kind: 'film',
    tagline: 'IMAX Enhanced • HDR10+'
  },
  {
    id: 'hero-penguin',
    title: 'The Penguin',
    poster: '/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg',
    backdrop: '/4TdmuuwiIiKw3JOjIuhdgYxRXnN.jpg',
    year: '2024',
    meta: 'Mini-série',
    rating: 8.6,
    kind: 'series',
    tagline: 'Coffret complet en 4K'
  },
  {
    id: 'hero-spider-man',
    title: 'Spider-Man: Brand New Day',
    poster: '/iPOn6DinuVyLY17YM9mKuPofV08.jpg',
    backdrop: '/qeQJx07rK2xm8SD2sJxFKhE7gs0.jpg',
    year: '2026',
    meta: '2h 25m',
    rating: 8.1,
    kind: 'film',
    tagline: 'Sortie jour J en 8K'
  },
  {
    id: 'hero-fallout',
    title: 'Fallout',
    poster: '/9etnKJc7hOZh6kPcct5mVjDl4PX.jpg',
    backdrop: '/coaPCIqQBPUZsOnJcWZxhaORcDT.jpg',
    year: '2024',
    meta: 'Saisons 1-2',
    rating: 8.3,
    kind: 'series',
    tagline: 'Dolby Vision • Atmos'
  },
  {
    id: 'hero-avatar',
    title: 'Avatar: Fire and Ash',
    poster: '/bRBeSHfGHwkEpImlhxPmOcUsaeg.jpg',
    backdrop: '/sdZSjtGUTSN8B3al5o0f2WoQfQQ.jpg',
    year: '2025',
    meta: '3h 17m',
    rating: 7.2,
    kind: 'film',
    tagline: 'Master 8K natif'
  }
];
