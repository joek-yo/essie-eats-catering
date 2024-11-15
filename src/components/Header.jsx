import React from 'react';
import { FaHome, FaUtensils, FaConciergeBell, FaPhone, FaInfoCircle } from 'react-icons/fa'; // Added FaInfoCircle for About
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-white shadow-md relative z-50">
      {/* Logo and Brand Name */}
      <div className="flex items-center">
        <img src="/src/assets/Logo1.jpg" alt="Logo" className="w-8 h-8 mr-2" /> {/* Updated logo */}
        <span className="text-xl font-semibold text-primaryGreen">Royal Essie Catering</span>
      </div>

      {/* Sidebar Navigation */}
      <nav className="fixed top-0 left-0 h-full bg-darkGray text-white shadow-lg flex flex-col items-center w-16 group hover:w-48 transition-transform duration-500 ease-in-out mt-16">
        <ul className="flex flex-col items-center mt-10 space-y-6 w-full">
          {/* Home Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <Link to="/" className="flex items-center w-full">
              <FaHome size={24} />
              <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
                Home
              </span>
            </Link>
          </li>

          {/* About Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <Link to="/about" className="flex items-center w-full">
              <FaInfoCircle size={24} /> {/* About Icon */}
              <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
                About
              </span>
            </Link>
          </li>

          {/* Menu Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <Link to="/menu" className="flex items-center w-full">
              <FaUtensils size={24} />
              <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
                Menu
              </span>
            </Link>
          </li>

          {/* Services Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <Link to="/services" className="flex items-center w-full">
              <FaConciergeBell size={24} />
              <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
                Services
              </span>
            </Link>
          </li>

          {/* Contact Icon */}
          <li className="flex items-center p-2 w-full text-primaryGreen hover:bg-accentGold transition-colors duration-300 relative">
            <Link to="/contact" className="flex items-center w-full">
              <FaPhone size={24} />
              <span className="absolute left-16 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primaryGreen">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
