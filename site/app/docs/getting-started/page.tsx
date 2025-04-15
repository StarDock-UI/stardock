'use client'
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css'; // Reuse your styling

const GettingStarted = () => {
  return (
    <div className="docs-container">
      {/* Sidebar */}
      <Sidebar />

      <div className="main-content">
        {/* Top header */}
        <DocsHeader />

        {/* Blob background */}
        <Blob size="500px" top="20px" opacity={0.1} />

        {/* Page content */}
        <div className="content-section">
          <h2>🚀 Getting Started with StarDock</h2>
          <p>
            Let's get your UI components up and running in just a few steps. StarDock is built for speed, customization, and developer happiness.
          </p>

          <h2>📦 Installation</h2>
          <p>To start using StarDock, install the package via npm or yarn:</p>
          <code>npm install stylocss</code>
          <p>or</p>
          <code>yarn add stylocss</code>

          <h2>🧬 Importing Styles</h2>
          <p>Include the base styles in your main app entry file (e.g. <code>layout.tsx</code> or <code>_app.tsx</code>):</p>
          <code>{`import 'stylocss/styles.css';`}</code>

          <h2>🔨 Usage Example</h2>
          <p>Now start building! Here's an example using the Button component:</p>
          <code>{`<Button variant="primary">Click Me</Button>`}</code>

          <h2>🛠 File Structure</h2>
          <p>When using StarDock with a framework like Next.js or React:</p>
          <ul>
            <li><code>components/</code> – Your reusable components</li>
            <li><code>styles/</code> – Custom themes and overrides</li>
            <li><code>pages/</code> or <code>app/</code> – Your routes</li>
          </ul>

          <h2>📘 Next Steps</h2>
          <p>Ready to dive deeper?</p>
          <ul>
            <li><Link href="/docs/components/buttons">Explore Button Variants</Link></li>
            <li><Link href="/docs/components/forms">Build Form UI</Link></li>
            <li><Link href="/docs/components/layouts">Create Responsive Layouts</Link></li>
          </ul>

          <div className="navigation-buttons">
            <Link href="/docs">
              <span className="Doc-button left-button">← Home</span>
            </Link>

            <Link href="/docs/guides">
              <span className="Doc-button right-button">Guides →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
