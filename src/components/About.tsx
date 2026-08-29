import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Lightbulb, Target, Users, Award } from 'lucide-react'

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame = 0
    const duration = 1400
    const start = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * to))
      if (progress < 1) frame = requestAnimationFrame(animate)
      else setCount(to)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed', sub: 'Across diverse industries', icon: Award },
  { value: 4, suffix: '+', label: 'Core Expertise', sub: 'Multi-disciplinary', icon: Target },
  { label: 'Creative', valueLabel: 'Creative', sub: 'Problem Solver', suffix: '', icon: Lightbulb, isText: true },
  { value: 100, suffix: '%', label: 'Client Focused', sub: 'Satisfaction driven', icon: Users },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* badge + header - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 sm:gap-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> ABOUT ME
          </span>
          <h2 className="font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white max-w-[720px]">
            Creative Thinking Meets{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Strategic Execution.
            </span>
          </h2>
        </motion.div>

        {/* Centered content - no image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 sm:mt-10 lg:mt-12 max-w-[860px] mx-auto text-center"
        >
            <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[15.5px] leading-relaxed text-zinc-400">
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-zinc-200 font-medium">
              I'm a creative digital professional focused on visual content, digital experiences, and project execution.
            </p>
            <p>
              My expertise includes <span className="text-white font-medium">video editing, graphic design, social media management, project management, event management &amp; coordination, and QA &amp; testing </span>, 
              I enjoy leading creative workflows, coordinating teams, solving problems, and ensuring every project is delivered with quality, creativity, and impact.
            </p>
          </div>

          {/* stats - centered */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[640px] mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
                className="group relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] p-4 sm:p-5 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 overflow-hidden text-center sm:text-left"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-600/[0.06] to-transparent pointer-events-none" />
                <div className="relative flex flex-col items-center sm:items-start">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/[0.06] grid place-items-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-display font-bold text-[28px] leading-none tracking-[-0.02em] text-white">
                    {stat.isText ? (
                      stat.valueLabel
                    ) : (
                      <Counter to={stat.value!} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm font-semibold text-zinc-200 mt-1">{stat.label}</div>
                  <div className="text-xs text-zinc-500">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Available for new projects
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm font-medium text-zinc-300">
              Based in Rajshahi, Bangladesh • Remote worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
