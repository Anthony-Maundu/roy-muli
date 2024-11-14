// src/pages/Contact.js

import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Roy Muli</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        For inquiries, please reach out by filling out the form below or contacting us at the provided phone number.
      </p>
      <button className="mt-6 bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Send Message
      </button>
    </div>
  );
};

export default Contact;
