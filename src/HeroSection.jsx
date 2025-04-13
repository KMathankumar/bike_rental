import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

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

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="relative font-[Poppins]">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/sopqdjjWAaz5IUokcV0kA7P3HAoGM8fEbwpy8VAko-M.jpg"
        alt="A motorcycle parked in a scenic outdoor setting"
        className="w-full h-screen object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between">
        {/* Top Navigation */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20">
       
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




          {/* Desktop Navigation: show on md+ */}
          <ul className="hidden md:flex space-x-6 text-white text-lg items-center">
            <li><a className="hover:text-gray-300 cursor-pointer" href="#">Home</a></li>
            <li><a className="hover:text-gray-300 cursor-pointer" href="#">About Us</a></li>
            <li><a className="hover:text-gray-300 cursor-pointer" href="#">Contact</a></li>
            <li>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Replace with your actual profile URL if needed
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover cursor-pointer border-2 border-white"
              />
            </li>
          </ul>

          {/* Hamburger Menu Icon: show on mobile only */}
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

        {/* Mobile Menu: only visible when hamburger menu is toggled */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 left-0 w-full bg-gray-900 text-white p-4 z-20"
          >
            <ul className="flex flex-col space-y-3 text-base">
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}

        {/* Center Tagline */}
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange-500 font-bold text-center leading-tight">
            Rent, Ride,<br />Explore, Repeat!
          </h1>
        </div>

        {/* Search Bar */}
        <div className="absolute bottom-4 left-4 w-full max-w-xs md:max-w-sm px-2 md:px-4 z-10">
          <div className="bg-white rounded-full flex items-center p-2 shadow-lg">
            <input
              className="flex-grow px-2 py-1 rounded-full focus:outline-none text-sm"
              placeholder="Nearby Location"
              type="text"
            />
            <button className="bg-gray-200 p-2 rounded-full">
              <i className="fas fa-search text-gray-600 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
