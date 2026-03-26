import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPortfolio from './pages/MainPortfolio';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 min-h-screen selection:bg-blue-600/30 selection:text-blue-600 transition-colors duration-300">
        <Routes>
          {/* Main Portfolio Route */}
          <Route path="/" element={<MainPortfolio />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<MainPortfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
