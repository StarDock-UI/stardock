import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import { ChevronRight } from 'lucide-react';

const GuidesPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />
        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Guides</span>
          </div>

          <h1>Guides</h1>
          <p>
            Explore detailed guides to help you integrate and use components efficiently.
          </p>

          <h2>Quick Start</h2>
          <p>
            Start by following the setup instructions for your first project. We'll guide you through step-by-step to make the process easy.
          </p>

          <div className="navigation-buttons">
            <Link href="/docs/getting-started">
              <span className="Doc-button left-button">← Getting Started</span>
            </Link>

            <Link href="/docs/components">
              <span className="Doc-button right-button">Components →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
