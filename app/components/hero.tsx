"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import helmet from "@/public/assets/cruvia-helmet.png";
import Link from "next/link";
const HeroSection = () => {
	return (
		<div className="h-screen bg-gradient-to-r from-[#14465b] to-[#1D546C]/60 flex items-center justify-center">
			<div className="w-1/2">
				<Image src={helmet} alt="helmet" />
			</div>
			<div className="w-1/2 flex flex-col items-start">
				<h1 className="text-3xl md:4xl lg:text-5xl font-bold font-inter text-amber-100">
					CRUVIA SMART HELMET
				</h1>
				<p className="text-md md:lg lg:text-xl font-barlow italic text-amber-100 mt-1">
					Transforming helmets into Smart Guardians
				</p>

				<p className="text-xs md:md lg:text-lg font-barlow text-white mt-10">
					Experience the revolution in protective headgear. Cruvia combines
					cutting-edge safety technology with premium design to protect what
					matters most. We strive to enhance safety, connectivity, and peace of
					mind for the riders with intelligent and smart helmets.
				</p>

				<div className="flex gap-5">
					<Link
						href="#features"
						className="px-8 py-3 bg-amber-100 text-[#0C2B4E] rounded-lg font-bold flex items-center justify-center mt-10"
					>
						Explore <ArrowRight size={18} />
					</Link>

					<Link
						href="#features"
						className="px-8 py-3 bg-amber-100 text-[#0C2B4E] rounded-lg font-bold flex items-center justify-center mt-10"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
