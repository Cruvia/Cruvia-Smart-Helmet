"use client";

import Link from "next/link";

const links = [
	{ name: "Home", href: "/" },
	{ name: "Features", href: "/features" },
	{ name: "Specs", href: "/specs" },
	{ name: "Contact Us", href: "/contact" },
];

const Header = () => {
	return (
		<nav className="fixed top-0 w-full z-50 bg-amber-100">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<div className="text-3xl font-bold">
					<span className="text-[#1D546C]">Cruvia</span>
				</div>

				<div className="hidden md:flex gap-8 items-center text-sm font-bold text-[#1D546C]">
					{links.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="hover:text-[#0c2f3d] transition-colors"
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Header;
