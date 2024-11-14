// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/src/assets/hero-image.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Royal Essie Catering</h1>
        <p className="text-lg mb-8">Experience exceptional catering services with a touch of elegance.</p>
        <button className="px-6 py-3 bg-accentGold text-darkGray rounded-lg shadow-lg hover:bg-gold-dark transition-colors duration-300">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

export default HomePage;
