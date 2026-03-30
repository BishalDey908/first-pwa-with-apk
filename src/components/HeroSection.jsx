import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 opacity-30 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Stunning Web Experiences with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Modern UI
            </span>
          </h1>

          <p className="text-lg text-gray-300">
            Craft blazing fast, responsive, and beautiful applications using
            React and Tailwind CSS. Elevate your product with clean design and
            smooth interactions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-white hover:text-black transition duration-300">
              Live Demo
            </button>
          </div>
        </div>

        {/* Right Content (Rocket Animation) */}
        <div className="relative flex items-center justify-center">
          {/* Rocket */}
          <div className="animate-float">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
              alt="rocket"
              className="w-96 md:w-56 drop-shadow-2xl"
            />
          </div>

          {/* Glow under rocket */}
          <div className="absolute bottom-10 w-40 h-10 bg-purple-500/30 blur-2xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
