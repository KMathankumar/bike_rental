import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="fixed h-full w-64 bg-gray-900 text-white shadow-lg z-10">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 bg-gray-100 min-h-screen p-6 overflow-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="material-icons">notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <img
              src="https://i.pravatar.cc/40"
              alt="Admin"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Outlet renders child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
