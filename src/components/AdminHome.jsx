import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { FaUsers, FaStore, FaChartLine, FaMoneyBillWave } from 'react-icons/fa';
import '../index.css'; // Import the CSS file

// Reusable Summary Card
const Card = ({ title, value, onClick, borderColor = 'border-orange-500' }) => (
  <div
    onClick={onClick}
    className={`bg-gray-800 p-6 rounded-lg shadow border-l-4 ${borderColor} cursor-pointer hover:bg-gray-700 transition duration-300`}
  >
    <h4 className="text-lg font-semibold text-gray-200 font-poppins">{title}</h4>
    <p className="text-2xl mt-2 text-orange-400 font-poppins">{value}</p>
  </div>
);

// Status badge for bookings
const StatusBadge = ({ status }) => {
  const colors = {
    Completed: 'bg-green-600',
    Ongoing: 'bg-blue-600',
    Cancelled: 'bg-red-600',
  };
  return (
    <span
      className={`px-2 py-1 text-white text-xs rounded ${
        colors[status] || 'bg-gray-500'
      } font-poppins`}
    >
      {status}
    </span>
  );
};

const AdminHome = () => {
  const navigate = useNavigate();

  // Sample data
  const vendors = [
    { id: 1, name: 'Vendor A', status: 'Approved' },
    { id: 2, name: 'Vendor B', status: 'Blocked' },
    { id: 3, name: 'Vendor C', status: 'Approved' },
  ];

  const bookings = [
    { user: 'John Doe', bike: 'Honda Activa', date: '2024-04-20', status: 'Completed' },
    { user: 'Jane Smith', bike: 'Yamaha FZ', date: '2024-04-18', status: 'Ongoing' },
    { user: 'Alice Johnson', bike: 'Suzuki Access', date: '2024-04-17', status: 'Cancelled' },
    { user: 'Bob Brown', bike: 'Royal Enfield', date: '2024-04-16', status: 'Completed' },
  ];

  // Dashboard stats
  const total = vendors.length;
  const approved = vendors.filter((v) => v.status === 'Approved').length;
  const blocked = vendors.filter((v) => v.status === 'Blocked').length;
  const activeBikes = 25;
  const activeRentals = 12;
  const earningsThisMonth = '₹52,400';

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-poppins">
      <h1 className="text-3xl font-bold text-orange-500 mb-6 font-poppins">
        Welcome to the Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card
          title="Total Vendors"
          value={total}
          onClick={() => navigate('/admin/manage-vendors')}
        />
        <Card
          title="Approved Vendors"
          value={approved}
          borderColor="border-green-500"
          onClick={() => navigate('/admin/manage-vendors')}
        />
        <Card
          title="Blocked Vendors"
          value={blocked}
          borderColor="border-red-500"
          onClick={() => navigate('/admin/manage-vendors')}
        />
        <Card
          title="Active Bikes"
          value={activeBikes}
          borderColor="border-yellow-500"
          onClick={() => navigate('/admin/manage-bikes')}
        />
        <Card
          title="Active Rentals"
          value={activeRentals}
          borderColor="border-indigo-500"
          onClick={() => navigate('/admin/bookings')}
        />
        <Card
          title="Earnings This Month"
          value={earningsThisMonth}
          borderColor="border-purple-500"
          onClick={() => navigate('/admin/reports')}
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div
          onClick={() => navigate('/admin/manage-vendors')}
          className="bg-gray-800 p-6 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition duration-300 font-poppins"
        >
          <h3 className="text-xl font-semibold text-white mb-2 font-poppins">Manage Vendors</h3>
          <p className="text-gray-400 font-poppins">Add, approve, block, or remove vendors.</p>
        </div>
        <div
          onClick={() => navigate('/admin/vendors')}
          className="bg-gray-800 p-6 rounded-lg shadow cursor-pointer hover:bg-gray-700 transition duration-300 font-poppins"
        >
          <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
            Vendor Dashboard
          </h3>
          <p className="text-gray-400 font-poppins">View and filter vendor listings.</p>
        </div>
      </div>

      {/* Bookings and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bookings Table */}
        <div className="bg-gray-800 p-6 rounded-lg shadow font-poppins">
          <h2 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
            Recent Bookings
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-700 text-gray-300 font-poppins">
                  <th className="py-2 px-4 font-poppins">User</th>
                  <th className="py-2 px-4 font-poppins">Bike</th>
                  <th className="py-2 px-4 font-poppins">Date</th>
                  <th className="py-2 px-4 font-poppins">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b, i) => (
                  <tr key={i} className="border-b border-gray-700 text-gray-200 font-poppins">
                    <td className="py-2 px-4 font-poppins">{b.user}</td>
                    <td className="py-2 px-4 font-poppins">{b.bike}</td>
                    <td className="py-2 px-4 font-poppins">
                      {format(new Date(b.date), 'dd MMM yyyy')}
                    </td>
                    <td className="py-2 px-4 font-poppins">
                      <StatusBadge status={b.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-800 p-6 rounded-lg shadow font-poppins">
          <h2 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
            Active Rental Maps
          </h2>
          <div className="w-full h-64 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-400 font-poppins">[Map Placeholder]</span>
          </div>
        </div>
      </div>

      {/* Pending Items */}
      <div className="bg-gray-800 p-6 rounded-lg shadow mt-8 font-poppins">
        <h2 className="text-xl font-semibold text-orange-500 mb-4 font-poppins">
          Pending Approvals
        </h2>
        <ul className="list-disc list-inside text-gray-400 font-poppins">
          <li className='font-poppins'>New vendor registration</li>
          <li className='font-poppins'>New bike listing</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHome;