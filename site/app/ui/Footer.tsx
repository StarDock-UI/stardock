import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-main'>
				<h1 className='footer-title'>PhoenixUI</h1>
				<p className='footer-subtitle'>A CSS library that does just enough.</p>
			</div>

			<div className='footer-links'>
				<Link href='/docs/getting-started'>Getting Started</Link>
				<Link href='/docs/components'>Components</Link>
				<Link href='/docs/styles'>Styles</Link>
				<Link href='/docs/fonts'>Fonts</Link>
			</div>

			<p className='footer-credits'>
				Made with{' '}
				<span className='footer-heart'>
					<Heart size={16} />
				</span>{' '}
				by{' '}
				<Link href='https://github.com/diyatripathi673' target='_blank'>
					@Diya
				</Link>{' '}
				<Link href='https://github.com/rohan-gupta-14' target='_blank'>
					@Rohan
				</Link>{' '}
				<Link href='https://github.com/Mahimabisht10' target='_blank'>
					@Mahima
				</Link>{' '}
				<Link href='https://github.com/nickkcode' target='_blank'>
					@Nikhil
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
