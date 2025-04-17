'use client';
import React from 'react';
import Sidebar from '../ui/Sidebar';
import DocsHeader from '../ui/DocsHeader';
import Blob from '../../ui/Blob';
import Link from 'next/link';
import '@/app/styles/Docs.css';
import '@/app/docs/css/home.css';

import { ChevronLeft } from 'lucide-react';

const Page = () => {
	return (
		<div className='docs-container'>
			<Sidebar />
			<div className='main-content'>
				<DocsHeader />
				<Blob size='500px' top='20px' opacity={0.1} />

				<div className="container">
					<table className="color-table">
						<thead>
							<tr>
								<th>Class</th>
								<th>Color</th>
							</tr>
						</thead>
						<tbody>
							{/* ORIGINAL COLORS */}
							<tr><td>snowlight</td><td style={{ backgroundColor: '#f9f9f9' }}>#f9f9f9</td></tr>
							<tr><td>ashcloud</td><td style={{ backgroundColor: '#f1f1f1' }}>#f1f1f1</td></tr>
							<tr><td>ghostveil</td><td style={{ backgroundColor: '#e2e2e2' }}>#e2e2e2</td></tr>
							<tr><td>mistgray</td><td style={{ backgroundColor: '#d3d3d3' }}>#d3d3d3</td></tr>
							<tr><td>steelfog</td><td style={{ backgroundColor: '#b4b4b4' }}>#b4b4b4</td></tr>
							<tr><td>smogtone</td><td style={{ backgroundColor: '#969696' }}>#969696</td></tr>
							<tr><td>slateveil</td><td style={{ backgroundColor: '#777777' }}>#777777</td></tr>
							<tr><td>duskshade</td><td style={{ backgroundColor: '#5a5a5a', color: '#fff' }}>#5a5a5a</td></tr>
							<tr><td>charcoalink</td><td style={{ backgroundColor: '#3c3c3c', color: '#fff' }}>#3c3c3c</td></tr>
							<tr><td>shadowcore</td><td style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>#1e1e1e</td></tr>
							<tr><td>abyssnight</td><td style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>#0a0a0a</td></tr>

							{/* REDS */}
							<tr><td>firebud</td><td style={{ backgroundColor: '#ff6b6b' }}>#ff6b6b</td></tr>
							<tr><td>emberglow</td><td style={{ backgroundColor: '#e94e4e' }}>#e94e4e</td></tr>
							<tr><td>cherryblush</td><td style={{ backgroundColor: '#cc3c3c' }}>#cc3c3c</td></tr>
							<tr><td>duskrose</td><td style={{ backgroundColor: '#aa2e2e' }}>#aa2e2e</td></tr>
							<tr><td>rustflame</td><td style={{ backgroundColor: '#883131' }}>#883131</td></tr>
							<tr><td>bloodshade</td><td style={{ backgroundColor: '#660f0f' }}>#660f0f</td></tr>

							{/* ORANGES */}
							<tr><td>sunsetgold</td><td style={{ backgroundColor: '#ff9e4a' }}>#ff9e4a</td></tr>
							<tr><td>amberroot</td><td style={{ backgroundColor: '#ff7f0a' }}>#ff7f0a</td></tr>
							<tr><td>apricrush</td><td style={{ backgroundColor: '#f3691e' }}>#f3691e</td></tr>
							<tr><td>caramelcider</td><td style={{ backgroundColor: '#d15400' }}>#d15400</td></tr>
							<tr><td>copperflare</td><td style={{ backgroundColor: '#b04500' }}>#b04500</td></tr>
							<tr><td>emberdust</td><td style={{ backgroundColor: '#8a3700' }}>#8a3700</td></tr>

							{/* YELLOWS */}
							<tr><td>sunflowerpop</td><td style={{ backgroundColor: '#ffe24a' }}>#ffe24a</td></tr>
							<tr><td>mellowhaze</td><td style={{ backgroundColor: '#f8d245' }}>#f8d245</td></tr>
							<tr><td>lemonzest</td><td style={{ backgroundColor: '#f2bc22' }}>#f2bc22</td></tr>
							<tr><td>mustardspark</td><td style={{ backgroundColor: '#d0a000' }}>#d0a000</td></tr>
							<tr><td>honeydrip</td><td style={{ backgroundColor: '#b78c00' }}>#b78c00</td></tr>
							<tr><td>goldenharvest</td><td style={{ backgroundColor: '#a37600' }}>#a37600</td></tr>

							{/* Add the rest below similarly... */}

							{/* Funky & Fun */}
							<tr><td>neonlime</td><td style={{ backgroundColor: '#b0ff2d' }}>#b0ff2d</td></tr>
							<tr><td>electricmango</td><td style={{ backgroundColor: '#ffb200' }}>#ffb200</td></tr>
							<tr><td>hyperblue</td><td style={{ backgroundColor: '#3a60ff' }}>#3a60ff</td></tr>
							<tr><td>cyberpink</td><td style={{ backgroundColor: '#ff49aa' }}>#ff49aa</td></tr>
							<tr><td>glitchgreen</td><td style={{ backgroundColor: '#00ff8f' }}>#00ff8f</td></tr>
							<tr><td>spacemint</td><td style={{ backgroundColor: '#73f9d6' }}>#73f9d6</td></tr>
							<tr><td>technoindigo</td><td style={{ backgroundColor: '#7e4bff' }}>#7e4bff</td></tr>
							<tr><td>flameburst</td><td style={{ backgroundColor: '#ff3366' }}>#ff3366</td></tr>
						</tbody>
					</table>
				</div>

				<div
					className='navigation-buttons'
					style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
				>
					<Link href='/docs'>
						<span className='Doc-button left-button'>
							<ChevronLeft /> Home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Page;
