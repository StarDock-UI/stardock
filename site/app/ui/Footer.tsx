import React from 'react';
import Link from 'next/link';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Branding */}
        <div className="footer-brand">
  <h1>StarDock</h1>
  <p>Build fast. Ship clean. UI Simplified.</p>
  <p className="credits">
    Made with ❤️ by{' '}
    <a href="https://github.com/Nikhil" target="_blank" rel="noopener noreferrer">@Nikhil</a> |{' '}
    <a href="https://github.com/Rohan" target="_blank" rel="noopener noreferrer">@Rohan</a> |{' '}
    <a href="https://github.com/Diya" target="_blank" rel="noopener noreferrer">@Diya</a> |{' '}
    <a href="https://github.com/Mahima" target="_blank" rel="noopener noreferrer">@Mahima</a>
  </p>
</div>

        

        {/* Footer Navigation */}
        <div className="footer-columns">
          <div className="footer-col">
            <h3>Learn</h3>
            <ul>
              <li><Link href="/getting-started">Getting Started</Link></li>
              <li><Link href="/components">Components</Link></li>
              <li><Link href="/styles">Styles</Link></li>
              <li><Link href="/fonts">Fonts</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              <li><Link href="https://github.com/StarDock-UI/stardock">GitHub</Link></li>
              <li><Link href="/showcase">Showcase</Link></li>
            </ul>
            <div className="footer-col">
            <h3>Contact</h3>
            <a href="mailto:contact@stardock-ui.dev" className="email-link">contact@stardock-ui.dev</a>
          </div>
          </div>

         
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 <strong>StarDock.in</strong> — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
