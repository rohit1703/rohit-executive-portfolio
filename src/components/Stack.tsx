import React from 'react';
import { motion } from 'framer-motion';
import { STACK, StackGroup } from '../data/stack';

const Chip: React.FC<{ label: string; accent?: boolean }> = ({ label, accent }) => (
  <span
    className={`font-mono text-[11px] md:text-xs tracking-tight rounded-full border px-3 py-1.5 transition-colors ${
      accent
        ? 'border-[#FF6B35]/30 bg-[#FF6B35]/10 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
        : 'border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-[#FF6B35]/50 hover:text-[#FF6B35]'
    }`}
  >
    {label}
  </span>
);

const GroupHeader: React.FC<{ group: StackGroup }> = ({ group }) => (
  <div className="mb-6 md:mb-8">
    <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#FF6B35]">
      {group.note}
    </span>
    <h4 className="mt-2 text-2xl md:text-3xl font-display font-black italic tracking-tight text-[#0A192F] dark:text-white transition-colors">
      {group.label}
    </h4>
  </div>
);

const Stack: React.FC = () => {
  const featured = STACK.find((g) => g.accent);
  const rest = STACK.filter((g) => !g.accent);

  return (
    <div className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 md:gap-8 mb-8 md:mb-10"
      >
        <div className="w-12 md:w-20 h-px bg-[#FF6B35]" />
        <span className="text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em]">
          Across disciplines
        </span>
      </motion.div>

      <h3 className="text-5xl md:text-8xl font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter transition-colors">
        CAPABILITIES.
      </h3>
      <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
        Marketing and partnerships is the visible half. The other half is the
        product itself, built in code.
      </p>

      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 rounded-2xl md:rounded-[28px] border border-[#FF6B35]/30 bg-gradient-to-br from-[#FF6B35]/[0.07] to-transparent dark:from-[#FF6B35]/[0.12] p-8 md:p-12 shadow-sm"
        >
          <GroupHeader group={featured} />
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {featured.items.map((item) => (
              <Chip key={item} label={item} accent />
            ))}
          </div>
        </motion.div>
      )}

      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {rest.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="rounded-2xl md:rounded-[24px] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 p-7 md:p-9 shadow-sm transition-colors"
          >
            <GroupHeader group={group} />
            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {group.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
