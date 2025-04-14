import React from 'react';
import Header from '../ui/Header';
import Sidebar from './ui/Sidebar';
import DocsHeader from './ui/DocsHeader';
import Blob from '../ui/Blob';
import '@/app/styles/Docs.css';

const Docs = () => {
	return (
		<div>
			<Sidebar />
			<DocsHeader />
			<Blob size='600px' top='10px' opacity={0.3} />
			<div className='content-section'></div>
		</div>
	);
};

export default Docs;
