'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';

import {
	ChevronRight,
	Palette,
	Settings,
	Brush,
	Code2,
	Globe,
	ChevronLeft,
} from 'lucide-react';

const StylesPage = () => {
	const router = useRouter();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				router.push('/docs/components');
			} else if (e.key === 'ArrowRight') {
				router.push('/docs/configuration');
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [router]);
	return (
		<div className='docs-container'>
			<Sidebar />
			<div className='main-content'>
				<DocsHeader />
				<Blob size='500px' top='20px' opacity={0.1} />

				<div className='content-section'>
					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Palette size={20} /> Styling Your Components
					</h2>
					<p>
						This guide will walk you through customizing phoenix's UI components to
						match your application’s branding.
					</p>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Brush size={20} /> Spacing
					</h2>
					<div className='container'>
						<div>
							<h1>Class</h1>
							<p>.m-$value</p>
							<p>.mt-$value</p>
							<p>.ml-$value</p>	
							<p>.mr-$value</p>
							<p>.mb-$value</p>
							<p>.mx-$value</p>
							<p>.my-$value</p>
							<p>.p-$value</p>
							<p>.pt-$value</p>
							<p>.pl-$value</p>	
							<p>.pr-$value</p>
							<p>.pb-$value</p>
							<p>.px-$value</p>
							<p>.py-$value</p>
							<p>.gap-$value</p>
                            <p>.w-$value</p>
                            <p>.h-$value</p>
                            <p>.top-$value</p>
                            <p>.bottom-$value</p>
                            <p>.left-$value</p>
                            <p>.right-$value</p>
                            <p>.block</p>
                            <p>.inline</p>
                            <p>.inline-block</p>
                            <p>.flex</p>
                            <p>.inline-flex</p>
                            <p>.grid</p>
                            <p>.hidden</p>
                            <p>.flex-row</p>
                            <p>.flex-col</p>
                            <p>.items-start</p>
                            <p>.items-center</p>
                            <p>.items-end</p>
                            <p>.justify-start</p>
                            <p>.justify-center</p>
                            <p>.justify-end</p>
                            <p>.justify-between</p>
                            <p>.justify-around</p>
                            <p>.justify-evenly</p>
                            <p>.w-full</p>
                            <p>.w-screen</p>
                            <p>.h-full</p>
                            <p>.h-screen</p>
                            <p>.relative</p>
                            <p>.absolute</p>
                            <p>.fixed</p>
                            <p>.sticky</p>
                            <p>.top-0</p>
                            <p>.left-0</p>
                            <p>.right-0</p>
                            <p>.bottom-0</p>
                            <p>.text-$value</p>
                            <p>.text-left</p>
                            <p>.text-center</p>
                            <p>.text-right</p>
                            <p>.font-bold</p>
                            <p>.font-semibold</p>
                            <p>.font-normal</p>
                            <p>.font-light</p>
                            <p>.text-$value</p>
                            <p>.bg-transparent</p>
                            <p>.bg-white</p>
                            <p>.bg-black</p>
                            <p>.bg-$value</p>
                            <p>.border</p>
                            <p>.border-0</p>
                            <p>.rounded-value</p>
                            <p>.border-value</p>
                            <p>.opacity-0</p>
                            <p>.opacity-25</p>
                            <p>.opacity-50</p>
                            <p>.opacity-75</p>
                            <p>.opacity-100</p>
                            <p>.blur-$value</p>
                            <p>.z-0</p>
                            <p>.z-10</p>
                            <p>.z-20</p>
                            <p>.z-30</p>
                            <p>.z-40</p>
                            <p>.z-50</p>
                            <p>.overflow-hidden</p>
                            <p>.overflow-auto</p>
                            <p>.overflow-scroll</p>
                            <p>.cursor-pointer</p>
                            <p>.cursor-default</p>
                            <p>.cursor-disable</p>
                            <p>.transition</p>
                            <p>.transition-colors</p>
                            <p>.transition-$value</p>
						</div>

						<div>
							<h1>Styles</h1>
                            <p>margin: $value</p>
							<p>margin-top: $value;</p>
							<p>margin-left: $value;</p>
							<p>margin-right: $value;</p>						
							<p>margin-bottom: $value;</p>						
							<p>margin-left: $value	,				
							   margin-right: $value;</p>						
							<p>margin-top: $value						
					           ,margin-bottom: $value;</p>
							<p>padding: $value;</p>
							<p>padding-top: $value;</p>
							<p>padding-left: $value;</p>
							<p>padding-right: $value;</p>						
							<p>padding-bottom: $value;</p>						
							<p>padding-left: $value,						
							   padding-right: $value;</p>						
							<p>padding-top: $value	,				
							   padding-bottom: $value;</p>	
							<p>gap: $value;</p>
                            <p>width: $value;</p>
                            <p>height: $value;</p>
                            <p>top: $value;</p>
                            <p>bottom: $value;</p>
                            <p>left: $value;</p>
                            <p>right: $value;</p>
                            <p>display: block;</p>
                            <p>display: inline;</p>
                            <p>display: inline-block;</p>
                            <p>display: flex;</p>
                            <p>display: inline-flex;</p>
                            <p>display: grid;</p>
                            <p>display: none;</p>
                            <p>flex-direction: row;</p>
                            <p>flex-direction: column;</p>
                            <p>align-items: flex-start;</p>
                            <p>align-items: center;</p>
                            <p>align-items: flex-end;</p>
                            <p>justify-content: flex-start;</p>
                            <p>justify-content: center;</p>
                            <p>justify-content: flex-end;</p>
                            <p>justify-content: space-between;</p>
                            <p>justify-content: space-around;</p>
                            <p>justify-content: space-evenly;</p>
                            <p>width: 100%;</p>
                            <p>width: 100vw;</p>
                            <p>width: 100%;</p>
                            <p>width: 100vh;</p>
                            <p>position: relative;</p>
                            <p>position: absolute;</p>
                            <p>position: sticky;</p>
                            <p>position: fixed;</p>
                            <p>top: 0;</p>
                            <p>left: 0;</p>
                            <p>right: 0;</p>
                            <p>bottom: 0;</p>
                            <p>font-size: $value;</p>
                            <p>text-align: left;</p>
                            <p>text-align: center;</p>
                            <p>text-align: right;</p>
                            <p>font-weight: bold;</p>
                            <p>font-weight: 600;</p>
                            <p>font-weight: normal;</p>
                            <p>font-weight: 300;</p>
                            <p>color: $value;</p>
                            <p>background-color: #00000000;</p>
                            <p>background-color: #fff;</p>
                            <p>background-color: #000;</p>
                            <p>background-color: $value;</p>
                            <p>border: 1px solid #000;</p>
                            <p>border: none;</p>
                            <p>border-radius: $value;</p>
                            <p>border-color: $value;</p>
                            <p>.opacity: 0</p>
                            <p>.opacity: 0.25</p>
                            <p>.opacity: 0.5</p>
                            <p>.opacity: 0.75</p>
                            <p>.opacity: 1</p>
                            <p>filter: blur($value);</p>
                            <p>z-index: 0;</p>
                            <p>z-index: 10;</p>
                            <p>z-index: 20;</p>
                            <p>z-index: 30;</p>
                            <p>z-index: 40;</p>
                            <p>z-index: 50;</p>
                            <p>overflow: hidden;</p>
                            <p>overflow: auto;</p>
                            <p>overflow: scroll;</p>
                            <p>cursor: pointer;</p>
                            <p>cursor: default;</p>
                            <p>cursor: not-allowed;</p>
                            <p>transition: all 0.3s ease;</p>
                            <p>transition: color 0.3s ease, background-color 0.3s ease;</p>
                            <p>transition-duration: $value;</p>
                            
                            </div>
					</div>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Code2 size={20} /> Using the Appearance Prop
					</h2>
					<p>
						Most components accept an <code>appearance</code> prop where you can pass
						class overrides:
					</p>

					<pre>
						<code>
							{`<SignIn
  appearance={{
    elements: {
      formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
    }
  }}
/>`}
						</code>
					</pre>

					<h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<Globe size={20} /> Global Styling
					</h2>
					<p>
						To override styles globally, define custom CSS inside your{' '}
						<code>styles</code> folder and import it in your app entry point.
					</p>

					{/* Navigation Buttons */}
					<div
						className='navigation-buttons'
						style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
					>
						<Link href='/docs/styles'>
							<span className='Doc-button left-button'> <ChevronLeft/> Components</span>
						</Link>
						<Link href='/docs/configuration'>
							
							<span className='Doc-button right-button'>
															Configuration <ChevronRight/>
														</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StylesPage;
