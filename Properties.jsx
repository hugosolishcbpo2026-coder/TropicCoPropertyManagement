import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROPERTIES = [
  {
    name: 'Villa Solene',
    location: 'Tulum, Mexico',
    bd: '6 BD',
    type: 'Beachfront Estate',
    rate: 'From $4,800 / nt',
    img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80',
    accent: 'emerald',
    tall: true,
  },
  {
    name: 'Mira Coral',
    location: 'Isla Mujeres',
    bd: '4 BD',
    type: 'Cliffside Residence',
    rate: 'From $3,200 / nt',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80',
    accent: 'coral',
  },
  {
    name: 'Casa Esmeralda',
    location: 'Costa Mujeres',
    bd: '5 BD',
    type: 'Private Reserve Villa',
    rate: 'From $5,400 / nt',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    accent: 'gold',
  },
  {
    name: 'The Driftwood',
    location: 'Punta Mita',
    bd: '7 BD',
    type: 'Oceanfront Compound',
    rate: 'From $6,900 / nt',
    img: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&w=1600&q=80',
    accent: 'emerald',
    tall: true,
  },
]

const accentMap = {
  emerald: { ring: 'ring-emerald-400/40', glow: 'shadow-glow-emerald', dot: 'bg-emerald-400' },
  coral: { ring: 'ring-coral-400/40', glow: 'shadow-glow-coral', dot: 'bg-coral-400' },
  gold: { ring: 'ring-gold-400/40', glow: 'shadow-glow-gold', dot: 'bg-gold-300' },
}

function PropertyCard({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const accent = accentMap[p.accent]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full min-h-[420px] w-full overflow-hidden rounded-[4px]"
    >
      <div className="relative h-full w-full overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
        />

        {/* Veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${accent.glow}`}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-gold-400/40 transition-all duration-700" />

        {/* Corner ornaments */}
        <span className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-gold-400/60" />
        <span className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-gold-400/60" />
        <span className="pointer-events-none absolute left-4 bottom-4 h-6 w-6 border-l border-b border-gold-400/60" />
        <span className="pointer-events-none absolute right-4 bottom-4 h-6 w-6 border-r border-b border-gold-400/60" />

        {/* Top label */}
        <div className="absolute left-7 top-7 flex items-center gap-2">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.dot} animate-pulse`} />
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-ivory-100/80">
            {p.type}
          </span>
        </div>

        {/* Rate pill (slides in) */}
        <div className="absolute right-7 top-7 translate-y-[-8px] opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full glass-strong px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-gold-200">
            {p.rate}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[0.65rem] tracking-[0.35em] text-ivory-100/60 uppercase">
                {p.location}
              </div>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1] text-ivory-50">
                {p.name}
              </h3>
              <div className="mt-3 text-[0.75rem] uppercase tracking-[0.3em] text-ivory-100/55">
                {p.bd} · Concierge included
              </div>
            </div>

            <a
              href="#contact"
              className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full border border-gold-400/40 bg-ink-950/40 text-gold-200 transition-all duration-500 group-hover:bg-gold-400 group-hover:text-ink-950 group-hover:rotate-45"
              aria-label={`Inquire about ${p.name}`}
            >
              →
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Properties() {
  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-20% 0px' })

  return (
    <section
      id="properties"
      className="relative overflow-hidden bg-ink-950 py-32 sm:py-40"
    >
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_60%_at_100%_0%,rgba(255,90,54,0.12),transparent_60%),radial-gradient(60%_50%_at_0%_100%,rgba(10,155,94,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div ref={headRef} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="hairline-gold w-12" />
              <span className="eyebrow">Chapter 03 — The Portfolio</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display text-[10vw] leading-[0.95] sm:text-[5rem] text-ivory-50"
            >
              Residences with{' '}
              <span className="font-display italic font-light text-gradient-emerald">
                horizons
              </span>{' '}
              attached.
            </motion.h2>
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="self-start inline-flex items-center gap-3 rounded-full border border-gold-500/40 bg-white/[0.03] px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-gold-200 hover:bg-gold-500/10 transition-colors"
          >
            View full collection <span>↗</span>
          </motion.a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:auto-rows-[260px]">
          {PROPERTIES.map((p, i) => (
            <div
              key={p.name}
              className={
                // Editorial asymmetric layout — tall cards 7 cols span 3 rows,
                // wide cards 5 cols span 2 rows
                i === 0
                  ? 'lg:col-span-7 lg:row-span-3'
                  : i === 1
                    ? 'lg:col-span-5 lg:row-span-2'
                    : i === 2
                      ? 'lg:col-span-5 lg:row-span-3'
                      : 'lg:col-span-7 lg:row-span-2'
              }
            >
              <PropertyCard p={p} i={i} />
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-24 overflow-hidden border-y border-white/8 py-6">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-[0.75rem] uppercase tracking-[0.4em] text-ivory-100/40">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                'Tulum',
                '◆',
                'Punta Mita',
                '◆',
                'Cabo San Lucas',
                '◆',
                'Riviera Maya',
                '◆',
                'Isla Mujeres',
                '◆',
                'Sayulita',
                '◆',
                'Costalegre',
                '◆',
              ].map((t, j) => (
                <span key={`${k}-${j}`}>{t}</span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
