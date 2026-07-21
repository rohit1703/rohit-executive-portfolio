import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import PortfolioView from './pages/PortfolioView';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const routes = (
    <Routes>
      {/* No-fork landing: "/" is the full portfolio (default emphasis). */}
      <Route path="/" element={<PortfolioView />} />
      {/* Persona routes stay as tailored-emphasis variants for outreach. */}
      <Route path="/:view" element={<PortfolioView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  // Skip smooth scroll for reduced-motion users and for the headless prerenderer
  // (navigator.webdriver), which relies on native scroll to trigger reveals.
  const noSmooth =
    typeof navigator !== 'undefined' &&
    (navigator.webdriver ||
      (typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches));

  if (noSmooth) return routes;

  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      {routes}
    </ReactLenis>
  );
};

export default App;
