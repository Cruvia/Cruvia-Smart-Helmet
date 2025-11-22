import { Shield, Wind, Zap } from "lucide-react";

const features = [
	[
		{
			icon: Shield,
			title: "Advanced Protection",
			description:
				"Multi-layer impact absorption technology provides superior protection against all types of impacts.",
		},
		{
			icon: Wind,
			title: "Superior Ventilation",
			description:
				"Advanced airflow channels keep you cool during intense activities. Maximum breathability without compromise.",
		},
		{
			icon: Zap,
			title: "Lightweight Design",
			description:
				"Engineered with premium materials for exceptional strength-to-weight ratio. Feel like you're wearing nothing.",
		},
	],
];

const Features = () => {
	return (
		<section id="features" className="py-20 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#1D546C]">
					Why Choose Cruvia?
				</h2>

				<div className="grid md:grid-cols-3 gap-8">
					{features.flat().map((feature, idx) => {
						const Icon = feature.icon;
						return (
							<div key={idx} className="p-8 rounded-lg bg-amber-100">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
									<Icon className="text-[#1D546C]" size={24} />
								</div>
								<h3 className="text-xl font-semibold text-[#1D546C] mb-3">
									{feature.title}
								</h3>
								<p className="text-gray-700">{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
