'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

import {
	ChevronRight,
	BookOpen,
	Wrench,
	Settings2,
	MoonStar,
	LayoutGrid,
	Code,
	FlaskConical,
	MessageCircle,
	ChevronLeft,
} from 'lucide-react';

const GuidesPage = () => {
	return (
		<div className='docs-container'>
			<Sidebar />

			<div className='main-content'>
				<DocsHeader />
				<Blob size='500px' top='20px' opacity={0.1} />

				<div className='content-section'>
					{/* Breadcrumb */}
					<div className='breadcrumb'>
						<ChevronRight />
						<span>Guides</span>
					</div>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<BookOpen size={20} /> StarDock Guides
					</h2>
					<p>
						Learn how to unlock the full potential of StarDock with these step-by-step
						guides. Whether you're just getting started or looking to customize
						components for production, we've got you covered.
					</p>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Wrench size={20} /> Essential Guides
					</h2>
					<ul>
						<li>
							<strong>Installation & Setup</strong> – How to install StarDock and
							include it in your project.
							<br />
							<code>npm install stylocss</code> & import in your app entry.
						</li>
						<li>
							<strong>Using Components</strong> – Learn how to use components like{' '}
							<code>{`<Button />`}</code>, <code>{`<Card />`}</code>, and more with
							ease.
						</li>
						<li>
							<strong>Customizing Themes</strong> – Override styles with your own
							colors, spacing, and typography settings.
						</li>
					</ul>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Settings2 size={20} /> Advanced Usage
					</h2>
					<ul>
						<li>
							<strong>
								<MoonStar size={16} style={{ marginRight: 6 }} /> Dark Mode Support
							</strong>{' '}
							– Enable dark mode with one utility class and customize it to your brand.
						</li>
						<li>
							<strong>
								<LayoutGrid size={16} style={{ marginRight: 6 }} /> Responsive Layouts
							</strong>{' '}
							– Create flexible grid systems using StarDock layout utilities.
						</li>
						<li>
							<strong>
								<Code size={16} style={{ marginRight: 6 }} /> Framework Integration
							</strong>{' '}
							– Use StarDock with React, Vue, or plain HTML/JS setups.
						</li>
					</ul>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<FlaskConical size={20} /> Component Playground
					</h2>
					<p>
						Want to try components live? Check out the{' '}
						<Link href='/docs/components/buttons'>Buttons page</Link> and start
						experimenting.
					</p>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<MessageCircle size={20} /> Support & Feedback
					</h2>
					<p>
						Found a bug or have a feature request? Reach out via{' '}
						<a href='https://github.com/your-repo/your-project'>GitHub</a> or join the{' '}
						<Link href='/community'>Community Chat</Link>.
					</p>

					{/* Navigation */}
					<div
						className='navigation-buttons'
						style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
					>
						<Link href='/docs/getting-started'>
							<span className='Doc-button left-button'>
								<ChevronLeft /> Getting Started
							</span>
						</Link>
						<Link href='/docs/components'>
							<span className='Doc-button right-button'>
								Components <ChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GuidesPage;
