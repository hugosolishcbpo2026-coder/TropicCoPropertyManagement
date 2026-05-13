import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

// IMPORTANT: every href MUST match an `id` on a real <section> in the page.
const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'Experience', href: '#experience' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Universal smooth-scroll. Works with Lenis if loaded, otherwise falls back
 * to native scrollIntoView. Also handles the top-of-page (#hero) edge case.
 */
function scrollToSection(href) {
  if (!href) return

  // top of page
  if (href === '#hero' || href === '#top') {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.4 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  const el = document.querySelector(href)
  if (!el) {
    // section not present (yet) — fall back to top
    console.warn(`[nav] no element matches ${href}`)
    return
  }

  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.6 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active-link highlighting via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const handleNav = (e, href) => {
    e?.preventDefault()
    setOpen(false)
    // Small delay so menu-close animation can begin before scroll
    requestAnimationFrame(() => scrollToSection(href))
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-700 ${
              scrolled
                ? 'glass-strong shadow-cinematic'
                : 'bg-transparent border border-transparent'
            }`}
          >
            <a
              href="#hero"
              onClick={(e) => handleNav(e, '#hero')}
              aria-label="Tropic Co. — back to top"
            >
              <Logo size={36} withText />
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l, i) => {
                const isActive = active === l.href
                return (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.6 }}
                    className="relative px-4 py-2 group cursor-pointer"
                  >
                    <span
                      className={`font-sans text-[11px] tracking-ultra uppercase transition-colors duration-500 ${
                        isActive
                          ? 'text-gold-300'
                          : 'text-ivory/70 group-hover:text-gold-300'
                      }`}
                    >
                      {l.label}
                    </span>
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-300 to-transparent transition-all duration-500 ${
                        isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                      }`}
                    />
                  </motion.a>
                )
              })}
            </nav>

            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, '#contact')}
                className="btn-luxe-primary !py-2.5 !px-5 !text-[10px]"
              >
                Book Concierge
              </a>
            </div>

            <button
              className="lg:hidden text-ivory p-2"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden bg-ink-950/95 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="blob blob-emerald w-[400px] h-[400px] -top-20 -right-20 opacity-40" />
              <div className="blob blob-gold w-[300px] h-[300px] -bottom-20 -left-20 opacity-30" />
            </div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-6">
                <Logo size={36} withText />
                <button
                  className="text-ivory p-2"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col items-center justify-center gap-2">
                {NAV_LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="font-display text-4xl text-ivory/90 hover:text-gold-300 transition-colors cursor-pointer"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNav(e, '#contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="btn-luxe-primary mt-6"
                >
                  Book Concierge
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
