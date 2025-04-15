'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Box, CheckCircle2, Code, Home } from 'lucide-react'
import '@/app/styles/Sidebar.css'
import Logo from '@/app/ui/Logo'

const Sidebar = () => {
	const pathname = usePathname()

	const navItems = [
		{ href: '/docs', label: 'Home', icon: <Home /> },
		{ href: '/docs/getting-started', label: 'Getting Started', icon: <CheckCircle2 /> },
		{ href: '/docs/guides', label: 'Guides', icon: <BookOpen /> },
		{ href: '/docs/components', label: 'Components', icon: <Box /> },
		{ href: '/docs/api-references', label: 'API References', icon: <Code /> }
	]

	return (
		<div className='sidebar'>
			<div className='sidebar-header'>
				<Link className='sidebar-logo' href='/'>
					<Logo />
					<h1>StarDock</h1>
				</Link>
			</div>

			<div className='sidebar-nav'>
				{navItems.map((item) => {
					const isActive = pathname === item.href
					return (
						<Link
							key={item.href}
							href={item.href}
							className={`sidebar-item ${isActive ? 'active' : ''}`}
						>
							{item.icon}
							<h1>{item.label}</h1>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar





// import React from 'react';
// import Link from 'next/link';
// import { BookOpen, Box, CheckCircle2, Code, Home } from 'lucide-react';
// import '@/app/styles/Sidebar.css';
// import Logo from '@/app/ui/Logo';

// const Sidebar = () => {
// 	return (
// 		<div className='sidebar'>
// 			<div className='sidebar-header'>
// 				<Link className='sidebar-logo' href='/'>
// 					<Logo />
// 					<h1>StarDock</h1>
// 				</Link>
				
// 			</div>

// 			<div className='sidebar-nav'>
// 				<Link href='/docs' className='sidebar-item'>
// 					<Home />
// 					<h1>Home</h1>
// 				</Link>
// 				<Link href='/docs/getting-started' className='sidebar-item'>
// 					<CheckCircle2 />
// 					<h1>Getting Started</h1>
// 				</Link>
// 				<Link href='/docs/guides' className='sidebar-item'>
// 					<BookOpen />
// 					<h1>Guides</h1>
// 				</Link>
// 				<Link href='/docs/components' className='sidebar-item'>
// 					<Box />
// 					<h1>Components</h1>
// 				</Link>
// 				<Link href='/docs/api-references' className='sidebar-item'>
// 					<Code />
// 					<h1>API References</h1>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;
