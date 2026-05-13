import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Tropic Co. didn’t just manage our villa — they redefined what hospitality could feel like. Our guests don’t leave reviews, they leave letters.',
    name: 'Isabella Marchetti',
    role: 'Owner, Casa del Cielo · Tulum',
    rating: 5,
  },
  {
    quote:
      'The level of taste, restraint and discretion is unparalleled. We tripled our revenue without ever compromising the soul of the property.',
    name: 'Daniel Whitford',
    role: 'Principal, Villa Marisol Trust',
    rating: 5,
  },
  {
    quote:
      'From the candle scent in the entry to the playlist on arrival — every micro-detail is composed. This is the new private hospitality standard.',
    name: 'Sienna Park',
    role: 'Travel Editor, Departures',
    rating: 5,
  },
  {
    quote:
      'We have estates in three countries. Tropic Co. is the only team we trust with all of them. Quietly remarkable, every single time.',
    name: 'Mateo & Lara Vidal',
    role: 'Owners · Punta Mita',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-cycle when in view
  useEffect(() => {
    if (!inView || paused) return
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6500)
    return () => clearInterval(id)
  }, [inView, paused])

  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[idx]

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-gold w-[600px] h-[600px] left-1/2 -translate-x-1/2 top-1/4 opacity-20" />
        <div className="blob blob-emerald w-[500px] h-[500px] right-0 bottom-0 opacity-25" />
      </div>

      <div className="absolute right-0 top-20 font-display text-[40vw] md:text-[20vw] leading-none text-ivory/[0.02] select-none pointer-events-none italic">
        05
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-mono text-[10px] tracking-ultra uppercase text-gold-300/80">
            05 · Whispered Praise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory tracking-tight max-w-3xl mb-16"
        >
          From those who’ve
          <br />
          <span className="italic text-gold-shimmer font-light">stayed</span>.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div className="relative glass-strong p-10 md:p-16 rounded-sm overflow-hidden">
            <Quote
              size={80}
              strokeWidth={0.5}
              className="absolute -top-4 -left-4 text-gold-400/15"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-300 text-gold-300" />
                  ))}
                </div>

                <blockquote className="font-display text-3xl md:text-5xl text-ivory leading-tight italic font-light">
                  “{t.quote}”
                </blockquote>

                <div className="mt-10 pt-8 border-t border-ivory/10 flex items-center justify-between">
                  <div>
                    <div className="font-display text-xl text-gold-shimmer">
                      {t.name}
                    </div>
                    <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mt-1">
                      {t.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="w-11 h-11 border border-ivory/20 hover:border-gold-400 hover:bg-gold-400/10 text-ivory/70 hover:text-gold-300 transition-all duration-500 flex items-center justify-center"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 border border-gold-400/40 bg-gold-400/5 hover:bg-gold-400/20 text-gold-300 transition-all duration-500 flex items-center justify-center"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Index dots */}
            <div className="absolute bottom-10 left-16 hidden md:flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-px transition-all duration-700 ${
                    i === idx ? 'w-10 bg-gold-300' : 'w-5 bg-ivory/20 hover:bg-ivory/40'
                  }`}
                />
              ))}
            </div>

            <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-gold-400/40" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-gold-400/40" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 pt-12 border-t border-ivory/10"
        >
          <p className="text-center font-mono text-[10px] tracking-ultra uppercase text-ivory/45 mb-8">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {[
              'Architectural Digest',
              'Condé Nast Traveler',
              'Departures',
              'Robb Report',
              'Vogue Living',
              'Travel + Leisure',
            ].map((p) => (
              <div
                key={p}
                className="font-display text-xl md:text-2xl italic text-ivory/40 hover:text-gold-300 transition-colors duration-500"
              >
                {p}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
