import { motion } from 'framer-motion'

/**
 * Logo — renders the official Tropic Co. emblem (diamond + palm fronds)
 * inline as SVG so the gold/emerald gradients render perfectly at any size.
 * Wordmark: "Tropic Co." / "Property Management"
 */
export default function Logo({ size = 40, withText = true, className = '' }) {
  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: 8, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="drop-shadow-[0_0_18px_rgba(219,172,59,0.45)]"
      >
        <defs>
          <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8efcd" />
            <stop offset="45%" stopColor="#dbac3b" />
            <stop offset="100%" stopColor="#7d5320" />
          </linearGradient>
          <linearGradient id="logoEmerald" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1eb775" />
            <stop offset="100%" stopColor="#0a3326" />
          </linearGradient>
          <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer diamond frame */}
        <path
          d="M100 14 L180 100 L100 186 L20 100 Z"
          stroke="url(#logoGold)"
          strokeWidth="1.2"
          opacity="0.5"
        />
        {/* Inner filled diamond */}
        <path
          d="M100 38 L162 100 L100 162 L38 100 Z"
          fill="url(#logoGold)"
          filter="url(#logoGlow)"
        />
        {/* Facet lines */}
        <path d="M100 38 L100 162" stroke="#050d10" strokeWidth="0.8" opacity="0.35" />
        <path d="M38 100 L162 100" stroke="#050d10" strokeWidth="0.8" opacity="0.35" />
        <path d="M68 68 L132 132" stroke="#050d10" strokeWidth="0.55" opacity="0.22" />
        <path d="M132 68 L68 132" stroke="#050d10" strokeWidth="0.55" opacity="0.22" />
        {/* Palm fronds */}
        <g
          stroke="url(#logoEmerald)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        >
          <path d="M100 100 C 86 84, 76 72, 62 58" />
          <path d="M100 100 C 114 84, 124 72, 138 58" />
          <path d="M100 100 C 90 80, 86 64, 84 42" />
          <path d="M100 100 C 110 80, 114 64, 116 42" />
          <path d="M100 100 L 100 46" />
        </g>
        {/* Center jewel */}
        <circle cx="100" cy="100" r="3.5" fill="#f5f1e8" />
        <circle cx="100" cy="100" r="1.4" fill="#dbac3b" />
      </motion.svg>

      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl tracking-[0.12em] font-light text-ivory">
            Tropic <span className="italic text-gold-shimmer font-normal">Co.</span>
          </span>
          <span className="font-sans text-[9px] md:text-[10px] tracking-ultra text-ivory/55 uppercase mt-1.5 font-light">
            Property Management
          </span>
        </div>
      )}
    </motion.div>
  )
}
