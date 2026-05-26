import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

// ============================================================
// CONTACT DETAILS — easy to update when client provides them
// ============================================================
const CONTACT = {
  // When phone/email arrive, just paste them here.
  // Set value to a real string and `live: true` to make it clickable.
  phone: { value: '+1 (602) 848-1866', live: true },
  email: { value: 'Coming soon',   live: false },
  address: {
    line1: '200 Monroe St.',
    line2: 'Phoenix, Arizona 85003',
  },
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: 'Property Management',
    message: '',
  })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', interest: 'Property Management', message: '' })
    }, 4000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 md:py-48 px-6 overflow-hidden bg-gradient-to-b from-ink-950 via-emerald-900/20 to-ink-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob blob-emerald w-[600px] h-[600px] -left-40 top-0 opacity-30" />
        <div className="blob blob-gold w-[400px] h-[400px] right-0 bottom-0 opacity-20" />
        <div className="blob blob-coral w-[300px] h-[300px] right-1/4 top-1/3 opacity-15" />
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
            06 · The Invitation
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — text + details */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-7xl leading-[1.02] text-ivory tracking-tight"
            >
              Begin a
              <br />
              <span className="italic text-gold-shimmer font-light">conversation</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
              className="mt-8 font-sans text-base md:text-lg text-ivory/70 font-light leading-relaxed max-w-md"
            >
              We meet each owner over a single, unhurried introduction. Tell us
              about your property — or your aspirations — and we’ll be in touch
              within one business day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-14 space-y-6"
            >
              {/* Phone */}
              {CONTACT.phone.live ? (
                <a
                  href={`tel:${CONTACT.phone.value.replace(/[^\d+]/g, '')}`}
                  className="group flex items-start gap-5 p-5 -mx-5 hover:bg-ivory/[0.02] transition-colors rounded-sm"
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-gold-400/30 text-gold-300 group-hover:border-gold-300 group-hover:bg-gold-400/10 transition-all">
                    <Phone size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-1">
                      Concierge Line
                    </div>
                    <div className="font-display text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                      {CONTACT.phone.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-5 p-5 -mx-5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-gold-400/30 text-gold-300/60">
                    <Phone size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-1">
                      Concierge Line
                    </div>
                    <div className="font-display text-2xl text-ivory/70 italic">
                      {CONTACT.phone.value}
                    </div>
                  </div>
                </div>
              )}

              {/* Email */}
              {CONTACT.email.live ? (
                <a
                  href={`mailto:${CONTACT.email.value}`}
                  className="group flex items-start gap-5 p-5 -mx-5 hover:bg-ivory/[0.02] transition-colors rounded-sm"
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-gold-400/30 text-gold-300 group-hover:border-gold-300 group-hover:bg-gold-400/10 transition-all">
                    <Mail size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-1">
                      Private Inquiries
                    </div>
                    <div className="font-display text-2xl text-ivory group-hover:text-gold-300 transition-colors">
                      {CONTACT.email.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-5 p-5 -mx-5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-gold-400/30 text-gold-300/60">
                    <Mail size={15} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-1">
                      Private Inquiries
                    </div>
                    <div className="font-display text-2xl text-ivory/70 italic">
                      {CONTACT.email.value}
                    </div>
                  </div>
                </div>
              )}

              {/* Address */}
              <div className="flex items-start gap-5 p-5 -mx-5">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-gold-400/30 text-gold-300">
                  <MapPin size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-1">
                    Studio
                  </div>
                  <div className="font-display text-2xl text-ivory">
                    {CONTACT.address.line1}
                  </div>
                  <div className="font-sans text-sm text-ivory/60 mt-1">
                    {CONTACT.address.line2}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="relative glass-strong p-8 md:p-12 rounded-sm overflow-hidden"
            >
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-gold-400/40" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-gold-400/40" />

              {!sent ? (
                <form onSubmit={submit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-3">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-transparent border-b border-ivory/20 focus:border-gold-400 outline-none py-3 font-sans text-base text-ivory placeholder:text-ivory/30 transition-colors"
                        placeholder="Alessandra Marchetti"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-3">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent border-b border-ivory/20 focus:border-gold-400 outline-none py-3 font-sans text-base text-ivory placeholder:text-ivory/30 transition-colors"
                        placeholder="alessandra@estate.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-3">
                      I’m interested in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Property Management',
                        'Booking a Stay',
                        'Press & Media',
                        'Partnerships',
                      ].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setForm({ ...form, interest: opt })}
                          className={`px-4 py-2 font-mono text-[10px] tracking-ultra uppercase border transition-all duration-300 ${
                            form.interest === opt
                              ? 'border-gold-400 bg-gold-400/10 text-gold-300'
                              : 'border-ivory/15 text-ivory/60 hover:border-ivory/40'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-ultra uppercase text-ivory/55 mb-3">
                      Tell us a little
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b border-ivory/20 focus:border-gold-400 outline-none py-3 font-sans text-base text-ivory placeholder:text-ivory/30 transition-colors resize-none"
                      placeholder="A few sentences about your property or plans..."
                    />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <p className="font-mono text-[9px] tracking-ultra uppercase text-ivory/45 max-w-xs">
                      Your message is private and reviewed by our founders.
                    </p>
                    <button type="submit" className="btn-luxe-primary group">
                      <span>Send Inquiry</span>
                      <Send
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-300">
                    <CheckCircle2 size={28} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-4xl text-gold-shimmer mb-3">
                    Beautifully received.
                  </h3>
                  <p className="font-sans text-base text-ivory/70 max-w-md mx-auto font-light leading-relaxed">
                    A member of our concierge will be in touch within one
                    business day. In the meantime — breathe in, the ocean is
                    closer than you think.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
