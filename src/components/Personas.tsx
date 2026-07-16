import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { CAREER_STATS, PARTNER_PERSONAS } from '../data/personas';

const Personas: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-6 md:mt-8 rounded-2xl md:rounded-[28px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 p-8 md:p-14 shadow-sm transition-colors"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        {/* The numbers */}
        <div className="lg:w-2/5 flex-shrink-0">
          <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#FF6B35] block mb-6">
            The range
          </span>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-12 lg:gap-8">
            {CAREER_STATS.map((stat) => (
              <div key={stat.suffix + stat.value}>
                <div className="text-5xl md:text-7xl font-display font-black italic text-[#0A192F] dark:text-white leading-none transition-colors">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm md:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xs">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The personas */}
        <div className="lg:w-3/5 lg:border-l lg:border-slate-200 lg:dark:border-white/10 lg:pl-16">
          <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-5">
            Partnerships built across
          </p>
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {PARTNER_PERSONAS.map((persona) => (
              <span
                key={persona}
                className="font-mono text-[11px] md:text-xs tracking-tight rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 px-3.5 py-2 hover:border-[#FF6B35]/50 hover:text-[#FF6B35] transition-colors"
              >
                {persona}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Personas;
