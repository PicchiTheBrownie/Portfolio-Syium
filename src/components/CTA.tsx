import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[30px] overflow-hidden bg-[#0F0F12] border border-white/[0.06] p-6 sm:p-8 lg:p-12 xl:p-14 text-center">
          {/* animated gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/25 blur-[100px] rounded-full" />
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/20 blur-[100px] rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/[0.08] via-transparent to-cyan-500/[0.06]" />
            <div className="absolute inset-0 grid-pattern opacity-20" />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.08] backdrop-blur-xl text-xs font-medium tracking-wide text-white"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Let&apos;s collaborate and create something impactful
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-6 font-display font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[0.9] tracking-[-0.04em] text-white"
            >
              Have A Project
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">In Mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-4 max-w-[560px] mx-auto text-[15px] leading-relaxed text-zinc-400"
            >
              Whether you need a single video edit or a complete brand content system — I&apos;m here to help you execute with clarity, creativity, and speed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 bg-white text-black px-7 py-3 sm:py-3.5 rounded-full min-h-[44px] text-sm font-semibold hover:bg-zinc-100 transition-colors group"
              >
                Start A Project
                <span className="w-7 h-7 rounded-full bg-black text-white grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-7 py-3 sm:py-3.5 rounded-full min-h-[44px] text-sm font-semibold border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl text-white hover:bg-white/[0.1] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Let&apos;s Talk
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Response within 4 hours
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span>50+ projects delivered</span>
              <span className="hidden sm:block w-px h-4 bg-white/10" />
              <span>100% client focused</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
