'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

import { ChevronRight } from 'lucide-react';

const StylesPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />

        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Styles</span>
          </div>

          <h1>🎨 Styling Your Components</h1>
          <p>
            StarDock is built with styling flexibility at its core. You can use utility-first classes, scoped overrides, or extend with themes.
            This guide helps you integrate StarDock's visual language into your app.
          </p>

          <h2>🧩 Using Utility Classes</h2>
          <p>
            Most StarDock components are built with Tailwind-like utility classes. This allows easy customization by simply applying your own classes:
          </p>
          <pre>
            <code>{`<Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Click Me</Button>`}</code>
          </pre>

          <h2>📁 Global Styling</h2>
          <p>
            You can define global CSS rules in your app’s entry (e.g., <code>layout.tsx</code> or <code>_app.tsx</code>):
          </p>
          <pre>
            <code>
{`// styles/global.css
:root {
  --primary-color: #8b5cf6;
  --text-color: #f4f4f5;
}
`}
            </code>
          </pre>

          <p>Then import the file in your layout:</p>
          <code>{`import '@/app/styles/global.css'`}</code>

          <h2>🖼 Component-Level Customization</h2>
          <p>
            Each component accepts a <code>className</code> prop for applying your own styles:
          </p>
          <pre>
            <code>{`<Card className="border border-purple-500 shadow-lg p-4">...</Card>`}</code>
          </pre>

          <h2>🎨 Theming with CSS Variables</h2>
          <p>
            StarDock supports theming via CSS variables. You can customize themes by overriding the root values:
          </p>
          <pre>
            <code>
{`:root {
  --color-primary: #7c3aed;
  --font-base: 'Inter', sans-serif;
}`}
            </code>
          </pre>

          <h2>🧪 Scoped Styling</h2>
          <p>
            For more granular control, you can wrap components in a custom class and use descendant selectors:
          </p>
          <pre>
            <code>
{`.custom-alert .st-alert {
  background-color: #1e293b;
  color: #f9fafb;
}`}
            </code>
          </pre>

          <h2>📦 Using with Tailwind</h2>
          <p>
            StarDock plays nicely with TailwindCSS. Extend the theme via your <code>tailwind.config.js</code>:
          </p>
          <pre>
            <code>
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
      },
    },
  },
};`}
            </code>
          </pre>

          <h2>🧼 Best Practices</h2>
          <ul>
            <li>Use utility classes for fast changes</li>
            <li>Use global styles for theme consistency</li>
            <li>Override component styles using <code>className</code> or CSS modules</li>
          </ul>

          <div className="navigation-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/docs/components">
              <span className="Doc-button left-button">← Components</span>
            </Link>
            <Link href="/docs/api-references">
              <span className="Doc-button right-button">API References →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
