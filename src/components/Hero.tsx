import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#070709] pt-[72px] sm:pt-[80px] lg:pt-[88px] pb-6 sm:pb-8"
    >
      {/* Background gradients - responsive sizes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-violet-600/20 sm:bg-violet-600/25 blur-[80px] sm:blur-[120px] lg:blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[700px] lg:h-[700px] bg-cyan-500/12 sm:bg-cyan-500/15 blur-[80px] sm:blur-[120px] lg:blur-[140px] rounded-full" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[320px] h-[240px] sm:w-[480px] sm:h-[320px] lg:w-[600px] lg:h-[400px] bg-indigo-600/10 blur-[60px] sm:blur-[80px] lg:blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070709]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left */}
          <div className="relative text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-xl mb-5 sm:mb-7 max-w-full"
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[9px] sm:text-[11px] md:text-xs font-medium tracking-[0.10em] sm:tracking-[0.12em] md:tracking-[0.14em] text-zinc-300 whitespace-nowrap truncate">
                AVAILABLE FOR FREELANCE & PROJECTS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[68px] leading-[0.95] sm:leading-[0.9] tracking-[-0.03em] sm:tracking-[-0.04em] text-white break-words"
            >
              <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                Samiul Alim
              </span>{' '}
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Syium
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 sm:mt-5 text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] sm:leading-[1.25] tracking-[-0.02em] font-medium text-zinc-200 max-w-[560px]"
            >
              Turning Ideas Into Powerful Digital Experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-zinc-400 max-w-[560px]"
            >
              I help brands and businesses grow through creative{' '}
              <span className="text-zinc-200">video editing</span>, strategic{' '}
              <span className="text-zinc-200">project management</span>, impactful{' '}
              <span className="text-zinc-200">graphic design</span>, and professional{' '}
              <span className="text-zinc-200">social media management</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[14px] font-semibold hover:bg-zinc-100 transition-colors group w-full sm:w-auto"
              >
                View My Work
                <span className="w-7 h-7 rounded-full bg-black text-white grid place-items-center group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3 sm:py-3.5 rounded-full min-h-[44px] text-[14px] font-semibold border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl text-white hover:bg-white/[0.1] hover:border-white/[0.18] transition-colors w-full sm:w-auto"
              >
                Let&apos;s Connect
                <Play className="w-4 h-4 fill-white flex-shrink-0" />
              </a>
            </motion.div>

            {/* Trust row - wraps on small */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              
              <div className="text-sm leading-tight">
                
                  
            
              
              </div>
            </motion.div>
          </div>

          {/* Right Visual - fully responsive */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center lg:h-[640px] lg:items-center mt-2 sm:mt-0"
          >
            {/* Glow behind - responsive - fancy cyan */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-violet-600/15 sm:from-violet-600/15 via-indigo-600/15 to-cyan-500/10 blur-[40px] sm:blur-[50px] rounded-full" />
            </div>

            {/* Main card - clean, no floating badges - responsive widths */}
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[460px] mx-auto px-2 sm:px-0">

              {/* Central visual - grayscale by default, color on hover, fully responsive */}
              <div className="group relative rounded-[24px] sm:rounded-[30px] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-white/[0.08] p-1.5 sm:p-2 shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:shadow-[0_20px_80px_rgba(0,0,0,0.6)] w-full">
                <div className="rounded-[18px] sm:rounded-[22px] overflow-hidden bg-black relative aspect-[4/5] sm:aspect-[4/4.2] md:aspect-[4/3.8] lg:aspect-[4/3.4]">
                  <img
                    src="https://img.sanishtech.com/u/dd53b2a451a8468aa4fbc2c656008f33.jpg"
                    alt="Samiul Alim Syium"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Bottom - name card always visible at bottom, no animation */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 md:p-4">
                    {/* Name card - held, no hover */}
                    <div className="flex items-center gap-2 sm:gap-3 bg-[#0F0F12]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl sm:rounded-2xl p-2 sm:p-2.5 md:p-3">
                      <img
                        src="https://img.sanishtech.com/u/dd53b2a451a8468aa4fbc2c656008f33.jpg"
                        alt="Samiul Alim Syium"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white/20 object-cover object-top flex-shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-semibold text-white leading-none truncate">SAMIUL ALIM SYIUM</div>
                        <div className="text-[11px] sm:text-xs text-zinc-400 truncate">Creative Director • Available now</div>
                      </div>
                      <div className="ml-1 sm:ml-auto flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex-shrink-0">
                        <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-medium text-emerald-400 hidden sm:inline">Online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[11px] tracking-[0.18em] text-zinc-500 font-medium">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-700 to-transparent" />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-white/15 grid place-items-center"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
