'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import { ChevronRight } from 'lucide-react';

const GuidesPage = () => {
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
            <span>Guides</span>
          </div>

          <h1>Guides</h1>
          <p>
            Step-by-step tutorials and how-tos for implementing different features and workflows.
          </p>

          <h2>Beginner’s Guide</h2>
          <p>
            Learn the basics of setting up and using the system, with beginner-friendly explanations.
          </p>

          <h2>Advanced Tips</h2>
          <p>
            Dive deeper into optimization, custom integrations, and best practices.
          </p>

          <div className="navigation-buttons">
            <Link href="/docs/components" ref={leftLinkRef}>
              <span className="Doc-button left-button">← Components</span>
            </Link>

            <Link href="/docs/api-references" ref={rightLinkRef}>
              <span className="Doc-button right-button">API REFERENCES →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
