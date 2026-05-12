import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useInView } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const RITUALS = [
  {
    n: '01',
    title: 'Welcome Ritual',
    body: 'A driver, a chilled coupe, gardenia on the pillow. Arrival shaped into a moment, not a transaction.',
  },
  {
    n: '02',
    title: 'Private Chef Table',
    body: 'A locally-sourced tasting menu prepared in your villa kitchen, paired with curated regional vintages.',
  },
  {
    n: '03',
    title: 'Sunset Vessel',
    body: 'A reserved catamaran the moment the light turns gold. Discreet crew, champagne, and silence.',
  },
  {
    n: '04',
    title: 'Estate Wellness',
    body: 'Beachside massages, breath sessions at dawn and bespoke wellness journeys — designed in advance.',
  },
]

const EXP_IMG =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80'

export default function Experience() {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        scale: 1.18,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  const headRef = useRef(null)
  const inView = useInView(headRef, { once: true, margin: '-20% 0px' })

  return (
    <section
      id="experience"
      ref={wrapRef}
      className="relative overflow-hidden bg-ink-950"
    >
      {/* Image as backdrop */}
      <div className="relative h-[60svh] min-h-[480px] w-full overflow-hidden">
        <img
          ref={imgRef}
          src={EXP_IMG}
          alt="Sunset over a private tropical resort"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/30 to-ink-950" />
        <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,transparent_30%,rgba(5,13,16,0.75)_100%)]" />

        {/* Center glyph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <div className="flex items-center gap-4">
            <span className="hairline-gold w-12" />
            <span className="eyebrow">Chapter 04 — The Experience</span>
            <span className="hairline-gold w-12" />
          </div>
          <h2 className="mt-8 font-display text-[12vw] sm:text-[7rem] leading-[0.95] text-ivory-50">
            Live{' '}
            <span className="font-display italic font-light text-gradient-gold">
              cinematically.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-ivory-100/75">
            Stay isn’t a checkout date. It is a sequence of small, precise
            beauties — orchestrated by our concierge from dawn to deep blue
            night.
          </p>
        </motion.div>
      </div>

      {/* Rituals grid */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-24 sm:py-32">
        <div ref={headRef} className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="font-display text-4xl sm:text-5xl leading-tight text-ivory-50"
            >
              Concierge rituals,
              <br />
              <span className="font-display italic font-light text-gradient-emerald">
                quietly choreographed.
              </span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-6 text-ivory-100/65 leading-relaxed max-w-md"
            >
              Each Tropic Co. stay unfolds along a carefully designed arc —
              moments engineered to feel spontaneous, executed with the rigor
              of a private resort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-10 inline-flex items-center gap-4 rounded-full glass-strong px-5 py-3"
            >
              <span className="diamond-clip h-3 w-3 bg-gradient-to-br from-coral-200 to-coral-600 shadow-glow-coral" />
              <span className="text-[0.72rem] uppercase tracking-[0.3em] text-ivory-100/70">
                Available 24/7 — Whatsapp Concierge
              </span>
            </motion.div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 gap-px bg-white/8 sm:grid-cols-2">
            {RITUALS.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.9, delay: i * 0.08 }}
                className="group relative bg-ink-950 p-8 sm:p-10 hover:bg-ink-900 transition-colors duration-500"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[0.7rem] tracking-[0.3em] text-gold-300/70">
                    {r.n}
                  </span>
                  <span className="diamond-clip h-2 w-2 bg-gradient-to-br from-gold-200 to-gold-700" />
                </div>
                <h4 className="mt-8 font-display text-2xl text-ivory-50">
                  {r.title}
                </h4>
                <p className="mt-3 text-[0.92rem] text-ivory-100/60 leading-relaxed">
                  {r.body}
                </p>
                <div className="mt-6 h-px w-0 bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
