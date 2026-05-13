import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, MapPin, Moon } from 'lucide-react'

const properties = [
  {
    name: 'Villa Marisol',
    location: 'Cabo San Lucas · MX',
    type: 'Oceanfront Estate',
    nightly: '$4,850',
    sleeps: 14,
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80',
    tag: 'Signature',
    span: 'tall', // editorial layout flag
  },
  {
    name: 'Casa del Cielo',
    location: 'Tulum · MX',
    type: 'Jungle Sanctuary',
    nightly: '$3,200',
    sleeps: 10,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    tag: 'New',
  },
  {
    name: 'The Reef House',
    location: 'Sayulita · MX',
    type: 'Beachfront Villa',
    nightly: '$2,950',
    sleeps: 8,
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Palmera Privée',
    location: 'Scottsdale · AZ',
    type: 'Desert Modernist',
    nightly: '$3,700',
    sleeps: 12,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    tag: 'Featured',
    span: 'tall',
  },
  {
    name: 'Cielo Azul',
    location: 'Punta Mita · MX',
    type: 'Cliffside Retreat',
    nightly: '$5,400',
    sleeps: 16,
    img: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Casa Solaria',
    location: 'Phoenix · AZ',
    type: 'Sky Sanctuary',
    nightly: '$2,400',
    sleeps: 6,
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80',
  },
]

function PropertyCard({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const isTall = p.span === 'tall'

  return (
    <motion.a
      ref={ref}
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        const el = document.querySelector('#contact')
        if (el && window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80, duration: 1.6 })
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2,
        delay: (i % 3) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-sm cursor-pointer block h-full ${
        isTall ? 'md:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden h-full ${isTall ? 'min-h-[600px] md:min-h-[800px]' : 'aspect-[4/5]'}`}>
        <motion.div
          className="absolute inset-0 img-cinematic"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={p.img}
            alt={p.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
        <div className="absolute inset-3 border border-ivory/10 group-hover:border-gold-400/40 transition-colors duration-700 pointer-events-none" />

        {p.tag && (
          <div className="absolute top-6 left-6 px-3 py-1 glass-gold">
            <span className="font-mono text-[9px] tracking-ultra uppercase text-gold-200">
              {p.tag}
            </span>
          </div>
        )}

        <div className="absolute top-6 right-6 font-mono text-[10px] tracking-ultra uppercase text-ivory/65">
          {String(i + 1).padStart(2, '0')}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100">
          <ArrowUpRight size={22} className="text-gold-300" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
          <div className="flex items-center gap-2 text-ivory/70 font-mono text-[10px] tracking-ultra uppercase mb-3">
            <MapPin size={11} />
            <span>{p.location}</span>
          </div>
          <h3 className={`font-display text-ivory leading-tight ${isTall ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
            {p.name}
          </h3>
          <div className="mt-2 font-sans text-sm text-gold-300/80 italic font-light">
            {p.type}
          </div>

          <div className="mt-6 pt-5 border-t border-ivory/10 flex items-center justify-between">
            <div>
              <div className="font-display text-2xl text-gold-shimmer">
                {p.nightly}
              </div>
              <div className="font-mono text-[9px] tracking-ultra uppercase text-ivory/55 mt-0.5">
                Per Night
              </div>
            </div>
            <div className="text-right flex items-center gap-2 text-ivory/70">
              <Moon size={14} />
              <span className="font-mono text-xs">Sleeps {p.sleeps}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function Properties() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="properties"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-gold w-[500px] h-[500px] left-1/4 top-0 opacity-15" />
        <div className="blob blob-coral w-[400px] h-[400px] right-0 bottom-1/4 opacity-15" />
      </div>

      <div className="absolute left-0 top-20 font-display text-[40vw] md:text-[20vw] leading-none text-ivory/[0.02] select-none pointer-events-none italic">
        03
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
            03 · The Collection
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory tracking-tight max-w-3xl"
          >
            Featured
            <br />
            <span className="italic text-emerald-shimmer font-light">
              private residences
            </span>
            .
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="flex items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const el = document.querySelector('#contact')
                if (el && window.__lenis) {
                  window.__lenis.scrollTo(el, { offset: -80, duration: 1.6 })
                } else if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-luxe"
            >
              View All Villas
            </a>
          </motion.div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {properties.map((p, i) => (
            <PropertyCard key={p.name} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
