'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	BookOpen,
	Box,
	Brush,
	CheckCircle2,
	Home,
	Palette,
} from 'lucide-react';

import '@/app/styles/Sidebar.css';

const Sidebar = () => {
	const pathname = usePathname();

	const navItems = [
		{ href: '/docs', label: 'Home', icon: <Home /> },
		{
			href: '/docs/getting-started',
			label: 'Getting Started',
			icon: <CheckCircle2 />,
		},
		{ href: '/docs/guides', label: 'Guides', icon: <BookOpen /> },
		{ href: '/docs/components', label: 'Components', icon: <Box /> },
		{ href: '/docs/styles', label: 'Styles', icon: <Brush/> },
		{ href: '/docs/colors', label: 'Colors', icon: <Palette /> }
	];

	return (
		<div className='sidebar'>
			<div className='sidebar-header'>
				<Link className='sidebar-logo' href='/'>
					<span className='sidebar-title'>phoenix</span>
				</Link>
			</div>

			<div className='sidebar-nav'>
				{navItems.map((item) => {
					const isActive = pathname === item.href;
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`sidebar-item ${isActive ? 'active' : ''}`}
						>
							{React.cloneElement(item.icon, { size: 20 })}
							<span>{item.label}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
