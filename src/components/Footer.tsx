import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

// Obfuscate email to prevent bot scraping from raw HTML
const getEmail = () => {
  const parts = ['mallavarapu.rohit', 'gmail.com'];
  return parts.join('@');
};

// Obfuscate phone the same way; assembled only on user interaction
const getPhone = () => {
  const parts = ['+9177024', '06403'];
  return parts.join('');
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0A192F] dark:bg-[#0A192F] border-t border-white/5 py-24 md:py-40 px-6 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
        <div className="order-2 md:order-1">
          <div className="flex flex-col md:flex-row md:items-center gap-10 mb-12">
            <div className="relative group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-2 border-[#FF6B35]/30 group-hover:border-[#FF6B35] transition-colors shadow-2xl">
                <img src="/rohit.webp" alt="Rohit Mallavarapu" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#FF6B35] rounded-full border-4 border-[#0A192F] shadow-lg animate-pulse" title="Open to roles" />
            </div>
            <div>
              <h2 className="text-5xl md:text-7xl font-display text-white leading-[0.9]">GET IN <br /><span className="text-[#FF6B35]">TOUCH</span></h2>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-slate-300 leading-relaxed font-light italic border-l-4 border-[#FF6B35] pl-6 md:pl-10 py-3 md:py-6">
            "Six years in B2B marketing and partnerships across a NASDAQ firm, a Tiger Global–backed insurtech, and a fintech. I now design and ship the product as well: Currly, an AI workflow platform built solo."
          </p>
          
          <div className="flex flex-wrap gap-8 md:gap-10 mt-16 md:mt-20">
            <a href="https://www.linkedin.com/in/rohitmallavarapu17/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-slate-400 hover:text-[#FF6B35] transition-colors font-mono font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]">
               <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF6B35] transition-colors">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </div>
               LinkedIn
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = `mailto:${getEmail()}`; }} className="group flex items-center gap-4 text-slate-400 hover:text-[#FF6B35] transition-colors font-mono font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]">
               <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF6B35] transition-colors">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
               </div>
               Email
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = `tel:${getPhone()}`; }} className="group flex items-center gap-4 text-slate-400 hover:text-[#FF6B35] transition-colors font-mono font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]">
               <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF6B35] transition-colors">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
               </div>
               Phone
            </a>
            {/* NEW: Resume Link in Footer */}
            <a href="/Rohit_Mallavarapu_Resume.pdf" download className="group flex items-center gap-4 text-slate-400 hover:text-[#FF6B35] transition-colors font-mono font-medium uppercase tracking-[0.15em] text-[12px] md:text-[13px]">
               <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF6B35] transition-colors">
                 <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
               </div>
               Resume
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 bg-[#FF6B35] rounded-3xl md:rounded-[32px] p-10 md:p-20 flex flex-col justify-between items-start text-white relative overflow-hidden group shadow-2xl">
          <div className="z-10">
            <h3 className="text-5xl md:text-7xl font-display mb-6 md:mb-10 leading-tight">Open to <br />the right <br />role.</h3>
            <p className="text-white/90 text-lg md:text-2xl font-light max-w-sm">I'm looking for roles where marketing and building the product are the same job. Book a time below.</p>
          </div>
          
          <MagneticButton href="https://calendar.app.google/7dcJhghECcU1QPke7" target="_blank" rel="noopener noreferrer" className="z-10 mt-12 md:mt-16 bg-[#0A192F] text-white px-10 md:px-14 py-5 md:py-6 rounded-2xl md:rounded-[32px] font-display font-bold text-xl md:text-3xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-4 md:gap-6 group/btn shadow-2xl inline-flex decoration-0">
            Book a Call
            <svg className="w-6 h-6 md:w-8 md:h-8 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </MagneticButton>

        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 md:mt-48 pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
        {[
          { label: 'Location', value: 'Bengaluru, India · open to remote & relocation' },
          { label: 'Languages', value: 'English · Hindi · Telugu' },
        ].map((d) => (
          <div key={d.label}>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF6B35] mb-3">{d.label}</p>
            <p className="text-slate-300 text-sm md:text-base font-light">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[11px] md:text-[12px] uppercase font-mono tracking-[0.2em] gap-6 text-center md:text-left">
        <p>© {currentYear} ROHIT MALLAVARAPU. ALL RIGHTS RESERVED.</p>
        <p>PORTFOLIO V5.0</p>
      </div>
    </footer>
  );
};

export default Footer;