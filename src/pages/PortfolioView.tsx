import React, { useEffect, useRef, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { VALID_VIEWS, VIEW_META, ViewType } from '../data/views';
import { SECTION_COPY } from '../data/sectionCopy';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomCursor from '../components/CustomCursor';
import LogoMarquee from '../components/LogoMarquee';
import SEO from '../components/SEO';
import ErrorBoundary from '../components/ErrorBoundary';

const BentoGrid = React.lazy(() => import('../components/BentoGrid'));
const Timeline = React.lazy(() => import('../components/Timeline'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const LinkedInFeed = React.lazy(() => import('../components/LinkedInFeed'));
const Education = React.lazy(() => import('../components/Education'));
const Footer = React.lazy(() => import('../components/Footer'));

const PortfolioView: React.FC = () => {
  const { view } = useParams<{ view: string }>();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reset scroll to top on view load/change
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = 'smooth';
    // Focus main content for screen readers after route change
    mainRef.current?.focus();
  }, [view]);

  if (!view || !VALID_VIEWS.includes(view as ViewType)) {
    return <Navigate to="/" replace />;
  }

  const currentView = view as ViewType;
  const meta = VIEW_META[currentView];
  const copy = SECTION_COPY[currentView];

  return (
    <div className="min-h-screen selection:bg-[#FF6B35] selection:text-white relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500">
      <SEO title={meta.title} description={meta.description} />
      {/* Skip to content link for keyboard/screen reader users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#FF6B35] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold">
        Skip to content
      </a>
      <CustomCursor />
      <Navbar />

      <main ref={mainRef} id="main-content" tabIndex={-1} className="outline-none">
        <section id="hero">
          <Hero view={currentView} />
        </section>

        <LogoMarquee />

        <ErrorBoundary>
          <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading Strategy...</div>}>
            <section id="impact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
                <div className="lg:w-1/2">
                  <h2 className="text-[#FF6B35] font-black text-xs uppercase tracking-[0.5em] mb-6">{copy.impactLabel}</h2>
                  <p className="text-5xl md:text-7xl font-display leading-[0.9] text-[#0A192F] dark:text-white uppercase italic font-black transition-colors duration-300">
                    {copy.impactHeadline} <br />market <span className="text-[#FF6B35]">{copy.impactAccent}</span>
                  </p>
                </div>

                <div className="lg:w-1/2 pt-4">
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed mb-8 transition-colors">
                    {copy.impactDescription}
                  </p>
                  <div className="h-px w-24 bg-[#FF6B35]" />
                </div>
              </div>

              <BentoGrid view={currentView} />
            </section>

            <section id="experience-centre" className="py-32 bg-slate-200/50 dark:bg-[#081526]/50 border-y border-slate-300 dark:border-white/5 transition-colors duration-300">
              <Timeline view={currentView} />
            </section>

            <section id="feed">
              <LinkedInFeed view={currentView} />
            </section>

            <section id="testimonials" className="py-32 overflow-hidden">
              <Testimonials view={currentView} />
            </section>

            <section id="education">
              <Education />
            </section>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PortfolioView;
