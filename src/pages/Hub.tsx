import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const views = [
  {
    label: 'Partnerships Manager',
    description: 'How I build and scale partner ecosystems, manage strategic accounts, and drive revenue through alliances.',
    path: '/partnerships',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: 'Marketing Lead',
    description: 'How I drive brand strategy, demand generation, and AI-led growth for high-growth tech organizations.',
    path: '/marketing',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Hub: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-[#0A192F] flex flex-col items-center justify-center px-6 py-24 transition-colors duration-500">
      <SEO
        title="Rohit Mallavarapu | Executive Portfolio"
        description="Global marketing leader and partnerships strategist. Choose the view most relevant to you."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center font-display font-black text-white text-2xl">R</div>
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-black text-[#0A192F] dark:text-white tracking-tighter leading-[0.9] mb-6 transition-colors">
          ROHIT <span className="text-[#FF6B35]">MALLAVARAPU</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto transition-colors">
          Global marketing leader scaling high-growth tech organizations. Choose the lens most relevant to you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl w-full">
        {views.map((view, idx) => (
          <motion.div
            key={view.path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.15, duration: 0.6 }}
          >
            <Link
              to={view.path}
              className="block premium-card rounded-[32px] md:rounded-[48px] p-10 md:p-14 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 hover:border-[#FF6B35]/40 group transition-all duration-500 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-500 mb-8">
                {view.icon}
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-black text-[#0A192F] dark:text-white italic tracking-tight mb-4 transition-colors">
                {view.label}
              </h2>
              <p className="text-slate-500 dark:text-slate-300 font-light leading-relaxed text-base md:text-lg transition-colors">
                {view.description}
              </p>
              <div className="mt-8 flex items-center gap-3 text-[#FF6B35] font-black text-xs uppercase tracking-[0.3em] group-hover:gap-5 transition-all">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hub;
