import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

// Editorial villa interior — Unsplash
const ABOUT_IMG =
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '15%'])
  const numberY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-emerald w-[700px] h-[700px] -left-60 top-1/4 opacity-30" />
        <div className="blob blob-gold w-[500px] h-[500px] right-0 bottom-0 opacity-20" />
      </div>

      <motion.div
        style={{ y: numberY }}
        className="absolute right-0 top-20 font-display text-[40vw] md:text-[20vw] leading-none text-ivory/[0.02] select-none pointer-events-none italic"
      >
        01
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-mono text-[10px] tracking-ultra uppercase text-gold-300/80">
            01 · Our Philosophy
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <img
                  src={ABOUT_IMG}
                  alt="Luxury villa interior"
                  className="w-full h-full object-cover img-cinematic"
                  loading="lazy"
                />
              </motion.div>

              {/* Color treatment */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_50%,_rgba(5,13,16,0.7)_100%)]" />

              {/* Frame & labels */}
              <div className="absolute inset-3 border border-gold-400/30 pointer-events-none" />
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-ultra uppercase text-ivory/70">
                Villa Marisol · 2024
              </div>
              <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-ultra uppercase text-ivory/70">
                N 33.4484° W 112.0740°
              </div>
            </motion.div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl leading-[1.05] text-ivory tracking-tight"
            >
              A new <span className="italic text-emerald-shimmer font-light">standard</span> of
              <br />
              hospitality, <span className="italic text-gold-shimmer font-light">privately</span> kept.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="mt-10 space-y-6 font-sans text-base md:text-lg text-ivory/70 leading-relaxed font-light max-w-xl"
            >
              <p>
                Tropic Co. Property Management is a private property collective
                for owners who refuse to compromise. We orchestrate every detail
                — from sun-warmed turn-down rituals to revenue strategies — so
                your home becomes a destination others quietly envy.
              </p>
              <p className="text-ivory/55">
                Founded on the conviction that hospitality should feel like a
                long-held secret, we steward a tightly held portfolio of coastal
                villas, sky-suites and sanctuary estates from our Phoenix studio
                across the Sunbelt and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 pt-10 border-t border-ivory/10 grid grid-cols-2 gap-8"
            >
              {[
                { k: '24/7', v: 'Concierge Desk' },
                { k: '5★', v: 'Avg. Cleaning Score' },
                { k: '18hr', v: 'Turn-over Window' },
                { k: '92%', v: 'Repeat Bookings' },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl text-gold-shimmer">{s.k}</div>
                  <div className="mt-1 font-mono text-[10px] tracking-ultra uppercase text-ivory/55">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
