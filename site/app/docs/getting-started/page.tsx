'use client';
import React, { useEffect, useRef } from 'react';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import { ChevronRight } from 'lucide-react';

const GettingStartedPage = () => {
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
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />
        <div className="content-section">
          <div className="breadcrumb">
            <ChevronRight />
            <span>Getting Started</span>
          </div>

          <h1>Getting Started</h1>
          <p>
            Welcome! This guide will help you get started with integrating and using the system effectively.
          </p>

          <h2>Installation</h2>
          <p>
            Follow the steps below to install the library and begin using it in your project.
          </p>

          <h2>First Steps</h2>
          <p>
            After installation, you can start by exploring our core components and authentication flow.
          </p>

          <div className="navigation-buttons">
            <Link href="/docs" ref={leftLinkRef}>
              <span className="Doc-button left-button">← Home</span>
            </Link>

            <Link href="/docs/components" ref={rightLinkRef}>
              <span className="Doc-button right-button">Components →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
