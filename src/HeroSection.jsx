import React from "react";

const HeroSection = () => {
  return (
    <header className="relative font-poppins">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/5TLOhlMFIXOMUOqn7WrIWe7BnvQUq_EbFLSmvEqcuuo.jpg"
        alt="Sporty motorcycle rider speeding on a track"
        className="w-full h-screen object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between">
        {/* Top Navigation */}
        <div className="flex justify-between items-center p-6">
          {/* Logo */}
          <div className="text-white font-bold flex items-center">
            <span className="text-orange-500 text-6xl">R</span>
            <div className="flex flex-col text-lg leading-[1.1] ml-1">
              <span>ideOn</span>
              <span>rental</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-white text-lg">
            <a className="hover:text-gray-300 cursor-pointer">Home</a>
            <a className="hover:text-gray-300 cursor-pointer">About Us</a>
            <a className="hover:text-gray-300 cursor-pointer">Contact</a>
            <a className="hover:text-gray-300 cursor-pointer">
              <i className="fas fa-user-circle text-2xl" />
            </a>
          </nav>
        </div>

        {/* Center Tagline */}
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange-500 font-bold text-center">
            Rent, Ride,<br />Explore, Repeat!
          </h1>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
