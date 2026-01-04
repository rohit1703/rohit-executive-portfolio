import React, { useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async'; // Ensure this is imported if you use SEO
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import LogoMarquee from './components/LogoMarquee';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary'; // FIX: Import the ErrorBoundary

// LAZY LOAD HEAVY COMPONENTS FOR PERFORMANCE
const BentoGrid = React.lazy(() => import('./components/BentoGrid'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Footer = React.lazy(() => import('./components/Footer'));
const LinkedInFeed = React.lazy(() => import('./components/LinkedInFeed'));

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <HelmetProvider>
      <div className="min-h-screen selection:bg-[#FF6B35] selection:text-white relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500">
        <SEO />
        
        {/* OPTIMIZATION: Hide custom cursor on mobile to save CPU/Battery */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>

        <Navbar />
        
        <main>
          <section id="hero">
            <Hero />
          </section>

          <LogoMarquee />
          
          {/* LAZY LOADING WRAPPER */}
          {/* FIX: Wrapped in ErrorBoundary to prevent white-screen crashes */}
          <ErrorBoundary>
            <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading Strategy...</div>}>
              
              {/* FIX: Added 'scroll-mt-28' to prevent Navbar overlap */}
              <section id="impact" className="scroll-mt-28 py-32 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Split Layout: Philosophy + Headline */}
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

              {/* FIX: Added 'scroll-mt-28' */}
              <section id="experience-centre" className="scroll-mt-28 py-32 bg-slate-200/50 dark:bg-[#081526]/50 border-y border-slate-300 dark:border-white/5 transition-colors duration-300">
                <Timeline />
              </section>

              {/* FIX: Added 'scroll-mt-28' (and ensures padding if needed) */}
              <section id="feed" className="scroll-mt-28 py-20 px-6">
                <LinkedInFeed />
              </section>

              {/* FIX: Added 'scroll-mt-28' */}
              <section id="testimonials" className="scroll-mt-28 py-32 overflow-hidden">
                <Testimonials />
              </section>

            </Suspense>
          </ErrorBoundary>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;