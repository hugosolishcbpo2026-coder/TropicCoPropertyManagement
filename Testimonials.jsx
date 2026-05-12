import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const QUOTES = [
  {
    body: 'Tropic Co. transformed our beach house into the most coveted villa on the coast. Bookings tripled, but more striking — every guest left writing love letters.',
    name: 'Élise Marchetti',
    role: 'Owner · Villa Solene, Tulum',
  },
  {
    body: 'A team that operates with the calm of a private bank and the warmth of a great host. They returned our coastal estate to its original poetry.',
    name: 'Mateo Albright',
    role: 'Principal · Albright Holdings',
  },
  {
    body: 'Diamond-tier hardly captures it. Tropic Co. is the rare partner who actually knows what luxury feels like, not just what it looks like.',
    name: 'Noor Karim',
    role: 'Founder · Karim & Co. Travel',
  },
  {
    body: 'From revenue strategy to the orchids on the entry console — everything calibrated. Our portfolio has never been in safer, more elegant hands.',
    name: 'Jonas Reinholt',
    role: 'Family Office · Northern Europe',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % QUOTES.length), 6500)
    return () => clearInterval(t)
  }, [])

  const q = QUOTES[idx]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden bg-ink-900 py-32 sm:py-40"
    >
      {/* Atmospheric */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(10,155,94,0.35), transparent 60%)',
          filter: 'blur(80px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute top-[30%] right-[10%] h-[30vw] w-[30vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,54,0.3), transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex items-center justify-center gap-4">
          <span className="hairline-gold w-12" />
          <span className="eyebrow">Chapter 05 — Voices</span>
          <span className="hairline-gold w-12" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mt-8 text-center font-display text-[10vw] leading-[0.95] sm:text-[5rem] text-ivory-50"
        >
          Whispered{' '}
          <span className="font-display italic font-light text-gradient-gold">
            in the wake
          </span>{' '}
          of our work.
        </motion.h2>

        {/* Glass card */}
        <div className="relative mt-20 min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="glass-strong relative mx-auto max-w-3xl rounded-3xl p-10 sm:p-14 text-center shadow-luxury"
            >
              {/* Decorative corners */}
              <span className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-gold-400/50" />
              <span className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-gold-400/50" />
              <span className="pointer-events-none absolute left-6 bottom-6 h-8 w-8 border-l border-b border-gold-400/50" />
              <span className="pointer-events-none absolute right-6 bottom-6 h-8 w-8 border-r border-b border-gold-400/50" />

              <div className="mb-8 inline-flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="diamond-clip h-2.5 w-2.5 bg-gradient-to-br from-gold-200 to-gold-700"
                  />
                ))}
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl leading-[1.3] text-ivory-50">
                <span className="font-display italic text-gradient-gold text-4xl leading-none align-top">
                  “
                </span>
                {q.body}
                <span className="font-display italic text-gradient-gold text-4xl leading-none">
                  ”
                </span>
              </blockquote>

              <figcaption className="mt-10 flex flex-col items-center gap-1">
                <span className="font-display text-lg text-ivory-50">
                  {q.name}
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gold-200/80">
                  {q.role}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="group relative h-3 w-3"
            >
              <span
                className={`absolute inset-0 m-auto h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                  i === idx
                    ? 'bg-gold-400 scale-150 shadow-glow-gold'
                    : 'bg-ivory-50/30 group-hover:bg-ivory-50/60'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
