import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/hero";
import Features from "./components/features";

export default function Home() {
	return (
		<>
			<Header />
			<HeroSection />
			<Features />
		</>
	);
}
