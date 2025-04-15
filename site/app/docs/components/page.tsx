'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css'; // Optional: shared styles

import { ChevronRight } from 'lucide-react';

const ComponentsPage = () => {
  return (
    <div className="docs-container">
      <Sidebar />

      <div className="main-content">
        <DocsHeader />
        <Blob size="500px" top="20px" opacity={0.1} />

        <div className="content-section">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <ChevronRight />
            <span>Components</span>
          </div>

          <h1>🧩 Components Overview</h1>
          <p>
            StarDock provides a set of pre-built, themeable, and flexible UI components to help you build
            interfaces faster and better. Below is an overview of available components and how to start using them.
          </p>

          <h2>📦 Available Components</h2>
          <ul>
            <li>
              <Link href="/docs/components/buttons"><strong>Button</strong></Link> – Primary, Secondary, Outlined, Ghost, Icon Buttons.
            </li>
            <li>
              <Link href="/docs/components/forms"><strong>Form Elements</strong></Link> – Input, Select, Textarea, Switch, Checkbox, Radio.
            </li>
            <li>
              <Link href="/docs/components/cards"><strong>Cards</strong></Link> – Display content in containers with titles, footers, and actions.
            </li>
            <li>
              <Link href="/docs/components/modals"><strong>Modals</strong></Link> – Create overlays for dialogs, alerts, and confirmations.
            </li>
            <li>
              <Link href="/docs/components/alerts"><strong>Alerts</strong></Link> – Feedback messages for success, warning, error, and info.
            </li>
            <li>
              <Link href="/docs/components/layouts"><strong>Layouts</strong></Link> – Build responsive page structures using Flex and Grid utilities.
            </li>
          </ul>

          <h2>🔨 How to Use Components</h2>
          <p>
            Components are designed to be used with minimal configuration. Just import and drop them into your JSX:
          </p>
          <code>{`import { Button } from 'stylocss';`}</code>
          <br />
          <code>{`<Button variant="primary">Click Me</Button>`}</code>

          <p>
            All components accept props for style variants and accessibility. You can also extend them with your own custom classes.
          </p>

          <h2>🎨 Theming & Customization</h2>
          <p>
            You can override the default theme by editing your <code>styles.css</code> or using utility classes alongside components.
            Most components follow a utility-first approach that aligns with Tailwind-like philosophy.
          </p>

          <h2>🚀 Explore by Category</h2>
          <ul>
            <li><Link href="/docs/components/buttons">→ Buttons</Link></li>
            <li><Link href="/docs/components/forms">→ Form Elements</Link></li>
            <li><Link href="/docs/components/layouts">→ Layouts & Grid</Link></li>
            <li><Link href="/docs/components/alerts">→ Alerts & Notifications</Link></li>
          </ul>

          {/* Navigation Buttons */}
          <div className="navigation-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link href="/docs/guides">
              <span className="Doc-button left-button">← Guides</span>
            </Link>
            <Link href="/docs/api-references">
              <span className="Doc-button right-button">Styles →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
