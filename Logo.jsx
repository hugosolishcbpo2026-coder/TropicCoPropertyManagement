import React from 'react'

/**
 * Tropic Co. — Brand mark
 * Diamond facets fused with palm fronds, rendered in gold-leaf gradients.
 */
export default function Logo({ className = '', showWordmark = true, size = 36 }) {
  const id = React.useId().replace(/:/g, '')
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tropic Co. emblem"
      >
        <defs>
          <linearGradient id={`gold-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8efcd" />
            <stop offset="50%" stopColor="#dbac3b" />
            <stop offset="100%" stopColor="#7d5320" />
          </linearGradient>
          <linearGradient id={`em-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1eb775" />
            <stop offset="100%" stopColor="#0a3326" />
          </linearGradient>
          <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer diamond */}
        <path
          d="M32 4 L58 32 L32 60 L6 32 Z"
          stroke={`url(#gold-${id})`}
          strokeWidth="1"
          opacity="0.55"
        />

        {/* Inner diamond facets */}
        <path
          d="M32 12 L50 32 L32 52 L14 32 Z"
          fill={`url(#gold-${id})`}
          filter={`url(#glow-${id})`}
        />
        <path
          d="M32 12 L32 52 M14 32 L50 32 M22 22 L42 42 M42 22 L22 42"
          stroke="#050d10"
          strokeWidth="0.6"
          opacity="0.35"
        />

        {/* Palm fronds rising from center */}
        <g stroke={`url(#em-${id})`} strokeWidth="1.4" strokeLinecap="round" fill="none">
          <path d="M32 32 C 26 26, 22 22, 18 18" />
          <path d="M32 32 C 38 26, 42 22, 46 18" />
          <path d="M32 32 C 28 24, 26 18, 26 12" />
          <path d="M32 32 C 36 24, 38 18, 38 12" />
          <path d="M32 32 L 32 14" />
        </g>

        {/* Center jewel */}
        <circle cx="32" cy="32" r="1.6" fill="#f5f1e8" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] tracking-[0.18em] text-ivory-50">
            TROPIC
          </span>
          <span className="font-display italic text-[0.7rem] tracking-[0.45em] text-gradient-gold -mt-0.5">
            CO.
          </span>
        </div>
      )}
    </div>
  )
}
