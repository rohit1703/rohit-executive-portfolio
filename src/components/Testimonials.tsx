import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  // ... Keep existing testimonials array ...
  { 
    heading: "Went above and beyond, spearheading multiple high-impact campaigns",
    text: "Rohit consistently went above and beyond, spearheading multiple high-impact campaigns with remarkable success. His infectious energy was a driving force behind our results. His ability to remain upbeat and focused is unparalleled. I wish him all the best for the future.", 
    author: "Prerit Bajaj",
    role: "Associate Director - ABM",
    company: "Plum Benefits"
  },
  { 
    heading: "Rohit approaches work like a sport, always playing as a team player",
    text: "Rohit approaches work like a sport, always playing as a team player. A natural community builder, he has taken on various roles at Plum, from building partnerships to experiential marketing.", 
    author: "Saurabh Arora",
    role: "Co-Founder & CTO",
    company: "Plum Benefits"
  },
  { 
    heading: "He pushed the whole team towards newer possibilities and use cases",
    text: "Rohit is the go to person and is the load balance between internal customers and external stakeholders. I had the pleasure to work with him in Cleartax and managing him was very easy when the setup was him hitting his goals accross KRAs and challenging when he pushed the whole team towards newer possibilities and use cases. He has a great personality and go getter attitude.", 
    author: "Adwitiya Singh",
    role: "Head BFSI, Payroll, Corp Alliances",
    company: "Clear"
  },
  { 
    heading: "Rohit's energy and grit is unmatched",
    text: "Rohit's energy and grit is unmatched. He ideates, he executes, and achieves all of his goals. Rohit picked up various new initiatives at Plum, aligned different internal teams on these, managed external stakeholders and made all of them a success. He is a great peer and an extremely reliable teammate to work with.", 
    author: "Shriya Shah",
    role: "Performance Lead",
    company: "Plum Benefits"
  },
  { 
    heading: "Rohit was the driving force behind many key initiatives at Plum",
    text: "I had the pleasure of working with Rohit at Plum, and he is truly one of the most high-energy individuals I've encountered. His enthusiasm and eagerness to take on new challenges were evident in every project he undertook. Rohit was the driving force behind many key initiatives at Plum, bringing innovative ideas and exceptional execution to the table.", 
    author: "Abhishek Poddar",
    role: "Co-Founder & CEO",
    company: "Plum Benefits"
  },
  { 
    heading: "He leads by example",
    text: "I worked with Rohit during my internship period and I was particularly impressed by his ability to handle even the toughest client effortlessly. That skill often takes years to develop, but it seemed to come perfectly naturally to him. He was very helping and he leads by example. He always kept the team morale up.", 
    author: "Tanushree Upadhyay",
    role: "Account Management",
    company: "Clear"
  },
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative py-24 md:py-40 border-t border-slate-300 dark:border-white/5 bg-slate-100/50 dark:bg-[#0A192F]/50 transition-colors">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-24 px-6">
        <h2 className="text-[#FF6B35] uppercase tracking-[0.5em] text-[11px] md:text-[14px] font-black mb-6">Leadership Feedback</h2>
        <h3 className="text-4xl md:text-7xl font-display text-[#0A192F] dark:text-white italic font-black tracking-tighter uppercase leading-none transition-colors">Market <span className="text-[#FF6B35]">Sentiment</span></h3>
      </div>

      <div 
        className="flex overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 z-10 bg-gradient-to-r from-[#F0F4F8] dark:from-[#0A192F] to-transparent pointer-events-none transition-colors" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 z-10 bg-gradient-to-l from-[#F0F4F8] dark:from-[#0A192F] to-transparent pointer-events-none transition-colors" />

        <motion.div 
          animate={{ x: isPaused ? undefined : [0, -2800] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 90, ease: "linear" } }}
          style={{ willChange: 'transform' }}
          className="flex gap-6 md:gap-12 whitespace-nowrap py-8 md:py-12"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="premium-card p-8 md:p-16 rounded-[32px] md:rounded-[64px] min-w-[320px] w-[90vw] md:min-w-[650px] md:max-w-[700px] flex flex-col justify-between whitespace-normal group border-slate-200 dark:border-white/10 hover:border-[#FF6B35]/40 bg-white dark:bg-[#182A45]/40 transition-colors shadow-xl"
            >
              <div>
                <div className="flex gap-1.5 mb-6 md:mb-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                
                <h4 className="text-lg md:text-2xl font-display text-[#FF6B35] tracking-tight leading-tight mb-5 md:mb-6 uppercase italic font-bold">
                  {t.heading}
                </h4>
                
                <p className="text-sm md:text-xl font-light text-slate-600 dark:text-slate-200 tracking-tight leading-relaxed transition-colors">
                  "{t.text}"
                </p>
              </div>
              
              <div className="mt-8 md:mt-14 flex items-center justify-between pt-6 md:pt-10 border-t border-slate-200 dark:border-white/10 transition-colors">
                <div className="flex flex-col">
                  <p className="text-[#0A192F] dark:text-white font-black uppercase tracking-[0.3em] text-[11px] md:text-[14px] leading-none mb-2 transition-colors">{t.author}</p>
                  <p className="text-slate-500 font-medium uppercase tracking-[0.1em] text-[9px] md:text-[11px]">
                    {t.role} <span className="text-[#FF6B35]/40 mx-1 md:mx-2">|</span> {t.company}
                  </p>
                </div>
                {/* Keep existing svg icon */}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Mobile hint wrapper */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex justify-center md:hidden">
        <div className="flex items-center gap-3 text-slate-500">
           {/* ... svg ... */}
           <span className="text-[10px] font-black uppercase tracking-[0.3em]">Swipe to explore</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;