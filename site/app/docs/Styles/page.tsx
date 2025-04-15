'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import { ChevronRight } from 'lucide-react';

const StylesPage = () => {
  const leftLinkRef = useRef<HTMLAnchorElement>(null);
  const rightLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        leftLinkRef.current?.click();
      } else if (e.key === 'ArrowRight') {
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
            <span>Styles</span>
          </div>

          <h1>Styling Guidelines</h1>
          <p>
            In this section, we’ll cover the general styling principles and best practices for the project.
          </p>

          <h2>Global Styles</h2>
          <p>
            Learn how global styles are applied throughout the application. This includes typography, colors, and layout.
          </p>

          <h2>Component Styles</h2>
          <p>
            Each UI component has its own set of styles for consistency. These are defined within their respective folders.
          </p>

          <div className="navigation-buttons">
            <Link href="/docs/components" ref={leftLinkRef}>
              <span className="Doc-button left-button">← Components</span>
            </Link>

            <Link href="/docs/api-references" ref={rightLinkRef}>
              <span className="Doc-button right-button">Api References →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
