import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hub from './pages/Hub';
import PortfolioView from './pages/PortfolioView';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/:view" element={<PortfolioView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
