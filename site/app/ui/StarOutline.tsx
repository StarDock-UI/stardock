'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

const StarOutline = () => {
	const pathRef = useRef<SVGPathElement | null>(null);
	const [pathLength, setPathLength] = useState(0);
	const [dashOffset, setDashOffset] = useState(0);

	const style: React.CSSProperties = {
		position: 'absolute',
		top: '50%',
		left: '2%',
	};

	useEffect(() => {
		if (pathRef.current) {
			setPathLength(pathRef.current.getTotalLength());
		}
	}, []);

	useAnimationFrame(() => {
		if (!pathRef.current || pathLength === 0) return;

		setDashOffset((prevOffset) => {
			const speed = 4;
			const nextOffset = prevOffset + speed;
			return nextOffset >= pathLength ? 0 : nextOffset;
		});
	});

	const beamLength = 30;

	return (
		<svg
			width="106" height="48" viewBox="0 0 106 48"
			style={style}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<motion.path
				ref={pathRef}
				d="M0.5 3C0.5 3 9.40462 25.2007 22 30C39.3227 36.6005 76.5032 25.9188 65.5 11C58.5267 1.54515 47.6561 -0.682606 36.5 3C17.1122 9.39986 45.3075 43.4822 65.5 46.5C84.5825 49.3519 105.5 17.5 105.5 17.5"
				stroke='#7F52C7'
				strokeWidth='2'
				opacity={0.05}
			/>

			{pathLength > 0 && (
				<motion.path
					d="M0.5 3C0.5 3 9.40462 25.2007 22 30C39.3227 36.6005 76.5032 25.9188 65.5 11C58.5267 1.54515 47.6561 -0.682606 36.5 3C17.1122 9.39986 45.3075 43.4822 65.5 46.5C84.5825 49.3519 105.5 17.5 105.5 17.5"
					stroke='#7F52C7'
					strokeWidth='3'
					strokeLinecap='round'
					strokeDasharray={`${beamLength} ${pathLength}`}
					strokeDashoffset={-dashOffset}
					filter='url(#glow)'
				/>
			)}

			<defs>
				<filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
					<feDropShadow
						dx='0'
						dy='0'
						stdDeviation='3'
						floodColor='#7F52C7'
						floodOpacity='1'
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default StarOutline;
