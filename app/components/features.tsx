import { BellRing, Cloud, MapPin, Shield, Wind, Zap } from "lucide-react";
import { RotatingCarousel } from "./rotating-carasoul";

const features = [
	{
		icon: <Shield />,
		title: "Advanced Protection",
		description:
			"Multi-layer impact absorption technology provides superior protection against all types of impacts.",
	},
	{
		icon: <Wind />,
		title: "Superior Ventilation",
		description:
			"Advanced airflow channels keep you cool during intense activities. Maximum breathability without compromise.",
	},
	{
		icon: <Zap />,
		title: "Lightweight Design",
		description:
			"Engineered with premium materials for exceptional strength-to-weight ratio. Feel like you're wearing nothing.",
	},
	{
		icon: <BellRing />,
		title: "Automatic Crash Detection",
		description:
			"Built-in accelerometer and gyroscope intelligently detect accidents in real time for instant response.",
	},
	{
		icon: <MapPin />,
		title: "Live GPS Tracking",
		description:
			"Integrated GPS module instantly shares your exact location so help can reach you faster.",
	},
	{
		icon: <Cloud />,
		title: "Cloud Connected",
		description:
			"Powered by Blynk IoT Cloud, enabling smart alerts, remote monitoring, and seamless real-time communication.",
	},
];

const Features = () => {
	return (
		<section id="features" className="py-20 px-6">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
					Why Choose Cruvia?
				</h2>

				<RotatingCarousel cards={features} />
			</div>
			<div id="specs"></div>
		</section>
	);
};

export default Features;
