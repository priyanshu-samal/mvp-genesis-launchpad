import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-black via-neutral-900/80 to-[#2a1800] pt-16 pb-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Your Idea Deserves to Exist</h3>
        <a
          href="https://cal.com/priyanshu-samal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 shadow-lg">
            Book a Call
          </button>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto border-t border-neutral-800 pt-6">
        <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 BuildMVPFast.agency. All rights reserved.</div>
        <a
          href="https://x.com/PriyanshuS92042"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M20.893 3.553a1.5 1.5 0 0 0-2.12 0l-5.364 5.364-5.364-5.364a1.5 1.5 0 1 0-2.12 2.12l5.364 5.364-5.364 5.364a1.5 1.5 0 1 0 2.12 2.12l5.364-5.364 5.364 5.364a1.5 1.5 0 1 0 2.12-2.12l-5.364-5.364 5.364-5.364a1.5 1.5 0 0 0 0-2.12z"/></svg>
          @PriyanshuS92042
        </a>
      </div>
    </footer>
  );
};

export default Footer; 