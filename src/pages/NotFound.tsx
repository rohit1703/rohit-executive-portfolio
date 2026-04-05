import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-[#0A192F] flex flex-col items-center justify-center px-6 py-16 transition-colors duration-500">
      <SEO title="Page Not Found | Rohit Mallavarapu" description="This page doesn't exist." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="text-[120px] md:text-[180px] font-display font-black text-[#FF6B35] leading-none mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-4xl font-display font-black text-[#0A192F] dark:text-white italic tracking-tight mb-4 transition-colors">
          This view doesn't exist.
        </h1>
        <p className="text-slate-500 dark:text-slate-300 font-light text-base md:text-lg mb-12 transition-colors">
          But these do — pick the one most relevant to you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="px-8 py-4 bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] rounded-full font-display font-bold text-sm hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white dark:hover:text-white transition-all"
          >
            About Me
          </Link>
          <Link
            to="/partnerships"
            className="px-8 py-4 border border-slate-300 dark:border-white/20 text-[#0A192F] dark:text-white rounded-full font-display font-bold text-sm hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
          >
            Partnerships
          </Link>
          <Link
            to="/marketing"
            className="px-8 py-4 border border-slate-300 dark:border-white/20 text-[#0A192F] dark:text-white rounded-full font-display font-bold text-sm hover:border-[#FF6B35] hover:text-[#FF6B35] transition-all"
          >
            Marketing
          </Link>
        </div>

        <Link
          to="/"
          className="inline-block mt-10 text-[#FF6B35] font-black text-xs uppercase tracking-[0.3em] hover:text-[#0A192F] dark:hover:text-white transition-colors"
        >
          ← Back to Hub
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
