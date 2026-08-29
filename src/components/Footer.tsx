import { MessageCircle, ArrowUpRight } from 'lucide-react'

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

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { Icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
  { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070709] pt-12 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 group">
              <span className="font-display font-bold text-[18px] sm:text-[20px] lg:text-[22px] tracking-[-0.02em] text-white leading-none">
                SAMIUL ALIM SYIUM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 group-hover:scale-[1.6] transition-transform duration-300 hidden sm:inline-block" />
            </a>
            <p className="mt-4 max-w-[360px] text-sm leading-relaxed text-zinc-400">
              Creating meaningful digital experiences through creativity and strategy — helping brands grow with purposeful design, editing, and management.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.06] text-zinc-400 grid place-items-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-[0.16em] font-semibold text-zinc-500">NAVIGATION</div>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="group inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {l.label} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 -translate-x-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-[0.16em] font-semibold text-zinc-500">GET IN TOUCH</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:samiula015@gmail.com" className="block text-zinc-400 hover:text-white transition-colors">
                samiula015@gmail.com
              </a>
              <p className="text-zinc-400">
                Dhaka, Bangladesh
                <br />
                Available worldwide • Remote
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors"
              >
                Let&apos;s Work Together <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.06] flex justify-center text-center text-xs text-zinc-500">
          <p>© 2026 Samiul Alim Syium. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
