import React, { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-black text-white p-3 sticky top-0 z-50 shadow-md font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-0.5 sm:gap-1 p-2 rounded-md">
          <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
            R
          </span>
          <div className="flex flex-col text-white">
            <span className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
              ideOn
            </span>
            <span className="text-base sm:text-base md:text-xl font-semibold -mt-[0.3em] leading-tight">
              rental
            </span>
          </div>
        </div>

        {/* Desktop Navigation + Profile */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-3 mr-2">
            <a href="#" className="text-sm hover:text-orange-400 transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="text-sm hover:text-orange-400 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Profile Icon */}
          <div className="w-7 h-7 rounded-full bg-gray-500"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 text-white transition-all duration-200 overflow-hidden ${
        showMobileMenu ? 'max-h-36 py-3' : 'max-h-0'
      }`}>
        <div className="px-4 space-y-2">
          <a href="#" className="block py-1 text-sm hover:text-orange-400">Home</a>
          <a href="#" className="block py-1 text-sm hover:text-orange-400">About</a>
          <a href="#" className="block py-1 text-sm hover:text-orange-400">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
