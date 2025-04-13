import React from 'react';
import '../Styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Design Smarter with <span className="highlight">YourUI</span>
        </h1>
        <p className="hero-subtitle">
          A modern and lightweight React UI library to help you build fast, beautiful, and accessible interfaces.
        </p>

        <div className="hero-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Documentation</button>
        </div>

        <div className="install-box">
          <code>npm install @your-ui/core</code>
        </div>

        <div className="features">
          <div className="feature-card">⚡ Ultra-fast components</div>
          <div className="feature-card">🎨 Customizable design system</div>
          <div className="feature-card">🔌 Easy integration with React</div>
          <div className="feature-card">📦 Tree-shakable & lightweight</div>
        </div>

        {/* Optional image preview */}
        {/* <div className="hero-image">
          <img src="/preview.png" alt="UI preview" />
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
