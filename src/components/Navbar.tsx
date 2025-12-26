import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Vision', id: 'hero' },
    { name: 'Impact', id: 'impact' },
    { name: 'Experience', id: 'experience-centre' },
    { name: 'Insights', id: 'feed' },
    { name: 'Voices', id: 'testimonials' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-4 md:py-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 dark:bg-[#182A45]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 rounded-full px-6 md:px-10 py-3 md:py-4 shadow-xl dark:shadow-2xl transition-colors duration-300">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-display font-black text-white dark:text-[#0A192F] text-xl group-hover:scale-110 transition-transform">R</div>
            <span className="font-display font-black text-xl tracking-tighter text-[#0A192F] dark:text-white hidden sm:block">ROHIT.</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-[#FF6B35] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              {/* NEW: Resume Download Button (Icon Only) */}
              <a 
                href="/Rohit_Mallavarapu_Resume.pdf" 
                download
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-[#FF6B35] hover:border-[#FF6B35] dark:hover:text-[#FF6B35] dark:hover:border-[#FF6B35] transition-all shadow-sm group"
                title="Download Resume"
              >
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </a>

              <ThemeToggle />
            </div>

            <MagneticButton 
              href="#footer"
              onClick={(e) => scrollToSection(e, 'footer')}
              className="bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] px-6 md:px-8 py-2.5 rounded-full font-display font-bold text-xs md:text-sm hover:bg-[#FF6B35] dark:hover:bg-[#FF6B35] hover:text-white dark:hover:text-white transition-all shadow-lg inline-flex items-center justify-center decoration-0 whitespace-nowrap"
            >
              LET'S SCALE
            </MagneticButton>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 relative z-[110]"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#0A192F] dark:bg-white rounded-full transition-transform" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-[#0A192F] dark:bg-white rounded-full transition-opacity" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-[#0A192F] dark:bg-white rounded-full transition-transform" 
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
       <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            className="fixed inset-0 z-[90] lg:hidden bg-[#F0F4F8]/98 dark:bg-[#0A192F]/98 backdrop-blur-3xl flex flex-col pt-32 px-10 gap-12 transition-colors duration-300 overflow-y-auto"
          >
            <div className="flex justify-end gap-4">
               {/* Mobile Resume Link */}
               <a href="/Rohit_Mallavarapu_Resume.pdf" download className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
                 Resume <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
               </a>
               <ThemeToggle />
            </div>
            
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-5xl font-display font-black text-[#0A192F] dark:text-white italic hover:text-[#FF6B35] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;