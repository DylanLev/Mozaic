import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-text">Moz<span className="ai-text">AI</span>c</span>
          <p className="footer-description">
            Transform your images with the power of AI
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Product</h3>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/gallery">Gallery</a>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MozAIc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
