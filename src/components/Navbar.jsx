import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
                scrolled ? "w-full px-6 top-0 rounded-4xl" : "max-w-7xl w-full px-4 "
            }`}
        >
            <div
                className={`flex items-center justify-between transition-all duration-500 p-6 ${
                    scrolled
                        ? "rounded-2xl backdrop-blur-xl bg-white/10 border-b border-white/20 py-4"
                        : "rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 py-3"
                }`}
            >
                {/* Logo */}
                <h1 className="text-white font-bold text-xl">
                    Brand
                </h1>

                {/* Nav Links */}
                <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
                    <li className="hover:text-white cursor-pointer">Home</li>
                    <li className="hover:text-white cursor-pointer">Features</li>
                    <li className="hover:text-white cursor-pointer">Pricing</li>
                    <li className="hover:text-white cursor-pointer">Contact</li>
                </ul>

                {/* CTA */}
                <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition">
                    Get Started
                </button>
            </div>
        </div>
    );
};


export default Navbar
