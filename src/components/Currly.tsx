import React from 'react';
import { motion } from 'framer-motion';
import { ViewType } from '../data/views';
import { CURRLY, CURRLY_INTRO } from '../data/currly';

interface CurrlyProps {
  view: ViewType;
}

const Currly: React.FC<CurrlyProps> = ({ view }) => {
  return (
    <div className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 md:gap-8 mb-10 md:mb-14"
      >
        <div className="w-12 md:w-20 h-px bg-[#FF6B35]" />
        <span className="text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em]">
          {CURRLY.eyebrow}
        </span>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-16">
        {/* Left: name, tagline, intro, summary, stack, CTA */}
        <div className="lg:w-5/12 lg:sticky lg:top-32 lg:h-fit">
          <h2 className="font-display text-6xl md:text-8xl font-black text-[#0A192F] dark:text-white italic tracking-tighter leading-[0.85] transition-colors">
            {CURRLY.name}
          </h2>
          <p className="mt-5 md:mt-6 text-2xl md:text-3xl font-display text-[#FF6B35] italic leading-tight">
            {CURRLY.tagline}
          </p>

          <p className="mt-8 text-lg md:text-xl text-slate-700 dark:text-slate-200 font-light leading-relaxed">
            {CURRLY_INTRO[view]}
          </p>
          <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            {CURRLY.summary}
          </p>

          {/* Stack chips */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {CURRLY.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-white/15 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[11px] md:text-xs font-mono lowercase tracking-tight"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={CURRLY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 text-[#0A192F] dark:text-white font-mono font-medium tracking-[0.08em] text-sm md:text-base border-b-2 border-[#FF6B35] pb-1 hover:text-[#FF6B35] transition-colors group"
          >
            <span>{CURRLY.urlLabel}</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Right: engineering decisions — the persuasive part */}
        <div className="lg:w-7/12">
          <span className="text-[11px] md:text-xs font-mono font-medium uppercase tracking-[0.3em] text-slate-400 block mb-8 md:mb-10 border-b border-slate-300 dark:border-white/10 pb-4">
            Engineering decisions
          </span>
          <div className="grid grid-cols-1 gap-5 md:gap-6">
            {CURRLY.points.map((point, i) => (
              <motion.div
                key={point.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="premium-card rounded-2xl p-7 md:p-9 bg-white dark:bg-[#182A45]/40 border border-slate-200 dark:border-white/10 hover:border-[#FF6B35]/40 transition-colors duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <span className="text-sm font-mono text-[#FF6B35] tabular-nums pt-1">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-[#0A192F] dark:text-white italic leading-tight tracking-tight transition-colors">
                      {point.label}
                    </h3>
                    <p className="mt-3 text-base md:text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currly;
