// src/pages/About.js

import React from 'react';
import Profile from '../components/Profile';

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">About Roy Muli</h2>
      <Profile />
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Roy Muli brings expertise in financial consulting, public relations, marketing, and counseling psychology.
        His passion for integrating mental health, financial empowerment, and strategic development has guided his extensive career.
      </p>
    </div>
  );
};

export default About;
