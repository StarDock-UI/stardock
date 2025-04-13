import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div style={styles.header}>
			<div>
				<h1>StarDock</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/docs'>Docs</Link>
					</li>
					<li>
						<Link href='/components'>Components</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
