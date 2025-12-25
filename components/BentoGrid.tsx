import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      
      {/* Card 1: Grid Dynamics - WIDE */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 premium-card rounded-[32px] md:rounded-[48px] p-8 md:p-14 flex flex-col justify-between group overflow-hidden min-h-[400px]
        bg-white dark:bg-[#182A45]/40 border border-slate-200 dark:border-white/10"
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl group-hover:bg-[#FF6B35]/20 transition-all duration-700" />
        
        <div className="relative z-10">
          <span className="text-[11px] md:text-sm font-black text-[#FF6B35] uppercase tracking-[0.3em]">Institutional Leadership</span>
          <h3 className="text-4xl md:text-6xl font-display mt-4 text-[#0A192F] dark:text-white italic leading-none transition-colors">Grid Dynamics <span className="text-[#FF6B35]">India</span></h3>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12 mt-12">
          <p className="max-w-md text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light">
            Sole Marketing Leader for a $2B+ NASDAQ-listed consultancy. 
            Transformed public brand equity and orchestrated flagship CXO activations.
          </p>
          <div className="flex flex-col items-start md:items-end flex-shrink-0">
             <div className="flex items-baseline gap-4">
               <span className="text-slate-400 dark:text-slate-500 line-through text-2xl md:text-3xl italic opacity-50 font-display">3.2</span>
               <span className="text-6xl md:text-8xl font-display text-[#0A192F] dark:text-white leading-none transition-colors">3.9</span>
             </div>
             <p className="text-[11px] md:text-[13px] uppercase tracking-widest text-[#FF6B35] font-black mt-3">Glassdoor Score</p>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Clear - (Kept Orange, so text stays dark/white fixed) */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:row-span-2 bg-[#FF6B35] rounded-[32px] md:rounded-[48px] p-10 md:p-14 flex flex-col justify-between text-[#0A192F] relative shadow-2xl overflow-hidden min-h-[500px] md:min-h-[700px]"
      >
        <div className="relative z-10">
          <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.3em] opacity-80">Revenue Engine</span>
          <h3 className="text-6xl md:text-8xl font-display mt-4">Clear</h3>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow py-12 md:py-0">
          <div className="text-[110px] lg:text-[180px] font-display leading-[0.7] tracking-tighter text-center">
            <Counter value={20} suffix="x" />
          </div>
          <p className="text-[13px] md:text-[15px] font-black uppercase tracking-[0.5em] mt-8 text-center w-full">YoY Expansion</p>
        </div>

        <div className="relative z-10">
          <div className="h-px w-full bg-[#0A192F]/20 mb-10" />
          <p className="text-xl md:text-2xl leading-tight font-bold">
            Scaled partner ecosystems to 54+ active relationships from zero.
          </p>
        </div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Card 3: Plum Benefits */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="premium-card rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between min-h-[320px] 
        bg-white dark:bg-[#182A45]/40 border border-slate-200 dark:border-white/10"
      >
        <div className="z-10">
          <span className="text-[11px] md:text-sm font-black text-[#FF6B35] uppercase tracking-[0.3em]">Lead Velocity</span>
          <h3 className="text-3xl md:text-4xl font-display text-[#0A192F] dark:text-white mt-4 italic leading-none transition-colors">Plum Benefits</h3>
        </div>
        <div className="z-10 mt-10">
          <div className="text-6xl md:text-7xl font-display text-[#0A192F] dark:text-white leading-none transition-colors">
            <Counter value={150} suffix="+" />
          </div>
          <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.2em] text-[#FF6B35] mt-4">Qualified Pipeline</p>
          <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-300 font-light italic leading-tight">45% Partner growth expansion.</p>
        </div>
      </motion.div>

      {/* Card 4: Impact Metric */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="premium-card rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-[#182A45] to-[#0A192F] min-h-[320px] text-white"
      >
        <div className="z-10 flex justify-between items-start">
          <span className="text-[11px] md:text-sm font-black text-[#FF6B35] uppercase tracking-[0.3em]">Career Impact</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          </div>
        </div>
        <div className="z-10 mt-10">
          <div className="text-6xl md:text-7xl font-display text-white leading-none flex items-baseline">
            <span className="text-2xl md:text-3xl font-sans mr-2 opacity-40">$</span>
            <Counter value={7} suffix="M+" />
          </div>
          <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] text-[#FF6B35] mt-4">Revenue Attributed</p>
          <p className="mt-4 text-[10px] md:text-[11px] text-slate-400 font-medium uppercase tracking-[0.2em]">Cumulative Pipeline Generation</p>
        </div>
      </motion.div>

    </div>
  );
};

export default BentoGrid;