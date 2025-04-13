"use client";  // Add this line to mark this as a client-side component

import React, { useState } from 'react';
import "../Styles/Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <h1>YourUI</h1>
        </div>
        
        {/* Menu toggle for mobile view */}
        <div className={`menu-toggle ${isMobile ? 'active' : ''}`} onClick={handleMobileMenuToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navbar links */}
        <nav className={`nav-links ${isMobile ? 'active' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Button for call to action */}
        <div className="cta">
          <button className="btn primary">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
