import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { ViewType } from '../data/views';
import { TESTIMONIALS } from '../data/testimonials';

interface TestimonialsProps {
  view: ViewType;
}

const Testimonials: React.FC<TestimonialsProps> = ({ view }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [oneSetWidth, setOneSetWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const sorted = [...TESTIMONIALS].sort((a, b) => a.priority[view] - b.priority[view]);

  // Measure one set of cards
  useEffect(() => {
    if (trackRef.current) {
      const width = trackRef.current.scrollWidth / 3;
      setOneSetWidth(width);
    }
  }, [view]);

  // Continuous auto-scroll using animation frame
  const speed = 0.5; // pixels per frame (~30px/sec at 60fps)

  useAnimationFrame(() => {
    if (isPaused || isDragging || oneSetWidth === 0) return;

    let newX = x.get() - speed;
    // Loop: when we've scrolled past one full set, snap back
    if (newX <= -oneSetWidth) {
      newX += oneSetWidth;
    }
    x.set(newX);
  });

  // After drag ends, normalize position to stay in the loopable range
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    if (oneSetWidth === 0) return;

    let current = x.get();
    // Normalize into [-oneSetWidth, 0] range
    current = current % oneSetWidth;
    if (current > 0) current -= oneSetWidth;
    x.set(current);
  }, [oneSetWidth, x]);

  return (
    <div className="relative py-24 md:py-40 border-t border-slate-300 dark:border-white/5 bg-slate-100/50 dark:bg-[#0A192F]/50 transition-colors">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-24 px-6">
        <h2 className="text-[#FF6B35] uppercase tracking-[0.5em] text-[11px] md:text-[14px] font-black mb-6">Leadership Feedback</h2>
        <h3 className="text-4xl md:text-7xl font-display text-[#0A192F] dark:text-white italic font-black tracking-tighter uppercase leading-none transition-colors">Market <span className="text-[#FF6B35]">Sentiment</span></h3>
      </div>

      <div
        className="overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 z-10 bg-gradient-to-r from-[#F0F4F8] dark:from-[#0A192F] to-transparent pointer-events-none transition-colors" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 z-10 bg-gradient-to-l from-[#F0F4F8] dark:from-[#0A192F] to-transparent pointer-events-none transition-colors" />

        <motion.div
          ref={trackRef}
          style={{ x, willChange: 'transform' }}
          drag="x"
          dragConstraints={{ left: -oneSetWidth * 2, right: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="flex gap-6 md:gap-12 whitespace-nowrap py-8 md:py-12"
        >
          {[...sorted, ...sorted, ...sorted].map((t, idx) => (
            <div
              key={idx}
              className="premium-card p-8 md:p-16 rounded-[32px] md:rounded-[64px] min-w-[320px] w-[90vw] md:min-w-[650px] md:max-w-[700px] flex flex-col justify-between whitespace-normal group border-slate-200 dark:border-white/10 hover:border-[#FF6B35]/40 bg-white dark:bg-[#182A45]/40 transition-colors shadow-xl select-none"
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
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
