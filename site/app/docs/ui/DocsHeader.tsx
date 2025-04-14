'use client';
import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import '@/app/styles/DocsHeader.css';

const DocsHeader = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.className = darkMode ? 'dark' : 'light';
	}, [darkMode]);

	return (
		<div className='docsHeader'>
			<input
				type='text'
				placeholder='CTRL + K to search'
				aria-label='Search'
				className='searchInput'
			/>

			<button
				onClick={() => setDarkMode(!darkMode)}
				className='modeToggle'
				aria-label='Toggle Theme'
			>
				{darkMode ? (
					<Sun className='toggleIcon' />
				) : (
					<Moon className='toggleIcon ' />
				)}
			</button>
		</div>
	);
};

export default DocsHeader;
