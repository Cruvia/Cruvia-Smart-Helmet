"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
const faqs = [
	{
		question: "What features does the Cruvia smart helmet offer?",
		answer: (
			<div className="space-y-3">
				<p>
					The Cruvia smart helmet comes packed with advanced safety and
					connectivity features:
				</p>
				<ul className="space-y-2 list-disc list-inside">
					<li>
						Built-in Bluetooth connectivity for hands-free calls and music
					</li>
					<li>Integrated LED safety lights for better visibility</li>
					<li>Fall detection with automatic emergency alerts</li>
					<li>Real-time GPS tracking and navigation</li>
					<li>Voice command support</li>
					<li>Long-lasting battery life (up to 10 hours of continuous use)</li>
				</ul>
				<p className="mt-3">
					All these features work seamlessly together to provide maximum safety
					and convenience during your rides.
				</p>
			</div>
		),
	},
	{
		question: "How does the emergency alert system work?",
		answer: (
			<p>
				The Cruvia helmet features an advanced fall detection system with
				built-in accelerometers and gyroscopes. If a significant impact or fall
				is detected, the helmet automatically sends your location to
				pre-configured emergency contacts via the companion mobile app. You have
				60 seconds to cancel the alert if it was a false alarm, otherwise
				emergency notifications are sent immediately.
			</p>
		),
	},
	{
		question: "Is the Cruvia helmet compatible with my smartphone?",
		answer: (
			<p>
				Yes! The Cruvia smart helmet is compatible with both iOS (version 12.0
				and above) and Android (version 8.0 and above) devices. Simply download
				the free Cruvia app from the App Store or Google Play, pair your helmet
				via Bluetooth, and you&apos;re ready to go. The app allows you to
				customize settings, track your rides, and manage emergency contacts.
			</p>
		),
	},
	{
		question: "What is the battery life and how do I charge it?",
		answer: (
			<p>
				The Cruvia helmet offers up to 10 hours of continuous use with all
				features active, and up to 7 days in standby mode. Charging is easy with
				the included USB-C cable - simply plug it into the charging port located
				inside the helmet padding. A full charge takes approximately 2-3 hours.
				The LED indicator on the helmet shows you the current battery level, and
				you&apos;ll receive low battery alerts through the app.
			</p>
		),
	},
	{
		question: "What safety certifications does the Cruvia helmet have?",
		answer: (
			<p>
				Safety is our top priority. The Cruvia smart helmet is certified to meet
				multiple international safety standards including DOT (Department of
				Transportation), ECE 22.06 (European safety standard), and ISI marks.
				The helmet undergoes rigorous impact testing and quality control to
				ensure it provides maximum protection while housing smart technology.
				The electronics are fully integrated without compromising the structural
				integrity of the helmet.
			</p>
		),
	},
];
export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number>(0);
	return (
		<section className="py-16 px-4 md:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Contact Form */}
					<div className="order-2 lg:order-1">
						<div className="bg-[#14465b] rounded-lg p-8 shadow-2xl">
							<h2 className="text-amber-300 text-xl font-semibold mb-6">
								Contact Us
							</h2>

							<form className="space-y-6">
								<div>
									<label className="text-white text-sm mb-2 block ">
										Your Name
									</label>
									<input
										type="text"
										name="username"
										placeholder="Enter Your Name"
										required
										className="w-full text-white placeholder:text-white/40 border border-white p-1"
									/>
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Your Email
									</label>
									<input
										type="email"
										name="user_email"
										placeholder="john@example.com"
										required
										className="w-full text-white placeholder:text-white/40 border border-white p-1"
									/>
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Subject
									</label>
									<input
										type="text"
										name="subject"
										placeholder="Enter subject"
										required
										className="w-full text-white placeholder:text-white/40 border border-white p-1"
									/>
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Your message (optional)
									</label>
									<Textarea
										name="message"
										placeholder="Type your message here..."
										rows={5}
										className="w-full text-white placeholder:text-white/40 border border-white p-1"
									/>
								</div>

								<button className="w-full bg-amber-400 hover:bg-amber-400/90 text-white font-semibold py-6 rounded-md transition-colors">
									Submit
								</button>
							</form>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="order-1 lg:order-2">
						<div className="mb-8">
							<p className="text-amber-300 text-md font-semibold tracking-wide uppercase mb-2">
								QUESTIONS & ANSWERS
							</p>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								See Frequently Asked Questions
							</h2>
						</div>

						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div
									key={index}
									className={`border rounded-lg overflow-hidden transition-all ${
										openIndex === index
											? "bg-amber-400 border-amber-400"
											: "bg-white border-gray-200"
									}`}
								>
									<button
										onClick={() =>
											setOpenIndex(openIndex === index ? -1 : index)
										}
										className="w-full flex items-center justify-between p-5 text-left"
									>
										<span
											className={`font-semibold pr-4 ${
												openIndex === index ? "text-white" : "text-gray-900"
											}`}
										>
											{faq.question}
										</span>
										<ChevronDown
											className={`shrink-0 transition-transform ${
												openIndex === index
													? "rotate-180 text-white"
													: "text-gray-600"
											}`}
											size={20}
										/>
									</button>
									{openIndex === index && (
										<div className="px-5 pb-5 text-white/95">{faq.answer}</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
