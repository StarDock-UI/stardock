'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import {
  ChevronRight,
  Palette,
  Settings,
  Brush,
  Code2,
  Globe,
 
} from 'lucide-react';

const StylesPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />

        <div className="content-section">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <ChevronRight />
            <span>Styles</span>
          </div>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Palette size={20} /> Styling Your Components
          </h2>
          <p>
            This guide will walk you through customizing StarDock's UI components to match your application’s branding.
          </p>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Brush size={20} /> CSS Customization
          </h2>
          <ul>
            <li>Use utility classes like Tailwind or your preferred CSS framework.</li>
            <li>Apply custom themes to components using the <code>appearance</code> prop.</li>
            <li>Use scoped styles or global styles to override specific visual elements.</li>
          </ul>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code2 size={20} /> Using the Appearance Prop
          </h2>
          <p>Most components accept an <code>appearance</code> prop where you can pass class overrides:</p>

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

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={20} /> Global Styling
          </h2>
          <p>
            To override styles globally, define custom CSS inside your <code>styles</code> folder and import it in your app entry point.
          </p>

        
        {/* Navigation Buttons */}
        <div className="navigation-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/docs/components">
              <span className="Doc-button left-button">← Components</span>
            </Link>
            <Link href="/docs/fonts">
              <span className="Doc-button right-button"> 
                   Fonts
              →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
