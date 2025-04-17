'use client';
import React, { useEffect, useRef } from 'react';
import Sidebar from './ui/Sidebar';
import DocsHeader from './ui/DocsHeader';
import Blob from '../ui/Blob';
import Link from 'next/link';
import styles from '@/app/styles/Docs.module.css';
import homeStyles from '@/app/docs/css/home.module.css'; // if this is also converted to module

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
		<div className={styles.docsContainer}>
			<Sidebar />
			<div className={styles.mainContent}>
				<DocsHeader />
				<Blob size='500px' top='20px' opacity={0.1} />

				<div className={styles.contentSection}>
					<h2>Welcome to Star Dock</h2>
					<p>
						<strong>StarDock</strong> is a modern and lightweight UI component library
						that helps you build beautiful web interfaces faster. Inspired by the best
						of Tailwind and Bootstrap, but built for developers who want flexibility
						without the bloat.
					</p>

					<h2>
						<Paintbrush size={20} /> Why StarDock?
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
							Import core styles: <code>import 'stylocss/styles.css'</code>
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
							<Link href='/docs/components/buttons'>Buttons</Link>
						</li>
						<li>
							<Link href='/docs/components/forms'>Form Elements</Link>
						</li>
						<li>
							<Link href='/docs/components/layouts'>Grid & Layouts</Link>
						</li>
						<li>
							<Link href='/docs/components/alerts'>Alerts & Notifications</Link>
						</li>
					</ul>

					<h2>
						<Puzzle size={20} /> Built With Flexibility
					</h2>
					<p>
						Whether you're building a simple landing page or a full-scale web app,
						StyloCSS adapts to your needs. Use it with React, Vue, or just plain
						HTML/CSS.
					</p>

					<h2>
						<Users size={20} /> Join the Community
					</h2>
					<p>
						Questions? Feedback? Want to contribute? Join us on{' '}
						<a href='https://github.com/your-repo/your-project'>GitHub</a> or connect
						on <a href='/community'>Community Chat</a>.
					</p>

					<Link href='/docs/getting-started' ref={rightLinkRef}>
						<span className={`${styles.docButton} ${styles.rightButton}`}>
							Getting Started <ChevronRight />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Docs;
