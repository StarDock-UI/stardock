'use client';
import React, { useState } from 'react';
import Copy from './Copy';  // Ensure your Copy component is handling the UI for feedback (like showing a success message)
import '@/app/styles/Hero.css';
import Link from 'next/link';

const Hero = () => {
  const [copied, setCopied] = useState(false);  // State to manage copy feedback

  // Function to handle copy to clipboard
  const handleCopy = () => {
    const textToCopy = 'npm i stardock@latest';  // The text to copy
    navigator.clipboard.writeText(textToCopy)  // Use Clipboard API to copy text
      .then(() => {
        setCopied(true);  // Set copied state to true on successful copy
        setTimeout(() => setCopied(false), 2000);  // Reset after 2 seconds
      })
      .catch(() => {
        setCopied(false);  // Handle error (optional)
      });
  };

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
        <Link href='/docs/getting-started' className='btn-primary btn'>Get Started</Link>
        <Link href='/docs' className='btn-secondary btn'>Documentation</Link>
      </div>

      <div className='copy-wrapper'>
        <code 
          className='copy-block' 
          id='code-block'
          onClick={handleCopy}  // Attach the click handler
        >
          npm i stardock@latest
        </code>
        <Copy copied={copied} />  {/* Pass the 'copied' state to provide feedback */}
      </div>
    </section>
  );
};

export default Hero;
