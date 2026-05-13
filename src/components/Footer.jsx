import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'

// Footer nav columns — each link href matches a real section ID
const columns = [
  {
    title: 'Discover',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Properties', href: '#properties' },
      { label: 'Experience', href: '#experience' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
      { label: 'Partner With Us', href: '#contact' },
      { label: 'Press Kit', href: '#contact' },
    ],
  },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -80, duration: 1.6 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 border-t border-ivory/5">
      {/* Marquee */}
      <div className="relative py-10 border-b border-ivory/5 overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-12 px-6">
              {[
                'Diamond-Tier Hospitality',
                'Elevated Coastal Living',
                'Curated Tropical Escapes',
                'Private Property Stewardship',
                'Cinematic Resort Experiences',
              ].map((t, i) => (
                <div key={`${dup}-${i}`} className="flex items-center gap-12">
                  <span className="font-display text-4xl md:text-6xl italic text-ivory/15">
                    {t}
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-gold-400/60" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-emerald w-[700px] h-[700px] -left-40 top-40 opacity-20" />
        <div className="blob blob-gold w-[500px] h-[500px] right-0 bottom-0 opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <Logo size={48} withText />
            <p className="mt-8 font-sans text-base text-ivory/60 font-light leading-relaxed max-w-md">
              A private hospitality collective stewarding the world’s most
              quietly extraordinary homes. Elevated coastal living, diamond-tier
              service.
            </p>
            <div className="mt-10">
              <p className="font-mono text-[10px] tracking-ultra uppercase text-ivory/45 mb-4">
                Studio
              </p>
              <p className="font-display text-xl text-ivory">200 Monroe St.</p>
              <p className="font-sans text-sm text-ivory/60 mt-1">
                Phoenix, Arizona 85003
              </p>

              <div className="mt-6 space-y-1">
                <p className="font-mono text-[10px] tracking-ultra uppercase text-ivory/45">
                  Phone
                </p>
                <p className="font-display text-lg text-ivory/70 italic">
                  (Coming soon)
                </p>
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-mono text-[10px] tracking-ultra uppercase text-ivory/45">
                  Email
                </p>
                <p className="font-display text-lg text-ivory/70 italic">
                  Coming soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-2 gap-8 lg:pl-8">
            {columns.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 + idx * 0.1 }}
              >
                <h4 className="font-mono text-[10px] tracking-ultra uppercase text-gold-300/80 mb-6">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo(l.href)
                        }}
                        className="font-display text-lg text-ivory/70 hover:text-gold-300 transition-colors duration-500 cursor-pointer"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 pt-12 border-t border-ivory/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
        >
          <div className="lg:col-span-6">
            <h3 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
              Receive our quarterly{' '}
              <span className="italic text-gold-shimmer">field journal</span>.
            </h3>
            <p className="mt-3 font-sans text-sm text-ivory/60 font-light max-w-md">
              Curated essays on coastal design, new property unveilings, and
              hospitality philosophy. Three letters a year, never more.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="email"
              placeholder="your@private.email"
              className="flex-1 bg-transparent border border-ivory/15 focus:border-gold-400 outline-none px-5 py-4 font-sans text-sm text-ivory placeholder:text-ivory/30 transition-colors"
            />
            <button className="btn-luxe-primary !py-3">Subscribe</button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-20 pt-10 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/45">
            © {new Date().getFullYear()} Tropic Co. Property Management · All
            rights reserved
          </div>

          <div className="flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 flex items-center justify-center border border-ivory/15 hover:border-gold-400 text-ivory/60 hover:text-gold-300 hover:bg-gold-400/5 transition-all duration-500"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 font-mono text-[10px] tracking-ultra uppercase text-ivory/45">
            <a href="#" className="hover:text-gold-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gold-300 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-ivory/5">
        <div className="font-display text-[24vw] leading-none text-center text-ivory/[0.025] select-none py-8 italic">
          Tropic Co.
        </div>
      </div>
    </footer>
  )
}
