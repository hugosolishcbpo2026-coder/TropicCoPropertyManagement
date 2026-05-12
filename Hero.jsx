import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import DiamondParticles from './DiamondParticles.jsx'

const HERO_IMG =
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=80'

const headline = ['Elevated', 'Coastal', 'Living']

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: '0%',
    transition: { delay: 0.2 + i * 0.12, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '-12%'])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18])
  const opacityVeil = useTransform(scrollYProgress, [0, 1], [0.55, 0.95])

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink-950 grain"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: yImg, scale: scaleImg }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={HERO_IMG}
          alt="Tropical luxury infinity pool overlooking the ocean"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Veiling gradients */}
      <motion.div
        style={{ opacity: opacityVeil }}
        className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/55 to-ink-950"
      />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_30%,rgba(10,155,94,0.28),transparent_60%),radial-gradient(40%_40%_at_85%_80%,rgba(255,90,54,0.22),transparent_60%)]" />

      {/* Floating coloured blobs */}
      <motion.div
        aria-hidden
        className="absolute -left-20 top-1/3 h-[42vw] w-[42vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(10,155,94,0.45), transparent 60%)',
          filter: 'blur(50px)',
        }}
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-32 bottom-10 h-[36vw] w-[36vw] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,90,54,0.4), transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Diamond particles */}
      <DiamondParticles count={26} />

      {/* Content */}
      <motion.div
        style={{ y: yText }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-[12vh] sm:px-10"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="hairline-gold w-12" />
          <span className="eyebrow">Diamond-Tier Hospitality · Est. Tropic Co.</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[8.6rem] leading-[0.95] tracking-[-0.02em] text-ivory-50">
          {headline.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="block"
              >
                {i === 1 ? (
                  <em className="not-italic">
                    <span className="font-display italic font-light text-gradient-gold">
                      {word}
                    </span>
                  </em>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub & CTA grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="md:col-span-6 max-w-xl text-base sm:text-lg text-ivory-100/75 leading-relaxed"
          >
            Tropic Co. delivers elite property management experiences infused
            with luxury resort elegance, diamond-tier hospitality, and
            unforgettable tropical escapes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 1 }}
            className="md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end"
          >
            <a
              href="#properties"
              className="btn-shimmer group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-700 px-7 py-4 text-[0.75rem] uppercase tracking-[0.3em] text-ink-950 shadow-glow-gold"
            >
              Explore Properties
              <span className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-[0.75rem] uppercase tracking-[0.3em] text-ivory-50 hover:border-coral-400/60 hover:bg-coral-500/10 transition-all duration-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-coral-400 shadow-glow-coral animate-pulse" />
              Partner With Us
            </a>
          </motion.div>
        </div>

        {/* Bottom rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex items-end justify-between border-t border-white/8 pt-6 text-[0.65rem] uppercase tracking-[0.4em] text-ivory-100/50"
        >
          <span className="hidden sm:inline">Scroll to discover</span>
          <span>30+ Properties</span>
          <span className="hidden md:inline">98% Occupancy</span>
          <span>5-Star Concierge</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="h-10 w-px bg-gradient-to-b from-gold-400/0 via-gold-400 to-gold-400/0" />
      </motion.div>
    </section>
  )
}
