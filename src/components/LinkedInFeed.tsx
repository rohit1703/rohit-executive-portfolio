import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { ViewType } from '../data/views';
import { LINKEDIN_POSTS } from '../data/posts';
import { SECTION_COPY } from '../data/sectionCopy';

interface LinkedInFeedProps {
  view: ViewType;
}

const LinkedInFeed: React.FC<LinkedInFeedProps> = ({ view }) => {
  const copy = SECTION_COPY[view];
  const sorted = [...LINKEDIN_POSTS].sort((a, b) => a.priority[view] - b.priority[view]);
  const visiblePosts = sorted.slice(0, 3);

  return (
    <div className="py-24 md:py-48 px-6 bg-slate-200/50 dark:bg-[#081526]/50 transition-colors">
      <div className="max-w-7xl mx-auto mb-16 md:mb-32">
        <div className="flex items-center gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="w-10 md:w-20 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] font-mono font-medium text-xs md:text-sm uppercase tracking-[0.3em]">{copy.feedLabel}</span>
        </div>
        <h3 className="text-5xl md:text-8xl xl:text-[11rem] font-display text-[#0A192F] dark:text-white uppercase italic font-black leading-[0.9] tracking-tighter transition-colors">
          {copy.feedHeadline} <br />
          <span className="text-[#FF6B35]">{copy.feedAccent}</span>
        </h3>
        <p className="mt-8 md:mt-12 text-xl md:text-4xl text-slate-600 dark:text-slate-300 font-light max-w-4xl leading-relaxed transition-colors" dangerouslySetInnerHTML={{ __html: copy.feedDescription }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post, idx) => (
            <motion.div
              key={post.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="rounded-2xl md:rounded-[24px] p-8 md:p-14 flex flex-col justify-between min-h-[450px] md:min-h-[500px] group border border-slate-200 dark:border-white/10 hover:border-[#FF6B35]/40 transition-all duration-500 shadow-xl relative overflow-hidden bg-white dark:bg-[#182A45]/40"
            >
              <div className="relative z-10">
                <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-14">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] md:text-sm font-mono font-medium text-[#FF6B35] uppercase tracking-[0.2em]">{post.category}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-white/30 group-hover:text-[#0077B5] group-hover:bg-[#0077B5]/10 transition-all duration-300">
                        <svg className="w-4 h-4 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="font-display text-[#0A192F] dark:text-white mb-6 md:mb-8 leading-[0.9] italic tracking-tight text-3xl md:text-4xl transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 text-base md:text-lg transition-colors">
                  "{post.description}"
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-slate-200 dark:border-white/5 mt-auto transition-colors">
                <MagneticButton
                  href={post.link}
                  target="_blank"
                  className="w-full bg-slate-100 dark:bg-white/5 hover:bg-[#FF6B35] text-[#0A192F] dark:text-white hover:text-white px-6 py-4 rounded-[10px] font-mono font-medium text-xs md:text-sm transition-all border border-slate-200 dark:border-white/10 uppercase tracking-[0.15em] inline-flex items-center justify-center gap-3 decoration-0 shadow-lg group/btn"
                >
                  Read Post
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto mt-24 md:mt-32 text-center">
        <MagneticButton href="https://www.linkedin.com/in/rohitmallavarapu17/" target="_blank" className="text-[#FF6B35] font-mono font-medium uppercase tracking-[0.25em] text-sm md:text-lg hover:text-[#0A192F] dark:hover:text-white transition-colors decoration-0 group flex flex-col items-center gap-4">
          <span>Read the series on LinkedIn</span>
          <svg className="w-6 h-6 animate-bounce mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </MagneticButton>
      </div>
    </div>
  );
};

export default LinkedInFeed;
