import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { FaHandshake, FaBrain, FaBalanceScale, FaChalkboardTeacher, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './index.css';
import royPhoto from './assets/roy-photo.jpg';
import homeImage from './assets/home.jpg';

// Import the new service pages
import FinancialConsulting from './pages/FinancialConsulting';
import MentalHealthCounseling from './pages/MentalHealthCounseling';
import MediationServices from './pages/MediationServices';
import AcademicTraining from './pages/AcademicTraining';
import ConsultancyPage from './pages/ConsultancyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-5 shadow-md fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">TCL</h1>
            <ul className="flex space-x-6 font-semibold">
              <NavItem label="Home" section="home" />
              <NavItem label="About" section="about" />
              <NavItem label="Services" section="services" />
              <NavItem label="Contact" section="contact" />
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
                    <h1 className="text-5xl font-extrabold leading-tight mb-4">Tuzungumze Consultants Limited</h1>
                    <p className="text-lg text-white mb-8">Empowering Growth, Fostering Well-being & Resolving Disputes.</p>
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
                    <h2 className="text-3xl font-semibold text-primary">About Director/Founder</h2>
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
    {/* Financial Consulting */}
    <Link to="/financial-consulting" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaHandshake className="text-4xl text-primary mb-4" />
      <h3 className="text-2xl font-semibold text-secondary">Financial Consulting</h3>
      <p className="text-gray-600 mt-2">
        Tailored strategies for budgeting, investments, and wealth management. Expert insights help secure financial futures and achieve lasting stability, backed by over 25 years of industry experience.
      </p>
    </Link>

    {/* Mental Health Counseling */}
    <Link to="/mental-health-counseling" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaBrain className="text-4xl text-primary mb-4" />
      <h3 className="text-2xl font-semibold text-secondary">Mental Health Counseling</h3>
      <p className="text-gray-600 mt-2">
        Evidence-based counseling focused on emotional well-being, resilience, and personal growth. Support is designed to help individuals overcome challenges and find purpose in life.
      </p>
    </Link>

    {/* Mediation Services */}
    <Link to="/mediation-services" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaBalanceScale className="text-4xl text-primary mb-4" />
      <h3 className="text-2xl font-semibold text-secondary">Mediation Services</h3>
      <p className="text-gray-600 mt-2">
        Certified mediation services to resolve conflicts effectively. A focus on fair, sustainable solutions ensures balanced outcomes that preserve relationships and foster mutual understanding.
      </p>
    </Link>

    {/* Academic Training */}
    <Link to="/academic-training" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaChalkboardTeacher className="text-4xl text-primary mb-4" />
      <h3 className="text-2xl font-semibold text-secondary">Academic Training</h3>
      <p className="text-gray-600 mt-2">
        Engaging lectures on public finance, artificial intelligence, and marketing inspire learners to excel in their fields. Training sessions provide practical knowledge and foster professional growth.
      </p>
    </Link>

    {/* Consultancy Page */}
    <Link to="/consultancy" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <FaChalkboardTeacher className="text-4xl text-primary mb-4" />
      <h3 className="text-2xl font-semibold text-secondary">Consultancy</h3>
      <p className="text-gray-600 mt-2">
        Explore tailored solutions and expert advice to drive your business and personal growth. Our consultancy services cover finance, mental health, academic training, and more.
      </p>
    </Link>
  </div>
</section>


                {/* Contact Section */}
<section id="contact" className="container mx-auto p-8 max-w-lg bg-white rounded-lg shadow-lg mt-16 mb-16">
  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Roy Muli</h2>
  <div className="space-y-4 text-gray-700">
    <div className="flex items-center">
      <FaPhone className="text-primary text-2xl mr-3" />
      <span>0722709200, 0785762888 or 0746936351</span>
    </div>
    <div className="flex items-start">
      <FaEnvelope className="text-primary text-2xl mr-3" />
      <div>
        <span>roymuli@yahoo.com</span>
        <br />
        <span>roymully@gmail.com</span>
      </div>
    </div>
    <div className="flex items-center">
      <FaMapMarkerAlt className="text-primary text-2xl mr-3" />
      <span>P.O. BOX 215-90202 Ndooa Kitui</span>
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
          <Route path="/consultancy" element={<ConsultancyPage />} /> {/* Added ConsultancyPage route */}
        </Routes>
      </div>
    </Router>
  );
}

// NavItem Component for smooth scrolling
const NavItem = ({ label, section }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure the navigation occurs before scrolling
  };

  return (
    <li>
      <button onClick={handleClick} className="hover:text-secondary">
        {label}
      </button>
    </li>
  );
};

export default App;
