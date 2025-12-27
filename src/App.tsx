import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';

// LAZY LOAD: These heavy components won't block the initial mobile load
const BentoGrid = React.lazy(() => import('./components/BentoGrid'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Footer = React.lazy(() => import('./components/Footer'));
const LinkedInFeed = React.lazy(() => import('./components/LinkedInFeed'));

function App() {
  return (
    <HelmetProvider>
      <div className="bg-[#F0F4F8] dark:bg-[#0A192F] min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-[#FF6B35] selection:text-white">
        <SEO />
        
        {/* OPTIMIZATION: Hide custom cursor on mobile to save CPU/Battery */}
        <div className="hidden md:block">
          <CustomCursor />
        </div>
        
        <Navbar />
        
        <main className="relative z-10">
          {/* Hero loads instantly (Critical Path) */}
          <section id="hero">
            <Hero />
          </section>
          
          {/* Heavy sections load in background via Suspense */}
          <Suspense fallback={<div className="h-20" />}>
            <section id="impact" className="py-20 md:py-32 px-6">
              <BentoGrid />
            </section>
            
            <section id="experience">
              <Timeline />
            </section>
            
            <section id="testimonials" className="py-20 md:py-32 bg-white dark:bg-[#112240] transition-colors">
              <Testimonials />
            </section>

            <section id="linkedin" className="py-20 px-6">
              <LinkedInFeed />
            </section>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        
        <Analytics />
      </div>
    </HelmetProvider>
  );
}

export default App;