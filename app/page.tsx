import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/hero";
import Features from "./components/features";
import Specs from "./components/specs";
import JoinCommunity from "./components/join-community";
import Footer from "./components/footer";
import FAQSection from "./components/faq-section";

export default function Home() {
	return (
		<>
			<Header />

			<div id="home"></div>
			<HeroSection />

			<div id="features"></div>
			<Features />
			<Specs />

			<div id="contact"></div>
			<JoinCommunity />
			<div id="contact-form"></div>
			<FAQSection />
			<Footer />
		</>
	);
}
