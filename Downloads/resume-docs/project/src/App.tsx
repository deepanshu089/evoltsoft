import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import Database from './pages/Database';
import AIModels from './pages/AIModels';
import Pages from './pages/Pages';

import Customization from './pages/Customization';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/database" element={<Database />} />
          <Route path="/ai-models" element={<AIModels />} />
          <Route path="/pages" element={<Pages />} />
       
          <Route path="/customization" element={<Customization />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;