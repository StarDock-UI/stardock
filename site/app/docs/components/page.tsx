import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import { ChevronRight } from 'lucide-react';

const ComponentsPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />
        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Components</span>
          </div>

          <h1>Components Overview</h1>
          <p>
            Here you'll find all the reusable components that you can use in your application.
          </p>

          <h2>Available Components</h2>
          <p>
            We have a variety of UI components, including buttons, cards, modals, and more. Explore and start using them in your app!
          </p>

          <h2>How to Use Components</h2>
          <p>
            To use a component, simply import it from the component library and include it in your JSX.
          </p>

          <div className="navigation-buttons">
            <Link href="/docs/guides">
              <span className="Doc-button left-button">← Guides</span>
            </Link>

            <Link href="/docs/api-references">
              <span className="Doc-button right-button">API →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
