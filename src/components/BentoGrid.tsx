import React from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { ViewType } from '../data/views';
import { METRIC_CARDS } from '../data/metrics';

interface BentoGridProps {
  view: ViewType;
}

const BentoGrid: React.FC<BentoGridProps> = ({ view }) => {
  const sorted = [...METRIC_CARDS].sort((a, b) => a.order[view] - b.order[view]);

  const wide = sorted.find(c => c.variant === 'wide')!;
  const tall = sorted.find(c => c.variant === 'tall-accent')!;
  const standard = sorted.find(c => c.variant === 'standard')!;
  const dark = sorted.find(c => c.variant === 'dark')!;

  // The tall accent card uses a huge centered number; long values (e.g. 150,000)
  // would overflow the narrow 3-column width, so shrink the type for those.
  const tallKpi = tall.kpi[view];
  const tallDisplay = `${tallKpi.prefix ?? ''}${tallKpi.value.toLocaleString('en-US')}${tallKpi.suffix}`;
  const tallSizeClass = tallDisplay.length >= 6 ? 'text-7xl md:text-8xl xl:text-7xl' : 'text-[110px] xl:text-[150px]';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">

      {/* Card 1: Wide */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="xl:col-span-2 premium-card rounded-2xl md:rounded-[24px] p-8 md:p-14 flex flex-col justify-between group overflow-hidden min-h-[400px]
        bg-white dark:bg-[#182A45]/40 border border-slate-200 dark:border-white/10"
      >
        <div className="relative z-10">
          <span className="text-[11px] md:text-sm font-mono font-medium text-[#FF6B35] uppercase tracking-[0.2em]">{wide.label}</span>
          <h3 className="text-4xl md:text-6xl font-display mt-4 text-[#0A192F] dark:text-white italic leading-none transition-colors">{wide.company} <span className="text-[#FF6B35]">{wide.id === 'grid-dynamics' ? 'India' : ''}</span></h3>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10 md:gap-12 mt-12">
          <p className="max-w-md text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed font-light">
            {wide.descriptions[view]}
          </p>
          <div className="flex flex-col items-start md:items-end flex-shrink-0">
            <span className="text-6xl md:text-8xl font-display text-[#0A192F] dark:text-white leading-none transition-colors">
              <Counter value={wide.kpi[view].value} suffix={wide.kpi[view].suffix} prefix={wide.kpi[view].prefix} />
            </span>
            <p className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] text-[#FF6B35] font-mono font-medium mt-3">{wide.kpi[view].label}</p>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Tall Accent */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="xl:row-span-2 bg-[#FF6B35] rounded-2xl md:rounded-[24px] p-10 md:p-14 flex flex-col justify-between text-[#0A192F] relative shadow-2xl overflow-hidden min-h-[420px] xl:min-h-[700px]"
      >
        <div className="relative z-10">
          <span className="text-[11px] md:text-sm font-mono font-medium uppercase tracking-[0.2em] opacity-80">{tall.label}</span>
          <h3 className="text-6xl md:text-8xl font-display mt-4">{tall.company}</h3>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow py-12 md:py-0">
          <div className={`${tallSizeClass} font-display leading-[0.7] tracking-tighter text-center`}>
            <Counter value={tallKpi.value} suffix={tallKpi.suffix} prefix={tallKpi.prefix} />
          </div>
          <p className="text-[13px] md:text-[15px] font-black uppercase tracking-[0.5em] mt-8 text-center w-full">{tallKpi.label}</p>
        </div>
        <div className="relative z-10">
          <div className="h-px w-full bg-[#0A192F]/20 mb-10" />
          <p className="text-xl md:text-2xl leading-tight font-bold">
            {tall.descriptions[view]}
          </p>
        </div>
      </motion.div>

      {/* Card 3: Standard */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="premium-card rounded-2xl md:rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[320px]
        bg-white dark:bg-[#182A45]/40 border border-slate-200 dark:border-white/10"
      >
        <div className="z-10">
          <span className="text-[11px] md:text-sm font-mono font-medium text-[#FF6B35] uppercase tracking-[0.2em]">{standard.label}</span>
          <h3 className="text-3xl md:text-4xl font-display text-[#0A192F] dark:text-white mt-4 italic leading-none transition-colors">{standard.company}</h3>
        </div>
        <div className="z-10 mt-10">
          <div className="text-6xl md:text-7xl font-display text-[#0A192F] dark:text-white leading-none transition-colors">
            <Counter value={standard.kpi[view].value} suffix={standard.kpi[view].suffix} prefix={standard.kpi[view].prefix} />
          </div>
          <p className="text-[11px] md:text-[13px] font-mono font-medium uppercase tracking-[0.2em] text-[#FF6B35] mt-4">{standard.kpi[view].label}</p>
          <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-300 font-light italic leading-tight">{standard.secondaryText?.[view]}</p>
        </div>
      </motion.div>

      {/* Card 4: the "build" card — light surface in light mode, dark gradient in dark mode */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="rounded-2xl md:rounded-[24px] p-8 md:p-12 flex flex-col justify-between min-h-[320px] bg-white dark:bg-gradient-to-br dark:from-[#182A45] dark:to-[#0A192F] border border-slate-200 dark:border-white/10 shadow-sm transition-colors"
      >
        <div className="z-10 flex justify-between items-start">
          <span className="text-[11px] md:text-sm font-mono font-medium text-[#FF6B35] uppercase tracking-[0.2em]">{dark.label}</span>
          <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          </div>
        </div>
        <div className="z-10 mt-10">
          <div className="text-6xl md:text-7xl font-display text-[#0A192F] dark:text-white leading-none flex items-baseline transition-colors">
            <Counter value={dark.kpi[view].value} suffix={dark.kpi[view].suffix} prefix={dark.kpi[view].prefix} />
          </div>
          <p className="text-[11px] md:text-[13px] font-mono font-medium uppercase tracking-[0.2em] text-[#FF6B35] mt-4">{dark.kpi[view].label}</p>
          <p className="mt-4 text-[10px] md:text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-[0.15em]">{dark.secondaryText?.[view]}</p>
        </div>
      </motion.div>

    </div>
  );
};

export default BentoGrid;
