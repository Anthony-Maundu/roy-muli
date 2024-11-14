// src/pages/Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Welcome to Roy Muli's Professional Profile</h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Roy Muli has over 25 years of experience across financial consulting, counseling psychology, and academia. 
        Explore the site to learn more about his services and expertise.
      </p>
      <button className="mt-6 bg-blue-800 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default Home;
