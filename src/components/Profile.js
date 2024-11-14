// src/components/Profile.js

import React from 'react';
import royPhoto from '../assets/roy-photo.jpg';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 m-4">
      <img src={royPhoto} alt="Roy Muli" className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0" />
      <div className="md:ml-6 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-blue-800">Roy Muli</h2>
        <p className="text-gray-600 mt-2">
          With over 25 years of expertise, Roy Muli is a leader in financial consulting, counseling psychology, and public relations. His career spans banking, public finance, and academia, bringing transformative insights across sectors.
        </p>
      </div>
    </div>
  );
};

export default Profile;
