import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-primaryGreen">Royal Essie Catering</h3>
            <p className="mt-2 text-gray-400">Providing the finest catering services for all occasions.</p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul>
              <li className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" /> <span>+123 456 7890</span>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" /> <span>info@royalessie.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a href="#" className="text-primaryGreen hover:text-accentGold">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-primaryGreen hover:text-accentGold">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-primaryGreen hover:text-accentGold">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Footer Links (e.g., Privacy, About Us) */}
        <div className="text-center md:text-left mb-6">
          <a href="/about-us" className="text-primaryGreen hover:text-accentGold mr-6">About Us</a>
          <a href="/faq" className="text-primaryGreen hover:text-accentGold mr-6">FAQ</a>
          <a href="/privacy-policy" className="text-primaryGreen hover:text-accentGold mr-6">Privacy Policy</a>
          <a href="/terms-of-service" className="text-primaryGreen hover:text-accentGold">Terms of Service</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Royal Essie Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
