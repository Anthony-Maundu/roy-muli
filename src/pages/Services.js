// src/pages/Services.js

import React from 'react';

const servicesData = [
  { title: 'Financial Consulting', description: 'Expert advice in financial management and investment.' },
  { title: 'Counseling and Mental Health', description: 'Guiding individuals through personal growth and well-being.' },
  { title: 'Mediation and Conflict Resolution', description: 'Certified mediation to resolve conflicts efficiently.' },
  { title: 'Training and Academic Lectures', description: 'Lectures on public finance, AI, and marketing.' }
];

const Services = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
