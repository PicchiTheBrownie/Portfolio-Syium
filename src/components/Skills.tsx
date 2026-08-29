import { motion } from 'framer-motion'
import { Video, Palette, Kanban, Share2 } from 'lucide-react'

const skillGroups = [
  {
    category: 'Video Editing',
    icon: Video,
    color: 'from-violet-600 to-indigo-600',
    tools: ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'DaVinci Resolve'],
  },
  {
    category: 'Graphic Design',
    icon: Palette,
    color: 'from-fuchsia-600 to-pink-600',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Lightroom'],
  },
  {
    category: 'Project Management',
    icon: Kanban,
    color: 'from-cyan-600 to-blue-600',
    tools: ['Notion', 'ClickUp', 'Monday.com'],
  },
  {
    category: 'Social Media',
    icon: Share2,
    color: 'from-orange-500 to-rose-500',
    tools: ['Meta Business Suite', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube Studio', 'Discord'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#070709] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> TOOLS & SKILLS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
          >
            The Creative <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Toolkit.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-[15px] leading-relaxed text-zinc-400"
          >
            Carefully curated tools and platforms that power every project — from concept to final delivery.
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-4 sm:p-5 lg:p-6 hover:border-white/[0.10] hover:bg-[#151519] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-gradient-to-br ${group.color} transition-opacity pointer-events-none`} />
                <div className="relative">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-xl bg-gradient-to-br ${group.color} grid place-items-center mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-[15px] tracking-[-0.02em] text-white">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-zinc-300 hover:bg-white/[0.1] hover:text-white transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
