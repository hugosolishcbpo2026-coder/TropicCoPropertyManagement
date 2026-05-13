import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Crown,
  Gem,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Megaphone,
} from 'lucide-react'

const services = [
  {
    icon: Crown,
    title: 'Luxury Property Management',
    desc: 'End-to-end stewardship of your estate — from owner reporting to bespoke staffing protocols crafted to your home’s personality.',
    accent: 'gold',
  },
  {
    icon: Gem,
    title: 'Diamond Guest Experience',
    desc: 'White-glove arrival rituals, in-villa sommeliers, private chefs and concierges who anticipate the next wish before it’s spoken.',
    accent: 'emerald',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    desc: 'Dynamic pricing intelligence, demand modeling and luxury distribution channels that maximize yield without diluting brand.',
    accent: 'coral',
  },
  {
    icon: Sparkles,
    title: 'Premium Cleaning',
    desc: 'Couture housekeeping with hospital-grade standards, signature linens and a 78-point post-stay inspection on every turnover.',
    accent: 'gold',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Security',
    desc: 'Preventative care, 24/7 smart monitoring, vetted in-house technicians and discreet on-call security for total peace of mind.',
    accent: 'emerald',
  },
  {
    icon: Megaphone,
    title: 'Luxury Marketing Campaigns',
    desc: 'Editorial photography, cinematic films, and placements across elite distribution partners that position your property as iconic.',
    accent: 'coral',
  },
]

const accentMap = {
  gold:    'from-gold-700/30 to-gold-400/5 group-hover:from-gold-500/40 group-hover:to-gold-300/10',
  emerald: 'from-emerald-700/40 to-emerald-400/5 group-hover:from-emerald-500/50 group-hover:to-emerald-300/10',
  coral:   'from-coral-700/30 to-coral-400/5 group-hover:from-coral-500/40 group-hover:to-coral-300/10',
}
const iconColor = {
  gold: 'text-gold-300',
  emerald: 'text-emerald-300',
  coral: 'text-coral-300',
}
const glowColor = {
  gold: 'group-hover:shadow-gold-glow',
  emerald: 'group-hover:shadow-emerald-glow',
  coral: 'group-hover:shadow-coral-glow',
}

function ServiceCard({ s, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = s.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.1,
        delay: (i % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative p-8 md:p-10 glass rounded-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 ${glowColor[s.accent]}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[s.accent]} transition-all duration-700 opacity-60`} />

      <div className="relative font-mono text-[10px] tracking-ultra uppercase text-ivory/45 mb-8">
        {String(i + 1).padStart(2, '0')} / 06
      </div>

      <div
        className={`relative w-14 h-14 mb-8 flex items-center justify-center border border-ivory/10 group-hover:border-gold-400/50 transition-all duration-500 ${iconColor[s.accent]}`}
        style={{ clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)' }}
      >
        <Icon size={22} strokeWidth={1.4} />
      </div>

      <h3 className="relative font-display text-3xl md:text-4xl text-ivory leading-tight mb-4">
        {s.title}
      </h3>

      <p className="relative font-sans text-sm md:text-base text-ivory/65 leading-relaxed font-light">
        {s.desc}
      </p>

      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gold-400/30 group-hover:border-gold-300 transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-gold-400/30 group-hover:border-gold-300 transition-colors duration-500" />
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-gradient-to-b from-ink-950 via-emerald-900/15 to-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-coral w-[600px] h-[600px] right-[-100px] top-1/4 opacity-15" />
        <div className="blob blob-emerald w-[500px] h-[500px] left-[-100px] bottom-1/4 opacity-25" />
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
            02 · The Service
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2 }}
            className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory tracking-tight max-w-3xl"
          >
            Every detail,
            <br />
            <span className="italic text-gold-shimmer font-light">
              quietly orchestrated
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-sans text-base text-ivory/65 max-w-sm font-light leading-relaxed"
          >
            A fully-integrated suite of services designed for owners who measure
            success not in nights booked, but in moments remembered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
