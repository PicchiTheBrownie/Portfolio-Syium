import { motion } from 'framer-motion'
import { Video, Palette, Kanban, Share2, ArrowUpRight, Check } from 'lucide-react'

const services = [
  {
    number: '01',
    icon: Video,
    title: 'Video Editing',
    description: 'Creating engaging, cinematic, and high-performing video content for brands, businesses, social media, YouTube, and digital campaigns.',
    skills: ['Short Form Videos', 'YouTube Editing', 'Reels & TikTok', 'Promotional Videos', 'Motion Graphics', 'Color Grading', 'Storytelling', 'Cinematic Editing'],
    gradient: 'from-violet-600 to-indigo-600',
    accent: 'bg-violet-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Graphic Design',
    description: 'Designing visually powerful graphics that help brands communicate clearly and stand out across digital platforms.',
    skills: ['Social Media Design', 'Branding', 'Marketing Creatives', 'Posters', 'Thumbnails', 'Advertisement Design', 'Presentation Design'],
    gradient: 'from-fuchsia-600 to-pink-600',
    accent: 'bg-fuchsia-500',
  },
  {
    number: '03',
    icon: Kanban,
    title: 'Project Management',
    description: 'Managing creative projects from planning to execution while ensuring clear communication, organized workflows, and on-time delivery.',
    skills: ['Project Planning', 'Team Coordination', 'Task Management', 'Client Communication', 'Workflow Management', 'Deadline Tracking', 'Quality Control', 'Reporting'],
    gradient: 'from-cyan-600 to-blue-600',
    accent: 'bg-cyan-500',
  },
  {
    number: '04',
    icon: Share2,
    title: 'Social Media Management',
    description: 'Building and managing strong digital presence through strategic content planning, creative campaigns, and consistent brand communication.',
    skills: ['Content Strategy', 'Content Calendar', 'Social Media Growth', 'Community Management', 'Campaign Planning', 'Analytics', 'Brand Positioning', 'Performance Tracking'],
    gradient: 'from-orange-500 to-pink-500',
    accent: 'bg-orange-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#070709] border-t border-white/[0.04]">
      {/* subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[80px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> WHAT I DO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
            >
              Creative Services That
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Drive Results.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[420px] text-[15px] leading-relaxed text-zinc-400"
          >
            A multidisciplinary approach combining creativity, strategy, and execution — built to help brands grow, engage, and convert.
          </motion.p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-[28px] bg-[#111113] border border-white/[0.06] p-5 sm:p-5 sm:p-6 lg:p-7 xl:p-8 overflow-hidden hover:border-white/[0.10] transition-all duration-500"
            >
              {/* hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 bg-gradient-to-br ${s.gradient} pointer-events-none`} />
              <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${s.gradient} opacity-[0.08] blur-[50px] rounded-full pointer-events-none group-hover:opacity-[0.14] transition-opacity duration-500`} />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.gradient} grid place-items-center shadow-lg`}>
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-display font-bold text-[13px] tracking-[0.14em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    {s.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display font-semibold text-[22px] tracking-[-0.02em] text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-zinc-400 line-clamp-3">{s.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-zinc-300"
                    >
                      <Check className="w-3 h-3 text-zinc-500" /> {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all duration-300">
                  Explore service <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
