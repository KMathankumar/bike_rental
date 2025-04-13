import React, { useState, useEffect, useRef } from "react";

const Homepage = () => {
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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="relative bg-gray-100 font-[Poppins]">
      {/* Background Image */}
      <img
        alt="A motorcycle in a dark, industrial setting"
        className="w-full object-cover h-60 sm:h-96 md:h-screen"
        src="https://storage.googleapis.com/a1aa/image/U8eMbXpru7AtbOdawS5bw9OqTQRvlJvO7O3SFgyJXuk.jpg"
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6 z-20">
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






        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 md:space-x-6 text-white text-sm md:text-lg">
          <li><a className="hover:underline" href="#">Home</a></li>
          <li><a className="hover:underline" href="#">About Us</a></li>
          <li><a className="hover:underline" href="#">Contact</a></li>
          <li>
            <a href="#">
              <img
                alt="User profile"
                className="rounded-full w-10 h-10 object-cover"
                src="https://storage.googleapis.com/a1aa/image/Wwp4TxJumnHSJAUFDYsjHuPJJEIIgjX12OhJCSpOfiQ.jpg"
              />
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
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
          className="absolute top-16 left-0 w-full bg-gray-900 text-white p-4 md:hidden z-20"
        >
          <ul className="flex flex-col space-y-3 text-base">
            <li><a className="hover:underline" href="#">Home</a></li>
            <li><a className="hover:underline" href="#">About Us</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Tagline */}
      <div
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-opacity duration-300 z-10 ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-orange-500 font-bold leading-tight">
          Ride Your Way,<br /> Anytime, Anywhere!
        </h1>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-4 left-4 w-full max-w-xs md:max-w-sm px-2 md:px-4 z-10">
        <div className="bg-white rounded-full flex items-center p-2 shadow-lg">
          <input
            className="flex-grow px-2 py-1 rounded-full focus:outline-none"
            placeholder="Nearby Location"
            type="text"
          />
          <button className="bg-gray-200 p-2 rounded-full">
            <i className="fas fa-search text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
