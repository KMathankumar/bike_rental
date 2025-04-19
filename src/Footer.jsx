import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-2xl font-bold text-center md:text-left">
            Rideon Rentals
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="hover:text-orange-400 transition">Home</a>
            <a href="#" className="hover:text-orange-400 transition">About Us</a>
            <a href="#" className="hover:text-orange-400 transition">Contact</a>
            <a href="#" className="hover:text-orange-400 transition">Address</a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Rideon Rentals. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
