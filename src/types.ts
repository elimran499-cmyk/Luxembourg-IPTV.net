export type Language = 'fr' | 'de' | 'en' | 'lb';

export interface PlanFeature {
  text: string;
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  durationMonths: number;
  title: string;
  price: string;
  monthlyEquivalent: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  savings?: string;
}

export interface ChannelItem {
  id: string;
  name: string;
  category: 'lux' | 'sports' | 'cinema' | 'general' | 'kids' | 'documentary';
  quality: '4K UHD' | 'FHD 60fps' | 'HD';
  country: string;
  flag: string;
  epgNow: string;
  epgNext: string;
  badge?: string;
  iconName?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DeviceGuide {
  id: string;
  name: string;
  category: 'box' | 'tv' | 'mobile' | 'pc';
  icon: string;
  recommendedApp: string;
  setupTime: string;
  steps: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  verifiedLux: boolean;
  isp: string;
  date: string;
}

export interface VodTitle {
  id: string;
  /**
   * TMDB poster path (e.g. '/abc123.jpg'), resolved to a CDN URL at render
   * time. Omitted when no poster is available — the card then falls back to
   * its generated gradient art.
   */
  poster?: string;
  title: string;
  year: string;
  /** IMDb user rating at the time the catalogue was compiled. */
  rating: number;
  genre: string;
  kind: 'film' | 'series';
  /** Runtime for films, season count for series. */
  meta: string;
  quality: string;
  /** Two-stop gradient used as fallback art and as the card's colour key. */
  accent: [string, string] | string[];
  badge?: string;
}

export interface HeroFeature {
  id: string;
  title: string;
  /**
   * Portrait key art for the phone hero. A landscape still has to crop away
   * most of its width to fill a phone screen, which turns every frame into an
   * extreme close-up; a 2:3 poster covers it showing all of its height.
   */
  poster: string;
  /** 16:9 still, kept for wider screens where the aspect ratio inverts. */
  backdrop: string;
  year: string;
  meta: string;
  rating: number;
  kind: 'film' | 'series';
  /** One line of why it is worth watching here, not what it is about. */
  tagline: string;
}
