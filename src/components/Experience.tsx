import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar, Users, ExternalLink } from 'lucide-react'

const experiences = [
  {
    period: '2024 — Present',
    role: 'Executive Director & Creative Digital Specialist',
    company: 'Freelance & Collaborative Projects',
    color: 'from-amber-400 via-yellow-500 to-orange-600',
    description:
      'Leading creative and digital projects while managing business operations, client relationships, project delivery, and multidisciplinary creative workflows.',
    responsibilities: [
      'Leading creative, digital, and business projects from concept to delivery',
      'Managing video editing, graphic design, and social media campaigns',
      'Coordinating teams, clients, events, timelines, and project workflows',
      'Overseeing quality assurance, testing, and final deliverables',
      'Developing strategies for brand growth, content, and digital presence',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Creative Project & Media Specialist',
    company: 'Independent Studio',
    color: 'from-cyan-600 to-blue-600',
    description:
      'Managing creative production and digital campaigns across video, design, social media, events, and project coordination.',
    responsibilities: [
      'Delivered video editing and graphic design projects for diverse clients',
      'Planned and managed social media content and campaigns',
      'Coordinated projects, events, teams, and client requirements',
      'Built creative workflows for consistent and efficient delivery',
      'Performed quality checks across digital content and deliverables',
    ],
  },
  {
    period: '2022 — 2023',
    role: 'Creative Content & Digital Professional',
    company: 'Digital Studio',
    color: 'from-violet-600 to-indigo-600',
    description:
      'Developed creative content and supported digital projects across design, video, social media, event coordination, and quality testing.',
    responsibilities: [
      'Created video content, graphics, branding assets, and social media creatives',
      'Supported content planning and social media management',
      'Assisted with project and event coordination',
      'Developed organized creative workflows and digital assets',
      'Learned and applied QA, testing, and quality-control processes',
    ],
  },
]

const academics = [
  {
    period: '2025 — 2027',
    location: 'Rajshahi, Bangladesh',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajshahi University School & College',
    status: 'Ongoing',
    color: 'from-cyan-500 to-blue-500',
    description: 'Currently pursuing HSC in the Humanities group, building on the analytical foundation from SSC.',
    highlights: [
      'Group: Humanities',
      'Expected exam: 2027',
    ],
  },
  {
    period: '2023 — 2025',
    location: 'Rajshahi, Bangladesh',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Rajshahi University School & College',
    status: 'Completed',
    color: 'from-violet-500 to-fuchsia-500',
    description: 'Completed SSC in the Science group, finishing with a strong result.',
    highlights: [
      'Group: Science',
      'Result: GPA 4.50 / 5.00',
    ],
  },
]

const communities = [
  {
    name: 'Tribrontro',
    role: 'Founder & CEO',
    description:
      "Tribrontro is a fashion-focused clothing brand built around contemporary style, creative expression, and quality-driven products. As Founder & CEO, I oversee the brand's creative direction, business operations, marketing, and overall growth strategy.",
    color: 'from-orange-500 to-rose-500',
    roleColor: 'text-orange-300',
    link: 'https://www.instagram.com/tribrontro/?hl=en',
  },
  {
    name: 'G Lab',
    role: 'Administrator',
    description: 'A creative gaming-focused organization working across game testing, quality assurance, digital content, and community-driven initiatives, with a focus on building quality experiences and collaborative projects.',
    color: 'from-[#c8ff3e] to-emerald-500',
    roleColor: 'text-[#c8ff3e]',
    link: 'https://glab-phi.vercel.app/',
  },
  {
    name: 'Bangladesh Socio-Cultural Forum (BSCF)',
    role: 'Associate Member, Youth Network',
    description: 'A youth-focused socio-cultural platform promoting cultural awareness, community engagement, and social development through collaborative initiatives and activities.',
    color: 'from-pink-500 to-amber-500',
    roleColor: 'text-pink-300',
    link: 'https://bscf.dev/',
  },
  // Add more communities the same way — just copy the object shape above.
  // {
  //   name: 'ADD COMMUNITY NAME',
  //   role: 'ADD YOUR ROLE',
  //   description: 'ADD A SHORT DESCRIPTION.',
  //   color: 'from-cyan-500 to-blue-500',
  //   roleColor: 'text-cyan-300',
  //   link: null,
  // },
]

export default function Experience() {
  return (
    <>
      {/* ================= PROFESSIONAL JOURNEY ================= */}
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
                      <MapPin className="w-3 h-3" /> Rajshahi • Remote
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

      {/* ================= ACADEMIC TIMELINE ================= */}
      <section id="academic" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> ACADEMIC TIMELINE
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
              >
                Building A Foundation
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Through Continuous</span>
                <br /> Learning.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="max-w-[420px] text-[15px] leading-relaxed text-zinc-400 lg:text-right"
            >
              The academic path that shaped my thinking, discipline, and the foundation behind every project I take on.
            </motion.p>
          </div>

          <div className="relative mt-12">
            {/* line */}
            <div className="absolute left-[16px] lg:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-white/[0.06] to-transparent" />

            <div className="space-y-6">
              {academics.map((edu, i) => (
                <motion.div
                  key={edu.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-8"
                >
                  {/* left - period */}
                  <div className="relative pl-10 lg:pl-0 lg:text-right lg:pr-10">
                    <div className={`absolute left-[10px] lg:left-auto lg:right-[-7px] top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${edu.color} border-2 border-[#0A2E3B] shadow-[0_0_0_4px_rgba(139,92,246,0.15)]`} />
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-zinc-300">
                      <Calendar className="w-3 h-3" /> {edu.period}
                    </div>
                    <div className="hidden lg:flex mt-3 items-center justify-end gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3" /> {edu.location}
                    </div>
                  </div>

                  {/* card */}
                  <div className="ml-10 lg:ml-0 group relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-5 sm:p-6 lg:p-7 hover:border-white/[0.10] hover:bg-[#151519] transition-all duration-300 overflow-hidden">
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-gradient-to-br ${edu.color} transition-opacity pointer-events-none`} />
                    <div className="relative">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display font-semibold text-[18px] tracking-[-0.02em] text-white flex items-center gap-2">
                            <span className={`w-8 h-8 rounded-xl bg-gradient-to-br ${edu.color} grid place-items-center flex-shrink-0`}>
                              <GraduationCap className="w-4 h-4 text-white" />
                            </span>
                            {edu.degree}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-cyan-300">{edu.institution}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-bold">
                          {edu.status}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-400">{edu.description}</p>
                      <ul className="mt-4 space-y-2">
                        {edu.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm text-zinc-300">
                            <span className="mt-2 w-1 h-1 rounded-full bg-zinc-500 flex-shrink-0" />
                            <span className="leading-relaxed">{h}</span>
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

      {/* ================= COMMUNITIES & NETWORKS ================= */}
      <section id="communities" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> COMMUNITIES &amp; NETWORKS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
              >
                Growing Alongside
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent">Like-Minded People</span>
                <br /> &amp; Circles.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="max-w-[420px] text-[15px] leading-relaxed text-zinc-400 lg:text-right"
            >
              Communities and networks I'm part of — spaces where I learn, collaborate, and stay connected beyond solo work.
            </motion.p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {communities.map((c, i) => (
              <motion.div
                key={c.name + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[20px] bg-[#111113] border border-white/[0.06] p-6 lg:p-7 hover:border-white/[0.10] hover:bg-[#151519] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] bg-gradient-to-br ${c.color} transition-opacity pointer-events-none`} />
                <div className="relative">
                  <span className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center`}>
                    <Users className="w-5 h-5 text-white" />
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-[17px] tracking-[-0.02em] text-white">
                    {c.name}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${c.roleColor || 'text-zinc-300'}`}>{c.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{c.description}</p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors"
                    >
                      Explore <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}