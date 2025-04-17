'use client';
import React, { useState } from 'react';
import Copy from './Copy';
import '@/app/styles/Hero.css';
import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
	const handleCopy = () => {
		const textToCopy = 'npm i stardock@latest';
		navigator.clipboard.writeText(textToCopy);
	};

	return (
		<section className='hero-section'>
			<div className='left'>
				<div className='badge'>
					<Star className='star' />
					20+ Built-In Components
				</div>

				<h1 className='hero-title'>
					Everything you need.
					<br />
					<span className='highlight'>Nothing you don't.</span>
				</h1>

				<p className='hero-subtitle'>
					phoenix is a css library that does just enough.
					<br />
					no fuss, no bloat — just clean, beautiful designs.
				</p>

				<div className='hero-buttons'>
					<Link href='/docs/getting-started' className='btn-primary btn'>
						Get Started
					</Link>
					<Link href='/docs' className='btn-secondary btn'>
						Documentation
					</Link>
				</div>

				<div className='copy-wrapper'>
					<code className='copy-block' id='code-block' onClick={handleCopy}>
						npm i stardock@latest
					</code>
					<Copy />
				</div>
			</div>
			<div className='right'>
				<div className='code-block'>
					<Image src='/code.png' alt='code' width={600} height={300} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
