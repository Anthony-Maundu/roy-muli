import React from 'react';
import { FaUserShield, FaHandsHelping, FaHeart } from 'react-icons/fa';

function MentalHealthCounseling() {
  return (
    <div className="container mx-auto p-8 text-gray-700">
      <h2 className="text-4xl font-bold text-primary mb-6">Mental Health Counseling</h2>
      <p className="text-lg mb-6">
        Our mental health counseling services focus on providing compassionate care and support to help individuals achieve 
        emotional balance and personal growth. Roy Muli specializes in a variety of counseling practices designed to address 
        specific needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaUserShield className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Trauma Counseling</h3>
          <p>Helping individuals process traumatic experiences to restore peace, balance, and healing.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHandsHelping className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Family Therapy</h3>
          <p>Addressing family dynamics to foster better communication, understanding, and relationship health.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHeart className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Addiction Recovery</h3>
          <p>Providing structured support to guide individuals through addiction recovery with empathy and respect.</p>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthCounseling;
