// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome, FiUsers, FiUserCheck, FiClipboard,
  FiDollarSign, FiCreditCard, FiBarChart2, FiSettings, FiX
} from 'react-icons/fi';

const SidebarLink = ({ to, label, icon: Icon }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `flex items-center px-4 py-3 rounded-lg transition-colors duration-200
       ${isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`
    }
  >
    <Icon className="mr-3 w-5 h-5" />
    <span className="text-sm font-medium">{label}</span>
  </NavLink>
);

const Sidebar = ({ isOpen, onClose }) => (
  <>
    {/* Mobile Overlay */}
    {isOpen && (
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      />
    )}

    {/* Sidebar Panel */}
    <aside
      className={`fixed md:static top-0 left-0 z-50 h-full w-64 bg-black text-white p-4
                  transform transition-transform duration-300 ease-in-out
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      {/* Mobile Header */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-xl font-bold text-orange-500">Admin Panel</h2>
        <button onClick={onClose}>
          <FiX className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Desktop Title */}
      <h2 className="hidden md:block text-xl font-bold mb-6 text-orange-500">Admin Panel</h2>

      {/* Navigation Links */}
      <nav className="space-y-2">
        <SidebarLink to="/admin" label="Dashboard" icon={FiHome} />
        <SidebarLink to="/admin/manage-vendors" label="Manage Vendors" icon={FiUsers} />
        <SidebarLink to="/admin/manage-users" label="Manage Users" icon={FiUserCheck} />
        <SidebarLink to="/admin/bookings" label="Bookings" icon={FiClipboard} />
        <SidebarLink to="/admin/commissions" label="Commission Setting" icon={FiDollarSign} />
        <SidebarLink to="/admin/vendor-payments" label="Vendor Payments" icon={FiCreditCard} />
        <SidebarLink to="/admin/reports" label="Reports" icon={FiBarChart2} />
        <SidebarLink to="/admin/settings" label="Settings" icon={FiSettings} />
      </nav>
    </aside>
  </>
);

export default Sidebar;
