import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES, LANES, Capability, Receipt, LaneId } from '../data/capabilities';

const EASE = [0.16, 1, 0.3, 1] as const;

const ReceiptRow: React.FC<{ r: Receipt }> = ({ r }) => {
  const body = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono font-medium text-sm md:text-base text-[#0A192F] dark:text-white tabular-nums tracking-tight">
          {r.metric}
        </span>
        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-[#FF6B35] whitespace-nowrap flex items-center gap-1">
          {r.company}
          {r.href && (
            <svg className="w-3 h-3 opacity-0 group-hover/r:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </span>
      </div>
      <span className="mt-1 block text-[13px] md:text-sm text-slate-600 dark:text-slate-300 font-light leading-snug">
        {r.detail}
      </span>
    </>
  );

  const cls = 'block py-3.5 border-t border-slate-200 dark:border-white/10 transition-colors';
  return r.href ? (
    <a href={r.href} target="_blank" rel="noopener noreferrer" className={`${cls} group/r hover:border-[#FF6B35]/50`}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

interface CapabilityCardProps {
  cap: Capability;
  open: boolean;
  onToggle: () => void;
  dimmed: boolean;
  matched: boolean;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ cap, open, onToggle, dimmed, matched }) => {
  const laneLabel = LANES.find((l) => l.id === cap.lane)?.label ?? '';
  const panelId = `cap-panel-${cap.id}`;
  const [featured, ...rest] = cap.receipts;

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, ease: EASE } }}
      className={`rounded-2xl md:rounded-[24px] border bg-white dark:bg-[#182A45]/40 p-7 md:p-8 shadow-sm flex flex-col transition-[opacity,border-color,box-shadow] duration-500 ${
        matched
          ? 'border-[#FF6B35]/50 shadow-[0_20px_50px_-30px_rgba(255,107,53,0.5)]'
          : 'border-slate-200 dark:border-white/10'
      } ${dimmed ? 'opacity-40' : 'opacity-100'}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="text-left w-full group"
      >
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#FF6B35]">
          {laneLabel}
        </span>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h4 className="text-2xl md:text-[1.75rem] font-display font-black italic tracking-tight text-[#0A192F] dark:text-white leading-[0.95]">
            {cap.title}
          </h4>
          <svg
            className={`w-5 h-5 mt-1 flex-shrink-0 text-slate-400 group-hover:text-[#FF6B35] transition-all duration-300 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="mt-2 text-sm md:text-[15px] text-slate-500 dark:text-slate-400 font-light leading-snug">
          {cap.tagline}
        </p>
      </button>

      {/* Featured receipt — always visible so the strongest number reads on scan */}
      <div className="mt-6">
        {featured.href ? (
          <a href={featured.href} target="_blank" rel="noopener noreferrer" className="group/f inline-block">
            <span className="font-display text-3xl md:text-[2.5rem] font-black italic tracking-tight text-[#0A192F] dark:text-white leading-none group-hover/f:text-[#FF6B35] transition-colors">
              {featured.metric}
            </span>
          </a>
        ) : (
          <span className="font-display text-3xl md:text-[2.5rem] font-black italic tracking-tight text-[#0A192F] dark:text-white leading-none">
            {featured.metric}
          </span>
        )}
        <p className="mt-2 text-[13px] md:text-sm text-slate-600 dark:text-slate-300 font-light leading-snug">
          {featured.detail} <span className="font-mono text-[#FF6B35]">· {featured.company}</span>
        </p>
      </div>

      {/* Rest of the receipts — mounted always (crawlable), collapsed by height/opacity */}
      <motion.div
        id={panelId}
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        style={{ overflow: 'hidden' }}
        aria-hidden={!open}
      >
        <div className="mt-6">
          {rest.map((r) => (
            <ReceiptRow key={r.metric} r={r} />
          ))}
        </div>
      </motion.div>

      {rest.length > 0 && (
        <button
          onClick={onToggle}
          className="mt-5 self-start font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-slate-400 hover:text-[#FF6B35] transition-colors"
          aria-hidden="true"
          tabIndex={-1}
        >
          {open ? '— Hide receipts' : `+ ${rest.length} more receipt${rest.length > 1 ? 's' : ''}`}
        </button>
      )}
    </motion.div>
  );
}

const Capabilities: React.FC = () => {
  const [active, setActive] = useState<LaneId | null>(null);
  const [open, setOpen] = useState<string[]>([]);

  const ordered = useMemo(() => {
    if (!active) return CAPABILITIES;
    return [...CAPABILITIES].sort(
      (a, b) => (a.lane === active ? 0 : 1) - (b.lane === active ? 0 : 1)
    );
  }, [active]);

  const selectLane = (lane: LaneId | null) => {
    setActive(lane);
    // Selecting a lane expands its card so the receipts are right there.
    setOpen(lane ? [lane] : []);
  };

  const toggle = (id: string) =>
    setOpen((o) => (o.includes(id) ? o.filter((x) => x !== id) : [...o, id]));

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
          Capabilities, with receipts
        </span>
      </motion.div>

      <h3 className="text-[clamp(2.5rem,13vw,3rem)] md:text-8xl font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter transition-colors">
        CAPABILITIES.
      </h3>
      <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
        Six years of proof, grouped by what you're hiring for. Every number traces
        to a real result. Expand any card for the receipts.
      </p>

      {/* "What are you hiring for?" — highlight + reorder */}
      <div className="mt-10 md:mt-14">
        <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
          What are you hiring for?
        </span>
        <div role="group" aria-label="Filter capabilities by hiring focus" className="mt-4 flex flex-wrap gap-2.5">
          <FilterChip label="All" active={active === null} onClick={() => selectLane(null)} />
          {LANES.map((l) => (
            <FilterChip
              key={l.id}
              label={l.label}
              active={active === l.id}
              onClick={() => selectLane(l.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {ordered.map((cap) => (
          <CapabilityCard
            key={cap.id}
            cap={cap}
            open={open.includes(cap.id)}
            onToggle={() => toggle(cap.id)}
            matched={active !== null && cap.lane === active}
            dimmed={active !== null && cap.lane !== active}
          />
        ))}
      </div>
    </div>
  );
};

export default Capabilities;

const FilterChip: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`font-mono text-[11px] md:text-xs uppercase tracking-[0.12em] rounded-full border px-4 py-2 transition-colors ${
        active
          ? 'border-[#FF6B35] bg-[#FF6B35] text-white'
          : 'border-slate-300 dark:border-white/15 text-slate-600 dark:text-slate-300 hover:border-[#FF6B35]/60 hover:text-[#FF6B35]'
      }`}
    >
      {label}
    </button>
  );
};
