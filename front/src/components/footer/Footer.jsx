import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2025 Your Company. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" className="footer-link">Terms of Service</a>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://twitter.com" className="footer-social-icon">Twitter</a>
        <a href="https://facebook.com" className="footer-social-icon">Facebook</a>
        <a href="https://instagram.com" className="footer-social-icon">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
