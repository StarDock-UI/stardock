'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import styles from '../styles/Header.module.css'

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		document.body.className = darkMode ? 'dark' : 'light';
	}, [darkMode]);

	return (
		<header className={styles.headerContainer}>
			<div className={styles.leftSection}>
				<div className={styles.logo}>
					<h1>StarDock</h1>
				</div>

				<nav className={styles.nav}>
					<Link href="/" className={styles.navLink}>Home</Link>
					<Link href="/about" className={styles.navLink}>About</Link>
					<Link href="/docs" className={styles.navLink}>Docs</Link>
					<Link href="/components" className={styles.navLink}>Components</Link>
				</nav>
			</div>

			<div className={styles.rightSection}>
				<div className={styles.searchBox}>
					<input
						type="text"
						placeholder="Search"
						aria-label="Search"
						className={styles.searchInput}
					/>
					<Search className={styles.searchIcon} />
				</div>

				<button
					onClick={() => setDarkMode(!darkMode)}
					className={styles.iconToggle}
					aria-label="Toggle Theme"
				>
					{darkMode ? <Sun className={styles.toggleIcon} /> : <Moon className={styles.toggleIcon} />}
				</button>
			</div>
		</header>

	);
};

export default Header;
