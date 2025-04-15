'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import '../styles/Header.css';
import Logo from './Logo';

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
	const searchRef = React.useRef<HTMLInputElement>(null);

	useEffect(() => {
		document.body.className = darkMode ? 'dark' : 'light';
	}, [darkMode]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				searchRef.current?.focus();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<header className='header'>
			<div className='container'>
				<div className='left'>
					<Link href='/' className='logo'>
						<Logo />
						<h1>StarDock</h1>
					</Link>


				</div>
				<nav className='nav'>
					<Link href='/docs' className='navLink'>
						Docs
					</Link>
					<Link href='/components' className='navLink'>
						Components
					</Link>
					<Link href='https://github.com/StarDock-UI/stardock' className='navLink'>
						Github
					</Link>
				</nav>
				<div className='right'>
					<div className='searchBox'>
						<input
							ref={searchRef}
							type='text'
							placeholder='CTRL + K to search'
							aria-label='Search'
							className='searchInput'
						/>
						<Search className='searchIcon' />
					</div>

					<button
						onClick={() => setDarkMode(!darkMode)}
						className='iconToggle'
						aria-label='Toggle Theme'
					>
						{darkMode ? (
							<Sun className='toggleIcon' />
						) : (
							<Moon className='toggleIcon' />
						)}
					</button>
				</div>

			</div>
		</header>
	);
};

export default Header;
