'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import {
  ChevronRight,
  Settings,
  SlidersHorizontal,
  Terminal,
  FileCode,
} from 'lucide-react';

const ConfigurationPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        router.push('/docs');  // Navigate to the home page on left arrow
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <div className="docs-container">
      <Sidebar />
      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />

        <div className="content-section">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={20} /> Initial Configuration
          </h2>
          <p>
            Before using the components in your application, you'll want to make a few configurations to ensure smooth integration. This includes setting up providers, global styles, and theme options.
          </p>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SlidersHorizontal size={20} /> Theme Provider Setup
          </h2>
          <p>
            If you're using a theme system, wrap your application with a ThemeProvider at the root level:
          </p>
          <pre>
            <code>
{`import { ThemeProvider } from '@/components/ui/theme-provider';

<ThemeProvider>
  <YourApp />
</ThemeProvider>`}
            </code>
          </pre>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Terminal size={20} /> Environment Variables
          </h2>
          <p>
            For integrations like Auth, APIs, or third-party services, define your env variables in a <code>.env.local</code> file:
          </p>
          <pre>
            <code>
{`NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_AUTH_KEY=your-auth-key`}
            </code>
          </pre>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCode size={20} /> Global CSS Import
          </h2>
          <p>
            Make sure your global styles are loaded in your entry file (like <code>layout.tsx</code> or <code>_app.tsx</code>):
          </p>
          <pre>
            <code>
{`import '@/app/styles/globals.css';`}
            </code>
          </pre>

          {/* Navigation Buttons */}
          <div className="navigation-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/docs">
              <span className="Doc-button left-button">← Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;
