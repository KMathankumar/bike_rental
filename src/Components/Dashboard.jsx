import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState("week");
  const [loading, setLoading] = useState(true);

  // Sample data
  const stats = {
    totalRevenue: "₹45,231",
    revenueChange: "+20.1%",
    activeBookings: "12",
    bookingsChange: "+19%",
    availableBikes: "24",
    bikesChange: "+2",
    activeCustomers: "573",
    customersChange: "+201",
  };

  const recentBookings = [
    {
      id: "B1001",
      customer: "Rahul Sharma",
      bike: "Royal Enfield Classic 350",
      startDate: "2023-05-10",
      endDate: "2023-05-12",
      status: "Active",
      amount: "₹4,500",
      timeAgo: "2 hours ago",
    },
    {
      id: "B1002",
      customer: "Priya Patel",
      bike: "KTM Duke 200",
      startDate: "2023-05-11",
      endDate: "2023-05-14",
      status: "Upcoming",
      amount: "₹5,400",
      timeAgo: "5 hours ago",
    },
    {
      id: "B1003",
      customer: "Amit Kumar",
      bike: "Yamaha MT-15",
      startDate: "2023-05-09",
      endDate: "2023-05-11",
      status: "Completed",
      amount: "₹3,600",
      timeAgo: "1 day ago",
    },
    {
      id: "B1004",
      customer: "Sneha Reddy",
      bike: "Royal Enfield Himalayan",
      startDate: "2023-05-08",
      endDate: "2023-05-15",
      status: "Active",
      amount: "₹10,500",
      timeAgo: "1 day ago",
    },
  ];

  const maintenanceAlerts = [
    {
      id: "M1001",
      bike: "Royal Enfield Classic 350",
      issue: "Regular service due",
      priority: "Medium",
      dueDate: "2023-05-15",
    },
    {
      id: "M1002",
      bike: "KTM Duke 200",
      issue: "Brake pad replacement",
      priority: "High",
      dueDate: "2023-05-12",
    },
    {
      id: "M1003",
      bike: "Yamaha MT-15",
      issue: "Chain lubrication",
      priority: "Low",
      dueDate: "2023-05-20",
    },
  ];

  const popularBikes = [
    { name: "Royal Enfield Classic 350", bookings: 32 },
    { name: "KTM Duke 200", bookings: 28 },
    { name: "Yamaha MT-15", bookings: 24 },
    { name: "Royal Enfield Himalayan", bookings: 18 },
    { name: "Bajaj Pulsar NS200", bookings: 15 },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Upcoming":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-gray-100 text-gray-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's an overview of your rental business.</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-lg shadow border border-gray-200 p-1">
          <button onClick={() => setTimeframe("day")} className={`px-3 py-1 text-sm rounded-md ${timeframe === "day" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            Day
          </button>
          <button onClick={() => setTimeframe("week")} className={`px-3 py-1 text-sm rounded-md ${timeframe === "week" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            Week
          </button>
          <button onClick={() => setTimeframe("month")} className={`px-3 py-1 text-sm rounded-md ${timeframe === "month" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            Month
          </button>
          <button onClick={() => setTimeframe("year")} className={`px-3 py-1 text-sm rounded-md ${timeframe === "year" ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            Year
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Total Revenue</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="text-2xl font-bold">{stats.totalRevenue}</div>
          <p className="text-xs text-green-600">
            {stats.revenueChange} from last {timeframe}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Active Bookings</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
          </div>
          <div className="text-2xl font-bold">{stats.activeBookings}</div>
          <p className="text-xs text-green-600">
            {stats.bookingsChange} from last {timeframe}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Available Bikes</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
            </svg>
          </div>
          <div className="text-2xl font-bold">{stats.availableBikes}</div>
          <p className="text-xs text-green-600">{stats.bikesChange} new bikes added</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <div className="flex flex-row items-center justify-between pb-2">
            <p className="text-sm font-medium text-gray-500">Active Customers</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-500"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div className="text-2xl font-bold">{stats.activeCustomers}</div>
          <p className="text-xs text-green-600">
            {stats.customersChange} since last {timeframe}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/dashboard/manage-bikes">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-700 mb-2"
              >
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Add New Bike</span>
            </div>
          </Link>
          <Link to="/dashboard/bookings">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-700 mb-2"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span className="text-sm font-medium text-gray-700">View Bookings</span>
            </div>
          </Link>
          <Link to="/dashboard/maintenance">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-700 mb-2"
              >
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Maintenance</span>
            </div>
          </Link>
          <Link to="/dashboard/settings">
            <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-700 mb-2"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Settings</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Bookings</h2>
              <Link to="/dashboard/bookings">
                <span className="text-sm text-gray-600 hover:text-gray-900">View All</span>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bike
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.bike}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyle(booking.status)}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Maintenance Alerts */}
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Maintenance Alerts</h2>
                <Link to="/dashboard/maintenance">
                  <span className="text-sm text-gray-600 hover:text-gray-900">View All</span>
                </Link>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {maintenanceAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-4">
                  <div
                    className={`mt-2 w-2 h-2 rounded-full ${
                      alert.priority === "High"
                        ? "bg-red-500"
                        : alert.priority === "Medium"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                    }`}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{alert.bike}</p>
                    <p className="text-sm text-gray-500">{alert.issue}</p>
                    <div className="flex items-center mt-1">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${getPriorityStyle(alert.priority)}`}>
                        {alert.priority}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">Due: {alert.dueDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Bikes */}
          <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Popular Bikes</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {popularBikes.map((bike, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gray-800 h-2.5 rounded-full"
                        style={{ width: `${(bike.bookings / popularBikes[0].bookings) * 100}%` }}
                      ></div>
                    </div>
                    <div className="min-w-0 flex-1 ml-4">
                      <p className="text-sm font-medium text-gray-900 truncate">{bike.name}</p>
                      <p className="text-xs text-gray-500">{bike.bookings} bookings</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Revenue Overview</h2>
        </div>
        <div className="p-6">
          <div className="h-[300px] w-full bg-gray-50 rounded-md flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="mx-auto text-gray-400 mb-4"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <p className="text-gray-500">Revenue chart will be displayed here</p>
              <p className="text-sm text-gray-400 mt-2">Connect to your data source for real-time analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}