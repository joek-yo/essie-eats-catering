// src/components/HeroSection.jsx
import React from 'react';
import HeroImage from '../assets/Food_Display.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-primaryGreen text-white h-screen flex items-center justify-center px-4 py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-opacity-50" 
        style={{ backgroundImage: `url(${HeroImage})` }} 
      ></div>
      <div className="relative text-center z-10">
        <h1 className="text-5xl font-bold mb-4">Welcome to Royal Essie Catering</h1>
        <p className="text-lg mb-6">Delicious, fresh, and customized catering solutions for every occasion.</p>
        <a href="#services" className="px-6 py-3 bg-accentGold text-darkGray rounded-full font-semibold text-lg hover:bg-accentGold/80 transition duration-300 text-primaryGreen">Explore Our Services</a>
      </div>
    </section>
  );
};

export default HeroSection;
