import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 font-[Poppins]">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="text-2xl font-bold mb-4 md:mb-0">Rideon Rentals</div>

          {/* Nav Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Address</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-blue-600 hover:text-blue-500">
              <i className="fab fa-facebook" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-500">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="text-green-600 hover:text-green-500">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>©{new Date().getFullYear()} Rideon Rentals. All Rights Reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
