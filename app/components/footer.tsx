import React from "react";

const Footer = () => {
	return (
		<footer className="border-t border-border py-12 px-6 text-white">
			<div className="max-w-5xl mx-auto">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div>
						<h3 className="font-bold text-lg mb-4">Cruvia</h3>
						<p className="text-sm">
							Premium protection engineered for your safety.
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-4 text-sm uppercase">Product</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">Specifications</a>
							</li>
							<li>
								<a href="#">Gallery</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4 text-sm uppercase">Company</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-4 text-sm uppercase">Legal</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a href="#">Privacy</a>
							</li>
							<li>
								<a href="#">Terms</a>
							</li>
							<li>
								<a href="#">Warranty</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="border-t border-border pt-8 text-center text-sm">
					<p>&copy; 2025 Cruvia Helmet. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
