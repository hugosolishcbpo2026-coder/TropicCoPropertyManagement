import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ABOUT_IMG_1 =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80'
const ABOUT_IMG_2 =
  'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  const parRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parRef,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-32 sm:py-40"
    >
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[50vw] w-[50vw] rounded-full opacity-40 [background:radial-gradient(circle,rgba(10,155,94,0.35),transparent_60%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10" ref={parRef}>
        {/* Eyebrow */}
        <div className="flex items-center gap-4">
          <span className="hairline-gold w-12" />
          <span className="eyebrow">Chapter 01 — The House</span>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-16">
          {/* Heading */}
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[10vw] leading-[0.95] tracking-tight sm:text-[5.2rem] text-ivory-50"
            >
              A modern{' '}
              <span className="font-display italic font-light text-gradient-emerald">
                ode
              </span>{' '}
              to tropical luxury.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-10 max-w-xl text-lg text-ivory-100/75 leading-relaxed"
            >
              Tropic Co. was built on a single conviction — that the world's
              most extraordinary coastal homes deserve stewardship as
              breathtaking as the views they command. We orchestrate every
              detail with the discipline of a private resort and the soul of a
              tropical sanctuary.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 1 }}
              className="mt-6 max-w-xl text-base text-ivory-100/55 leading-relaxed"
            >
              From oceanfront estates to private island residences, our work
              begins where ordinary management ends — in the quiet rituals,
              the curated arrivals, and the diamond-cut precision behind every
              moment of stay.
            </motion.p>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: '12+', l: 'Years curating coastal estates' },
                { k: '24/7', l: 'Concierge & estate response' },
                { k: '$120M', l: 'Portfolio under stewardship' },
              ].map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  className="border-l border-gold-500/30 pl-4"
                >
                  <div className="font-display text-3xl text-gradient-gold">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[0.7rem] uppercase tracking-[0.25em] text-ivory-100/55 leading-snug">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="col-span-12 md:col-span-5 relative min-h-[520px]">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-[420px] w-[80%] overflow-hidden rounded-[2px] shadow-luxury"
            >
              <img
                src={ABOUT_IMG_1}
                alt="Luxury villa overlooking turquoise ocean"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-400/15" />
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 1.1 }}
              className="absolute bottom-0 left-0 h-[260px] w-[62%] overflow-hidden rounded-[2px] shadow-luxury"
            >
              <img
                src={ABOUT_IMG_2}
                alt="Palm fronds against tropical sky"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-400/15" />
            </motion.div>

            {/* Floating signature card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="absolute right-2 bottom-10 z-10 glass-strong rounded-2xl px-5 py-4 shadow-glow-gold"
            >
              <div className="flex items-center gap-3">
                <span className="diamond-clip h-3 w-3 bg-gradient-to-br from-gold-200 to-gold-700" />
                <div>
                  <div className="text-[0.65rem] uppercase tracking-[0.35em] text-gold-200/80">
                    Signature
                  </div>
                  <div className="font-display italic text-ivory-50 text-lg leading-tight">
                    Quiet luxury, loud presence.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
