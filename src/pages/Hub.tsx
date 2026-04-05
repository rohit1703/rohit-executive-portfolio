import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ThemeToggle from '../components/ThemeToggle';

const views = [
  {
    label: 'About Me',
    hook: 'The full picture',
    description: 'The full story — career milestones, metrics, and the journey from startup to NASDAQ. Start here if you want the complete picture.',
    path: '/about',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: 'Partnerships Manager',
    hook: '$7M+ partner revenue',
    description: 'How I build and scale partner ecosystems — 54+ BFSI partnerships, $7M+ partner-sourced revenue, systems designed from zero.',
    path: '/partnerships',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    label: 'Marketing Lead',
    hook: 'Brand & demand gen',
    description: 'How I drive brand strategy, demand generation, and AI-led growth — Glassdoor turnarounds, flagship events, 300% efficiency.',
    path: '/marketing',
    icon: (
      <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Hub: React.FC = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-[#0A192F] flex flex-col items-center justify-center px-5 py-12 md:px-6 md:py-16 transition-colors duration-500 relative">
      <SEO
        title="Rohit Mallavarapu | Executive Portfolio"
        description="Global marketing leader and partnerships strategist. Choose the view most relevant to you."
      />

      <div className="absolute top-4 right-4 md:top-8 md:right-8">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6 md:mb-14"
      >
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center font-display font-black text-white text-xl md:text-2xl">R</div>
        </div>
        <h1 className="font-display text-[11vw] md:text-8xl font-black text-[#0A192F] dark:text-white tracking-tighter leading-[0.9] mb-4 md:mb-6 transition-colors">
          ROHIT <span className="text-[#FF6B35]">MALLAVARAPU</span>
        </h1>
        <p className="text-base md:text-2xl text-slate-500 dark:text-slate-300 font-light max-w-2xl mx-auto transition-colors mb-2 md:mb-0">
          I'm here as a...
        </p>
      </motion.div>

      {/* Mobile: 2+1 compact layout, Desktop: 3-col full cards */}

      {/* Mobile layout */}
      <div className="md:hidden w-full max-w-sm">
        <div className="grid grid-cols-2 gap-3 mb-3">
          {views.slice(0, 2).map((view, idx) => (
            <motion.div
              key={view.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
            >
              <Link
                to={view.path}
                className="block premium-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 hover:border-[#FF6B35]/40 group transition-all duration-300 h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300 mb-4">
                  {view.icon}
                </div>
                <h2 className="font-display text-lg font-black text-[#0A192F] dark:text-white italic tracking-tight mb-1 transition-colors leading-tight">
                  {view.label}
                </h2>
                <p className="text-slate-400 dark:text-slate-400 text-xs font-medium mb-4">{view.hook}</p>
                <div className="flex items-center gap-2 text-[#FF6B35] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
                  <span>Explore</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Third card centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to={views[2].path}
            className="block premium-card rounded-2xl p-5 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 hover:border-[#FF6B35]/40 group transition-all duration-300 w-1/2"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300 mb-4">
              {views[2].icon}
            </div>
            <h2 className="font-display text-lg font-black text-[#0A192F] dark:text-white italic tracking-tight mb-1 transition-colors leading-tight">
              {views[2].label}
            </h2>
            <p className="text-slate-400 dark:text-slate-400 text-xs font-medium mb-4">{views[2].hook}</p>
            <div className="flex items-center gap-2 text-[#FF6B35] font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-3 transition-all">
              <span>Explore</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Desktop layout — unchanged full cards */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {views.map((view, idx) => (
          <motion.div
            key={view.path}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.12, duration: 0.6 }}
          >
            <Link
              to={view.path}
              className="block premium-card rounded-[48px] p-12 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40 hover:border-[#FF6B35]/40 group transition-all duration-500 h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-500 mb-8">
                {view.icon}
              </div>
              <h2 className="font-display text-3xl font-black text-[#0A192F] dark:text-white italic tracking-tight mb-4 transition-colors">
                {view.label}
              </h2>
              <p className="text-slate-500 dark:text-slate-300 font-light leading-relaxed text-base transition-colors">
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
