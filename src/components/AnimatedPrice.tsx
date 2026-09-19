import React, { useEffect, useRef, useState } from 'react';

interface AnimatedPriceProps {
  /** Price exactly as printed, e.g. "88,99 €" or "39.99 €". */
  value: string;
  className?: string;
}

const DURATION_MS = 550;

/** Splits "88,99 €" into 88.99, its separator and its suffix. */
const parse = (value: string) => {
  const match = value.match(/([0-9]+)([.,])([0-9]{2})/);
  if (!match) return null;
  const [, whole, separator, cents] = match;
  return {
    amount: Number(`${whole}.${cents}`),
    separator,
    suffix: value.slice(value.indexOf(match[0]) + match[0].length)
  };
};

/**
 * The price counts from the one that was showing to the one that now applies,
 * so switching pack reads as the price moving rather than as a different card
 * appearing. Anything it cannot parse is printed unchanged, and a reader who
 * asked for reduced motion gets the final figure immediately.
 */
export const AnimatedPrice: React.FC<AnimatedPriceProps> = ({ value, className = '' }) => {
  const target = parse(value);
  const [shown, setShown] = useState(target?.amount ?? 0);
  const previous = useRef(target?.amount ?? 0);
  const frame = useRef<number>(0);

  useEffect(() => {
    if (!target) return;

    const from = previous.current;
    const to = target.amount;
    previous.current = to;

    if (from === to) {
      setShown(to);
      return;
    }

    /*
     * A hidden tab gets no animation frames, so a count started there would
     * freeze half-way and only finish when the reader came back to a price
     * that is not the real one. Reduced motion asks for the same thing.
     */
    if (document.hidden || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setShown(to);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      // Ease-out: the figure rushes in and settles on the last cents.
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(from + (to - from) * eased);
      if (progress < 1) frame.current = requestAnimationFrame(step);
    };

    frame.current = requestAnimationFrame(step);

    // Leaving the tab mid-count settles the figure rather than freezing it.
    const settle = () => {
      if (!document.hidden) return;
      cancelAnimationFrame(frame.current);
      setShown(to);
    };
    document.addEventListener('visibilitychange', settle);

    return () => {
      cancelAnimationFrame(frame.current);
      document.removeEventListener('visibilitychange', settle);
    };
  }, [target?.amount]);

  if (!target) return <span className={className}>{value}</span>;

  const [whole, cents] = shown.toFixed(2).split('.');

  return (
    <span className={className}>
      {whole}
      {target.separator}
      {cents}
      {target.suffix}
    </span>
  );
};
