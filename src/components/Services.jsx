import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SERVICES = [
  {
    n: '01',
    title: 'Luxury Property Management',
    desc: 'White-glove stewardship of villas, estates and beachfront residences with proactive care and obsessive detail.',
    glow: 'emerald',
  },
  {
    n: '02',
    title: 'Diamond Guest Experience',
    desc: 'Curated arrivals, private chefs, sunrise yachts. A concierge that anticipates desire before words are spoken.',
    glow: 'gold',
  },
  {
    n: '03',
    title: 'Revenue Optimization',
    desc: 'Dynamic pricing intelligence, channel orchestration and yield strategies tuned to the seasons of paradise.',
    glow: 'coral',
  },
  {
    n: '04',
    title: 'Premium Cleaning',
    desc: 'Resort-grade housekeeping crafted around hospital-tier protocols, aromatic linens and quiet rituals.',
    glow: 'emerald',
  },
  {
    n: '05',
    title: 'Maintenance & Security',
    desc: '24/7 estate response, climate systems, and discreet protection — your residence cared for as if it were our own.',
    glow: 'gold',
  },
  {
    n: '06',
    title: 'Luxury Marketing Campaigns',
    desc: 'Cinematic editorials, art-directed photography and global storytelling that position your property among icons.',
    glow: 'coral',
  },
]

const glowMap = {
  emerald: 'shadow-glow-emerald',
  gold: 'shadow-glow-gold',
  coral: 'shadow-glow-coral',
}

function ServiceCard({ item, idx }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: idx * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-gold-500/30"
    >
      {/* Hover spotlight */}
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${glowMap[item.glow]}`}
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-60 [background:radial-gradient(circle,rgba(230,196,99,0.25),transparent_60%)] blur-2xl" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[0.7rem] tracking-[0.3em] text-gold-300/70">
            {item.n} / 06
          </span>
          <span className="diamond-clip h-2.5 w-2.5 bg-gradient-to-br from-gold-200 to-gold-700 transition-transform duration-700 group-hover:rotate-180" />
        </div>

        <h3 className="mt-10 font-display text-2xl sm:text-[1.7rem] leading-tight text-ivory-50">
          {item.title}
        </h3>

        <p className="mt-5 text-[0.95rem] text-ivory-100/65 leading-relaxed">
          {item.desc}
        </p>

        <div className="mt-10 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-ivory-100/55 group-hover:text-gold-200 transition-colors duration-500">
          <span>Discover</span>
          <span className="inline-block h-px w-8 bg-current transition-all duration-500 group-hover:w-14" />
        </div>
      </div>
    </motion.article>
  )
}

export default function Services() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-20% 0px' })

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink-900 py-32 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(60%_50%_at_50%_0%,rgba(10,155,94,0.18),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={headRef} className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="hairline-gold w-12" />
              <span className="eyebrow">Chapter 02 — The Craft</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display text-[10vw] leading-[0.95] sm:text-[4.5rem] text-ivory-50"
            >
              Services with the{' '}
              <span className="font-display italic font-light text-gradient-gold">
                shimmer
              </span>{' '}
              of a private resort.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 1 }}
            className="col-span-12 md:col-span-6 md:col-start-7 md:pt-10"
          >
            <p className="text-base text-ivory-100/65 leading-relaxed max-w-lg">
              Six disciplines, one philosophy: relentless craftsmanship in
              service of unforgettable stays. Every system, every supplier,
              every standard — calibrated for the discerning few.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} item={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
