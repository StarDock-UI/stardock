'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from './ui/Sidebar';
import DocsHeader from './ui/DocsHeader';
import Blob from '../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import { ChevronRight } from 'lucide-react';

const Docs = () => {
  const rightLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        rightLinkRef.current?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />
        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Documentation</span>
          </div>

          <h1>Getting Started</h1>
          <p>Welcome to the documentation! This guide will help you set up and get started with our application.</p>

          <h2>Installation</h2>
          <p>Follow these steps to install the project locally:</p>
          <ol>
            <li>Clone the repository: <code>git clone https://github.com/your-repo/your-project.git</code></li>
            <li>Navigate to the project directory: <code>cd your-project</code></li>
            <li>Install dependencies: <code>npm install</code> or <code>yarn</code></li>
            <li>Start the development server: <code>npm run dev</code></li>
          </ol>

          <h2>Project Structure</h2>
          <ul>
            <li><code>/ui</code> - Shared UI components like headers, buttons, etc.</li>
            <li><code>/pages</code> - Main page components and routing structure.</li>
            <li><code>/styles</code> - Global and component-specific CSS.</li>
          </ul>

          <h2>Need Help?</h2>
          <p>If you run into issues or have questions, feel free to check out our <a href="/support">Support Page</a> or reach out to the community.</p>

          {/* "Getting Started" Button */}
          <Link href="/docs/getting-started" ref={rightLinkRef}>
            <span className="Doc-button right-button">Get Started →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Docs;


