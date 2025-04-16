import React from 'react';
import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features-section">
      <h1 className="features-title">Web Building Experience</h1>
      
      <div className="features-grid-row large-row">
        <div className="feature-card large-card">
          <div className="image-placeholder"></div>
          <h3>AI-Powered Design Assistance</h3>
          <p>
            Get personalized design recommendations with AI-powered tools that help
            you create a polished, professional website effortlessly.
          </p>
        </div>

        <div className="feature-card large-card">
          <div className="image-placeholder"></div>
          <h3>Customizable Templates</h3>
          <p>
            Choose from a wide range of professionally designed templates. Easily
            customize fonts, colors, and layouts to reflect your brand.
          </p>
        </div>
      </div>

      <div className="features-grid-row small-row">
        <div className="feature-card small-card">
          <div className="image-placeholder"></div>
          <h3>SEO Tools Built-In</h3>
          <p>Boost your website’s visibility with integrated SEO tools.</p>
        </div>

        <div className="feature-card small-card">
          <div className="image-placeholder"></div>
          <h3>Seamless Integrations</h3>
          <p>
            Easily connect with your favorite apps and services for a website
            experience.
          </p>
        </div>

        <div className="feature-card small-card">
          <div className="image-placeholder"></div>
          <h3>Responsive Design</h3>
          <p>Create websites that look stunning on any device.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
