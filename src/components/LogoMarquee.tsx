import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Grid Dynamics', type: 'NASDAQ' },
  { name: 'Cleartax', type: 'Fintech' },
  { name: 'Plum', type: 'Insurtech' },
  { name: 'Fortune 1000', type: 'Enterprises' },
  { name: 'VC Partners', type: 'Ecosystem' },
  { name: 'GDYN India', type: 'Consultancy' },
];

const LogoMarquee: React.FC = () => {
  return (
    <div className="py-16 md:py-24 border-y border-slate-300 dark:border-white/5 bg-slate-200/50 dark:bg-[#0A192F]/30 overflow-hidden group transition-colors">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Institutional Trust & Partnership Network</span>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
          style={{ willChange: 'transform' }}
          className="flex gap-16 md:gap-32 whitespace-nowrap px-16"
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <span className="font-display font-black text-3xl md:text-5xl text-[#0A192F] dark:text-white tracking-tighter italic transition-colors">{logo.name}</span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-[#FF6B35] mt-2">{logo.type}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoMarquee;