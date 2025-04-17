import React from 'react';
import Link from 'next/link';
import '../styles/Footer.css';
import { Heart } from 'lucide-react';

const Footer = () => {
	return (
		<footer>
			<div>
				<h1>phoenix</h1>
				<p>a css library that does just enough.</p>
				<p>
					Made with <Heart /> by{' '}
					<Link href='https://github.com/diyatripathi673'>@Diya</Link> -{' '}
					<Link href='https://github.com/rohan-gupta-14'>@Rohan</Link> -{' '}
					<Link href='https://github.com/Mahimabisht10'>@Mahima</Link> -{' '}
					<Link href='https://github.com/nickkcode'>@Nikhil</Link>
				</p>
			</div>
			<div>
				<div>
					<Link href='/docs/getting-started'>Get-Started</Link>
					<Link href='/docs/components'>Components</Link>
					<Link href='/docs/styles'>Styles</Link>
					<Link href='/docs/fonts'>Fonts</Link>
				</div>
			</div>
			<div>
				<p>Copyright 2025 @</p>
			</div>
		</footer>
	);
};

export default Footer;
