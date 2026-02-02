"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
	{ name: "Home", href: "#home" },
	{ name: "Features", href: "#features" },
	{ name: "Specs", href: "#specs" },
	{ name: "Contact Us", href: "#contact" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 w-full z-50 bg-cyan-100">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-[inter]">
				<a href="#home">
					<div className="text-3xl font-bold flex flex-row gap-2 items-center">
						<Image
							src="/assets/logo.jpeg"
							alt="Logo"
							width={50}
							height={50}
							className="rounded-lg"
						/>
						<span className="text-[#1D546C]">Cruvia</span>
					</div>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex gap-8 items-center text-sm font-extrabold text-[#1D546C]">
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

				<button
					className="md:hidden text-[#1D546C] hover:text-[#0c2f3d] transition-colors"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden bg-amber-100 border-t-2 border-amber-200">
					<div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
						{links.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-[#1D546C] transition-colors font-bold"
								onClick={() => setIsOpen(false)}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;
