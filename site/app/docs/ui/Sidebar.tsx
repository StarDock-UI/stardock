import React from 'react';
import Link from 'next/link';
import { BookOpen, Box, CheckCircle2, Code, Home } from 'lucide-react';
import '@/app/styles/Sidebar.css';
import Logo from '@/app/ui/Logo';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-header'>
				<Link className='sidebar-logo' href='/'>
					<Logo />
					<h1>StarDock</h1>
				</Link>
				<p className='docs'>Docs</p>
			</div>

			<div className='sidebar-nav'>
				<Link href='/docs' className='sidebar-item'>
					<Home />
					<h1>Home</h1>
				</Link>
				<Link href='/docs/getting-started' className='sidebar-item'>
					<CheckCircle2 />
					<h1>Getting Started</h1>
				</Link>
				<Link href='/docs/guides' className='sidebar-item'>
					<BookOpen />
					<h1>Guides</h1>
				</Link>
				<Link href='/docs/components' className='sidebar-item'>
					<Box />
					<h1>Components</h1>
				</Link>
				<Link href='/docs/api-references' className='sidebar-item'>
					<Code />
					<h1>API References</h1>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
