'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Search, Sun, Moon, GithubIcon } from 'lucide-react';
import '../styles/Header.css';
import Logo from './Logo';

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.className = darkMode ? 'dark' : 'light';
	}, [darkMode]);

	return (
		<header className='header'>
			<div className='container'>
				<div className='left'>
					<Link href='/' className='logo'>
						<Logo />
						<h1>StarDock</h1>
					</Link>

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
				</div>

				<div className='right'>
					<input
						type='text'
						placeholder='CTRL + K to search'
						aria-label='Search'
						className='searchInput'
					/>

					<button
						onClick={() => setDarkMode(!darkMode)}
						className='iconToggle'
						aria-label='Toggle Theme'
					>
						{darkMode ? (
							<Sun className='toggleIcon' />
						) : (
							<Moon className='toggleIcon ' />
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
