import React from 'react';
import Link from 'next/link';
import '@/app/docs/css/DocsFooter.css';

const DocsFooter = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='left'>
					<div className='headline'>
						<h1>StarDock</h1>
						<p>A CSS library with beauty.</p>
					</div>
					<div className='contributers'>
						<p>Made with love by @Nikhil | @Rohan | @Diya | @Mahima</p>
					</div>
				</div>
				<div className='right'>
					<div className='links'>
						<h1>Learn</h1>
						<Link href='/docs/getting-started'>Getting Started</Link>
						<Link href='/docs/components'>Components</Link>
						<Link href='/docs/classes'>Classes</Link>
						<Link href='/docs/layout'>Layout</Link>
					</div>
					<div className='links'>
						<h1>Resources</h1>
						<Link href='https://github.com/StarDock-UI/stardock.git'>Github</Link>
						<Link href='/docs/changelogs'>Changelogs</Link>
						<Link href='/docs/support'>Support</Link>
						<Link href='/docs/showcase'>Showcase</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default DocsFooter;
