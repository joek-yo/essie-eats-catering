// Services.jsx
import React from 'react';

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
      <h2 className="text-4xl font-bold text-primaryGreen mb-8">Our Services</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-darkGray mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
