'use client';
import React from 'react';
import '../styles/Hero.css';
import Copy from './Copy';

const Hero = () => {
	return (
		<section className='hero-section'>
			{/* <div className='badge'>Hackathon Project</div> */}

			<h1 className='hero-title'>
				Everything You Need.
				<br />
				<span className='highlight'>Nothing You Don't.</span>
			</h1>

			<p className='hero-subtitle'>
				StarDock is a tiny CSS library that does just enough.
				<br />
				No fuss, No bloat — just clean, beautiful designs.
			</p>

			<div className='hero-buttons'>
				<button className='btn primary'>Get Started</button>
				<button className='btn secondary'>Documentation</button>
			</div>
			<code className='code-block' id='code-block'>
				npm i stardock@latest
			</code>
			<Copy />
		</section>
	);
};

export default Hero;
