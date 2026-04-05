import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import { ViewType } from '../data/views';
import { EXPERIENCE_DATA, ExperienceEntry } from '../data/experience';
import { SECTION_COPY } from '../data/sectionCopy';

interface TimelineProps {
  view: ViewType;
}

interface PillarProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Enterprise Leadership': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  'Strategic Innovation': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  'Partner Portfolio Management': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  'Partner Enablement & Practice Building': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
  'Brand & Demand Generation': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>,
  'AI-Led Marketing Innovation': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  'Revenue & Market Impact': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  'Partnership Scaling': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  'Portfolio Ownership & P&L': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>,
  'Multi-Dimensional Execution': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  'Campaign Management': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>,
  'Experiential Marketing': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>,
  'Growth Engineering': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
  'Ecosystem Management': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"/></svg>,
  '0→1 Channel Architecture': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>,
  'Revenue & Scale': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  'Integrated Campaign Strategy': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  'Team & Budget Management': <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
};

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  'Grid Dynamics (NASDAQ: GDYN)': <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  'Plum Benefits (Tiger Global/Sequoia)': <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  'Clear (formerly ClearTax)': <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
};

const Pillar: React.FC<PillarProps> = ({ title, points, icon }) => (
  <div className="mb-10 md:mb-20 group last:mb-0">
    <div className="flex items-center gap-5 mb-6 md:mb-8">
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-200 dark:bg-white/5 dark:border-white/10 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-500 shadow-xl flex-shrink-0">
        {icon}
      </div>
      <h5 className="text-base md:text-xl font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#FF6B35]">{title}</h5>
    </div>
    <ul className="space-y-6 md:space-y-8 pl-6 md:pl-20 border-l-2 border-slate-200 dark:border-white/10 md:border-0 ml-5 md:ml-0">
      {points.map((point, i) => (
        <li key={i} className="text-slate-600 dark:text-slate-200 text-base md:text-xl font-light leading-relaxed border-b border-slate-200 dark:border-white/5 pb-6 last:border-0 last:pb-0 transition-colors">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceBlock: React.FC<{ data: ExperienceEntry; index: number; view: ViewType }> = ({ data, index, view }) => {
  const ref = useRef(null);
  const kpi = data.kpi[view];
  const secondaryKpi = data.secondaryKpi?.[view];

  return (
    <div ref={ref} className="relative flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-16 py-20 md:py-40 border-b border-slate-300 dark:border-white/5 last:border-0 transition-colors">
      <div className="lg:sticky lg:top-40 lg:h-fit w-full lg:w-5/12 space-y-10 md:space-y-12 z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center gap-5">
            <span className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">0{index + 1}</span>
            <div className="h-px w-12 bg-slate-300 dark:bg-white/20" />
            <span className="text-sm font-black text-[#FF6B35] uppercase tracking-[0.4em]">{data.period}</span>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.1)]">
              {INDUSTRY_ICONS[data.company]}
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display text-[#0A192F] dark:text-white leading-tight transition-colors break-words">
              {data.role[view]}
            </h4>
          </div>
          <p className="text-xl md:text-3xl font-display text-slate-500 dark:text-slate-400 italic lowercase tracking-tight transition-colors">{data.company}</p>
        </div>

        <div className="p-10 md:p-14 rounded-[32px] md:rounded-[56px] bg-white dark:bg-gradient-to-br dark:from-[#182A45] dark:to-[#0A192F] border border-slate-200 dark:border-white/10 shadow-2xl space-y-10 md:space-y-14 overflow-hidden relative group transition-colors">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/10 blur-3xl rounded-full -mr-20 -mt-20" />
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FF6B35]/30">
              <img src="/rohit.webp" alt="Rohit Mallavarapu" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-black text-[#FF6B35] uppercase tracking-widest">Leadership Note</p>
          </div>
          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-200 font-light leading-relaxed italic border-l-4 border-[#FF6B35] pl-6 transition-colors">
            {data.tagline[view]}
          </p>
          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-4">
            <div className="space-y-3">
              <div className="text-5xl md:text-7xl font-display text-[#0A192F] dark:text-white italic drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-colors">
                <Counter value={kpi.value} suffix={kpi.suffix} />
              </div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{kpi.label}</p>
            </div>
            {secondaryKpi && (
              <div className="space-y-3">
                <div className="text-4xl md:text-5xl font-display text-[#FF6B35] italic tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">
                  <Counter value={secondaryKpi.value} suffix={secondaryKpi.suffix} />
                </div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{secondaryKpi.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-7/12 mt-14 lg:mt-0">
        <div className="mb-14 md:mb-24">
          <span className="text-sm md:text-base font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-400 block mb-12 md:mb-16 border-b border-slate-300 dark:border-white/5 pb-4">Detailed Operational Rigor</span>
          <div className="space-y-12 md:space-y-16">
            {data.categories[view].map((cat, i) => (
              <Pillar
                key={i}
                title={cat.title}
                points={cat.points}
                icon={CATEGORY_ICONS[cat.title] || <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ view }) => {
  const copy = SECTION_COPY[view];
  const sorted = [...EXPERIENCE_DATA].sort((a, b) => a.order[view] - b.order[view]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="py-20 md:py-32 border-b border-slate-300 dark:border-white/5 transition-colors">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 mb-10 md:mb-14"
        >
          <div className="w-12 md:w-20 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] font-black text-sm md:text-lg uppercase tracking-[0.5em] md:tracking-[0.8em]">{copy.timelineLabel}</span>
        </motion.div>

        <h3 className="text-4xl md:text-[11rem] font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter mb-12 md:mb-16 transition-colors">
          {copy.timelineHeadline} <br />
          <span className="text-[#FF6B35]">{copy.timelineAccent}</span>
        </h3>

        <p className="max-w-4xl text-slate-600 dark:text-slate-200 text-xl md:text-4xl font-light leading-relaxed transition-colors" dangerouslySetInnerHTML={{ __html: copy.timelineDescription }} />
      </div>

      <div className="space-y-0">
        {sorted.map((item, idx) => (
          <ExperienceBlock key={item.company} data={item} index={idx} view={view} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
