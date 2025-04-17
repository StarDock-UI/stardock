import HeroSection from './ui/Hero';
import Header from './ui/Header';
import Blob from './ui/Blob';
import Features from './ui/Features';
import Footer from './ui/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<Features />
			<Blob top='100px' left='10px' opacity={0.3} />
			<Blob top='300px' right='10px' opacity={0.2} size='500px' />
			<Footer />
		</>
	);
}
