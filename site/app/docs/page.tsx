'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from './ui/Sidebar';
import DocsHeader from './ui/DocsHeader';
import Blob from '../ui/Blob';
import Link from 'next/link';
import "../styles/Docs.css";
import "../docs/css/home.css"; // global styles onl
import {
	Rocket,
	Paintbrush,
	Zap,
	PackageCheck,
	Globe,
	Puzzle,
	BookOpen,
	Users,
	ChevronRight,
} from 'lucide-react';

const Docs = () => {
	const rightLinkRef = useRef<HTMLAnchorElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') {
				rightLinkRef.current?.click();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<div className="docsContainer">
			<Sidebar />
			<div className="mainContent">
				<DocsHeader />
				<Blob size='500px' top='20px' opacity={0.1} />

				<div className="contentSection">
					<h2>Welcome to phoenix</h2>
					<p>
						<strong>phoenix</strong> is a modern and lightweight UI component library
						that helps you build beautiful web interfaces faster. Inspired by the best
						of Tailwind and Bootstrap, but built for developers who want flexibility
						without the bloat.
					</p>

					<h2>
						<Paintbrush size={20} /> Why phoenix?
					</h2>
					<ul>
						<li>
							<Paintbrush size={16} /> Pre-styled, customizable components
						</li>
						<li>
							<Zap size={16} /> Fast setup with zero config
						</li>
						<li>
							<PackageCheck size={16} /> Modular and extensible architecture
						</li>
						<li>
							<Globe size={16} /> Works with any modern JavaScript framework
						</li>
					</ul>

					<h2>
						<Rocket size={20} /> Quick Start
					</h2>
					<p>Get your UI up and running in minutes:</p>
					<ol>
						<li>
							Install via npm: <code>npm install stylocss</code>
						</li>
						<li>
							Import core styles: <code>import &apos;stylocss/styles.css&apos;</code>
						</li>
						<li>
							Start using components:{' '}
							<code>{`<Button variant="primary">Click Me</Button>`}</code>
						</li>
					</ol>

					<h2>
						<BookOpen size={20} /> Explore Components
					</h2>
					<p>
						Check out our library of reusable components to kickstart your next
						project:
					</p>
					<ul>
						<li>
							<Link href='/docs/components'>Buttons</Link>
						</li>
						<li>
							<Link href='/docs/components'>Form Elements</Link>
						</li>
						<li>
							<Link href='/docs/components'>Grid & Layouts</Link>
						</li>
						<li>
							<Link href='/docs/components'>Alerts & Notifications</Link>
						</li>
					</ul>

					<h2>
						<Puzzle size={20} /> Built With Flexibility
					</h2>
					<p>
						Whether you&apos;re building a simple landing page or a full-scale web app,
						StyloCSS adapts to your needs. Use it with React, Vue, or just plain
						HTML/CSS.
					</p>

					<h2>
						<Users size={20} /> Join the Community
					</h2>
					<p>
						Questions? Feedback? Want to contribute? Join us on{' '}
						<a href='https://github.com/StarDock-UI/stardock'>GitHub</a>
					</p>

					<Link href='/docs/getting-started' ref={rightLinkRef}>
						<span className='Doc-button right-button'>
							Getting Started <ChevronRight />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Docs;
