'use client';
import { Moon, Search, Sun } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import '@/app/styles/DocsHeader.css';

const DocsHeader = () => {
	const [darkMode, setDarkMode] = useState(false);
	const searchRef = useRef<HTMLInputElement>(null);

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
		<div className='docsHeader'>
			<div className='searchBar'>
				<Search className='searchIcon' />
				<input
					ref={searchRef}
					type='text'
					// placeholder='S'
					aria-label='Search'
					className='searchInput'
				/>
				<div className='keybind'>CTRL+K</div>
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
	);
};

export default DocsHeader;
