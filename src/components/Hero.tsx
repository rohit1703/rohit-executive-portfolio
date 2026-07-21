import React from 'react';
import { motion } from 'framer-motion';
import { ViewType } from '../data/views';
import { HERO_DATA } from '../data/hero';

interface HeroProps {
  view: ViewType;
}

const KPIS: [string, string][] = [
  ['111+', 'Workflows live'],
  ['<400ms', 'p95 search'],
  ['5', 'Signal ranking'],
];

const Hero: React.FC<HeroProps> = ({ view }) => {
  const data = HERO_DATA[view];

  return (
    <div className="relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[1.12fr_.88fr] gap-12 lg:gap-16 items-center">
        {/* Left: thesis */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border-2 border-[#FF6B35]/40 shadow-lg">
                <img
                  src="/rohit.webp"
                  alt="Rohit Mallavarapu"
                  width="800"
                  height="1000"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FF6B35] border-2 border-[#F0F4F8] dark:border-[#0A192F] animate-pulse"
                title="Open to roles"
              />
            </div>
            <div>
              <div className="text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em]">
                {data.badge}
              </div>
              <div className="mt-1.5 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-mono tracking-wide">
                Rohit Mallavarapu · Bengaluru
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,11vw,5rem)] lg:text-[clamp(3.25rem,5.6vw,5.8rem)] font-black italic uppercase tracking-tighter leading-[0.9] text-[#0A192F] dark:text-white transition-colors"
          >
            {data.headline}
            <br />
            <span className="text-[#FF6B35]">{data.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-7 max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#footer"
              className="bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] font-display font-bold text-base md:text-lg px-7 py-4 rounded-2xl hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white transition-colors shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="#impact"
              className="border border-[#0A192F] dark:border-white/40 text-[#0A192F] dark:text-white font-display font-bold text-base md:text-lg px-7 py-4 rounded-2xl hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors inline-flex items-center gap-2"
            >
              See the work
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* Right: live proof — the product I'm building */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative rounded-2xl md:rounded-[28px] bg-white dark:bg-[#182A45]/50 border border-slate-200 dark:border-white/10 p-8 md:p-10 shadow-2xl"
        >
          <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-[#FF6B35] animate-pulse shadow-[0_0_0_6px_rgba(255,107,53,0.12)]" />
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#FF6B35]">
            Currently building
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-black italic tracking-tight text-[#0A192F] dark:text-white transition-colors">
            Currly
          </h2>
          <p className="mt-1 text-sm md:text-base italic text-slate-500 dark:text-slate-400">
            AI workflow platform, shipped solo
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-5">
            {KPIS.map(([n, k]) => (
              <div key={k}>
                <div className="font-display text-2xl md:text-3xl font-black italic tracking-tight text-[#0A192F] dark:text-white transition-colors">
                  {n}
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[#FF6B35]">{k}</div>
              </div>
            ))}
          </div>

          <p className="mt-7 pt-5 border-t border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
            Rebuilt a broken stack: found and fixed a{' '}
            <span className="font-mono text-[#0A192F] dark:text-white">search_path</span> bug that had silently killed semantic search in production, and cut 60MB payloads to kilobytes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
