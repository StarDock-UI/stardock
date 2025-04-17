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
  Palette,
  Settings,
  Brush,
  Code2,
  Globe,
  ChevronLeft,
} from 'lucide-react';

const StylesPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        router.push('/docs/components');
      } else if (e.key === 'ArrowRight') {
        router.push('/docs/configuration');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  return (
    <div className='docs-container'>
      <Sidebar />
      <div className='main-content'>
        <DocsHeader />
        <Blob size='500px' top='20px' opacity={0.1} />

        <div className='content-section'>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Palette size={20} /> Styling Your Components
          </h2>
          <p>
            This guide will walk you through customizing Phoenix’s UI components to match your application’s branding.
          </p>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Brush size={20} /> Spacing
          </h2>

          {/* Group 1: Margin and Padding Classes */}
          <div className='container'>
            <div className='flex-grid'>
              <div className='class-list'>
                <h3>Margin Classes</h3>
                <p>.m-$value</p>
                <p>.mt-$value</p>
                <p>.ml-$value</p>
                <p>.mr-$value</p>
                <p>.mb-$value</p>
                <p>.mx-$value</p>
                <p>.my-$value</p>

                <h3>Padding Classes</h3>
                <p>.p-$value</p>
                <p>.pt-$value</p>
                <p>.pl-$value</p>
                <p>.pr-$value</p>
                <p>.pb-$value</p>
                <p>.px-$value</p>
                <p>.py-$value</p>

                <h3>Gap Classes</h3>
                <p>.gap-$value</p>
              </div>

              <div className='style-list'>
                <h3>Margin Styles</h3>
                <p>margin: $value;</p>
                <p>margin-top: $value;</p>
                <p>margin-left: $value;</p>
                <p>margin-right: $value;</p>
                <p>margin-bottom: $value;</p>
                <p>margin-left: $value, margin-right: $value;</p>
                <p>margin-top: $value, margin-bottom: $value;</p>

                <h3>Padding Styles</h3>
                <p>padding: $value;</p>
                <p>padding-top: $value;</p>
                <p>padding-left: $value;</p>
                <p>padding-right: $value;</p>
                <p>padding-bottom: $value;</p>
                <p>padding-left: $value, padding-right: $value;</p>
                <p>padding-top: $value, padding-bottom: $value;</p>

                <h3>Gap Styles</h3>
                <p>gap: $value;</p>
              </div>
            </div>

            {/* Group 2: Layout and Display Classes */}
            <div className='flex-grid'>
              <div className='class-list'>
                <h3>Display and Positioning</h3>
                <p>.block</p>
                <p>.inline</p>
                <p>.inline-block</p>
                <p>.flex</p>
                <p>.inline-flex</p>
                <p>.grid</p>
                <p>.hidden</p>

                <h3>Flexbox and Grid Layout</h3>
                <p>.flex-row</p>
                <p>.flex-col</p>
                <p>.items-start</p>
                <p>.items-center</p>
                <p>.items-end</p>
                <p>.justify-start</p>
                <p>.justify-center</p>
                <p>.justify-end</p>
                <p>.justify-between</p>
                <p>.justify-around</p>
                <p>.justify-evenly</p>

                <h3>Positioning Classes</h3>
                <p>.relative</p>
                <p>.absolute</p>
                <p>.fixed</p>
                <p>.sticky</p>
              </div>

              <div className='style-list'>
                <h3>Display Styles</h3>
                <p>display: block;</p>
                <p>display: inline;</p>
                <p>display: inline-block;</p>
                <p>display: flex;</p>
                <p>display: inline-flex;</p>
                <p>display: grid;</p>
                <p>display: none;</p>

                <h3>Flexbox and Grid Styles</h3>
                <p>flex-direction: row;</p>
                <p>flex-direction: column;</p>
                <p>align-items: flex-start;</p>
                <p>align-items: center;</p>
                <p>align-items: flex-end;</p>
                <p>justify-content: flex-start;</p>
                <p>justify-content: center;</p>
                <p>justify-content: flex-end;</p>
                <p>justify-content: space-between;</p>
                <p>justify-content: space-around;</p>
                <p>justify-content: space-evenly;</p>

                <h3>Positioning Styles</h3>
                <p>position: relative;</p>
                <p>position: absolute;</p>
                <p>position: sticky;</p>
                <p>position: fixed;</p>
              </div>
            </div>

            {/* More sections... */}
          </div>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Code2 size={20} /> Using the Appearance Prop
          </h2>
          <p>
            Most components accept an <code>appearance</code> prop where you can pass class overrides:
          </p>

          <pre>
            <code>
              {`<SignIn
  appearance={{
    elements: {
      formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
    }
  }}
/>`}
            </code>
          </pre>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={20} /> Global Styling
          </h2>
          <p>
            To override styles globally, define custom CSS inside your <code>styles</code> folder and import it in your app entry point.
          </p>

          <div className='navigation-buttons' style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href='/docs/styles'>
              <span className='Doc-button left-button'>
                <ChevronLeft /> Components
              </span>
            </Link>
            <Link href='/docs/colors'>
              <span className='Doc-button right-button'>
                Colors <ChevronRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesPage;
