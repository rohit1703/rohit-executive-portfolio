import React from 'react';
import { motion } from 'framer-motion';

const FACTS: [string, string][] = [
  ['Based in', 'Bengaluru, India'],
  ['Languages', 'English · Hindi · Telugu'],
  ['Availability', 'Remote & relocation'],
];

// "The short version" — the resume summary, given a real portrait moment.
const AboutIntro: React.FC = () => {
  return (
    <div className="px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_1.15fr] gap-10 lg:gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-sm mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#FF6B35]/25 to-transparent blur-2xl -z-10" />
          <div className="rounded-[28px] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
            <img
              src="/rohit.webp"
              alt="Rohit Mallavarapu"
              width="800"
              height="1000"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/5] object-top"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-[#0A192F]/90 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full pl-3 pr-4 py-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#0A192F] dark:text-white">
              Open to roles
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em] mb-7">
            <span className="w-10 md:w-12 h-px bg-[#FF6B35]" />
            The short version
          </div>
          <p className="text-2xl md:text-4xl font-display font-black italic tracking-tight leading-[1.15] text-[#0A192F] dark:text-white transition-colors">
            Six years in B2B marketing and partnerships, across a NASDAQ firm, a Tiger Global–backed insurtech, and a fintech, <span className="text-[#FF6B35]">most of it built from or near zero.</span>
          </p>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-xl">
            Today I'm the sole marketing owner for Grid Dynamics India, and I build the product too: Currly, an AI workflow platform I designed and shipped solo.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-10 gap-y-5">
            {FACTS.map(([k, v]) => (
              <div key={k}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF6B35] mb-1.5">{k}</div>
                <div className="text-sm text-slate-700 dark:text-slate-200 font-medium">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutIntro;
