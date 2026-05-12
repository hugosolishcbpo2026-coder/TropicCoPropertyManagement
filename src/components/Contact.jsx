import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-32 sm:py-40"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_15%_30%,rgba(10,155,94,0.18),transparent_60%),radial-gradient(40%_40%_at_85%_70%,rgba(219,172,59,0.12),transparent_60%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[40vw] w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(255,90,54,0.18), transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="hairline-gold w-12" />
              <span className="eyebrow">Chapter 06 — Reservation</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-display text-[11vw] leading-[0.95] sm:text-[5rem] text-ivory-50"
            >
              Begin the{' '}
              <span className="font-display italic font-light text-gradient-gold">
                conversation
              </span>
              .
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-8 max-w-lg text-base text-ivory-100/65 leading-relaxed"
            >
              Whether you're entrusting a single villa or a portfolio of coastal
              estates, we begin every relationship with a quiet, considered
              conversation.
            </motion.p>

            {/* Contact lines */}
            <div className="mt-12 space-y-7">
              {[
                {
                  label: 'Direct line',
                  value: '(999) 999-9999',
                  href: 'tel:9999999999',
                },
                {
                  label: 'Concierge mail',
                  value: 'hello@tropicco.com',
                  href: 'mailto:hello@tropicco.com',
                },
                {
                  label: 'Studio',
                  value: 'Tulum · Punta Mita · Cabo',
                  href: null,
                },
              ].map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.9 }}
                  className="group flex items-end justify-between border-b border-white/10 pb-3"
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-ivory-100/55">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="link-luxe font-display text-xl sm:text-2xl text-ivory-50 group-hover:text-gold-200 transition-colors"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="font-display text-xl sm:text-2xl text-ivory-50">
                      {row.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative glass-strong rounded-3xl p-8 sm:p-12 shadow-luxury">
              {/* Corners */}
              <span className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-gold-400/50" />
              <span className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-gold-400/50" />
              <span className="pointer-events-none absolute left-6 bottom-6 h-8 w-8 border-l border-b border-gold-400/50" />
              <span className="pointer-events-none absolute right-6 bottom-6 h-8 w-8 border-r border-b border-gold-400/50" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <LuxField label="Full name" name="name" required />
                  <LuxField
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <LuxField label="Phone (optional)" name="phone" />
                  <LuxSelect
                    label="Interest"
                    name="interest"
                    options={[
                      'Property management',
                      'Guest experience',
                      'Marketing partnership',
                      'New residence onboarding',
                      'Press & editorial',
                    ]}
                  />
                </div>

                <LuxField
                  label="Tell us about your residence or vision"
                  name="message"
                  as="textarea"
                  rows={5}
                />

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-ivory-100/45 max-w-xs">
                    Replies within 12 hours from a senior team member.
                  </p>
                  <button
                    type="submit"
                    className="btn-shimmer group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-700 px-8 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-ink-950 shadow-glow-gold"
                  >
                    {sent ? 'Message received ✓' : 'Send Inquiry'}
                    <span className="relative z-10 inline-block transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LuxField({ label, name, type = 'text', as, rows = 4, required }) {
  const isTextarea = as === 'textarea'
  return (
    <label className="group block">
      <span className="block text-[0.65rem] uppercase tracking-[0.35em] text-ivory-100/55 mb-2">
        {label}
      </span>
      {isTextarea ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory-50 placeholder:text-ivory-100/30 outline-none transition-all focus:border-gold-400/60 focus:bg-white/[0.06] focus:shadow-glow-gold"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory-50 placeholder:text-ivory-100/30 outline-none transition-all focus:border-gold-400/60 focus:bg-white/[0.06] focus:shadow-glow-gold"
        />
      )}
    </label>
  )
}

function LuxSelect({ label, name, options }) {
  return (
    <label className="block">
      <span className="block text-[0.65rem] uppercase tracking-[0.35em] text-ivory-100/55 mb-2">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 pr-10 text-ivory-50 outline-none transition-all focus:border-gold-400/60 focus:bg-white/[0.06]"
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-ink-900 text-ivory-50">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gold-300">
          ↓
        </span>
      </div>
    </label>
  )
}
