import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Play, Sparkles, ExternalLink } from 'lucide-react'
import { portfolioProjects, portfolioFilters, type PortfolioCategory, type PortfolioProject } from '../data/portfolioData'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | 'All'>('All')
  const [selected, setSelected] = useState<PortfolioProject | null>(null)

  const filtered = activeFilter === 'All' ? portfolioProjects : portfolioProjects.filter((p) => p.category === activeFilter)

  return (
    <section id="portfolio" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-28 bg-[#08080A] border-t border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-[11px] tracking-[0.16em] font-medium text-zinc-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" /> FEATURED WORK
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 font-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px] leading-[0.95] tracking-[-0.03em] text-white"
            >
              Selected Projects &
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Creative Work.</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {portfolioFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeFilter === f
                    ? 'bg-white text-black border-white shadow-lg'
                    : 'bg-white/[0.06] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.12]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(project)}
                className="group relative rounded-[24px] overflow-hidden bg-[#111113] border border-white/[0.06] cursor-pointer hover:border-white/[0.12] transition-colors duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-xs font-medium text-white">
                      {project.category}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white text-black grid place-items-center group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div className="px-3 py-2 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 hidden sm:flex items-center gap-2">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                      <span className="text-xs font-medium text-white">View Project</span>
                    </div>
                    <span className={`hidden sm:inline-flex px-2.5 py-1 rounded-full bg-gradient-to-br ${project.color} text-white text-[11px] font-bold tracking-wide`}>
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono tracking-[0.14em] text-zinc-500">{project.id} —</span>
                    <span className={`h-px w-6 bg-gradient-to-r ${project.color} opacity-60`} />
                    <span className="text-xs font-medium tracking-wide text-zinc-400">{project.category}</span>
                  </div>
                  <h3 className="font-display font-semibold text-[18px] tracking-[-0.02em] text-white group-hover:text-violet-200 transition-colors">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-zinc-500">No projects in this category yet.</div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 grid place-items-center p-4 lg:p-6 pointer-events-none"
            >
              <div className="pointer-events-auto w-full max-w-[900px] max-h-[90vh] overflow-hidden rounded-[28px] bg-[#0F0F12] border border-white/[0.08] shadow-2xl flex flex-col">
                <div className="relative h-[280px] lg:h-[380px] flex-shrink-0 overflow-hidden">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/40 to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold">{selected.category}</span>
                      <span className={`px-3 py-1.5 rounded-full bg-gradient-to-br ${selected.color} text-white text-xs font-bold`}>{selected.year}</span>
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white grid place-items-center hover:bg-black/80 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 lg:p-8">
                    <div className="flex items-center gap-2 text-xs font-mono tracking-[0.14em] text-white/70">
                      <Sparkles className="w-3.5 h-3.5" /> PROJECT {selected.id}
                    </div>
                    <h3 className="mt-2 font-display font-bold text-[28px] lg:text-[36px] leading-none tracking-[-0.03em] text-white">
                      {selected.title}
                    </h3>
                    <p className="mt-3 text-sm lg:text-[15px] leading-relaxed text-zinc-300 max-w-[640px]">{selected.longDescription}</p>
                  </div>
                </div>

                <div className="overflow-auto p-4 sm:p-5 lg:p-6 lg:p-8 space-y-6 scrollbar-hide">
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-[11px] tracking-[0.16em] font-semibold text-zinc-500">SERVICES</h4>
                      <ul className="mt-3 space-y-1.5">
                        {selected.services.map((s) => (
                          <li key={s} className="text-sm text-zinc-300 flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-violet-500" /> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[11px] tracking-[0.16em] font-semibold text-zinc-500">TOOLS USED</h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {selected.tools.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.06] text-xs font-medium text-zinc-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[11px] tracking-[0.16em] font-semibold text-zinc-500">RESULTS</h4>
                      <ul className="mt-3 space-y-1.5">
                        {selected.results.map((r) => (
                          <li key={r} className="text-sm text-emerald-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> View Live Project
                    </button>
                    <button
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/[0.12] bg-white/[0.06] text-white hover:bg-white/[0.1] transition-colors"
                    >
                      Close <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
