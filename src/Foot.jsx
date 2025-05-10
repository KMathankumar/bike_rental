import React from "react";

const Foot = () => {
  return (
    <footer className="bg-black text-white font-[Poppins] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
        {/* Brand */}
        <div className="text-xl font-bold text-center lg:text-left">
          Rideon Rentals
        </div>

        {/* Nav Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
          <a href="#" className="hover:text-orange-400 transition">Contact</a>
          <a href="#" className="hover:text-orange-400 transition">Address</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-green-500 hover:text-green-400">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-700" />

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2 px-2">
        <div>©2025, All Rights Reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
