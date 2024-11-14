// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      {/* Introduction */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primaryGreen mb-4">About Royal Essie Catering</h1>
        <p className="text-lg text-gray-700">
          At Royal Essie Catering, we provide high-quality catering services for all events. Whether it's a small
          gathering or a grand wedding, we ensure your event is one to remember with our delicious food and professional
          service.
        </p>
      </section>

      {/* Mission Statement */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-accentGold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our mission is to create memorable experiences through exceptional food, personalized service, and a commitment
          to quality. We strive to exceed the expectations of our clients by offering catering solutions that suit their
          unique needs and preferences.
        </p>
      </section>

      {/* Our Services */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-accentGold mb-4">Our Services</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>In-house Catering</li>
          <li>Event Catering</li>
          <li>Wedding Catering</li>
          <li>Corporate Catering</li>
          <li>Social Events Catering</li>
          <li>Customized Menu Options</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Interested in learning more or booking our services? We'd love to hear from you.
        </p>
        <a href="/contact" className="inline-block bg-primaryGreen text-white py-3 px-6 rounded-full text-lg hover:bg-accentGold transition">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
