import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experiences } from '../data/experienceData'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> PROFESSIONAL JOURNEY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
            >
              Building Creative
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Experiences Through</span>
              <br /> Real Projects.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="max-w-[420px] text-[15px] leading-relaxed text-zinc-400 lg:text-right"
          >
            A journey of continuous learning, creative exploration, and delivering measurable results for ambitious brands.
          </motion.p>
        </div>

        <div className="relative mt-12">
          {/* line */}
          <div className="absolute left-[16px] lg:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-white/[0.06] to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-8"
              >
                {/* left - period */}
                <div className="relative pl-10 lg:pl-0 lg:text-right lg:pr-10">
                  <div className={`absolute left-[10px] lg:left-auto lg:right-[-7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${exp.color} border-2 border-[#0A2E3B] shadow-[0_0_0_4px_rgba(139,92,246,0.15)]`} />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-zinc-300">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </div>
                  <div className="hidden lg:block mt-3 text-xs text-zinc-500 flex items-center justify-end gap-1">
                    <MapPin className="w-3 h-3" /> Dhaka • Remote
                  </div>
                </div>

                {/* card */}
                <div className="ml-10 lg:ml-0 group relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-5 sm:p-6 lg:p-7 hover:border-white/[0.10] hover:bg-[#151519] transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-gradient-to-br ${exp.color} transition-opacity pointer-events-none`} />
                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display font-semibold text-[18px] tracking-[-0.02em] text-white flex items-center gap-2">
                          <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${exp.color} grid place-items-center flex-shrink-0`}>
                            <Briefcase className="w-4 h-4 text-white" />
                          </span>
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-violet-300">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">
                        {i === 0 ? 'Current' : `${2024 - i} Years`}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">{exp.description}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2.5 text-sm text-zinc-300">
                          <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
