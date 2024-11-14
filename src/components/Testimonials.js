// src/components/Testimonials.js

import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">What Clients Say</h3>
      <blockquote className="p-4 bg-blue-50 rounded-lg shadow-md text-gray-700 italic">
        "Roy’s counseling sessions have been transformative. His experience and empathy are unmatched."
      </blockquote>
      <blockquote className="p-4 bg-blue-50 rounded-lg shadow-md text-gray-700 italic mt-4">
        "Roy's financial insights helped us secure crucial funding. Highly recommended!"
      </blockquote>
    </div>
  );
};

export default Testimonials;
