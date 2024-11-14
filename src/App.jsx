// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/HomePage'; 
import Menu from './pages/Menu';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About'; // Import the About page

const App = () => {
  return (
    <Router>
      <Header /> {/* Include the header for navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/menu" element={<Menu />} /> {/* Menu route */}
        <Route path="/services" element={<Services />} /> {/* Services route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact route */}
      </Routes>
      <Footer /> {/* Include the Footer at the bottom */}
    </Router>
  );
};

export default App;
