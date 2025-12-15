"use client";

const JoinCommunity = () => {
	return (
		<>
			<section className="py-20 px-6 bg-linear-to-r from-[#14465b] to-[#1D546C]/60">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl text-amber-400 font-bold mb-6">
						Join the Cruvia Community
					</h2>
					<p className="text-lg text-amber-100 mb-8">
						Experience premium protection and innovation. Discover why thousands
						choose Cruvia for their most important moments.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => {
								document
									.getElementById("contact-form")
									?.scrollIntoView({ behavior: "smooth" });
							}}
							className="px-8 py-3 bg-amber-100 hover:bg-amber-400 text-[#0C2B4E] rounded-lg font-medium hover:opacity-90 transition-opacity"
						>
							Get Started
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default JoinCommunity;
