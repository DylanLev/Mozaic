import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Branding */}
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="AI Wrapper Logo" className="navbar-logo-img" />
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-links">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-links">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/pricing" className="navbar-links">Pricing</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-links">Contact</Link>
          </li>
        </ul>

        {/* Action Button - Call to Action */}
        <div className="navbar-actions">
          <Link to="/donate" className="navbar-donate-btn">Make a Donation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
