import React from 'react';

interface BrandLogoProps {
  /** Compact drops the second line, for tight bars like the phone header. */
  compact?: boolean;
  /** Light setting, for the transparent header sitting over the hero art. */
  invert?: boolean;
  className?: string;
}

/**
 * The wordmark: the logo tile, the name, and — where there is room for it —
 * the top-level domain beside it and the full one underneath.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ compact = false, invert = false, className = '' }) => (
  <span className={`flex items-center gap-2.5 ${className}`}>
    {/* The mark is the logo itself now, cropped into the tile — no icon
        standing in for it and no flag dots crowding its corner. */}
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-lux-500/25 ring-1 ring-white/10">
      <img
        src="/images/brand/luxembourg-iptv-logo.png"
        alt="Luxembourg IPTV — logo"
        width={512}
        height={512}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </span>

    <span className="flex flex-col leading-none">
      <span className="flex items-center">
        <span
          className={`whitespace-nowrap font-display text-[17px] font-extrabold tracking-tight transition-colors sm:text-xl ${
            invert ? 'text-white' : 'text-ink-900'
          }`}
        >
          Luxembourg <span className={invert ? 'text-lux-300' : 'text-lux-600'}>IPTV</span>
        </span>
      </span>
      {!compact && (
        <span className={`mt-1 text-[11px] font-medium ${invert ? 'text-white/60' : 'text-ink-400'}`}>
          luxembourgiptv.net
        </span>
      )}
    </span>
  </span>
);
