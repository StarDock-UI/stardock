'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import {
	Rocket,
	Package,
	Dna,
	Hammer,
	Folder,
	BookOpen,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

const GettingStarted = () => {
	const router = useRouter();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') {
				router.push('/docs/guides');
			} else if (e.key === 'ArrowLeft') {
				router.push('/docs');
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
					<h2>
						<Rocket size={20} style={{ marginRight: '8px' }} /> Getting Started with
						PhoenixUI
					</h2>
					<p>
						Let&apos;s get your UI components up and running in just a few steps. phoenix
						is built for speed, customization, and developer happiness.
					</p>

					<h2>
						<Package size={20} style={{ marginRight: '8px' }} /> Installation
					</h2>
					<p>To start using phoenix, install the package via npm or yarn:</p>
					<pre><code>npm install stylocss</code></pre>
					<p>or</p>
					<pre><code>yarn add stylocss</code></pre>

					<h2>
						<Dna size={20} style={{ marginRight: '8px' }} /> Importing Styles
					</h2>
					<p>
						Include the base styles in your main app entry file (e.g.{' '}
						<code>layout.tsx</code> or <code>_app.tsx</code>):
					</p>
					<pre><code>{`import 'stylocss/styles.css';`}</code></pre>

					<h2>
						<Hammer size={20} style={{ marginRight: '8px' }} /> Usage Example
					</h2>
					<p>Now start building! Here&apos;s an example using the Button component:</p>
					<pre><code>{`<Button variant="primary">Click Me</Button>`}</code></pre>

					<h2>
						<Folder size={20} style={{ marginRight: '8px' }} /> File Structure
					</h2>
					<p>When using phoenix with a framework like Next.js or React:</p>
					<ul>
						<li><code>components/</code> – Your reusable components</li>
						<li><code>styles/</code> – Custom themes and overrides</li>
						<li><code>pages/</code> or <code>app/</code> – Your routes</li>
					</ul>

					<h2>
						<BookOpen size={20} style={{ marginRight: '8px' }} /> Next Steps
					</h2>
					<p>Ready to dive deeper?</p>
					<ul>
						<li>
							<Link href='/docs/components'>Explore Button Variants</Link>
						</li>
						<li>
							<Link href='/docs/components'>Build Navbars</Link>
						</li>
						<li>
							<Link href='/docs/components'>Create Responsive Layouts</Link>
						</li>
					</ul>

					<div className='navigation-buttons'>
						<Link href='/docs'>
							<span className='Doc-button left-button'>
								<ChevronLeft /> Home
							</span>
						</Link>
						<Link href='/docs/guides'>
							<span className='Doc-button right-button'>
								Guides <ChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GettingStarted;
