import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage the sidebar state for mobile

  // Function to open and close the sidebar
  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Button */}
        

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet /> {/* Render child routes here */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
