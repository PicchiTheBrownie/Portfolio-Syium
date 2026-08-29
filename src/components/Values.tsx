import { motion } from 'framer-motion'
import { Lightbulb, Target, Workflow, Eye, MessageCircle, TrendingUp } from 'lucide-react'

const values = [
  { n: '01', icon: Lightbulb, title: 'Creative Thinking', desc: 'Turning simple ideas into visually engaging content that captures attention and tells compelling stories.', gradient: 'from-violet-600 to-indigo-600' },
  { n: '02', icon: Target, title: 'Strategic Execution', desc: 'Combining creativity with clear business objectives to ensure every asset drives measurable growth.', gradient: 'from-fuchsia-600 to-pink-600' },
  { n: '03', icon: Workflow, title: 'Organized Workflow', desc: 'Keeping projects structured, transparent, and on schedule with proven systems and clear communication.', gradient: 'from-cyan-600 to-blue-600' },
  { n: '04', icon: Eye, title: 'Attention To Detail', desc: 'Ensuring every creative asset meets professional quality standards down to the last pixel and frame.', gradient: 'from-orange-500 to-pink-500' },
  { n: '05', icon: MessageCircle, title: 'Fast Communication', desc: 'Maintaining clear, responsive communication throughout every project so you’re never left guessing.', gradient: 'from-emerald-600 to-teal-600' },
  { n: '06', icon: TrendingUp, title: 'Results Focused', desc: 'Creating content designed to support engagement, conversions, and long-term brand growth.', gradient: 'from-amber-600 to-orange-600' },
]

export default function Values() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.05] sm:leading-[0.95] tracking-[-0.03em] text-white"
          >
            Why Work <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">With Me?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-full sm:max-w-[380px] lg:max-w-[420px] text-[14px] sm:text-[15px] leading-relaxed text-zinc-400 lg:text-right"
          >
            More than execution — a thoughtful partner invested in your brand’s success and creative growth.
          </motion.p>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -2 }}
              className="group relative rounded-[16px] sm:rounded-[20px] bg-[#111113] border border-white/[0.06] p-4 sm:p-5 lg:p-6 xl:p-7 hover:border-white/[0.10] transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] bg-gradient-to-br ${v.gradient} transition-opacity pointer-events-none`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-xl bg-gradient-to-br ${v.gradient} grid place-items-center flex-shrink-0`}>
                    <v.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono tracking-[0.14em] text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0">
                    {v.n}
                  </span>
                </div>
                <h3 className="mt-4 sm:mt-5 font-display font-semibold text-[15px] sm:text-[16px] tracking-[-0.02em] text-white leading-tight">{v.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14px] leading-relaxed text-zinc-400">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
