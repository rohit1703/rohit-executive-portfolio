import React, { useEffect, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CustomCursor from '../components/CustomCursor';
import LogoMarquee from '../components/LogoMarquee';
import SEO from '../components/SEO';

const BentoGrid = React.lazy(() => import('../components/BentoGrid'));
const Timeline = React.lazy(() => import('../components/Timeline'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const Footer = React.lazy(() => import('../components/Footer'));
const LinkedInFeed = React.lazy(() => import('../components/LinkedInFeed'));

const VALID_VIEWS = ['partnerships', 'marketing'] as const;
type ViewType = typeof VALID_VIEWS[number];

const VIEW_META: Record<ViewType, { title: string; description: string }> = {
  partnerships: {
    title: 'Rohit Mallavarapu | Partnerships Manager',
    description: 'How I build and scale partner ecosystems, manage strategic accounts, and drive revenue through alliances.',
  },
  marketing: {
    title: 'Rohit Mallavarapu | Marketing Leader',
    description: 'Executive portfolio of Rohit Mallavarapu. The strategic engine behind $7M+ revenue and Grid Dynamics\' NASDAQ journey.',
  },
};

const PortfolioView: React.FC = () => {
  const { view } = useParams<{ view: string }>();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  if (!view || !VALID_VIEWS.includes(view as ViewType)) {
    return <Navigate to="/" replace />;
  }

  const meta = VIEW_META[view as ViewType];

  return (
    <div className="min-h-screen selection:bg-[#FF6B35] selection:text-white relative bg-[#F0F4F8] dark:bg-[#0A192F] transition-colors duration-500">
      <SEO title={meta.title} description={meta.description} />
      <CustomCursor />
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <LogoMarquee />

        <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading Strategy...</div>}>
          <section id="impact" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
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
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PortfolioView;
