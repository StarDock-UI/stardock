'use client';
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='badge'>20 Pre-Built Components</div>

			<h1 className='hero-title'>
				<span className='highlight'>Minimal </span>
				Style for Modern
				<span className='highlight'> Interfaces.</span>
			</h1>

			<p className='hero-subtitle'>
				StarDock is a tiny CSS library that does just enough.
				<br />
				No fuss, No bloat — just clean, beautiful designs.
			</p>

			<div className='hero-buttons'>
				<button className='btn primary'>Get Started</button>
				<button className='btn secondary'>View Documentation</button>
			</div>
			<code className='code-block' id='code-block'>
				npm i stardock@latest
			</code>
		</section>
	);
};

export default HeroSection;
