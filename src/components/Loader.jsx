import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 2400

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setDone(true)
          onComplete?.()
        }, 450)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 overflow-hidden"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 1.1, ease: [0.77, 0, 0.175, 1] },
          }}
        >
          {/* Background ambient lighting (matches official dark logo) */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-emerald-900/30 to-ink-950" />
          <div className="absolute inset-0 bg-emerald-ambient" />
          <div className="absolute inset-0 bg-coral-ambient" />
          <div className="blob blob-emerald w-[600px] h-[600px] left-[-100px] top-[-100px] opacity-50" />
          <div className="blob blob-gold w-[400px] h-[400px] right-[-50px] bottom-[-50px] opacity-30" />

          {/* Centered brand reveal */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated emblem — diamond draws first, palm fronds fill */}
            <motion.svg
              width={96}
              height={96}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_0_30px_rgba(219,172,59,0.5)]"
            >
              <defs>
                <linearGradient id="loaderGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8efcd" />
                  <stop offset="45%" stopColor="#dbac3b" />
                  <stop offset="100%" stopColor="#7d5320" />
                </linearGradient>
                <linearGradient id="loaderEmerald" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1eb775" />
                  <stop offset="100%" stopColor="#0a3326" />
                </linearGradient>
              </defs>

              {/* Outer diamond — stroke animation */}
              <motion.path
                d="M100 14 L180 100 L100 186 L20 100 Z"
                stroke="url(#loaderGold)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
              {/* Inner diamond — fade in */}
              <motion.path
                d="M100 38 L162 100 L100 162 L38 100 Z"
                fill="url(#loaderGold)"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '100px 100px' }}
              />
              {/* Palm fronds */}
              <motion.g
                stroke="url(#loaderEmerald)"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.path d="M100 100 C 86 84, 76 72, 62 58"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }} />
                <motion.path d="M100 100 C 114 84, 124 72, 138 58"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }} />
                <motion.path d="M100 100 C 90 80, 86 64, 84 42"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.55 }} />
                <motion.path d="M100 100 C 110 80, 114 64, 116 42"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }} />
                <motion.path d="M100 100 L 100 46"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.65 }} />
              </motion.g>
              {/* Center jewel */}
              <motion.circle
                cx="100" cy="100" r="3.5" fill="#f5f1e8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
              <motion.circle
                cx="100" cy="100" r="1.4" fill="#dbac3b"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              />
            </motion.svg>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="font-display text-3xl md:text-4xl tracking-[0.15em] text-ivory font-light">
                Tropic <span className="italic text-gold-shimmer">Co.</span>
              </div>
              <div className="font-sans text-[10px] tracking-ultra uppercase text-ivory/50">
                Property Management
              </div>
            </motion.div>

            {/* Progress */}
            <div className="flex flex-col items-center gap-4 w-[280px] md:w-[360px]">
              <div className="w-full h-[2px] bg-ivory/10 overflow-hidden">
                <motion.div
                  className="h-full loader-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.1 }}
                />
              </div>
              <div className="flex justify-between w-full font-mono text-[10px] tracking-ultra text-ivory/50 uppercase">
                <span>Curating Paradise</span>
                <span>{progress.toString().padStart(3, '0')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
