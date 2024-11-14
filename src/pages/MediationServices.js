import React from 'react';
import { FaBalanceScale, FaHandshake, FaGavel } from 'react-icons/fa';

function MediationServices() {
  return (
    <div className="container mx-auto p-8 text-gray-700">
      <h2 className="text-4xl font-bold text-primary mb-6">Mediation Services</h2>
      <p className="text-lg mb-6">
        Roy Muli offers professional mediation services designed to help parties reach amicable agreements. Our approach emphasizes 
        fairness, transparency, and mutual understanding, ensuring respectful conflict resolution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaBalanceScale className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Conflict Resolution</h3>
          <p>Guiding parties to resolve disputes constructively, promoting understanding and respect.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHandshake className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Negotiation Assistance</h3>
          <p>Supporting effective negotiations to achieve mutually beneficial agreements in business and personal contexts.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaGavel className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Legal Mediation</h3>
          <p>Providing mediation for legal disputes to offer solutions outside of court, saving time and reducing costs.</p>
        </div>
      </div>
    </div>
  );
}

export default MediationServices;
