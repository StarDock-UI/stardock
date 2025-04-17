'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Search } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
	const searchRef = React.useRef<HTMLInputElement>(null);

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
						<h1>PhoenixUI</h1>
					</Link>
				</div>
				<nav className='nav'>
					<Link href='/docs' className='navLink'>
						Docs
					</Link>
					<Link href='/docs/components' className='navLink'>
						Components
					</Link>
					<Link href='https://github.com/phoenix-UI/phoenix' className='navLink'>
						Github
					</Link>
				</nav>

				<div className='searchBar'>
					<Search className='searchIcon' />
					<input
						ref={searchRef}
						type='text'
						placeholder='Search...'
						aria-label='Search'
						className='searchInput'
					/>
					<span className='keybind'>Ctrl + K</span>
				</div>

				{/* <button
					onClick={() => setDarkMode(!darkMode)}
					className='iconToggle'
					aria-label='Toggle Theme'
				>
					{darkMode ? (
						<Sun className='toggleIcon' />
					) : (
						<Moon className='toggleIcon' />
					)}
				</button> */}
			</div>
		</header>
	);
};

export default Header;
