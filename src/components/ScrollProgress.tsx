import React, { useEffect, useState } from 'react';

interface ScrollProgressProps {
  /** Utility classes for the track — rounding, inset, colour of the groove. */
  className?: string;
  /** Utility classes for the filled part, so each site can tint its own. */
  barClassName?: string;
}

/**
 * The hairline along the bottom of the header: how much of the page is behind
 * you. It is measured on a frame, not on every scroll event, and it re-reads
 * the document height as it goes — sections reveal while you read, so the page
 * is taller at the bottom than it was at the top.
 */
export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '', barClassName = '' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const doc = document.documentElement;
      const travel = doc.scrollHeight - doc.clientHeight;
      setProgress(travel > 0 ? Math.min(1, Math.max(0, doc.scrollTop / travel)) : 0);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] overflow-hidden ${className}`}>
      <span
        className={`block h-full w-full origin-left ${barClassName}`}
        style={{ transform: `scaleX(${progress})` }}
      />
    </span>
  );
};
