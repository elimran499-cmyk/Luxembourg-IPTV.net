import React, { useEffect } from 'react';
import { Language } from './types';
import { UI } from './data/ui';
import { routeFromPath } from './data/pages';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { ISPChecker } from './components/ISPChecker';
import { ChannelShowcase } from './components/ChannelShowcase';
import { FilmsAndSeries } from './components/FilmsAndSeries';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { DeviceCompatibility } from './components/DeviceCompatibility';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileTabBar } from './components/MobileTabBar';
import { IntroSequence } from './components/IntroSequence';
import { SectionPage } from './components/SectionPage';
import { BlogPage } from './components/BlogPage';
import { WHATSAPP_URL } from './data/contact';
import { WhatsAppIcon } from './components/WhatsAppIcon';


/**
 * The landing page: every section in the order a visitor meets them. Each of
 * those sections also has a page of its own — see src/data/pages.ts — so this
 * is the long read, not the only way in.
 */
const HomePage: React.FC<{ currentLang: Language }> = ({ currentLang }) => (
  <>
    {/* 1. Hero — headline, live screen and the numbers behind the claim */}
    <Hero currentLang={currentLang} />

    {/* 2. The line-up: what you can watch live */}
    <ChannelShowcase currentLang={currentLang} />

    {/* 3. Films & séries — the 4K on-demand catalogue */}
    <FilmsAndSeries currentLang={currentLang} />

    {/* 4. The packs, straight after what they buy */}
    <Pricing currentLang={currentLang} />

    {/* 5. Payment methods and guarantees, backing the prices above */}
    <TrustBanner currentLang={currentLang} />

    {/* 6. Order → payment → credentials, in three steps */}
    <HowItWorks currentLang={currentLang} />

    {/* 7. Luxembourg ISP routing diagnostic */}
    <ISPChecker currentLang={currentLang} />

    {/* 8. Infrastructure and low-latency technology */}
    <Features currentLang={currentLang} />

    {/* 9. Devices, apps and setup guides */}
    <DeviceCompatibility currentLang={currentLang} />

    {/* 10. Verified Luxembourg reviews */}
    <Testimonials currentLang={currentLang} />

    {/* 11. FAQ */}
    <FAQ currentLang={currentLang} />
  </>
);

export default function App() {
  /*
   * The address says both things: which language to speak — `/lb/`, `/fr/`,
   * `/de/`, `/en/`, the bare domain falling back to the site's own — and
   * which page to show, the landing page or one entry of the menu. Both are
   * navigations, which is why nothing here changes them afterwards.
   */
  const { lang: currentLang, page, postId } = routeFromPath(window.location.pathname);
  const ui = UI[currentLang];
  /*
   * Sections settle in as they come into view. The hidden state lives behind
   * a class this effect sets, so a reader without JS — or with the observer
   * unavailable — still gets the whole page, fully visible.
   */
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-stagger]'));
    if (!('IntersectionObserver' in window) || targets.length === 0) return;

    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink-700">
      {/* Branded opening, once per session, never blocking the page. */}
      <IntroSequence />

      <Header currentLang={currentLang} page={page} />

      {/* The phone tab bar floats over the page bottom, so leave room for it. */}
      <main className="flex-1 pb-28 sm:pb-0">
        {page === 'home' ? (
          <HomePage currentLang={currentLang} />
        ) : page === 'blog' ? (
          <BlogPage currentLang={currentLang} postId={postId} />
        ) : (
          <SectionPage currentLang={currentLang} page={page} />
        )}
      </main>

      <Footer currentLang={currentLang} page={page} />

      {/* Desktop keeps a floating WhatsApp button; the phone has it in the bar. */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="lux-glass-whatsapp group fixed bottom-6 right-6 z-30 hidden items-center gap-2.5 rounded-full px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-105 sm:flex"
        aria-label="{ui.whatsappSupport} Luxembourg"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden lg:inline">{ui.whatsappHelp}</span>
      </a>

      <MobileTabBar currentLang={currentLang} page={page} />
    </div>
  );
}
