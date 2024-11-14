// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-4">Royal Essie Catering © 2024</p>
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="hover:text-accentGold">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-accentGold">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
