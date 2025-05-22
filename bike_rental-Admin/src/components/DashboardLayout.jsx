import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FiUser } from 'react-icons/fi';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar - Collapsible for mobile */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden ml-16 md:ml-56 transition-all duration-300">
        {/* Mobile Navbar (without Hamburger) */}
        <div className="md:hidden flex items-center justify-between bg-gray-800 px-4 py-3 shadow-md z-10">
          <h1 className="text-lg font-semibold text-orange-500">Admin Dashboard</h1>
          <button className="focus:outline-none">
            <FiUser className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between bg-gray-800 px-6 py-3 shadow-md z-10">
          <h1 className="text-lg font-semibold text-orange-500">Admin Dashboard</h1>
          <button className="focus:outline-none">
            <FiUser className="w-8 h-8 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;