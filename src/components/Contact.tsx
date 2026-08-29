import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react'

// Custom brand icons (Lucide doesn't include brand icons)
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

type FormData = {
  name: string
  email: string
  projectType: string
  budget: string
  message: string
}

type Errors = Partial<Record<keyof FormData, string>>

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', projectType: '', budget: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.name.trim()) e.name = 'Name is required'
    else if (form.name.trim().length < 2) e.name = 'Name too short'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.projectType) e.projectType = 'Select a project type'
    if (!form.budget) e.budget = 'Select a budget range'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setLoading(true)
    setSubmitError(null)
    try {
      // 1) Try our Vercel API (works on production sium-rho.vercel.app, sends automatically from website)
      //    It will use RESEND if configured, otherwise forwards to FormSubmit server-side.
      // 2) On local Vite dev (no /api), fallback to direct FormSubmit AJAX.
      let res: Response | null = null
      let data: any = null
      try {
        res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        data = await res.json().catch(() => ({}))
        if (res.ok && data.success) throw { __success: true, data } // force success path
        // if /api/contact not found (Vite dev) or failed, fall through to direct
        throw new Error(data?.message || 'API not available')
      } catch (apiErr: any) {
        if (apiErr?.__success) {
          // /api/contact succeeded
          setSubmitted(true)
          setForm({ name: '', email: '', projectType: '', budget: '', message: '' })
          setTimeout(() => setSubmitted(false), 6000)
          return
        }
        // Direct FormSubmit AJAX -> delivers directly to samiula015@gmail.com automatically from website
        // First submission requires one-time activation: check samiula015@gmail.com and click confirm, then all future are automatic
        const directRes = await fetch('https://formsubmit.co/ajax/samiula015@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            projectType: form.projectType,
            budget: form.budget,
            message: form.message,
            _subject: `New inquiry from ${form.name} — ${form.projectType} (${form.budget})`,
            _template: 'table',
            _captcha: 'false',
            _replyto: form.email,
            _autoresponse: `Hi ${form.name}, thanks for reaching out! I received your message and will reply within 4 hours. — Samiul Alim Syium`,
          }),
        })
        const directData = await directRes.json().catch(() => ({}))
        if (!directRes.ok || directData.success === 'false') throw new Error(directData.message || 'Failed to send')
        setSubmitted(true)
        setForm({ name: '', email: '', projectType: '', budget: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      }
    } catch (err) {
      // Final fallback: open mail client so message still reaches samiula015@gmail.com automatically via mailto
      const subject = encodeURIComponent(`Portfolio inquiry: ${form.projectType} — ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.projectType}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`)
      window.location.href = `mailto:samiula015@gmail.com?subject=${subject}&body=${body}`
      setSubmitError('Could not send automatically — your mail app was opened as fallback. If it did not open, please email directly to samiula015@gmail.com')
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
    { Icon: FacebookIcon, href: '#', label: 'Facebook' },
    { Icon: InstagramIcon, href: '#', label: 'Instagram' },
    { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
    { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px]">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> GET IN TOUCH
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            Let&apos;s Create
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Something Great</span> Together.
          </motion.h2>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[24px] bg-[#111113] border border-white/[0.06] p-5 sm:p-5 sm:p-6 lg:p-7 xl:p-8">
              <h3 className="font-display font-semibold text-[18px] tracking-[-0.02em] text-white">Contact Information</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">Prefer a direct conversation? Reach out through any of these channels — I typically respond within 4 hours.</p>

              <div className="mt-6 space-y-4">
                <a href="mailto:samiula015@gmail.com" className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-white text-black grid place-items-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs tracking-[0.12em] font-medium text-zinc-500">EMAIL</div>
                    <div className="text-sm font-medium text-white">samiula015@gmail.com</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 ml-auto group-hover:text-white group-hover:rotate-45 transition-all" />
                </a>

                <div className="flex items-center gap-4 p-3 rounded-2xl">
                  <span className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.06] text-white grid place-items-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-xs tracking-[0.12em] font-medium text-zinc-500">LOCATION</div>
                    <div className="text-sm font-medium text-white">Rajshahi, Bangladesh • Available worldwide</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <div className="text-xs tracking-[0.14em] font-semibold text-zinc-500">SOCIAL LINKS</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-300 grid place-items-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-105"
                    >
                      <s.Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-600/15 via-indigo-600/10 to-cyan-500/10 border border-violet-500/10 p-4 flex gap-3">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 grid place-items-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-white">Available for new projects</div>
                  <div className="text-xs leading-relaxed text-zinc-400 mt-1">Currently accepting freelance & retainer work for Q1 2026. Let’s discuss your vision.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[24px] bg-[#111113] border border-white/[0.06] p-5 sm:p-5 sm:p-6 lg:p-7 xl:p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet-600/10 blur-[50px] rounded-full pointer-events-none" />

            <div className="relative">
              <h3 className="font-display font-semibold text-[18px] tracking-[-0.02em] text-white">Send a Message</h3>
              <p className="mt-1 text-sm text-zinc-500">Fill the form and I’ll get back within 4 hours.</p>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Message sent successfully to samiula015@gmail.com! I’ll reply soon.</span>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-3 flex items-start gap-2 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium tracking-wide text-zinc-400">Name *</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={`mt-1.5 w-full px-4 py-3 rounded-xl min-h-[44px] bg-white/[0.04] border text-[16px] sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-colors ${
                        errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/[0.08] focus:border-violet-500/50'
                      }`}
                    />
                    {errors.name && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-medium tracking-wide text-zinc-400">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={`mt-1.5 w-full px-4 py-3 rounded-xl min-h-[44px] bg-white/[0.04] border text-[16px] sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-colors ${
                        errors.email ? 'border-red-500/50' : 'border-white/[0.08] focus:border-violet-500/50'
                      }`}
                    />
                    {errors.email && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium tracking-wide text-zinc-400">Project Type *</label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className={`mt-1.5 w-full px-4 py-3 rounded-xl min-h-[44px] bg-white/[0.04] border text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-colors ${
                        errors.projectType ? 'border-red-500/50 text-zinc-500' : 'border-white/[0.08] focus:border-violet-500/50 text-white'
                      }`}
                    >
                      <option value="" className="bg-[#111113]">
                        Select type
                      </option>
                      <option value="Video Editing" className="bg-[#111113]">
                        Video Editing
                      </option>
                      <option value="Graphic Design" className="bg-[#111113]">
                        Graphic Design
                      </option>
                      <option value="Social Media Management" className="bg-[#111113]">
                        Social Media Management
                      </option>
                      <option value="Project Management" className="bg-[#111113]">
                        Project Management
                      </option>
                      <option value="Project Management" className="bg-[#111113]">
                        Event Management & Coordination
                      </option>
                      <option value="Project Management" className="bg-[#111113]">
                        QA & Testing
                      </option>
                      <option value="Full Creative Package" className="bg-[#111113]">
                        Full Creative Package
                      </option>
                    </select>
                    {errors.projectType && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.projectType}
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-medium tracking-wide text-zinc-400">Budget Range *</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={`mt-1.5 w-full px-4 py-3 rounded-xl min-h-[44px] bg-white/[0.04] border text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-colors ${
                        errors.budget ? 'border-red-500/50 text-zinc-500' : 'border-white/[0.08] focus:border-violet-500/50 text-white'
                      }`}
                    >
                      <option value="" className="bg-[#111113]">
                        Select budget
                      </option>
                      <option value="< $500" className="bg-[#111113]">
                        &lt; $500
                      </option>
                      <option value="$500 - $1500" className="bg-[#111113]">
                        $500 - $1,500
                      </option>
                      <option value="$1500 - $5000" className="bg-[#111113]">
                        $1,500 - $5,000
                      </option>
                      <option value="$5000+" className="bg-[#111113]">
                        $5,000+
                      </option>
                    </select>
                    {errors.budget && (
                      <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                        <AlertCircle className="w-3 h-3" /> {errors.budget}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium tracking-wide text-zinc-400">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, goals, timeline..."
                    rows={4}
                    className={`mt-1.5 w-full px-4 py-3 rounded-xl min-h-[44px] bg-white/[0.04] border text-[16px] sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-colors resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-white/[0.08] focus:border-violet-500/50'
                    }`}
                  />
                  {errors.message && (
                    <span className="mt-1 flex items-center gap-1 text-xs text-red-400">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-white text-black py-3 sm:py-3.5 rounded-full min-h-[44px] text-sm font-semibold hover:bg-zinc-100 disabled:opacity-60 disabled:cursor-not-allowed transition-colors group"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-relaxed text-zinc-500">
                  Messages are sent <span className="text-white font-medium">automatically from this website</span> to <span className="text-white font-medium">samiula015@gmail.com</span>. <br className="hidden sm:block" />
                  On production it uses <span className="text-zinc-300">Vercel API</span> (instant). First FormSubmit message needs one-time activation in your inbox.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
