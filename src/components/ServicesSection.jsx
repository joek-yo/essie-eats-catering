// src/components/ServicesSection.jsx
import React from 'react';
import { FaUtensils, FaConciergeBell, FaCalendarAlt } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaUtensils size={48} />,
    title: 'In-House Catering',
    description: 'Fresh and delicious meals served right at your event. Perfect for any occasion.'
  },
  {
    id: 2,
    icon: <FaConciergeBell size={48} />,
    title: 'Corporate Catering',
    description: 'Professional catering for business meetings, conferences, and corporate events.'
  },
  {
    id: 3,
    icon: <FaCalendarAlt size={48} />,
    title: 'Event Catering',
    description: 'Comprehensive catering services for weddings, parties, and social gatherings.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-lightGray" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-primaryGreen">Our Catering Services</h2>
        <p className="text-lg mt-4">Discover our wide range of customized catering options for every type of event.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
        {services.map(service => (
          <div key={service.id} className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="mb-4 text-primaryGreen">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
