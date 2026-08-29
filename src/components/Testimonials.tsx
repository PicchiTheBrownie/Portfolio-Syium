import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder',
    company: 'Bloom & Co.',
    text: 'Samiul Alim Syium transformed our social presence completely. The video edits are cinematic, the designs are spot-on, and project management is flawless. Our engagement tripled in 3 months.',
    avatar: 'https://i.pravatar.cc/100?img=5',
    rating: 5,
  },
  {
    name: 'Ahmed Rahman',
    role: 'Marketing Director',
    company: 'TechScale',
    text: 'Working with Syium feels like having an in-house creative agency. Fast communication, organized workflow, and results that actually move the needle. Highly recommended.',
    avatar: 'https://i.pravatar.cc/100?img=8',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Content Lead',
    company: 'Creator Studio',
    text: 'The best freelance experience we’ve had. From YouTube editing to campaign management — everything is delivered on time with exceptional attention to detail and creative flair.',
    avatar: 'https://i.pravatar.cc/100?img=9',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CEO',
    company: 'Launchpad',
    text: 'Syium doesn’t just execute — he strategizes. Our launch campaign assets outperformed every previous effort. Professional, proactive, and incredibly talented.',
    avatar: 'https://i.pravatar.cc/100?img=15',
    rating: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setIndex((p) => (p + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#070709] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> TESTIMONIALS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
            >
              What People Say
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">About My Work.</span>
            </motion.h2>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.08] text-white grid place-items-center hover:bg-white/[0.1] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white text-black grid place-items-center hover:bg-zinc-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-5 sm:p-6 lg:p-7 flex flex-col hover:border-white/[0.10] transition-colors"
            >
              <Quote className="w-8 h-8 text-white/[0.08] absolute top-6 right-6" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-300 flex-1">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white leading-none">{t.name}</div>
                  <div className="text-xs text-zinc-500 mt-1">
                    {t.role} • {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden mt-8 relative overflow-hidden">
          <div className="relative h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-[20px] bg-[#111113] border border-white/[0.06] p-5 sm:p-6 lg:p-7 flex flex-col"
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[index].rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-300 flex-1">“{testimonials[index].text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white leading-none">{testimonials[index].name}</div>
                    <div className="text-xs text-zinc-500 mt-1">
                      {testimonials[index].role} • {testimonials[index].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] text-white grid place-items-center">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} className="w-9 h-9 rounded-full bg-white text-black grid place-items-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
