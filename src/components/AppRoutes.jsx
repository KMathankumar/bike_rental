// src/components/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import AdminHome from './AdminHome';
import ManageVendors from './ManageVendors';
import ManageUsers from './ManageUsers';
import ManageBookings from './ManageBooking';
import CommissionSettings from './CommissionSettings';
import VendorPayments from './VendorPayments';
import Reports from './Reports';
import Settings from './Settings';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/manage-vendors" element={<ManageVendors />} />
        <Route path="admin/manage-users" element={<ManageUsers />} />
        <Route path="admin/bookings" element={<ManageBookings />} />
        <Route path="admin/commissions" element={<CommissionSettings />} />
        <Route path="admin/vendor-payments" element={<VendorPayments />} />
        <Route path="admin/reports" element={<Reports />} />
        <Route path="admin/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
