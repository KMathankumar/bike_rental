import React, { useState, useEffect, useRef } from "react";

const Search = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleBtnRef = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="relative bg-black text-white font-[Poppins]">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/sopqdjjWAaz5IUokcV0kA7P3HAoGM8fEbwpy8VAko-M.jpg"
        alt="A motorcycle parked in a scenic outdoor setting"
        className="w-full h-screen object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 md:p-6">
        
 {/* Logo */}
 <div className="flex items-center gap-0.5 sm:gap-1 p-2 rounded-md">
      {/* Large R */}
      <span className="text-orange-500 text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
        R
      </span>

      {/* ideOn rental stacked with further reduced vertical gap */}
      <div className="flex flex-col text-white">
        <span className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
          ideOn
        </span>
        <span className="text-base sm:text-base md:text-xl  font-semibold -mt-[0.3em] leading-tight">
          rental
        </span>
      </div>
    </div>




          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-4 md:space-x-6 text-sm md:text-base items-center">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            <li>
              <img
                src="https://storage.googleapis.com/a1aa/image/UXSGhObe3tltLEtGNJrXkXr8UAwfj4preR0Mgs2pz3o.jpg"
                alt="Profile"
                className="rounded-full w-9 h-9 object-cover"
              />
            </li>
          </ul>

          {/* Hamburger Icon */}
          <button
            ref={toggleBtnRef}
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-black bg-opacity-90 w-full p-4 z-20"
          >
            <ul className="flex flex-col space-y-3 text-white text-base">
              <li><a href="#" className="hover:text-orange-500">Home</a></li>
              <li><a href="#" className="hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
        )}

        {/* Centered Tagline */}
        <div className="text-center mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">
            Your Bikes, Our Platform
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 mt-2">
            A Perfect Ride!
          </h2>
        </div>

        {/* Search Bar */}
        <div className="mt-8 mb-10 w-full px-4">
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search Specified"
              className="w-full p-3 pl-12 rounded-full text-black focus:outline-none text-sm"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-search text-black text-sm" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Search;
