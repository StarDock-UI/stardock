import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import { ChevronRight } from 'lucide-react';

const GettingStartedPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />
        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Getting Started</span>
          </div>

          <h1>Getting Started with StarDock</h1>
          <p>
            StarDock is a sleek and customizable UI library built to help you
            build beautiful interfaces faster. This guide will walk you through
            how to get everything running smoothly.
          </p>

          <h2>Step 1: Installation</h2>
          <p>Use your terminal to set up the project locally:</p>
          <ol>
            <li>
              Clone:{" "}
              <code>git clone https://github.com/your-repo/stardock.git</code>
            </li>
            <li>
              Move into the directory: <code>cd stardock</code>
            </li>
            <li>
              Install dependencies: <code>npm install</code> or{" "}
              <code>yarn</code>
            </li>
            <li>
              Start development server: <code>npm run dev</code>
            </li>
          </ol>

          <h2>Step 2: Explore Components</h2>
          <p>
            After setup, dive into the <code>/components</code> folder to see
            reusable UI elements. Customize and use them across your app.
          </p>

          <h2>StarDock Philosophy</h2>
          <p>
            Our goal is to simplify UI development without compromising
            flexibility. All components are accessible, fast, and designed with
            modern UX principles.
          </p>

        
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

export default GettingStartedPage;
