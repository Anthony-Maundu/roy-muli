import React from 'react';

function ConsultancyPage() {
  return (
    <div className="container mx-auto p-8 text-gray-700">
      <h1 className="text-4xl font-bold text-primary mb-6">Tuzugumuze Consultants Limited</h1>
      <h2 className="text-2xl font-semibold text-secondary mb-4">Director and Founder</h2>
      <ul className="list-disc pl-8 text-lg mb-6">
        <li>Corporate Trainers & Management Consultants</li>
        <li>Financial Marketing & Resources Mobilization Consultants</li>
        <li>Counseling Psychologist, Life Coach & Mentor</li>
        <li>Mediator – Certified Professional Mediator (CPM)</li>
      </ul>

      <h3 className="text-3xl font-semibold text-primary mb-4">Consultancy Services Offered</h3>

      {/* Corporate Training Consultancy Section */}
      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-secondary mb-4">A. Corporate Training Consultancy</h4>
        <ul className="list-disc pl-8 text-lg mb-6">
          <li><strong>Strategic Marketing, PR & Customer Service</strong></li>
          <ul className="list-disc pl-8">
            <li>Digital Banking & Credit Digitization - Transforming Financial Landscape</li>
            <li>Integrating Marketing Strategies & Techniques, Public Relations & Good Customer Service in the Competitive Digital Age</li>
            <li>Revolutionizing Customer Service: AI, PR, & Data-Driven Decision Making</li>
            <li>Good Customer Service: Redefining Customer Obsession</li>
            <li>SACCOS: Roles & Effectiveness of SACCO Supervisory Committees</li>
          </ul>

          <li><strong>Pension Management</strong></li>
          <ul className="list-disc pl-8">
            <li>Curated Pension Fund Governance & Compliance with RBA Act Requirements</li>
            <li>Pension Administration, Fund Investment & Governance, and AI Integration in the Modern Digital Era</li>
            <li>Best Practices in Pension Fund Assets Custody & Regulatory Compliance</li>
            <li>Innovative Tax Strategies in Pension Funds Management</li>
            <li>Trustee Training Appointment and Prudential Roles</li>
          </ul>

          <li><strong>Leadership</strong></li>
          <ul className="list-disc pl-8">
            <li>Corporate Governance for Executives and Non-Executive Board Members</li>
            <li>Business Continuity Plans Training</li>
            <li>Next-Gen Administrative Skills, AI-Driven Writing, Communication & Etiquette</li>
          </ul>

          <li><strong>Public Finance Management</strong></li>
          <ul className="list-disc pl-8">
            <li>Modern Budget Control, PFM & Tax Compliance Mastery</li>
            <li>Public Finance Training, Policy Formulation, Implementation & Analysis</li>
            <li>Public Finance Training, Public Policy Development, Governance, and Administration</li>
          </ul>

          <li><strong>Mental Health Training & Corporate Team Building</strong></li>
          <ul className="list-disc pl-8">
            <li>Mental Wellness & Self-Awareness Training</li>
            <li>Stress & Burnout Management Training</li>
            <li>Corporate Team Building</li>
          </ul>
        </ul>
      </div>

      {/* Financial Marketing & Resources Mobilization Section */}
      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-secondary mb-4">B. Financial Marketing & Resources Mobilization Consultancy</h4>
        <ul className="list-disc pl-8 text-lg mb-6">
          <li>Resources Mobilization, Fundraising Proposals & Project Proposals/Evaluations</li>
          <li>Investment Banking & Money Market Investments</li>
          <li>Fund Administration & Investments</li>
          <li>Revolving Fund Administration</li>
          <li>Syndicate Financing Linkages</li>
          <li>Venture Capital Facilitation</li>
          <li>On-shore & Offshore Finance Facilitation</li>
          <li>Micro Credit Linkages for SMEs & SMMEs</li>
          <li>Financial Literacy & Capacity Building Training</li>
          <ul className="list-disc pl-8">
            <li>Entrepreneurial Skills Development</li>
            <li>Basic Bookkeeping Training</li>
            <li>Group Dynamics Training</li>
            <li>Value Chain & Eco-system Development Training</li>
          </ul>
          <li>Market and Marketing Linkages</li>
        </ul>
      </div>

      {/* Mental Wellness Clinic Section */}
      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-secondary mb-4">C. Mental Wellness Clinic</h4>
        <ul className="list-disc pl-8 text-lg mb-6">
          <li><strong>Trauma, Loss & Grief Counseling</strong></li>
          <ul className="list-disc pl-8">
            <li>Loss of a Loved One</li>
            <li>Sexual and Gender-Based Violence (SGBV) Counseling</li>
            <li>Retirement, Retrenchment, and Loss of Jobs Therapies</li>
          </ul>

          <li><strong>Addiction Counseling</strong></li>
          <ul className="list-disc pl-8">
            <li>Drugs and Substance Abuse</li>
            <li>Pornography and Masturbation</li>
            <li>LGBTQ</li>
            <li>Cultism</li>
            <li>Radicalization</li>
          </ul>

          <li><strong>Marriage Counseling & Therapies</strong></li>
          <ul className="list-disc pl-8">
            <li>Pre-Marital Counseling</li>
            <li>Marriage Counseling</li>
            <li>Marriage Therapy</li>
          </ul>

          <li><strong>Mentorship</strong></li>
          <ul className="list-disc pl-8">
            <li>Career Coaching</li>
            <li>Seasoned Trainer on Peer Counseling</li>
            <li>Team Building for Students and Working Staff</li>
          </ul>

          <li><strong>Individual and Group Counseling</strong></li>
          <ul className="list-disc pl-8">
            <li>Comprehensive Psycho-social Counseling</li>
          </ul>
        </ul>
      </div>

      {/* Mediation Section */}
      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-secondary mb-4">D. Mediation - Alternative Dispute Resolution (ADR)</h4>
        <ul className="list-disc pl-8 text-lg mb-6">
          <li><strong>Trade and Commercial Disputes</strong></li>
          <li><strong>Family Disputes</strong></li>
          <ul className="list-disc pl-8">
            <li>Inheritance & Alimony Disputes</li>
            <li>Child Disputes</li>
          </ul>
          <li><strong>Land and Boundary Disputes</strong></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-8">
        <h3 className="text-2xl font-semibold text-primary mb-4">Booking Contact:</h3>
        <p className="text-lg mb-2">Cell: 0722709200 or 0785762888</p>
        <p className="text-lg">Email: <a href="mailto:roymuli@yahoo.com" className="text-primary">roymuli@yahoo.com</a></p>
      </div>
    </div>
  );
}

export default ConsultancyPage;
