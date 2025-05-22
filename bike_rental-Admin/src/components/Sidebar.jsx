import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiClipboard,
  FiDollarSign,
  FiCreditCard,
  FiBarChart2,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

const links = [
  { to: '/admin', label: 'Dashboard', icon: FiHome },
  { to: '/admin/manage-vendors', label: 'Manage Vendors', icon: FiUsers },
  { to: '/admin/manage-users', label: 'Manage Users', icon: FiUserCheck },
  { to: '/admin/bookings', label: 'Bookings', icon: FiClipboard },
  { to: '/admin/commissions', label: 'Commission Setting', icon: FiDollarSign },
  { to: '/admin/vendor-payments', label: 'Vendor Payments', icon: FiCreditCard },
  { to: '/admin/reports', label: 'Reports', icon: FiBarChart2 },
  { to: '/admin/settings', label: 'Settings', icon: FiSettings }
];

const SidebarLink = ({ to, label, Icon, isCollapsed }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `relative group flex items-center px-4 py-3 w-full rounded-lg transition-all duration-300
       ${isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`
    }
  >
    <Icon className="w-5 h-5" />

    {/* Show label only if not collapsed */}
    {!isCollapsed && <span className="ml-3 text-sm font-medium whitespace-nowrap">{label}</span>}

    {/* Tooltip shown when collapsed */}
    {isCollapsed && (
      <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-50 whitespace-nowrap">
        {label}
        {/* Tooltip Arrow */}
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-1 border-y-4 border-y-transparent border-r-4 border-r-gray-800"></span>
      </span>
    )}
  </NavLink>
);

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-50 bg-[#111827] flex flex-col py-4 shadow-lg transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-56'
      }`}
    >
      <nav className="flex-1 space-y-1 w-full px-1">
        {links.map(({ to, label, icon }) => (
          <SidebarLink
            key={to}
            to={to}
            label={label}
            Icon={icon}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="mt-auto flex justify-center p-3 text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-200"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? (
          <FiChevronRight className="w-5 h-5" />
        ) : (
          <FiChevronLeft className="w-5 h-5" />
        )}
      </button>
    </aside>
  );
};

export default Sidebar;