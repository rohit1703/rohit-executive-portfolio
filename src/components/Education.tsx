import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../data/education';

const Education: React.FC = () => {
  const degree = EDUCATION.filter(e => e.type === 'degree');
  const certs = EDUCATION.filter(e => e.type === 'certification');

  return (
    <div className="py-24 md:py-32 px-6 bg-slate-200/50 dark:bg-[#081526]/50 border-y border-slate-300 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8 mb-10 md:mb-14"
        >
          <div className="w-12 md:w-20 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] font-black text-sm md:text-lg uppercase tracking-[0.5em] md:tracking-[0.8em]">Credentials</span>
        </motion.div>

        <h3 className="text-4xl md:text-7xl font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter mb-16 md:mb-24 transition-colors">
          EDUCATION & <br /><span className="text-[#FF6B35]">CERTIFICATIONS.</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Degree */}
          {degree.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card rounded-[32px] md:rounded-[48px] p-10 md:p-14 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] mb-8">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h4 className="text-2xl md:text-3xl font-display text-[#0A192F] dark:text-white italic tracking-tight mb-3 transition-colors">{ed.title}</h4>
              <p className="text-slate-500 dark:text-slate-300 font-light text-base md:text-lg">{ed.institution}</p>
              <p className="text-[#FF6B35] font-black text-xs uppercase tracking-[0.3em] mt-4">{ed.year}</p>
            </motion.div>
          ))}

          {/* Certifications */}
          <div className="premium-card rounded-[32px] md:rounded-[48px] p-10 md:p-14 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#182A45]/40">
            <div className="w-14 h-14 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center text-[#FF6B35] mb-8">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-2xl md:text-3xl font-display text-[#0A192F] dark:text-white italic tracking-tight mb-8 transition-colors">Executive Certifications</h4>
            <div className="space-y-6">
              {certs.map((cert, i) => (
                <div key={i} className="flex justify-between items-start border-b border-slate-200 dark:border-white/5 pb-5 last:border-0 last:pb-0">
                  <div>
                    <p className="text-[#0A192F] dark:text-white font-bold text-base md:text-lg transition-colors">{cert.title}</p>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-sm mt-1">{cert.institution}</p>
                  </div>
                  <span className="text-[#FF6B35] font-black text-xs uppercase tracking-[0.2em] flex-shrink-0 ml-4">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
