import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
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
    // CHANGE 1: Use 'min-h-[100dvh]' for better mobile browser support (address bar handling)
    <div ref={containerRef} className="relative min-h-[100dvh] md:h-[120vh] bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500 overflow-hidden">
      
      {/* CHANGE 2: Reduced top padding from pt-32 to pt-24 on mobile to lift text up */}
      <div className="sticky top-0 h-screen w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-0 flex flex-col md:flex-row items-center justify-between overflow-hidden">
        
        {/* TEXT SECTION */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity, y: yPos }}
          className="relative z-20 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 px-4 py-2 rounded-full border border-slate-300 dark:border-white/20 bg-white/90 md:bg-white/50 dark:bg-white/5 md:backdrop-blur-md text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase inline-block"
          >
            Marketing Leader
          </motion.div>
          
          {/* CHANGE 3: Reduced font size slightly from 13vw to 12vw to prevent overcrowding */}
          <h1 className="font-display text-[12vw] md:text-[6rem] lg:text-[7.5rem] tracking-tighter leading-[0.9] text-[#0A192F] dark:text-white font-black transition-colors duration-300">
            STARTUP <br />
            <span className="text-[#FF6B35]">SPARK</span>
            <span className="text-slate-300 dark:text-white/20 mx-4 lg:mx-6 font-light">→</span> 
            <br />
            NASDAQ <span className="text-[#FF6B35]">STAGE</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            // CHANGE 4: Reduced margin (mt-8 -> mt-6) and padding (p-4 -> p-3) to compact the bio card
            className="mt-6 md:mt-8 max-w-lg text-slate-600 dark:text-slate-300 text-sm md:text-lg font-light leading-relaxed 
                       p-3 md:p-0 rounded-2xl bg-white/80 dark:bg-[#0A192F]/80 backdrop-blur-sm md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none"
          >
            Global marketing leader with deep expertise in scaling high-growth tech organizations. 
            I design and execute <span className="text-[#0A192F] dark:text-white font-bold">AI-led growth strategies, </span> that fuel revenue acceleration & brand expansion — including strategic leadership for a NASDAQ-listed organisation.
          </motion.p>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div 
          style={{ y: imageY, opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
          className="absolute md:relative z-10 right-[-10%] md:right-0 bottom-0 w-[100vw] md:w-[45vw] h-[55vh] md:h-[80vh] pointer-events-none md:flex md:items-end"
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
            {/* Gradient Overlay */}
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