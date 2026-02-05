"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

interface IFormData {
	username: string;
	user_email: string;
	subject: string;
	message: string;
}

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
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormData>();
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit = async (data: IFormData) => {
		console.log("data///////////////////", data);
		try {
			if (formRef.current) {
				setIsLoading(true);
				const response = await emailjs.sendForm(
					"service_0h57w8m",
					"template_v70k97k",
					formRef.current,
					"JmEialqyYTLDjUi4k",
				);
				if (response.status === 200) {
					toast.success(
						"Thank you for contacting us! We'll get back to you soon.",
					);
					setIsLoading(false);
					reset();
				}
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error("Failed to send message. Please try again.");
			setIsLoading(false);
		}
	};

	return (
		<section className="py-16 px-4 md:px-6 lg:px-8 bg-linear-to-r from-[#14465b] to-[#1D546C]/60">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Contact Form */}
					<div className="order-2 lg:order-1">
						<div className="bg-cyan-800 rounded-lg p-8 shadow-2xl">
							<h2 className="text-cyan-300 text-xl font-semibold mb-6">
								Contact Us
							</h2>

							<form
								className="space-y-6"
								ref={formRef}
								onSubmit={handleSubmit(onSubmit)}
							>
								<div>
									<label className="text-white text-sm mb-2 block">
										Your Name
									</label>
									<input
										{...register("username", {
											required: "Please enter your name",
										})}
										type="text"
										placeholder="Enter Your Name"
										className="w-full text-white placeholder:text-white/40 bg-transparent border border-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
									/>
									{errors.username && (
										<span className="text-red-300 text-xs mt-1 block">
											{errors.username.message}
										</span>
									)}
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Your Email
									</label>
									<input
										{...register("user_email", {
											required: "Please enter your email",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "Invalid email address",
											},
										})}
										type="email"
										placeholder="john@example.com"
										className="w-full text-white placeholder:text-white/40 bg-transparent border border-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
									/>
									{errors.user_email && (
										<span className="text-red-300 text-xs mt-1 block">
											{errors.user_email.message}
										</span>
									)}
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Subject
									</label>
									<input
										{...register("subject", {
											required: "Please enter a subject",
										})}
										type="text"
										placeholder="Enter subject"
										className="w-full text-white placeholder:text-white/40 bg-transparent border border-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
									/>
									{errors.subject && (
										<span className="text-red-300 text-xs mt-1 block">
											{errors.subject.message}
										</span>
									)}
								</div>

								<div>
									<label className="text-white/70 text-sm mb-2 block">
										Your message (optional)
									</label>
									<Textarea
										{...register("message")}
										placeholder="Type your message here..."
										rows={5}
										className="w-full text-white placeholder:text-white/40 bg-transparent border border-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
									/>
								</div>

								<div className="flex items-center justify-center">
									<button
										type="submit"
										disabled={isLoading}
										className="w-1/2 bg-cyan-400 hover:bg-cyan-400/90 text-white font-semibold py-4 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isLoading ? "Sending..." : "Submit"}
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="order-1 lg:order-2">
						<div className="mb-8">
							<p className="text-cyan-300 text-md font-semibold tracking-wide uppercase mb-2">
								QUESTIONS & ANSWERS
							</p>
							<h2 className="text-3xl md:text-4xl font-bold text-white">
								See Frequently Asked Questions
							</h2>
						</div>

						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div
									key={index}
									className={`border rounded-lg overflow-hidden transition-all ${
										openIndex === index
											? "bg-cyan-700 border-cyan-800"
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
