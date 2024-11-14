// Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // You can add further actions here (like sending data to a server).
    alert("Thank you for reaching out. We'll get back to you soon!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col items-center px-8 py-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-primaryGreen mb-8">Contact Us</h2>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mb-12" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-darkGray font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-darkGray font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-darkGray font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primaryGreen text-white font-semibold py-2 px-4 rounded-lg hover:bg-accentGold transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Information */}
      <div className="text-center">
        <p className="text-darkGray font-semibold">Phone: <span className="text-primaryGreen">+123 456 7890</span></p>
        <p className="text-darkGray font-semibold">Email: <span className="text-primaryGreen">info@royalessie.com</span></p>
        <p className="text-darkGray font-semibold">Address: <span className="text-primaryGreen">123 Catering Lane, Food City</span></p>
      </div>
    </div>
  );
};

export default Contact;
