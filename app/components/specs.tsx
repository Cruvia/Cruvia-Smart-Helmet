"use client";
import { useRef } from "react";
import deviceTech from "@/public/assets/cruvia-helmet.png";
import Image from "next/image";

const specs = [
	{ label: "Microcontroller", value: "ESP32" },
	{ label: "Sensor", value: "MPU6050" },
	{ label: "Battery", value: "Rechargable Li-ion" },
	{ label: "Charging", value: "TP4056 module" },
];

export default function Specs() {
	const ref = useRef(null);

	return (
		<section
			id="specs"
			className="relative py-32 overflow-hidden bg-linear-to-r from-[#14465b] to-[#1D546C]/60"
		>
			<div className="container mx-auto px-6 relative z-10">
				{/* Grid Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Image Section */}
					<Image src={deviceTech} alt="Helmet" />
					{/* Specifications Grid */}
					<div>
						<span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 border border-amber-500 text-[#1D546C] text-sm font-medium mb-6">
							Technical Specifications
						</span>

						<div className="grid grid-cols-1 gap-4">
							{specs.map((spec, index) => (
								<div
									key={index}
									className="p-4 rounded-xl bg-cyan-100 border border-amber-500 shadow-sm shadow-cyan-400"
								>
									<div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
										{spec.label}
									</div>
									<div className="font-semibold text-[#1D546C]">
										{spec.value}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
