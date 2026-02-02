"use client";

import type React from "react";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Card {
	icon: React.ReactNode;
	title: string;
	description: string;
}

interface RotatingCarouselProps {
	cards: Card[];
}

export function RotatingCarousel({ cards }: RotatingCarouselProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () => {
		setActiveIndex((prev) => (prev - 1) % cards.length);
	};
	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % cards.length);
	};

	const getCardPosition = (index: number) => {
		const diff = (index - activeIndex + cards.length) % cards.length;
		return diff;
	};

	const getCardStyle = (index: number) => {
		const position = getCardPosition(index);

		if (position === 0) {
			// Active card - center and visible
			return {
				transform: "translateX(0) scale(1) rotateY(0deg)",
				opacity: 1,
				zIndex: 30,
				filter: "blur(0px)",
				pointerEvents: "auto" as const,
			};
		} else if (position === 1) {
			// Next card - to the right
			return {
				transform: "translateX(120%) scale(0.7) rotateY(25deg)",
				opacity: 0.3,
				zIndex: 20,
				filter: "blur(4px)",
				pointerEvents: "none" as const,
			};
		} else if (position === cards.length - 1) {
			return {
				transform: "translateX(-120%) scale(0.7) rotateY(-25deg)",
				opacity: 0.3,
				zIndex: 20,
				filter: "blur(4px)",
				pointerEvents: "none" as const,
			};
		} else {
			// Background cards - behind
			return {
				transform: "translateX(0) scale(0.7) rotateY(0deg)",
				opacity: 0.15,
				zIndex: 10,
				filter: "blur(8px)",
				pointerEvents: "none" as const,
			};
		}
	};

	return (
		<div className="w-full">
			<div className="relative h-96 flex items-center justify-center overflow-hidden perspective font-[inter]">
				{/* Cards Container */}
				<div className="relative w-full max-w-lg h-full">
					{cards.map((card, index) => {
						const style = getCardStyle(index);
						return (
							<div
								key={index}
								className="absolute inset-0 transition-all duration-500 ease-out"
								style={{
									...style,
									perspective: "1000px",
								}}
							>
								<div className="w-full h-full p-8 border-4 border-cyan-400 bg-cyan-100 rounded-xl shadow-2xl shadow-cyan-500 flex flex-col justify-center items-center gap-5 text-[#1b4f50]">
									<div className="w-12 h-12 bg-cyan-300 rounded-full flex items-center justify-center">
										{card.icon}
									</div>
									<h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
									<p className="text-center">{card.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Navigation Button */}
			<div className="flex justify-center mt-8 gap-5">
				<button
					onClick={handlePrev}
					className="px-3 py-3 border-2 border-[#18467a] bg-cyan-300 rounded-full text-[#18467a] hover:bg-cyan-400 hover:shadow-xl"
				>
					<ChevronLeft size={18} />
				</button>
				<button
					onClick={handleNext}
					className="px-3 py-3 border-2 border-[#18467a] bg-cyan-300 rounded-full text-[#18467a] hover:bg-cyan-400 hover:shadow-xl"
				>
					<ChevronRight size={18} />
				</button>
			</div>

			{/* Indicator Dots */}
			<div className="flex justify-center gap-2 mt-6">
				{cards.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-2 h-2 rounded-full transition-all ${
							index === activeIndex ? " w-6 bg-cyan-300" : "bg-cyan-300/50"
						}`}
						aria-label={`Go to card ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
