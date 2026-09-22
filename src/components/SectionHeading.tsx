import React, { createContext, useContext } from 'react';

/**
 * Set where a section is shown on a page of its own. That page already opens
 * on the section's title, so the section drops its copy of it rather than
 * printing the same two lines twice.
 */
export const SectionHeadingSuppressed = createContext(false);

interface SectionHeadingProps {
  /** Small all-caps line above the title. */
  eyebrow: string;
  icon?: React.ElementType;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Light sections put the pill on white; tinted ones invert it. */
  tone?: 'onWhite' | 'onTint';
  className?: string;
}

/**
 * Every section opens the same way: a pill, a short gradient rule, a display
 * title set tight, and one line of lead. Having it in one place is what keeps
 * the rhythm identical down the page — and what makes a change to that rhythm
 * a one-line change rather than nine.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  icon: Icon,
  title,
  lead,
  tone = 'onWhite',
  className = ''
}) => {
  if (useContext(SectionHeadingSuppressed)) return null;

  return (
  <div className={`relative mx-auto max-w-3xl text-center ${className}`}>
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-lux-700 ring-1 ${
        tone === 'onWhite' ? 'bg-lux-50 ring-lux-200/70' : 'bg-white ring-lux-200'
      }`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {eyebrow}
    </span>

    <span className="mx-auto mt-5 block h-[3px] w-12 rounded-full bg-gradient-to-r from-lux-500 via-lux-400 to-flame-400" />

    <h2 className="mt-5 font-display text-[28px] font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-[42px]">
      {title}
    </h2>

    {lead && <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-500 sm:text-base">{lead}</p>}
  </div>
);
};
