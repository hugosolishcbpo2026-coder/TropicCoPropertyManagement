import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo.jsx'

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Experience', href: '#experience' },
  { label: 'Voices', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
      >
        <motion.nav
          animate={{
            paddingTop: scrolled ? 10 : 22,
            paddingBottom: scrolled ? 10 : 22,
            width: scrolled ? 'min(94%, 1180px)' : 'min(96%, 1280px)',
            marginTop: scrolled ? 14 : 18,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex items-center justify-between gap-6 rounded-full px-6 sm:px-8 transition-colors ${
            scrolled
              ? 'glass-strong border border-gold-700/20'
              : 'glass border-white/5'
          }`}
        >
          {/* Subtle gold rim glow */}
          <div className="pointer-events-none absolute inset-0 rounded-full opacity-30 [background:radial-gradient(120%_60%_at_50%_0%,rgba(230,196,99,0.25),transparent_60%)]" />

          <a href="#top" className="relative z-10 flex items-center">
            <Logo size={32} />
          </a>

          <ul className="relative z-10 hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-luxe text-[0.78rem] uppercase tracking-[0.28em] text-ivory-100/85 hover:text-ivory-50 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-shimmer rounded-full border border-gold-500/40 bg-gold-500/5 px-5 py-2 text-[0.72rem] uppercase tracking-[0.3em] text-gold-200 hover:bg-gold-500/15 transition-colors"
            >
              Reserve a Call
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              <span className="relative block h-3 w-5">
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }}
                  className="absolute left-0 top-0 h-px w-5 bg-ivory-50"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  className="absolute left-0 top-[6px] h-px w-5 bg-ivory-50"
                />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }}
                  className="absolute left-0 top-[12px] h-px w-5 bg-ivory-50"
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-emerald-radial opacity-40" />
            <motion.ul
              className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {NAV.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className="font-display text-3xl tracking-wide text-ivory-50"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="mt-6"
              >
                <a
                  onClick={() => setOpen(false)}
                  href="#contact"
                  className="rounded-full border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-gold-200"
                >
                  Reserve a Call
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
