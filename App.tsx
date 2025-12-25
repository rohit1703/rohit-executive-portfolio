import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LogoMarquee from './components/LogoMarquee';
import LinkedInFeed from './components/LinkedInFeed';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#FF6B35] selection:text-white relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500">
      <CustomCursor />
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <LogoMarquee />
        
        <section id="impact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          {/* UPDATED: Split Layout with 'Philosophy' Text */}
          <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-[#FF6B35] font-black text-xs uppercase tracking-[0.5em] mb-6">Strategic Output</h2>
              <p className="text-5xl md:text-7xl font-display leading-[0.9] text-[#0A192F] dark:text-white uppercase italic font-black transition-colors duration-300">
                measurable <br />market <span className="text-[#FF6B35]">dominance.</span>
              </p>
            </div>
            
            <div className="lg:w-1/2 pt-4">
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 transition-colors">
                Driven by an innate curiosity to understand how global technologies can authentically connect with communities. Whether crafting experiential marketing campaigns, building genuine partnerships, or developing market positioning strategies, I am committed to creating meaningful connections that drive lasting impact.
              </p>
              <div className="h-px w-24 bg-[#FF6B35]" />
            </div>
          </div>

          <BentoGrid />
        </section>

        <section id="experience-centre" className="py-32 bg-slate-200/50 dark:bg-[#081526]/50 border-y border-slate-300 dark:border-white/5 transition-colors duration-300">
          <Timeline />
        </section>

        <section id="feed">
          <LinkedInFeed />
        </section>

        <section id="testimonials" className="py-32 overflow-hidden">
          <Testimonials />
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
};

export default App;