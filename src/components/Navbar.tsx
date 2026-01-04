import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 dark:bg-[#182A45]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/5 rounded-full px-6 md:px-10 py-3 md:py-4 shadow-xl transition-colors">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-black text-white text-xl">
              R
            </div>
            <span className="font-black text-xl hidden sm:block">
              ROHIT.
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 text-xs font-black uppercase tracking-[0.2em]">
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

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <MagneticButton
              href="#footer"
              onClick={(e) => scrollToSection(e, 'footer')}
              className="bg-[#0A192F] dark:bg-white text-white dark:text-[#0A192F] px-6 py-2.5 rounded-full font-bold text-xs hover:bg-[#FF6B35] transition-all"
            >
              LET&apos;S SCALE
            </MagneticButton>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-slate-100"
            >
              <span className="w-6 h-0.5 bg-black" />
              <span className="w-6 h-0.5 bg-black" />
              <span className="w-6 h-0.5 bg-black" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            className="fixed inset-0 z-[90] bg-white dark:bg-[#0A192F] flex flex-col pt-32 px-10 gap-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-5xl font-black italic hover:text-[#FF6B35]"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
