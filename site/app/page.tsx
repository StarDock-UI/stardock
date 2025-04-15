import HeroSection from './ui/Hero';
import Header from './ui/Header';
import styles from './page.module.css';
import Blob from './ui/Blob';
import StarOutline from './ui/StarOutline';

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<HeroSection />
			<Blob top='100px' left='10px' opacity={0.3} />
			<Blob top='300px' right='10px' opacity={0.2} size='800px' />
			<StarOutline />
		</div>
	);
}
