import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './page.module.css';
import Blob from './components/Blob';

export default function Home() {
	return (
		<div className={styles.page}>
            <Header/>
			<HeroSection/>
            <Footer/>
            <Blob/>
		</div>
	);
}
