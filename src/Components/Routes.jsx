import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/VendorLogin";
import VendorDashboard from "../Components/VendorDashboard";
import ManageBikes from "../Components/ManageBikes";
import Bookings from "../Components/Bookings";
import Maintenance from "../Components/Maintenance";
import Dashboard from "../Components/Dashboard";
import VendorSettings from "../Components/VendorSettings";

const RoutesComponent = () => {
  return (
    <Routes>
      
      <Route path="/" element={<VendorDashboard />}>
        <Route path="manage-bikes" element={<ManageBikes />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="settings" element={<VendorSettings />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
