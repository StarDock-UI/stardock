import React from 'react';
import styles from '../styles/Features.module.css';
import Image from 'next/image';

const Features = () => {
	return (
		<section className={styles.featuresSection}>
			<h1 className={styles.featuresTitle}>Web Building Experience</h1>

			<div className={styles.largeRow}>
				<div className={`${styles.featureCard} ${styles.largeCard}`}>
					<div className={styles.imagePlaceholder}>
						<Image
							src='/icons/components.gif'
							alt='Components'
							width={200}
							height={200}
							className={styles.transparent}
						/>
					</div>
					<h3>Pre-Built Components</h3>
					<p>
						Speed up development with clean, customizable UI components like buttons,
						modals, and cards—ready to use out of the box.
					</p>
				</div>

				<div className={`${styles.featureCard} ${styles.largeCard}`}>
					<div className={styles.imagePlaceholder}>
						<Image
							src='/icons/style.gif'
							alt='Components'
							width={200}
							height={200}
							className={styles.transparent}
						/>
					</div>
					<h3>Utility-First Classes</h3>
					<p>
						Write less CSS and build faster using utility classes for spacing,
						typography, colors, layout, and more. Inspired by Tailwind, crafted for
						flexibility.
					</p>
				</div>
			</div>

			<div className={styles.smallRow}>
				<div className={`${styles.featureCard} ${styles.smallCard}`}>
					<div className={styles.imagePlaceholder}>
						<Image
							src='/icons/typo.gif'
							alt='Components'
							width={200}
							height={200}
							className={styles.transparent}
						/>
					</div>
					<h3>Typography System</h3>
					<p>
						Well-structured typography utilities for headings, body text, and
						responsive type scales.
					</p>
				</div>

				<div className={`${styles.featureCard} ${styles.smallCard}`}>
					<div className={styles.imagePlaceholder}>
						{' '}
						<Image
							src='/icons/code.gif'
							alt='Components'
							width={200}
							height={200}
							className={styles.transparent}
						/>
					</div>
					<h3>Dev-Friendly Naming</h3>
					<p>
						Clear, consistent, and memorable class names—easy to write, easier to
						read.
					</p>
				</div>

				<div className={`${styles.featureCard} ${styles.smallCard}`}>
					<div className={styles.imagePlaceholder}>
						{' '}
						<Image
							src='/icons/guide.gif'
							alt='Components'
							width={200}
							height={200}
							className={styles.transparent}
						/>
					</div>
					<h3>Design Tokens</h3>
					<p>
						Abstracted values for spacing, font sizes, and colors for design system
						consistency.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
