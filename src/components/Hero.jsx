import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import DiamondParticles from './DiamondParticles'

// High-quality Unsplash photograph — tropical luxury infinity pool / palms / sea
const HERO_IMG =
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  const heroRef = useRef(null)
  const headingRef = useRef(null)

  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 800], [0, 240])
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.15])
  const contentY = useTransform(scrollY, [0, 800], [0, -120])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])

  useEffect(() => {
    if (!headingRef.current) return
    const chars = headingRef.current.querySelectorAll('.char')
    gsap.fromTo(
      chars,
      { y: 120, opacity: 0, rotateX: -60 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.4,
        stagger: 0.04,
        ease: 'expo.out',
        delay: 0.6,
      }
    )
  }, [])

  const splitText = (text) =>
    text.split('').map((c, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ display: c === ' ' ? 'inline' : 'inline-block' }}
      >
        {c === ' ' ? '\u00A0' : c}
      </span>
    ))

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden grain"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Cinematic color treatment */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-emerald-ambient" />
        <div className="absolute inset-0 bg-coral-ambient" />
      </motion.div>

      {/* Floating gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="blob blob-emerald w-[600px] h-[600px] -left-40 top-1/4"
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob blob-coral w-[500px] h-[500px] right-[-100px] top-[10%]"
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="blob blob-gold w-[400px] h-[400px] left-1/3 bottom-[10%]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Diamond particles canvas */}
      <DiamondParticles count={70} />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(219,172,59,1) 1px, transparent 1px), linear-gradient(90deg, rgba(219,172,59,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 min-h-[100svh] flex flex-col justify-center items-center px-6 py-32 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-mono text-[10px] md:text-xs tracking-ultra uppercase text-gold-300/80">
            Est. Paradise · Phoenix · Coastal
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
        </motion.div>

        {/* Main headline */}
        <h1
          ref={headingRef}
          className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.95] tracking-tight text-ivory max-w-[1400px]"
          style={{ perspective: '1000px' }}
        >
          <span className="block italic font-light">{splitText('Elevated')}</span>
          <span className="block text-gold-shimmer font-medium">
            {splitText('Coastal Living')}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1.2 }}
          className="mt-10 max-w-2xl font-sans text-base md:text-lg text-ivory/70 leading-relaxed font-light"
        >
          Tropic Co. Property Management delivers elite property management
          experiences infused with luxury resort elegance, diamond-tier
          hospitality, and unforgettable tropical escapes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#properties" className="btn-luxe-primary group">
            <span>Explore Properties</span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href="#contact" className="btn-luxe group">
            <span>Partner With Us</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="mt-20 grid grid-cols-3 gap-8 md:gap-16 max-w-2xl"
        >
          {[
            { value: '180+', label: 'Curated Villas' },
            { value: '4.97', label: 'Guest Rating' },
            { value: '$48M', label: 'Owner Revenue' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-5xl text-gold-shimmer">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-[9px] md:text-[10px] tracking-ultra uppercase text-ivory/55">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          const el = document.querySelector('#about')
          if (el && window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -80, duration: 1.6 })
          } else if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer group"
      >
        <span className="font-mono text-[9px] tracking-ultra uppercase text-ivory/50 group-hover:text-gold-300 transition-colors">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gold-400 to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.a>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none z-[5]" />
    </section>
  )
}
