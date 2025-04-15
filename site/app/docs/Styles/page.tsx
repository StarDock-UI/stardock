import React from 'react';
// import Sidebar from '../../ui/Sidebar';
// import DocsHeader from '../../ui/DocsHeader';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
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

          <h1>Styling Your Components</h1>
          <p>This guide will walk you through customizing Clerk's prebuilt UI to match your application’s branding.</p>

          <h2>CSS Customization</h2>
          <ul>
            <li>Use utility classes like Tailwind or your preferred CSS framework.</li>
            <li>Apply custom themes to Clerk’s hosted components using Clerk's <code>appearance</code> prop.</li>
            <li>Use scoped styles or global styles to override specific visual elements.</li>
          </ul>

          <h2>Using the Appearance Prop</h2>
          <p>Most Clerk components accept an <code>appearance</code> prop where you can pass class overrides:</p>

          <pre>
            <code>
{`<SignIn
  appearance={{
    elements: {
      formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
    }
  }}
/>`}
            </code>
          </pre>

          <h2>Global Styling</h2>
          <p>To override Clerk styles globally, define custom CSS inside your <code>styles</code> folder and import it in your app entry point.</p>

          <div className="navigation-buttons">
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
