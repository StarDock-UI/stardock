'use client';
import React, { useState } from 'react';
import '../Styles/Header.css';
import Link from 'next/link';

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleMobileMenuToggle = () => {
		setIsMobile(!isMobile);
	};

	return (
		<header className='header'>
			<div className='navbar-container'>
				<div className='logo'>
					<Link href='/'>StarDock</Link>
				</div>

				<nav className={`navbar ${isMobile ? 'active' : ''}`}>
					<Link href='/docs'>Docs</Link>
					<Link href='/docs'>Classes</Link>
					<Link href='/components'>Components</Link>
					<Link href='/docs/get-started'>
						<button className='cta'>Get Started</button>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
