import Image from 'next/image';
import styles from './page.module.css';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
	return (
		<div className={styles.page}>
            <Header/>
			<HeroSection/>
            <Footer/>
		</div>
	);
}
