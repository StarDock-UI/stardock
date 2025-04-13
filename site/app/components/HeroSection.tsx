'use client';

import React from 'react';
import Image from 'next/image';
import '../Styles/HeroSection.css';

// Correctly imported image
import homepageIMG from '../assets/homepageIMG.webp';

const HeroSection = () => {
	return (
		<section className='hero-section'>
			<div className='container hero-grid'>
				{/* Left Content */}
				<div className='hero-content-left'>
					<div className='badge'>20 Pre-Built Components</div>

					<h1 className='hero-title'>
						Style less. <br />
						<span className='highlight'> Create more.</span>
					</h1>

					<p className='hero-subtitle'>
						A tiny CSS library that does just enough.
						<br />
						No fuss, no bloat — just clean, beautiful design out of the box.
					</p>

					<div className='hero-buttons'>
						<button className='btn primary'>Get Started</button>
						<button className='btn secondary'>View Documentation</button>
					</div>

					<div className='install-box'>
						<code>npm install @your-ui/core</code>
					</div>
				</div>

				{/* Right Image */}
				<div className='hero-content-right'>
					<Image
						src={homepageIMG}
						alt='Hero'
						className='hero-image'
						placeholder='blur'
					/>
				</div>
			</div>

			{/* Optional Extra Info Below */}
			<div className='container'>
				<div className='stats'>
					⭐ 2.1k GitHub Stars &nbsp;&nbsp;|&nbsp;&nbsp; 📦 150k+ downloads/month
				</div>

				<div className='features'>
					<div className='feature-card'>⚡ Ultra-fast components</div>
					<div className='feature-card'>🎨 Customizable design system</div>
					<div className='feature-card'>🔌 Easy integration with React</div>
					<div className='feature-card'>📦 Tree-shakable & lightweight</div>
				</div>

				<div className='code-preview'>
					<pre>
						<code>
							{`import { Button } from '@your-ui/core';

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}`}
						</code>
					</pre>
				</div>

				<div className='frameworks'>
					<p>Supports:</p>
					<div className='logo-list'>
						<span>🔵 React</span>
						<span>⚛️ Next.js</span>
						<span>🟣 Vite</span>
						<span>🧱 Storybook</span>
					</div>
				</div>

				<div className='community'>
					Join 5,000+ developers building with YourUI every day 💙
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
