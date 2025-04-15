'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { BookOpen, Box, CheckCircle2, Code, Home, Palette } from 'lucide-react'
import '@/app/styles/Sidebar.css'
import Logo from '@/app/ui/Logo'

const Sidebar = () => {
	const pathname = usePathname()

	const navItems = [
		{ href: '/docs', label: 'Home' },
		{ href: '/docs/getting-started', label: 'Getting Started' },
		{ href: '/docs/guides', label: 'Guides' },
		{ href: '/docs/components', label: 'Components' },
		{ href: '/docs/Styles', label: 'Styles'},
		{ href: '/docs/api-references', label: 'API References' }
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
						
							<h1>{item.label}</h1>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar
