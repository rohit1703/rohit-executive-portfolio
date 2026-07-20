import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioView from './pages/PortfolioView';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      {/* No-fork landing: "/" is the full portfolio (default emphasis). */}
      <Route path="/" element={<PortfolioView />} />
      {/* Persona routes stay as tailored-emphasis variants for outreach. */}
      <Route path="/:view" element={<PortfolioView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
