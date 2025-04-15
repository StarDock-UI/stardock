'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

import {
  BookOpen,
  ShieldCheck,
  Globe,
  FolderSearch,
  AlertCircle,
  ArrowLeftCircle,
  ArrowRightCircle,
} from 'lucide-react';

const ApiPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />

      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />

        <div className="content-section">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} /> API Reference
          </h2>
          <p>
            StarDock exposes a flexible API to allow you to interact with themes, components,
            and design tokens programmatically. This section covers endpoints, authentication,
            and usage examples.
          </p>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} /> Authentication
          </h2>
          <p>
            All API requests must be authenticated using a bearer token. You can generate your
            API key in the dashboard under <strong>Settings → API</strong>.
          </p>
          <code>Authorization: Bearer YOUR_API_KEY</code>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe size={20} /> Base URL
          </h2>
          <code>https://api.stylocss.dev/v1</code>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FolderSearch size={20} /> Endpoints
          </h2>

          <h3>GET /themes</h3>
          <p>Retrieve a list of available themes.</p>
          <code>GET /themes</code>
          <p><strong>Response:</strong></p>
          <pre>
            <code>{`[
  {
    "id": "default",
    "name": "Default Theme",
    "colors": {
      "primary": "#8b5cf6",
      "background": "#1f1f1f"
    }
  }
]`}</code>
          </pre>

          <h3>GET /components</h3>
          <p>Returns metadata for all available UI components.</p>
          <code>GET /components</code>
          <p><strong>Response:</strong></p>
          <pre>
            <code>{`[
  {
    "name": "Button",
    "props": ["variant", "size", "onClick"],
    "example": "<Button variant='primary'>Click</Button>"
  }
]`}</code>
          </pre>

          <h3>POST /preview</h3>
          <p>Generate a live preview of your custom styles or components.</p>
          <code>POST /preview</code>
          <p><strong>Body:</strong></p>
          <pre>
            <code>{`{
  "component": "button",
  "variant": "outline",
  "label": "Submit"
}`}</code>
          </pre>
          <p><strong>Response:</strong></p>
          <pre>
            <code>{`{
  "html": "<button class='btn-outline'>Submit</button>",
  "styles": ".btn-outline { border: 1px solid #8b5cf6; }"
}`}</code>
          </pre>

          <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <AlertCircle size={20} /> Error Handling
          </h2>
          <p>API errors return standardized messages with status codes.</p>
          <pre>
            <code>{`{
  "error": "Invalid API Key",
  "status": 401
}`}</code>
          </pre>

          <div className="navigation-buttons">
            <Link href="/docs/styles">
              <span className="Doc-button left-button">← Styles</span>
            </Link>
            <Link href="/docs">
              <span className="Doc-button right-button">Home →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
