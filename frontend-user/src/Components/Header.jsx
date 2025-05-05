import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-1">
            <span className="text-orange-500 text-2xl sm:text-4xl font-bold">R</span>
            <div className="flex flex-col text-white">
              <span className="text-xs sm:text-sm font-semibold leading-tight">ideOn</span>
              <span className="text-xs sm:text-sm font-semibold -mt-1 leading-tight">rental</span>
            </div>
          </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">About Us</a>
          <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
        </nav>

        {/* User Icon */}
        <div className="hidden md:block">
          <UserCircleIcon className="h-8 w-8" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              className="h-8 w-8 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="h-8 w-8 cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4">
          <a href="#" className="block hover:text-orange-400 transition">Home</a>
          <a href="#" className="block hover:text-orange-400 transition">About Us</a>
          <a href="#" className="block hover:text-orange-400 transition">Contact Us</a>
          <div className="pt-2 border-t border-gray-700">
            <UserCircleIcon className="h-8 w-8" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
