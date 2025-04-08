// src/Footer.js
import React from 'react';
import './Home.css'; // Create a separate CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} E-Commerce App. All rights reserved.</p>
        <p>
          <a href="/about" className="footer-link">About Us</a> | 
          <a href="/contact" className="footer-link"> Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
