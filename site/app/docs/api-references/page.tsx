'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import { ChevronRight } from 'lucide-react';

const ApiPage = () => {
  const getStartedRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        getStartedRef.current?.click();
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
            <span>API</span>
          </div>

          <h1>API Documentation</h1>
          <p>
            Here you'll find detailed information about the API endpoints, including request formats, parameters, and responses.
          </p>

          <h2>Authentication</h2>
          <p>
            To interact with the API, you'll need an API key. Please refer to the "Authentication" section of the documentation for more details.
          </p>

          <h2>Endpoints</h2>
          <p>
            Our API provides endpoints to interact with different parts of the system. For example, the `/users` endpoint allows you to manage users.
          </p>

          <div className="navigation-buttons">
            <Link
              href="/docs/getting-started"
              className="Doc-button right-button"
              ref={getStartedRef}
            >
              Get Started →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
