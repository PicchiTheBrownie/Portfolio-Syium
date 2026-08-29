import { motion } from 'framer-motion'
import { Search, Lightbulb, Video, Kanban, Rocket } from 'lucide-react'

const steps = [
  { n: '01', title: 'DISCOVER', desc: 'Understanding the brand, audience, goals, and project requirements through deep research and collaborative workshops.', icon: Search, color: 'from-violet-600 to-indigo-600' },
  { n: '02', title: 'STRATEGIZE', desc: 'Creating a clear creative strategy and project roadmap with milestones, deliverables, and success metrics.', icon: Lightbulb, color: 'from-fuchsia-600 to-purple-600' },
  { n: '03', title: 'CREATE', desc: 'Producing videos, graphics, and content based on the project vision with iterative feedback loops.', icon: Video, color: 'from-cyan-600 to-blue-600' },
  { n: '04', title: 'MANAGE', desc: 'Organizing workflows, communication, tasks, and timelines to keep every stakeholder aligned.', icon: Kanban, color: 'from-orange-500 to-pink-500' },
  { n: '05', title: 'DELIVER', desc: 'Final quality review and delivery of polished results, plus post-launch support and optimization.', icon: Rocket, color: 'from-emerald-600 to-teal-600' },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#070709] border-t border-white/[0.04] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[720px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> HOW I WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[52px] leading-[0.9] tracking-[-0.03em] text-white"
          >
            From Idea To{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Execution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-4 text-[15px] leading-relaxed text-zinc-400"
          >
            A proven 5-step framework that keeps projects structured, transparent, and results-driven — from first brief to final delivery.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 lg:mt-16">
          {/* vertical line desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent -translate-x-1/2" />
          {/* vertical line mobile */}
          <div className="lg:hidden absolute left-[22px] top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative flex gap-4 lg:gap-0 ${isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:text-right lg:flex-row-reverse'}`}
                >
                  {/* dot */}
                  <div className={`absolute lg:hidden left-[16px] top-7 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-[#070709] shadow-lg z-10`} />
                  <div className={`hidden lg:block absolute top-8 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} border-2 border-[#070709] shadow-lg z-10 ${isEven ? '-left-[33px]' : '-right-[33px]'}`} />

                  {/* connector arrow - desktop */}
                  <div className={`hidden lg:block absolute top-8 w-8 h-px bg-white/[0.08] ${isEven ? '-left-8' : '-right-8'}`} />

                  <div
                    className={`flex-1 ml-10 lg:ml-0 group relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-4 sm:p-5 lg:p-6 hover:border-white/[0.12] hover:bg-[#151519] transition-all duration-300 ${
                      isEven ? 'lg:ml-0' : 'lg:mr-0'
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-[0.04] transition-opacity bg-gradient-to-br ${step.color} pointer-events-none`} />
                    <div className="relative">
                      <div className={`flex items-center gap-3 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} grid place-items-center flex-shrink-0`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className={`${isEven ? '' : 'lg:text-right'}`}>
                          <div className="text-xs font-mono tracking-[0.14em] text-zinc-500">{step.n}</div>
                          <div className="font-display font-bold text-[15px] tracking-[0.06em] text-white">{step.title}</div>
                        </div>
                      </div>
                      <p className={`mt-3 text-sm leading-relaxed text-zinc-400 ${isEven ? '' : 'lg:text-right'}`}>{step.desc}</p>
                    </div>
                  </div>

                  {/* Arrow down for mobile - not last */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute left-[22px] top-[88px] w-px h-6 bg-white/[0.06] -translate-x-1/2" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
