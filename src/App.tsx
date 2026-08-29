import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Values from './components/Values'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) return
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = !!target.closest('a, button, [role="button"]')
      setHovering(isInteractive)
    }
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [visible])

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null
  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] hidden lg:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hovering ? 0 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/30 mix-blend-difference pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: 1,
          backgroundColor: hovering ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.4 }}
      />
    </>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 origin-left z-[60]" style={{ scaleX }} />
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-white selection:bg-violet-500/30">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Experience />
        <Skills />
        <Values />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
