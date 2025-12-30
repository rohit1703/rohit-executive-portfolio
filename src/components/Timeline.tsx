import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';

interface PillarProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

const Pillar: React.FC<PillarProps> = ({ title, points, icon }) => (
  <div className="mb-10 md:mb-20 group last:mb-0">
    <div className="flex items-center gap-5 mb-6 md:mb-8">
      {/* Icon Box: White in Light Mode / Glass in Dark Mode */}
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

const ExperienceBlock: React.FC<{ data: any; index: number }> = ({ data, index }) => {
  const ref = useRef(null);
  
  return (
    <div ref={ref} className="relative flex flex-col lg:flex-row gap-12 md:gap-20 lg:gap-32 py-20 md:py-40 border-b border-slate-300 dark:border-white/5 last:border-0 transition-colors">
      
      {/* LEFT COLUMN: Role & KPIs */}
      <div className="lg:sticky lg:top-40 lg:h-fit w-full lg:w-1/3 space-y-10 md:space-y-12">
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center gap-5">
            <span className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">0{index + 1}</span>
            <div className="h-px w-12 bg-slate-300 dark:bg-white/20" />
            <span className="text-sm font-black text-[#FF6B35] uppercase tracking-[0.4em]">{data.period}</span>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] flex-shrink-0 shadow-[0_0_20px_rgba(255,107,53,0.1)]">
              {data.industryIcon}
            </div>
            <h4 className="text-5xl md:text-7xl font-display text-[#0A192F] dark:text-white leading-tight transition-colors">{data.role}</h4>
          </div>
          
          <p className="text-xl md:text-3xl font-display text-slate-500 dark:text-slate-400 italic lowercase tracking-tight transition-colors">{data.company}</p>
        </div>

        <div className="p-10 md:p-14 rounded-[32px] md:rounded-[56px] bg-white dark:bg-gradient-to-br dark:from-[#182A45] dark:to-[#0A192F] border border-slate-200 dark:border-white/10 shadow-2xl space-y-10 md:space-y-14 overflow-hidden relative group transition-colors">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6B35]/10 blur-3xl rounded-full -mr-20 -mt-20" />
          
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#FF6B35]/30">
              <img src="rohit.webp" alt="Rohit Mallavarapu" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-black text-[#FF6B35] uppercase tracking-widest">Leadership Note</p>
          </div>

          <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-200 font-light leading-relaxed italic border-l-4 border-[#FF6B35] pl-6 transition-colors">
            {data.tagline}
          </p>

          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-4">
            <div className="space-y-3">
              <div className="text-5xl md:text-7xl font-display text-[#0A192F] dark:text-white italic drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-colors">
                <Counter value={data.kpi.value} suffix={data.kpi.suffix} />
              </div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{data.kpi.label}</p>
            </div>
            {data.secondaryKpi && (
              <div className="space-y-3">
                <div className="text-4xl md:text-5xl font-display text-[#FF6B35] italic tracking-tighter drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,107,53,0.3)]">
                  <Counter value={data.secondaryKpi.value} suffix={data.secondaryKpi.suffix} />
                </div>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{data.secondaryKpi.label}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Detailed Operational Rigor */}
      <div className="w-full lg:w-2/3 mt-14 lg:mt-0">
        <div className="mb-14 md:mb-24">
          <span className="text-sm md:text-base font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-slate-400 block mb-12 md:mb-16 border-b border-slate-300 dark:border-white/5 pb-4">Detailed Operational Rigor</span>
          
          {data.visualElement && (
            <div className="mb-16 md:mb-24 p-10 md:p-16 rounded-[32px] md:rounded-[64px] bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 relative overflow-hidden group transition-colors">
              {data.visualElement}
            </div>
          )}

          <div className="space-y-12 md:space-y-16">
            {data.categories.map((cat: any, i: number) => (
              <Pillar 
                key={i}
                title={cat.title}
                points={cat.points}
                icon={cat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const journeyData = [
    {
      role: "Marketing specialist",
      company: "Grid Dynamics (NASDAQ: GDYN)",
      period: "July 2024 — Present",
      industryIcon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      tagline: "Sole marketing leader driving comprehensive market strategy for $2B+ global digital engineering consultancy.",
      visualElement: (
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex justify-between items-end">
            <p className="text-sm md:text-base font-black uppercase tracking-widest text-slate-500 dark:text-slate-300">Sentiment Delta (Glassdoor)</p>
            <span className="text-[#FF6B35] font-display text-2xl md:text-5xl">+22% Improvement</span>
          </div>
          <div className="h-6 w-full bg-slate-300 dark:bg-white/10 rounded-full relative overflow-hidden">
             <motion.div 
               initial={{ width: "0%" }}
               whileInView={{ width: "90%" }}
               transition={{ duration: 1.5, ease: "circOut" }}
               className="h-full bg-gradient-to-r from-[#FF6B35] to-orange-400 rounded-full"
             />
             <div className="absolute left-[80%] top-0 h-full w-0.5 bg-white z-10" title="Goal" />
          </div>
          <div className="flex justify-between text-xs md:text-sm font-bold text-slate-400">
            <span>3.2 INITIAL</span>
            <span>3.9 CURRENT</span>
          </div>
        </div>
      ),
      categories: [
        {
          title: "Enterprise Leadership",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
          points: [
            "Orchestrated flagship events attracting 100+ Fortune 1000 CXOs.",
            "Driven 70% of the company’s regional follower growth via strategic content distribution."
          ]
        },
        {
          title: "Strategic Innovation",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
          points: [
            "Developed AI positioning framework; optimised $10,000+ budget allocation for 300% efficiency gains.",
            "Led BDR team while executing multi-vertical campaigns for talent branding."
          ]
        }
      ],
      kpi: { value: 3.9, label: "Glassdoor Score", suffix: "" },
      secondaryKpi: { value: 4000, label: "Qualified Prospects", suffix: "+" }
    },
    {
      role: "Assistant General manager",
      company: "Plum Benefits",
      period: "2022 — 2024",
      industryIcon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      tagline: "Fast-tracked from Senior Associate to AGM. Oversaw strategic partnerships and experiential marketing for leading insurtech startup.",
      visualElement: (
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {[
            { label: "Partner Growth", val: "45%" },
            { label: "Biz Value Incr", val: "28%" },
            { label: "Perf Metric", val: "+35%" },
            { label: "Lead Gen", val: "150+" }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 text-center shadow-sm dark:shadow-none transition-colors">
              <p className="text-[#FF6B35] font-display text-3xl md:text-5xl">{item.val}</p>
              <p className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-300 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      ),
      categories: [
        {
          title: "Revenue & Market Impact",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
          points: [
            "Generated 150+ enterprise leads via events, driving 28% business value increase.",
            "Managed strategic accounts worth $3M+, demonstrating high-value leadership capabilities."
          ]
        },
        {
          title: "Partnership Scaling",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
          points: [
            "Expanded partner network by 45%, managing 50+ VCs and HRMS platforms.",
            "Drove engagement initiatives resulting in 35% improvement in core performance metrics."
          ]
        }
      ],
      kpi: { value: 150, label: "Qualified SQLs", suffix: "+" },
      secondaryKpi: { value: 3, label: "Account Value", suffix: "M+" }
    },
    {
      role: "Partnerships Manager - BFSI & Payroll",
      company: "Clear (formerly 'Cleartax')",
      period: "2021 — 2022",
      industryIcon: (
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      tagline: "Handled BFSI & Payroll verticals overseeing end-to-end processes for top-tier financial partners.",
      visualElement: (
        <div className="flex items-center gap-10 md:gap-14 overflow-hidden">
           <div className="flex-shrink-0 w-24 h-24 md:w-40 md:h-40 rounded-full border-4 md:border-8 border-[#FF6B35] flex items-center justify-center text-white font-display text-3xl md:text-6xl italic bg-[#0A192F] dark:bg-transparent shadow-xl dark:shadow-none">
             20x
           </div>
           <div className="flex-grow">
              <p className="text-sm md:text-xl text-slate-500 dark:text-slate-200 font-light mb-5">Cumulative Ecosystem Growth</p>
              <div className="flex gap-3 md:gap-4 items-end">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-8 md:h-16 w-2 md:w-3 bg-[#FF6B35]/20 rounded-full" style={{ height: `${20 + (i * 10)}%` }} />
                ))}
                <div className="h-16 md:h-24 w-4 md:w-6 bg-[#FF6B35] rounded-full shadow-[0_0_30px_rgba(255,107,53,0.7)]" />
              </div>
           </div>
        </div>
      ),
      categories: [
        {
          title: "Growth Engineering",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
          points: [
            "Delivered 20x YoY growth through strategic partnership development with financial institutions.",
            "Established 30+ bank partnerships, directly contributing $7M+ in attributed revenue."
          ]
        },
        {
          title: "Ecosystem Management",
          icon: <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9a9 9 0 019-9"/></svg>,
          points: [
            "Managed 54+ BFSI partnerships, enhancing service for 150,000+ customers.",
            "Built and trained teams that increased operational performance by 40%."
          ]
        }
      ],
      kpi: { value: 7, label: "Revenue Contribution", suffix: "M+" },
      secondaryKpi: { value: 20, label: "YoY Scale", suffix: "x" }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Visual Narrative Header */}
      <div className="py-20 md:py-32 border-b border-slate-300 dark:border-white/5 transition-colors">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 mb-10 md:mb-14"
        >
          <div className="w-12 md:w-20 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] font-black text-sm md:text-lg uppercase tracking-[0.5em] md:tracking-[0.8em]">Executive Experience Centre</span>
        </motion.div>
        
        <h3 className="text-6xl md:text-[11rem] font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter mb-12 md:mb-16 transition-colors">
          OPERATIONAL <br />
          <span className="text-[#FF6B35]">RIGOR.</span>
        </h3>
        
        <p className="max-w-4xl text-slate-600 dark:text-slate-200 text-xl md:text-4xl font-light leading-relaxed transition-colors">
          The "How" behind the metrics. Detailed breakdowns of <span className="text-[#0A192F] dark:text-white font-medium">market entry, pipeline velocity, and brand turnaround</span> across the growth lifecycle.
        </p>
      </div>

      <div className="space-y-0">
        {journeyData.map((item, idx) => (
          <ExperienceBlock key={idx} data={item} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;