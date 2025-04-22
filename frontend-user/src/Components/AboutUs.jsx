import React, { useState, useEffect } from "react";
import AboutBg from "../assets/Bikebg6.jpg";

const AboutPage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full h-[500px] font-[Poppins] overflow-hidden relative">
      {/* Background Image Section */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${AboutBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-12 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 hover:text-orange-400 hover:scale-105 transition-transform duration-500">
            AboutUs!
          </h1>
          <h2 className="text-orange-400 text-lg sm:text-2xl mb-4 font-semibold hover:text-orange-500 hover:scale-105 transition-transform duration-500">
            Our Story
          </h2>
          <p className="text-sm sm:text-lg leading-relaxed hover:text-orange-400 transition-all duration-300">
            At{" "}
            <span className="italic font-semibold text-orange-300">
              Rideon Rentals
            </span>
            , we make bike rentals easy, affordable, and hassle-free. Whether it's a city ride or a long trip, our well-maintained bikes ensure a smooth journey. With a quick booking process and flexible rental options, you get the freedom to ride on your terms. Experience convenience, quality, and adventure—all in one ride!
          </p>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        style={{
          position: "absolute",
          left: `${cursorPosition.x - 15}px`,
          top: `${cursorPosition.y - 15}px`,
          width: "30px",
          height: "30px",
          backgroundColor: "rgba(255, 165, 0, 0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "all 0.1s ease-in-out",
          zIndex: 50,
        }}
      ></div>

      {/* Hover Cursor Effect */}
      <style>
        {`
          .cursor-hover-effect:hover {
            transform: scale(1.5);
            background-color: rgba(255, 165, 0, 1);
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default AboutPage;
