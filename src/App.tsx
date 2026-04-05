import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hub from './pages/Hub';
import PortfolioView from './pages/PortfolioView';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/:view" element={<PortfolioView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
