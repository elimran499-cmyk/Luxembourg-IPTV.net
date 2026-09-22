import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { UI } from '../data/ui';
import { WHATSAPP_URL } from '../data/contact';
import { PageId, SectionId, homeLabel, menuFor, pageContent, pageHref } from '../data/pages';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SectionHeadingSuppressed } from './SectionHeading';
import { ChannelShowcase } from './ChannelShowcase';
import { FilmsAndSeries } from './FilmsAndSeries';
import { Pricing } from './Pricing';
import { TrustBanner } from './TrustBanner';
import { HowItWorks } from './HowItWorks';
import { DeviceCompatibility } from './DeviceCompatibility';
import { ISPChecker } from './ISPChecker';
import { Features } from './Features';
import { FAQ } from './FAQ';
import { Testimonials } from './Testimonials';

interface SectionPageProps {
  currentLang: Language;
  page: SectionId;
}

/**
 * What each menu page shows. Mostly the one section it is named after; a
 * couple of them carry the section that answers the next question — a price
 * list is worth little without the payment methods and the three steps that
 * follow it.
 */
const CONTENTS: Record<SectionId, React.FC<{ currentLang: Language }>[]> = {
  channels: [ChannelShowcase],
  films: [FilmsAndSeries],
  pricing: [Pricing, TrustBanner, HowItWorks],
  devices: [DeviceCompatibility],
  isp: [ISPChecker, Features],
  features: [Features],
  faq: [FAQ, Testimonials]
};

/**
 * The opening band of a section page. The landing page has a film still to
 * put the header against; a section page has this instead — dark enough for
 * the floating header to read on, and carrying the one heading that says what
 * the address is for.
 */
const PageHero: React.FC<{ currentLang: Language; page: PageId }> = ({ currentLang, page }) => {
  const t = translations[currentLang];
  const ui = UI[currentLang];
  const { name, heading, lead } = pageContent(currentLang, page);

  return (
    <section className="relative overflow-hidden bg-ink-950 px-4 pb-14 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-32">
      <span className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-lux-500/20 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-flame-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* The trail back to the landing page, for a reader and for a crawler. */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/50">
          <a href={pageHref(currentLang, 'home')} className="transition-colors hover:text-white">
            {homeLabel(currentLang)}
          </a>
          <ChevronRight className="h-3 w-3" />
          <span className="text-lux-300">{name}</span>
        </nav>

        <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.06] tracking-tight text-balance sm:text-[46px]">
          {heading}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">{lead}</p>

        <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <a
            href={pageHref(currentLang, 'pricing')}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lux-600 to-lux-500 px-6 text-sm font-bold text-white shadow-[0_18px_36px_-18px_rgba(215,20,48,0.95)] transition-transform active:scale-95 sm:w-auto"
          >
            {t.hero.ctaPlans}
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-glass-whatsapp inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-bold text-white transition-transform active:scale-95 sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {ui.whatsappHelp}
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * Every page ends on the rest of the menu. It keeps a visitor moving, and it
 * is what ties the set together: each page links to each other page, in its
 * own language, so none of them is reachable only from the home page.
 */
const MorePages: React.FC<{ currentLang: Language; page: PageId }> = ({ currentLang, page }) => {
  const others = menuFor(currentLang).filter((entry) => entry.id !== page);

  return (
    <nav aria-label={translations[currentLang].footer.quickLinks} className="border-t border-ink-100 bg-ink-50 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink-400">
          {translations[currentLang].footer.quickLinks}
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {others.map((entry) => (
            <a
              key={entry.id}
              href={entry.href}
              className="group flex items-center justify-between gap-2 rounded-2xl bg-white px-4 py-3.5 text-sm font-bold text-ink-700 ring-1 ring-ink-100 transition-colors hover:text-lux-700 hover:ring-lux-200"
            >
              <span className="truncate">{entry.label}</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-lux-600" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

/**
 * A page for one entry of the menu: its own heading and address, the section
 * it is named after, and the way on to the others.
 */
export const SectionPage: React.FC<SectionPageProps> = ({ currentLang, page }) => {
  const [Lead, ...rest] = CONTENTS[page];

  return (
    <>
      <PageHero currentLang={currentLang} page={page} />

      {/* The page has just said what this section is, so the section itself
          opens straight on the goods. The ones under it keep their headings:
          they are the answer to the next question, not to this one. */}
      <SectionHeadingSuppressed.Provider value>
        <Lead currentLang={currentLang} />
      </SectionHeadingSuppressed.Provider>

      {rest.map((Section, index) => (
        <Section key={index} currentLang={currentLang} />
      ))}

      <MorePages currentLang={currentLang} page={page} />
    </>
  );
};
