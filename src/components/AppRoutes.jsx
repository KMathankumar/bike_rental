import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout'; // Main layout for the dashboard
import AdminHome from './AdminHome'; // Admin Home component
import ManageVendors from './ManageVendors'; // Manage vendors page
import ManageUsers from './ManageUsers'; // Manage users page
import ManageBookings from './ManageBooking'; // Manage bookings page
import CommissionSettings from './CommissionSettings'; // Commission settings page
import VendorPayments from './VendorPayments'; // Vendor payments page
import Reports from './Reports'; // Reports page
import Settings from './Settings'; // Settings page

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main route with DashboardLayout as the base layout */}
      <Route path="/" element={<DashboardLayout />}>
        {/* Admin section routes */}
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/manage-vendors" element={<ManageVendors />} />
        <Route path="admin/manage-users" element={<ManageUsers />} />
        <Route path="admin/bookings" element={<ManageBookings />} />
        <Route path="admin/commissions" element={<CommissionSettings />} />
        <Route path="admin/vendor-payments" element={<VendorPayments />} />
        <Route path="admin/reports" element={<Reports />} />
        <Route path="admin/settings" element={<Settings />} /> {/* Settings page route */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
