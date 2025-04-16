import React from "react";
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="about">
  <h1 className="heading">StarDock</h1>
  <p className="tagline">Build Fast. Ship Clean. UI Simplified.</p>
  <p>
    StarDock is a modern UI toolkit for building fast, responsive, and
    accessible web interfaces.
  </p>
  <a href="/getting-started" className="get-started-btn">Get Started</a>
</div>


       
        <div className="cards">
          <div className="footer-section">
            <h1>Learn</h1>
            <ul>
              <li><a href="/getting-started">Getting Started</a></li>
              <li><a href="/components">Components</a></li>
              <li><a href="/layouts">Layouts</a></li>
              <li><a href="/theming">Theming</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h1>Resources</h1>
            <ul>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/changelog">Changelog</a></li>
              <li><a href="/roadmap">Roadmap</a></li>
              <li><a href="/github">GitHub</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h1>Community</h1>
            <ul>
              <li><a href="/join">Join Discord</a></li>
              <li><a href="/Github">GitHub Discussions</a></li>
              <li><a href="/showcase">Showcase</a></li>
              <li><a href="/contribute">Contribute</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyRight">
        <p>
          © 2025 <b>StarDock.in</b> — Designed and developed by the StarDock team. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
