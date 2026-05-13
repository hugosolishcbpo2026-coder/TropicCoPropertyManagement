import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Wine, Plane, Bed, Anchor } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Tropical sunset / ocean — Unsplash
const EXP_IMG =
  'https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=2000&q=80'

const moments = [
  {
    icon: Plane,
    time: '13:00',
    title: 'Arrival',
    body: 'Private transfer from tarmac to villa. A chilled bottle of vintage rosé waits beside hand-tied florals.',
  },
  {
    icon: Wine,
    time: '17:30',
    title: 'Golden Hour',
    body: 'Your in-villa sommelier curates an evening tasting on the cliffside terrace, set to the rhythm of the tide.',
  },
  {
    icon: Bed,
    time: '21:45',
    title: 'Turn Down',
    body: 'Silk sheets folded, candles lit, a custom playlist whispering through the dunes. A monogrammed sleep mask on the pillow.',
  },
  {
    icon: Anchor,
    time: '09:00',
    title: 'Sea Breakfast',
    body: 'Tropical fruit, freshly pressed espresso, and a private skipper ready to chart your morning on the water.',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const imgWrapperRef = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!imgWrapperRef.current) return

    const ctx = gsap.context(() => {
      // Scrub-scale effect: image scales from 0.9 → 1.05 over the section
      gsap.fromTo(
        imgWrapperRef.current.querySelector('.exp-img'),
        { scale: 0.92, y: '5%' },
        {
          scale: 1.08,
          y: '-5%',
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-gradient-to-b from-ink-950 via-emerald-900/30 to-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-emerald w-[700px] h-[700px] right-[-200px] top-1/3 opacity-30" />
        <div className="blob blob-coral w-[500px] h-[500px] left-[-100px] bottom-0 opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-mono text-[10px] tracking-ultra uppercase text-gold-300/80">
            04 · The Experience
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left — large cinematic image */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <motion.div
              ref={imgWrapperRef}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm grain"
            >
              <img
                src={EXP_IMG}
                alt="Tropical sunset"
                className="exp-img absolute inset-0 w-full h-full object-cover img-cinematic"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_40%,_rgba(5,13,16,0.8)_100%)]" />
              <div className="absolute inset-3 border border-gold-400/30" />
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-ultra uppercase text-ivory/70">
                Concierge · Diamond Tier
              </div>
              <div className="absolute bottom-6 right-6 font-mono text-[9px] tracking-ultra uppercase text-ivory/70">
                36 hr · Curated
              </div>

              {/* Floating quote card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 1.2 }}
                className="absolute -bottom-8 -right-4 md:-right-8 max-w-xs p-6 glass-strong shadow-cinematic"
              >
                <div className="font-display text-2xl text-gold-300 mb-3">“</div>
                <p className="font-display text-lg italic text-ivory leading-snug">
                  We didn’t check in. We arrived home — into someone else’s most beautiful secret.
                </p>
                <div className="mt-4 font-mono text-[10px] tracking-ultra uppercase text-ivory/55">
                  — Architectural Digest
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — timeline */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-6xl leading-[1.05] text-ivory tracking-tight"
            >
              A day, <span className="italic text-gold-shimmer font-light">scored</span> like
              <br />
              a film.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-8 font-sans text-base md:text-lg text-ivory/65 font-light leading-relaxed max-w-md"
            >
              A glimpse at the choreography behind a single Tropic Co. stay —
              every hour intentioned, every silence considered.
            </motion.p>

            <div className="mt-14 space-y-2">
              {moments.map((m, i) => {
                const Icon = m.icon
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.6 + i * 0.15,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative pl-8 py-6 border-b border-ivory/10 hover:bg-ivory/[0.02] transition-colors duration-500"
                  >
                    <div className="absolute left-0 top-8 w-2 h-2 rotate-45 bg-gold-400 group-hover:shadow-gold-glow transition-all" />

                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold-400/30 text-gold-300 group-hover:border-gold-300 group-hover:bg-gold-400/5 transition-all duration-500">
                        <Icon size={16} strokeWidth={1.4} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-mono text-[10px] tracking-ultra uppercase text-gold-300/80">
                            {m.time}
                          </span>
                          <span className="h-px w-6 bg-gold-400/30" />
                          <h4 className="font-display text-xl text-ivory">
                            {m.title}
                          </h4>
                        </div>
                        <p className="font-sans text-sm text-ivory/60 font-light leading-relaxed">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
