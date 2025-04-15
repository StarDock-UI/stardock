import React from 'react';
import Copy from './Copy';
import '@/app/styles/Hero.css';

const Hero = () => {
	return (
		<section className='hero-section'>
			<div className='badge'>20+ Built-In Components</div>

			<h1 className='hero-title'>
				Everything You Need,  
				<span className='highlight'> Nothing You Don't.</span>
			</h1>

			<p className='hero-subtitle'>
				StarDock is a tiny CSS library that does just enough.
				<br />
				No fuss, No bloat — just clean, beautiful designs.
			</p>

			<div className='hero-buttons'>
				<button className='btn-primary btn'>Get Started</button>
				<button className='btn-secondary btn'>Documentation</button>
			</div>
			<div className='copy-wrapper'>
				<code className='copy-block' id='code-block'>
					npm i stardock@latest
				</code>
				<Copy />
			</div>
		</section>
	);
};

export default Hero;
