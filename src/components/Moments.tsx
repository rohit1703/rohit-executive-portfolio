import React from 'react';
import { motion } from 'framer-motion';
import { MOMENTS } from '../data/moments';

const Moments: React.FC = () => {
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
          In the room
        </span>
      </motion.div>

      <h3 className="text-5xl md:text-8xl font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter transition-colors">
        MOMENTS.
      </h3>
      <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-2xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
        Talks I hosted, launches I ran, and the rooms I built. The events behind the numbers.
      </p>

      <div className="mt-12 md:mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
        {MOMENTS.map((m, i) => (
          <motion.a
            key={m.src}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.05, duration: 0.5 }}
            className="group relative block mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#182A45]/40 shadow-sm hover:border-[#FF6B35]/50 transition-colors duration-500"
          >
            <img
              src={m.src}
              width={m.w}
              height={m.h}
              loading="lazy"
              alt={m.caption}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <span className="font-mono font-medium text-[10px] uppercase tracking-[0.2em] text-[#FF6B35]">
                {m.tag}
              </span>
              <p className="mt-1 text-white font-display italic font-bold text-base md:text-lg leading-tight tracking-tight">
                {m.caption}
              </p>
            </div>

            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Moments;
