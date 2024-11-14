import React from 'react';
import { FaChartLine, FaMoneyCheck, FaPiggyBank } from 'react-icons/fa';

function FinancialConsulting() {
  return (
    <div className="container mx-auto p-8 text-gray-700">
      <h2 className="text-4xl font-bold text-primary mb-6">Financial Consulting</h2>
      <p className="text-lg mb-6">
        Roy Muli provides tailored financial consulting services aimed at optimizing 
        financial health and achieving strategic growth. Our services focus on key areas such as investment, financial planning, 
        and risk management, helping individuals and businesses reach their financial goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaChartLine className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Investment Strategy</h3>
          <p>We provide data-driven investment strategies that align with your goals, helping to maximize returns and mitigate risks.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaMoneyCheck className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Financial Planning</h3>
          <p>Our comprehensive planning ensures sustainable growth, efficient cash flow management, and long-term security.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaPiggyBank className="text-4xl text-primary mb-4" />
          <h3 className="text-2xl font-semibold text-secondary mb-2">Risk Management</h3>
          <p>Identify potential risks and implement strategies to safeguard assets, ensuring resilience in volatile markets.</p>
        </div>
      </div>
    </div>
  );
}

export default FinancialConsulting;
