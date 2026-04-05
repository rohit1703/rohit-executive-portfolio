import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ViewType } from '../data/views';
import { HERO_DATA } from '../data/hero';

interface HeroProps {
  view: ViewType;
}

const Hero: React.FC<HeroProps> = ({ view }) => {
  const data = HERO_DATA[view];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative min-h-[100dvh] md:min-h-[110vh] bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500 overflow-hidden flex flex-col justify-center">

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between relative z-20">

        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: yPos }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-2 md:mb-0 relative z-30"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 px-4 py-2 rounded-full border border-slate-300 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-md text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase inline-block shadow-sm"
          >
            {data.badge}
          </motion.div>

          <h1 className="font-display text-[12vw] md:text-[6rem] lg:text-[7.5rem] tracking-tighter leading-[0.9] text-[#0A192F] dark:text-white font-black transition-colors duration-300">
            {data.headlineTop} <br />
            <span className="text-[#FF6B35]">{data.headlineAccent1}</span>
            <span className="text-slate-300 dark:text-white/20 mx-4 lg:mx-6 font-light">{data.headlineMid}</span>
            <br />
            {data.headlineBottom} <span className="text-[#FF6B35]">{data.headlineAccent2}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-6 md:mt-8 max-w-lg text-slate-600 dark:text-slate-300 text-sm md:text-lg font-light leading-relaxed
                       p-4 md:p-0 rounded-2xl
                       bg-white/60 dark:bg-[#0A192F]/60 backdrop-blur-md border border-white/20 shadow-lg
                       md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />
        </motion.div>

        <motion.div
          style={{ y: imageY, opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
          className="relative md:absolute z-10 w-full md:w-1/2 h-[50vh] md:h-[80vh] md:right-0 md:bottom-0 pointer-events-none flex items-end justify-center md:justify-end mt-[-5vh] md:mt-0"
        >
          <div className="relative w-full h-full">
            <img
              src="/rohit.webp"
              alt="Rohit Mallavarapu"
              fetchPriority="high"
              loading="eager"
              width="800"
              height="1000"
              className="w-full h-full object-cover object-top md:object-center
                         grayscale-0 md:grayscale-[20%] hover:grayscale-0 transition-all duration-1000
                         opacity-80 dark:opacity-90 mix-blend-normal dark:mix-blend-luminosity"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
              }}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F0F4F8] dark:from-[#0A192F] via-[#F0F4F8]/50 dark:via-[#0A192F]/50 to-transparent z-20" />
          </div>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#FF6B35]/10 blur-[120px] rounded-full pointer-events-none z-0"
        />
      </div>
    </div>
  );
};

export default Hero;
