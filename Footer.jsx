import React from 'react'
import Logo from './Logo.jsx'

const SOCIAL = [
  {
    label: 'Instagram',
    href: '#',
    d: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    d: 'M4 4h4v16H4V4Zm2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm6 4h4v2.1c.6-1 2-2.1 4-2.1 3 0 4 2 4 5v7h-4v-6c0-1.6-.5-2.6-2-2.6s-2 1-2 2.6V20h-4V8Z',
  },
  {
    label: 'Pinterest',
    href: '#',
    d: 'M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9.2-.7 1-4.6 1-4.6s-.3-.5-.3-1.3c0-1.3.7-2.2 1.7-2.2.8 0 1.2.6 1.2 1.3 0 .8-.5 2-.8 3.1-.2.9.5 1.6 1.4 1.6 1.7 0 3-1.8 3-4.4 0-2.3-1.7-3.9-4-3.9-2.8 0-4.4 2.1-4.4 4.2 0 .8.3 1.7.7 2.2.1.1.1.2.1.3l-.2.9c-.1.2-.2.3-.4.2-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1 0-2-.5-2.4-1.2l-.6 2.5c-.2.9-.9 2-1.3 2.7A10 10 0 1 0 12 2Z',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-24 pb-10">
      {/* Glow rim */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[50vw] w-[80vw] -translate-x-1/2 rounded-full opacity-40 [background:radial-gradient(circle,rgba(10,155,94,0.3),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {/* Top: oversized wordmark */}
        <div className="mb-16 text-center">
          <div className="font-display text-[18vw] sm:text-[12rem] leading-[0.85] tracking-[-0.02em] text-ivory-50/95">
            Tropic <span className="font-display italic text-gradient-gold">Co.</span>
          </div>
          <div className="mt-2 text-[0.7rem] uppercase tracking-[0.5em] text-ivory-100/40">
            Elevated Coastal Living · Since 2012
          </div>
        </div>

        {/* Mid grid */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/8 pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo size={28} />
            <p className="mt-6 max-w-xs text-sm text-ivory-100/55 leading-relaxed">
              A property atelier devoted to the world's most luminous coastal
              residences. Crafted in the tropics, calibrated for the world.
            </p>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold-200/80">
              Atelier
            </h5>
            <ul className="mt-5 space-y-3 text-sm text-ivory-100/65">
              <li>
                <a className="link-luxe" href="#about">About</a>
              </li>
              <li>
                <a className="link-luxe" href="#services">Services</a>
              </li>
              <li>
                <a className="link-luxe" href="#properties">Portfolio</a>
              </li>
              <li>
                <a className="link-luxe" href="#experience">Experience</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold-200/80">
              Reach
            </h5>
            <ul className="mt-5 space-y-3 text-sm text-ivory-100/65">
              <li>
                <a className="link-luxe" href="tel:9999999999">
                  (999) 999-9999
                </a>
              </li>
              <li>
                <a className="link-luxe" href="mailto:hello@tropicco.com">
                  hello@tropicco.com
                </a>
              </li>
              <li>Tulum · Punta Mita · Cabo</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h5 className="text-[0.65rem] uppercase tracking-[0.35em] text-gold-200/80">
              The Dispatch
            </h5>
            <p className="mt-5 text-sm text-ivory-100/55">
              Quarterly editorial — new residences, rituals and rare moments.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5 pl-5"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-sm text-ivory-50 placeholder:text-ivory-100/30 outline-none"
              />
              <button
                type="submit"
                className="btn-shimmer rounded-full bg-gradient-to-r from-gold-300 to-gold-700 px-4 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-ink-950"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ivory-100/70 hover:border-gold-400/60 hover:text-gold-200 transition-all duration-500 hover:shadow-glow-gold"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div className="mt-14 hairline-gold" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-[0.7rem] uppercase tracking-[0.3em] text-ivory-100/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Tropic Co. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-400 shadow-glow-coral animate-pulse" />
            Concierge open · 24 / 7
          </span>
          <span className="flex items-center gap-4">
            <a className="link-luxe" href="#">Privacy</a>
            <a className="link-luxe" href="#">Terms</a>
            <a className="link-luxe" href="#">Press</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
