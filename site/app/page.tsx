'use client';

import React from 'react';
import HeroSection from './ui/Hero';
import Header from './ui/Header';
import Blob from './ui/Blob';
import Features from './ui/Features';
import Footer from './ui/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<Features />
				<section className='bottom-text' style={{ textAlign: 'center', margin: '4rem 0' }}>
					<h1>For devs who want simplicity and control.</h1>
				</section>
			</main>
			<Blob top='100px' left='10px' opacity={0.3} />
			<Blob top='300px' right='10px' opacity={0.2} size='500px' />
			<Blob top='1200px' left='300px' opacity={0.2} size='500px' />
			<Blob top='1900px' right='200px' opacity={0.3} size='600px' />
			<Footer />
		</>
	);
}
