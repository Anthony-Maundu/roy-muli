// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-800 text-white px-6 py-4 shadow-lg">
      <h1 className="text-2xl font-bold">Roy Muli</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
        <li><Link to="/services" className="hover:text-gray-200">Services</Link></li>
        <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
