import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // active section detection
      const sections = navLinks.map(l => l.href.slice(1))
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            const label = navLinks.find(l => l.href === `#${id}`)?.label || 'Home'
            setActiveSection(label)
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string, label: string) => {
    setActiveSection(label)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#070709]/70 backdrop-blur-2xl border-white/[0.06] py-3'
            : 'bg-transparent border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Logo - renamed */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home', 'Home')
            }}
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <span className="font-display font-bold text-[14px] sm:text-[17px] md:text-[18px] lg:text-[20px] tracking-[-0.02em] text-white leading-none">
              SAMIUL ALIM SYIUM
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-[1.6] transition-transform duration-300 flex-shrink-0 hidden sm:inline-block" />
          </a>

          {/* Desktop Nav - centered */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] rounded-full p-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href, link.label)
                }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.label
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeSection === link.label && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.06] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact', 'Contact')
              }}
              className="hidden lg:inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-colors group"
            >
              Let&apos;s Work Together
              <span className="w-6 h-6 rounded-full bg-black text-white grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl grid place-items-center text-white hover:bg-white/[0.1] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-[72px] left-3 right-3 z-40 lg:hidden"
            >
              <div className="bg-[#111113] border border-white/[0.06] rounded-[24px] p-4 sm:p-5 lg:p-6 shadow-2xl overflow-hidden relative">
                {/* glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-violet-600/20 blur-[60px] rounded-full pointer-events-none" />
                <nav className="flex flex-col gap-1 relative">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href, link.label)
                      }}
                      className={`px-4 py-3.5 rounded-2xl text-[15px] font-medium flex items-center justify-between transition-colors ${
                        activeSection === link.label
                          ? 'bg-white text-black'
                          : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight className={`w-4 h-4 ${activeSection === link.label ? 'text-black' : 'text-zinc-500'}`} />
                    </motion.a>
                  ))}
                </nav>
                <div className="h-px bg-white/[0.06] my-5" />
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact', 'Contact')
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-white text-black py-3 sm:py-3.5 rounded-full min-h-[44px] font-semibold hover:bg-zinc-100 transition-colors"
                >
                  Let&apos;s Work Together <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-center text-xs text-zinc-500 mt-3">
                  ● Available for freelance & projects
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
