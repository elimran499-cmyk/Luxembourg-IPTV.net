import React, { useEffect, useState } from 'react';

/** How long the whole thing is on screen, fade-out included. */
const HOLD_MS = 1600;
const FADE_MS = 520;

const SEEN_KEY = 'luxembourgiptv-net:intro-seen';

/**
 * A short branded opening, the way a channel idents itself before the picture
 * starts. It plays once per browser session — a reader who came back from the
 * checkout should land straight on the page — and not at all when the reader
 * asked for reduced motion.
 *
 * It never blocks: the page underneath is fully rendered behind it, the
 * overlay stops taking pointer events as soon as it starts fading, and a tap
 * or any key ends it early.
 */
export const IntroSequence: React.FC = () => {
  const [phase, setPhase] = useState<'hidden' | 'playing' | 'leaving'>('hidden');

  useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === '1';
    } catch {
      // Private mode or blocked storage: treat it as a first visit.
    }
    /*
     * A tab opened in the background has already "waited" by the time anyone
     * looks at it, and its timers are throttled meanwhile — so the ident is
     * simply skipped there rather than sitting on screen until the tab is
     * focused.
     */
    const hidden = document.visibilityState !== 'visible';

    if (reduced || seen || hidden) return;

    setPhase('playing');
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Nothing to do — the intro simply plays again next time.
    }

    /*
     * Chrome throttles timers in a background tab, so the timeout alone could
     * leave the ident up on a page opened in the background. The deadline is
     * wall-clock, and focusing the tab re-checks it, which means the intro is
     * already over by the time such a reader looks at the page.
     */
    const deadline = Date.now() + HOLD_MS;

    const finish = () => {
      setPhase('leaving');
      window.setTimeout(() => setPhase('hidden'), FADE_MS);
    };

    const check = () => {
      if (Date.now() >= deadline) finish();
    };

    const timer = window.setTimeout(finish, HOLD_MS);
    window.addEventListener('visibilitychange', check);
    window.addEventListener('focus', check);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('visibilitychange', check);
      window.removeEventListener('focus', check);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'playing') return;
    const skip = () => setPhase('leaving');
    window.addEventListener('keydown', skip, { once: true });
    window.addEventListener('pointerdown', skip, { once: true });
    return () => {
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, [phase]);

  if (phase === 'hidden') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-ink-950 transition-opacity duration-500 ${
        phase === 'leaving' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      {/* Two washes in the flag's colours, drifting behind the mark. */}
      <span className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-lux-500/30 blur-3xl" />
      <span className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-flame-500/25 blur-3xl" />

      <div className="relative flex flex-col items-center px-8 text-center">
        <span className="intro-mark flex h-16 w-16 overflow-hidden rounded-2xl shadow-2xl shadow-lux-500/40 ring-1 ring-white/15">
          <img
            src="/images/brand/luxembourg-iptv-logo.png"
            alt="Luxembourg IPTV"
            width={512}
            height={512}
            className="h-full w-full object-cover"
          />
        </span>

        <span className="intro-word mt-5 font-display text-3xl font-extrabold tracking-tight text-white">
          Luxembourg <span className="text-lux-300">IPTV</span>
        </span>

        <span className="intro-rule mt-3 block h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-flame-500 via-white to-lux-400" />

        <span className="intro-word mt-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
          Lëtzebuerg · 4K UHD
        </span>
      </div>
    </div>
  );
};
