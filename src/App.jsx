// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="pl-16 md:pl-20"> {/* Adjust padding to align with sidebar */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          {/* Add other routes for additional pages here */}
        </Routes>
        <ServicesSection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
