import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaHandshake, FaBrain, FaBalanceScale, FaChalkboardTeacher, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './index.css';
import royPhoto from './assets/roy-photo.jpg';
import homeImage from './assets/home.jpg';

// Import the new service pages
import FinancialConsulting from './pages/FinancialConsulting';
import MentalHealthCounseling from './pages/MentalHealthCounseling';
import MediationServices from './pages/MediationServices';
import AcademicTraining from './pages/AcademicTraining';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-5 shadow-md fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Roy Muli</h1>
            <ul className="flex space-x-6 font-semibold">
              <li><a href="#home" className="hover:text-secondary">Home</a></li>
              <li><a href="#about" className="hover:text-secondary">About</a></li>
              <li><a href="#services" className="hover:text-secondary">Services</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Routes for each page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Home Section */}
                <section 
                  id="home" 
                  className="relative bg-cover bg-center h-screen pt-20" 
                  style={{ backgroundImage: `url(${homeImage})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-white text-center">
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">Financial Consultant & Psychologist</h1>
                    <p className="text-lg text-black mb-8">Roy Muli brings over 25 years of expertise in finance, counseling, and academic mentorship.</p>
                    <a href="#about" className="bg-secondary text-white px-6 py-3 rounded-lg">Learn More</a>
                  </div>
                </section>

                {/* About Section */}
                <section id="about" className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg mt-16">
                  <img 
                    src={royPhoto} 
                    alt="Roy Muli" 
                    className="w-40 h-40 rounded-full object-cover mb-4 md:mb-0 transform transition-transform duration-300 hover:scale-110" 
                  />
                  <div className="md:ml-6 text-center md:text-left">
                    <h2 className="text-3xl font-semibold text-primary">Roy Muli</h2>
                    <p className="text-accent mt-2 leading-relaxed">
                      Roy Muli is a seasoned professional in finance, consulting, counseling psychology, and academia. His career has brought transformative insights and lasting impact across multiple sectors.
                    </p>
                    <div className="flex space-x-4 mt-4">
                      <a href="#contact" className="bg-gray-200 text-primary px-4 py-2 rounded-lg">Contact Me</a>
                      <a href="#services" className="bg-gray-200 text-primary px-4 py-2 rounded-lg">View Services</a>
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                <section id="services" className="container mx-auto p-8 text-center mt-16">
                  <h2 className="text-4xl font-bold text-primary mb-8">Our Services</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link to="/financial-consulting" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <FaHandshake className="text-4xl text-primary mb-4" />
                      <h3 className="text-2xl font-semibold text-secondary">Financial Consulting</h3>
                      <p className="text-gray-600 mt-2">Expert advice in financial management and investment.</p>
                    </Link>
                    <Link to="/mental-health-counseling" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <FaBrain className="text-4xl text-primary mb-4" />
                      <h3 className="text-2xl font-semibold text-secondary">Mental Health Counseling</h3>
                      <p className="text-gray-600 mt-2">Guiding individuals through personal growth and well-being.</p>
                    </Link>
                    <Link to="/mediation-services" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <FaBalanceScale className="text-4xl text-primary mb-4" />
                      <h3 className="text-2xl font-semibold text-secondary">Mediation Services</h3>
                      <p className="text-gray-600 mt-2">Certified mediation to resolve conflicts efficiently.</p>
                    </Link>
                    <Link to="/academic-training" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <FaChalkboardTeacher className="text-4xl text-primary mb-4" />
                      <h3 className="text-2xl font-semibold text-secondary">Academic Training</h3>
                      <p className="text-gray-600 mt-2">Lectures on public finance, AI, and marketing.</p>
                    </Link>
                  </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="container mx-auto p-8 max-w-lg bg-white rounded-lg shadow-lg mt-16 mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Roy Muli</h2>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                      <FaPhone className="text-primary text-2xl mr-3" />
                      <span>0785762888, 0746936351, or 0722-709200</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-primary text-2xl mr-3" />
                      <span>roymuli@yahoo.com</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-primary text-2xl mr-3" />
                      <span>P.O. BOX 215-90202 NDOOA KITUI</span>
                    </div>
                  </div>
                </section>
              </>
            }
          />
          <Route path="/financial-consulting" element={<FinancialConsulting />} />
          <Route path="/mental-health-counseling" element={<MentalHealthCounseling />} />
          <Route path="/mediation-services" element={<MediationServices />} />
          <Route path="/academic-training" element={<AcademicTraining />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
