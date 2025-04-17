'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

import {
	ChevronLeft,
	ChevronRight,
	LayoutGrid,
	Package,
	Hammer,
	Palette,
	Rocket,
} from 'lucide-react';

const ComponentsPage = () => {
	const router = useRouter();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				router.push('/docs/guides');
			} else if (e.key === 'ArrowRight') {
				router.push('/docs/styles');
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
						<LayoutGrid
							size={20}
							style={{ marginRight: '8px', verticalAlign: 'middle' }}
						/>
						Components Overview
					</h2>
					<p>
						phoenix provides a set of pre-built, themeable, and flexible UI
						components to help you build interfaces faster and better. Below is an
						overview of available components and how to start using them.
					</p>

					<h2>
						<Package
							size={20}
							style={{ marginRight: '8px', verticalAlign: 'middle' }}
						/>
						Available Components
					</h2>
					<ul>
						<li>
							<Link href='/docs/components/buttons'>
								<strong>Button</strong>
							</Link>{' '}
							– Primary, Secondary, Outlined, Ghost, Icon Buttons.
						</li>
						<li>
							<Link href='/docs/components/forms'>
								<strong>Form Elements</strong>
							</Link>{' '}
							– Input, Select, Textarea, Switch, Checkbox, Radio.
						</li>
						<li>
							<Link href='/docs/components/cards'>
								<strong>Cards</strong>
							</Link>{' '}
							– Display content in containers with titles, footers, and actions.
						</li>
						<li>
							<Link href='/docs/components/modals'>
								<strong>Modals</strong>
							</Link>{' '}
							– Create overlays for dialogs, alerts, and confirmations.
						</li>
						<li>
							<Link href='/docs/components/alerts'>
								<strong>Alerts</strong>
							</Link>{' '}
							– Feedback messages for success, warning, error, and info.
						</li>
						<li>
							<Link href='/docs/components/layouts'>
								<strong>Layouts</strong>
							</Link>{' '}
							– Build responsive page structures using Flex and Grid utilities.
						</li>
					</ul>

					<h2>
						<Hammer
							size={20}
							style={{ marginRight: '8px', verticalAlign: 'middle' }}
						/>
						How to Use Components
					</h2>
					<p>
						Components are designed to be used with minimal configuration. Just import
						and drop them into your JSX:
					</p>
					<code>{`import { Button } from 'stylocss';`}</code>
					<br />
					<code>{`<Button variant="primary">Click Me</Button>`}</code>

					<p>
						All components accept props for style variants and accessibility. You can
						also extend them with your own custom classes.
					</p>

					<h2>
						<Palette
							size={20}
							style={{ marginRight: '8px', verticalAlign: 'middle' }}
						/>
						Theming & Customization
					</h2>
					<p>
						You can override the default theme by editing your <code>styles.css</code>{' '}
						or using utility classes alongside components. Most components follow a
						utility-first approach that aligns with Tailwind-like philosophy.
					</p>

					<h2>
						<Rocket
							size={20}
							style={{ marginRight: '8px', verticalAlign: 'middle' }}
						/>
						Explore by Category
					</h2>
					<ul>
						<li>
							<Link href='/docs/components/buttons'>
								Buttons <ChevronRight size={16} style={{ marginLeft: '4px' }} />
							</Link>
						</li>
						<li>
							<Link href='/docs/components/forms'>
								Form Elements <ChevronRight size={16} style={{ marginLeft: '4px' }} />
							</Link>
						</li>
						<li>
							<Link href='/docs/components/layouts'>
								Layouts & Grid <ChevronRight size={16} style={{ marginLeft: '4px' }} />
							</Link>
						</li>
						<li>
							<Link href='/docs/components/alerts'>
								Alerts & Notifications{' '}
								<ChevronRight size={16} style={{ marginLeft: '4px' }} />
							</Link>
						</li>
					</ul>

					{/* Navigation Buttons */}
				<div
						className='navigation-buttons'
						style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
					>
						<Link href='/docs/guides'>
							<span className='Doc-button left-button'>
								<ChevronLeft /> Guides
							</span>
						</Link>
						<Link href='/docs/styles'>
							<span className='Doc-button right-button'>
								Styles <ChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComponentsPage;
