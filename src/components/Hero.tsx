import React from 'react';
import { motion } from 'framer-motion';
import { useLenis } from 'lenis/react';
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

// Calm, editorial ease-out (expo-ish). No bounce, no elastic.
const EASE = [0.16, 1, 0.3, 1] as const;

const Hero: React.FC<HeroProps> = ({ view }) => {
  const data = HERO_DATA[view];
  const lenis = useLenis();

  const breakAt = data.headline.split(' ').length;
  const words = [
    ...data.headline.split(' ').map((w) => ({ w, accent: false })),
    ...data.headlineAccent.split(' ').map((w) => ({ w, accent: true })),
  ];
  const afterHeadline = 0.15 + words.length * 0.07;

  const goTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: id === 'footer' ? 0 : -80 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[1.12fr_.88fr] gap-12 lg:gap-16 items-center">
        {/* Left: thesis */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-4 text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em] mb-7"
          >
            <span className="w-10 md:w-12 h-px bg-[#FF6B35]" />
            {data.badge}
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,11vw,5rem)] lg:text-[clamp(3.25rem,5.6vw,5.8rem)] font-black italic uppercase tracking-tighter leading-[0.9] text-[#0A192F] dark:text-white transition-colors">
            {words.map((it, i) => (
              <React.Fragment key={i}>
                {i === breakAt && <br />}
                <motion.span
                  className={`inline-block ${it.accent ? 'text-[#FF6B35]' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.9, ease: EASE }}
                >
                  {it.w}&nbsp;
                </motion.span>
              </React.Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: afterHeadline + 0.1, duration: 0.9, ease: EASE }}
            className="mt-7 max-w-xl text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: afterHeadline + 0.25, duration: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#footer"
              onClick={goTo('footer')}
              className="bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] font-display font-bold text-base md:text-lg px-7 py-4 rounded-2xl hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white transition-colors shadow-lg"
            >
              Get in touch
            </a>
            <a
              href="#impact"
              onClick={goTo('impact')}
              className="border border-[#0A192F] dark:border-white/40 text-[#0A192F] dark:text-white font-display font-bold text-base md:text-lg px-7 py-4 rounded-2xl hover:border-[#FF6B35] hover:text-[#FF6B35] transition-colors inline-flex items-center gap-2"
            >
              See the work
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
        </div>

        {/* Right: live proof — the product I'm building */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: EASE }}
          whileHover={{ y: -6, transition: { duration: 0.4, ease: EASE } }}
          className="relative rounded-2xl md:rounded-[28px] bg-white dark:bg-[#182A45]/50 border border-slate-200 dark:border-white/10 p-8 md:p-10 shadow-2xl transition-shadow duration-500 hover:shadow-[0_40px_90px_-35px_rgba(255,107,53,0.4)]"
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
