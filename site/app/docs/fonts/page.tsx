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
  Text,
  Type,
  TextCursorInput, // ✅ Replaced the invalid 'Font' icon
  Globe,
} from 'lucide-react';

const FontsPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        router.push('/docs/styles');  // Navigate to the 'styles' page on left arrow
      } else if (e.key === 'ArrowRight') {
        router.push('/docs/configuration');  // Navigate to the 'configuration' page on right arrow
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
            <Text size={20} /> Managing Fonts in Your App
          </h2>
          <p>
            Typography plays a key role in UI/UX. This guide covers how to customize fonts for your components using utility classes, global styles, or custom configurations.
          </p>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Type size={20} /> Utility Class Approach
          </h2>
          <ul>
            <li>Use Tailwind CSS utility classes like <code>font-sans</code>, <code>font-serif</code>, or <code>font-mono</code>.</li>
            <li>Customize font size, weight, and line-height using Tailwind's typography utilities.</li>
          </ul>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TextCursorInput size={20} /> Custom Font Families
          </h2>
          <p>
            Add custom fonts via Google Fonts or self-hosted files. Here's an example of importing a font in your global CSS:
          </p>
          <pre>
            <code>
{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}`}
            </code>
          </pre>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={20} /> Global Font Styling
          </h2>
          <p>
            Define your typography in a global stylesheet or Tailwind config. For example, in <code>tailwind.config.js</code>:
          </p>
          <pre>
            <code>
{`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}`}
            </code>
          </pre>

          {/* Navigation Buttons */}
          <div className="navigation-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/docs/styles">
              <span className="Doc-button left-button">← Styles</span>
            </Link>
            <Link href="/docs/configuration">
              <span className="Doc-button right-button">Configuration →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontsPage;
