import React from 'react';
import { FaChalkboardTeacher, FaBook, FaGraduationCap } from 'react-icons/fa';

function AcademicTraining() {
  return (
    <div className="container mx-auto p-8 text-gray-700">
      <h2 className="text-4xl font-bold text-primary mb-6">Academic Training</h2>
      <p className="text-lg mb-6">
        As an experienced educator, Roy Muli offers comprehensive academic training in fields such as public finance, 
        artificial intelligence, marketing, and entrepreneurial development. Each program is designed to equip participants 
        with the knowledge and skills needed for professional success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaChalkboardTeacher className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Public Finance</h3>
          <p>Insightful courses covering government budgeting, fiscal policies, and financial systems management.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaBook className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Marketing Strategies</h3>
          <p>Learn modern marketing techniques, from digital strategies to customer-centric approaches.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaGraduationCap className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Entrepreneurial Development</h3>
          <p>Programs tailored to equip aspiring entrepreneurs with essential business skills and insights.</p>
        </div>
      </div>
    </div>
  );
}

export default AcademicTraining;
