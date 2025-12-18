"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import helmet from "@/public/assets/hero-helmet.jpg";
import Link from "next/link";
const HeroSection = () => {
	return (
		<div className="h-screen bg-linear-to-r from-[#14465b] to-[#1D546C]/60 flex items-center justify-center">
			<div className="w-1/2 mx-10">
				<Image
					src={helmet}
					alt="helmet"
					width={700}
					height={700}
					className="rounded-full shadow-2xl shadow-[#132831]"
				/>
			</div>
			<div className="w-1/2 flex flex-col items-start mx-2 sm:mx-0">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-[inter] text-amber-400">
					CRUVIA SMART HELMET
				</h1>
				<p className="text-md md:text-lg lg:text-xl font-[inter] italic text-amber-100 mt-1">
					Transforming helmets into Smart Guardians
				</p>

				<p className="text-sm md:text-md lg:text-lg font-barlow text-white mt-10 font-[inter]">
					Experience the revolution in protective headgear. Cruvia combines
					cutting-edge safety technology with premium design to protect what
					matters most. We strive to enhance safety, connectivity, and peace of
					mind for the riders with intelligent and smart helmets.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center sm:items-start">
					<Link
						href="#features"
						className="w-full sm:w-auto px-8 py-3 bg-amber-100 hover:bg-amber-400 font-[inter] text-[#0C2B4E] rounded-lg font-bold flex items-center justify-center gap-2 mt-6 sm:mt-10"
					>
						Explore <ArrowRight size={18} />
					</Link>

					<Link
						href="#contact"
						className="w-full sm:w-auto px-8 py-3 bg-amber-100 hover:bg-amber-400 font-[inter] text-[#0C2B4E] rounded-lg font-bold flex items-center justify-center mt-0 sm:mt-10"
					>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
