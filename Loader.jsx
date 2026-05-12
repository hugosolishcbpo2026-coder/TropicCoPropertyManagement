import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 2200

    const tick = (t) => {
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / duration) * 100)
      setProgress(pct)
      if (pct < 100) raf = requestAnimationFrame(tick)
      else {
        setTimeout(() => {
          setDone(true)
          setTimeout(() => onComplete?.(), 900)
        }, 350)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink-950 grain overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Radial mood lights */}
          <motion.div
            className="absolute inset-0 bg-emerald-radial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="absolute right-[15%] top-[20%] h-[40vw] w-[40vw] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,90,54,0.18), transparent 60%)',
              filter: 'blur(40px)',
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />

          <div className="relative flex flex-col items-center gap-10">
            {/* Diamond emblem */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              initial={{ rotate: -45, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <defs>
                <linearGradient id="ld" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8efcd" />
                  <stop offset="50%" stopColor="#dbac3b" />
                  <stop offset="100%" stopColor="#7d5320" />
                </linearGradient>
              </defs>
              <motion.path
                d="M60 10 L100 60 L60 110 L20 60 Z"
                stroke="url(#ld)"
                strokeWidth="1.2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
              <motion.path
                d="M60 28 L86 60 L60 92 L34 60 Z"
                fill="url(#ld)"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                style={{ transformOrigin: '60px 60px' }}
              />
              <motion.path
                d="M60 28 L60 92 M34 60 L86 60"
                stroke="#050d10"
                strokeWidth="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              />
            </motion.svg>

            {/* Wordmark */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              <div className="font-display text-[2.2rem] tracking-[0.35em] text-ivory-50">
                TROPIC
              </div>
              <div className="font-display italic tracking-[0.7em] text-gradient-gold text-sm mt-1">
                CO.
              </div>
            </motion.div>

            {/* Progress bar */}
            <div className="w-[240px] mt-4">
              <div className="relative h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-200 via-gold-400 to-gold-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[0.65rem] tracking-[0.4em] text-ivory-300/60 font-sans uppercase">
                <span>Loading</span>
                <span>{Math.round(progress).toString().padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Exit shutters */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-ink-950"
            initial={{ y: 0 }}
            animate={done ? { y: '-100%' } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-ink-950"
            initial={{ y: 0 }}
            animate={done ? { y: '100%' } : { y: 0 }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
