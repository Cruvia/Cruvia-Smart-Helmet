"use client";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
	const [currentModel, setCurrentModel] = useState(0);

	const models = [
		{
			id: 1,
			name: "Premium Model",
			price: "Rs. 20,000 PKR",
			features: [
				"Bluetooth Speakers",
				"Built-in Microphone",
				"SOS Alerts",
				"Call System",
				"LED Lights",
				"Rear Camera",
				"Accident Detection",
			],
			image: "/assets/model1.jpeg",
		},
		{
			id: 2,
			name: "Advanced Model",
			price: "Rs. 9,000 PKR",
			features: [
				"Call System",
				"SOS Alerts",
				"Accident Detection",
				"GPS Tracking",
			],
			image: "/assets/model2.jpeg",
		},
		{
			id: 3,
			name: "Essential Model",
			price: "Rs. 5,000 PKR",
			features: ["Bluetooth Call System"],
			image: "/assets/model3.jpeg",
		},
	];

	const nextModel = () => {
		setCurrentModel((prev) => (prev + 1) % models.length);
	};

	const prevModel = () => {
		setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-[#0a1929] via-[#14465b] to-[#1D546C]">
			{/* Hero Image Section */}
			<div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
				{/* Background Image with Overlay */}
				<div className="absolute inset-0">
					<Image
						src="/assets/hero-helmet.jpg"
						alt="Cruvia Smart Helmet"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#0a1929]" />
				</div>

				{/* Hero Content */}
				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="space-y-6 animate-fade-in">
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl">
							THE ART OF <span className="text-cyan-400">VISION</span>
						</h1>
						<p className="text-xl sm:text-2xl md:text-3xl text-amber-100/90 font-light italic">
							Engineered for the discerning journey
						</p>
						<p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mt-8">
							Experience the revolution in protective headgear. Cruvia combines
							cutting-edge safety technology with premium design to protect what
							matters most.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
							<a href="#features">
								<button className="px-10 py-4 bg-cyan-400 hover:bg-cyan-500 text-black rounded-lg font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50">
									Discover More <ArrowRight size={20} />
								</button>
							</a>
							<a href="#models">
								<button className="px-10 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold transition-all">
									Explore Models
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
						<div className="w-1.5 h-3 bg-white/70 rounded-full" />
					</div>
				</div>
			</div>

			{/* Models Carousel Section */}
			<div id="models"></div>
			<div className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
							Choose Your <span className="text-cyan-400">Guardian</span>
						</h2>
						<p className="text-xl text-gray-300">
							Three models, one mission: Your safety
						</p>
					</div>

					{/* Carousel */}
					<div className="relative">
						{/* Carousel Container */}
						<div className="flex items-center justify-center">
							{/* Previous Button */}
							<button
								onClick={prevModel}
								className="absolute left-0 z-20 p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-all transform hover:scale-110 shadow-xl"
								aria-label="Previous model"
							>
								<ChevronLeft size={32} className="text-white" />
							</button>

							{/* Model Cards */}
							<div className="relative w-full max-w-5xl overflow-hidden">
								<div className="flex transition-transform duration-500 ease-in-out">
									{models.map((model, index) => (
										<div
											key={model.id}
											className={`w-full shrink-0 px-4 transition-all duration-500 ${
												index === currentModel
													? "opacity-100 scale-100"
													: "opacity-0 scale-95 absolute inset-0"
											}`}
											style={{
												transform:
													index === currentModel
														? "translateX(0)"
														: `translateX(${(index - currentModel) * 100}%)`,
											}}
										>
											<div className="bg-linear-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden transform hover:scale-105 transition-all duration-300">
												<div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
													{/* Image Side */}
													<div className="flex items-center justify-center">
														<div className="relative w-full h-80 md:h-96">
															<Image
																src={model.image}
																alt={model.name}
																fill
																className="object-contain drop-shadow-2xl"
															/>
														</div>
													</div>

													{/* Details Side */}
													<div className="flex flex-col justify-center space-y-6">
														<div>
															<h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
																{model.name}
															</h3>
															<p className="text-4xl md:text-4xl font-bold text-cyan-300">
																{model.price}
															</p>
														</div>

														<div className="space-y-3">
															<h4 className="text-xl font-semibold text-cyan-200 mb-4">
																Key Features:
															</h4>
															{model.features.map((feature, idx) => (
																<div
																	key={idx}
																	className="flex items-center gap-3"
																>
																	<div className="w-2 h-2 bg-cyan-400 rounded-full" />
																	<span className="text-gray-200 text-lg">
																		{feature}
																	</span>
																</div>
															))}
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Next Button */}
							<button
								onClick={nextModel}
								className="absolute right-0 z-20 p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-all transform hover:scale-110 shadow-xl"
								aria-label="Next model"
							>
								<ChevronRight size={32} className="text-white" />
							</button>
						</div>

						{/* Dots Indicator */}
						<div className="flex justify-center gap-3 mt-12">
							{models.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentModel(index)}
									className={`transition-all duration-300 rounded-full ${
										index === currentModel
											? "w-12 h-3 bg-cyan-400"
											: "w-3 h-3 bg-white/30 hover:bg-white/50"
									}`}
									aria-label={`Go to model ${index + 1}`}
								/>
							))}
						</div>
					</div>

					{/* Touch/Swipe Instructions for Mobile */}
					<div className="text-center mt-8 text-gray-400 text-sm md:hidden">
						← Swipe to explore models →
					</div>
				</div>
			</div>

			{/* Add touch swipe support for mobile */}
			<style jsx>{`
				@keyframes fade-in {
					from {
						opacity: 0;
						transform: translateY(20px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}

				.animate-fade-in {
					animation: fade-in 1s ease-out;
				}
			`}</style>
		</div>
	);
};

export default HeroSection;
