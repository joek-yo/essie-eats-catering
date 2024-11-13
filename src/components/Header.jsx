// src/components/Header.jsx
import React from 'react';
import { FaHome, FaUtensils, FaConciergeBell, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-white shadow-md relative">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <img src="/src/assets/Logo13.png" alt="Logo" className="w-8 h-8 mr-2" /> {/* Placeholder for logo */}
        <span className="text-xl font-semibold text-primaryGreen">Royal Essie Catering</span>
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-full bg-darkGray text-white shadow-lg flex flex-col items-center w-16 group hover:w-48 transition-all duration-300 ease-in-out mt-16">
        <ul className="flex flex-col items-center mt-10 space-y-6 w-full">
          {/* Home Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <FaHome size={24} />
            <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
              Home
            </span>
          </li>

          {/* Menu Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <FaUtensils size={24} />
            <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
              Menu
            </span>
          </li>

          {/* Services Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <FaConciergeBell size={24} />
            <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
              Services
            </span>
          </li>

          {/* Contact Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <FaPhone size={24} />
            <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
              Contact
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
