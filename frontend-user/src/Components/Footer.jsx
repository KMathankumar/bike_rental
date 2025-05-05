// src/Components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              Ride<span className="text-orange-500">On</span> Rentals
            </div>
            <p className="text-gray-400 max-w-xs">
              Your trusted partner for premium vehicle rentals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Home</a></li>
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Address</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-orange-500">Cancellation Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RideOn Rentals. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500" aria-label="WhatsApp">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
