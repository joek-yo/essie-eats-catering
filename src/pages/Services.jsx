// src/pages/Services.jsx
import React from 'react';
import { motion } from 'framer-motion'; // For scroll animation

const servicesData = [
  { title: "Snacks Packs", description: "Delicious and fresh snack packs perfect for any occasion." },
  { title: "Lunch Options", description: "Customizable lunch options for both small and large groups." },
  { title: "Cocktail Package", description: "A selection of cocktails and appetizers for parties and events." },
  { title: "Conference Package", description: "Specially crafted menus for conferences and corporate gatherings." },
  { title: "Corporate Catering", description: "Professional catering services for corporate clients." },
  { title: "In-house Catering", description: "Personalized catering solutions at your venue." },
  { title: "Office Catering", description: "Convenient catering for offices and team meetings." },
  { title: "Team Building", description: "Catering and activities for team building events." },
  { title: "Private Parties", description: "Exclusive menus and service for private gatherings." },
  { title: "Wedding Catering", description: "Elegant and memorable catering for weddings." },
  { title: "Gift Packages", description: "Customized gift packages for special occasions." },
  { title: "Cafeteria Management", description: "Catering for institutions and organizations." }
];

const Services = () => {
  return (
    <div className="flex flex-col items-center px-8 py-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-primaryGreen mb-8">Our Catering Services</h2>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primaryGreen text-white rounded-full flex justify-center items-center mr-4">
                {/* Here you can use icons or images */}
                <span className="text-xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-darkGray">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-10 text-center">
        <p className="text-lg mb-4">Ready to book or want to learn more?</p>
        <a href="/contact" className="bg-primaryGreen text-white py-2 px-6 rounded-lg hover:bg-accentGold transition-all duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Services;
