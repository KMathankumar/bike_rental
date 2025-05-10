// Place this code in ManageBooking.jsx
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

const mockBookings = [
  { _id: "1", userName: "Mathan Kumar", bikeName: "Honda Dio", date: "2025-05-01", status: "pending" },
  { _id: "2", userName: "Arun", bikeName: "Yamaha R15", date: "2025-04-28", status: "confirmed" },
  { _id: "3", userName: "Devi", bikeName: "TVS Ntorq", date: "2025-05-02", status: "completed" },
];

const transitionMap = {
  vendorAdmin: { pending: ["confirmed"] },
  supportAdmin: {
    pending: ["confirmed", "cancelled"],
    confirmed: ["completed", "cancelled"],
  },
  superAdmin: {
    pending: ["confirmed", "cancelled"],
    confirmed: ["completed", "cancelled"],
    cancelled: [],
    completed: [],
  },
};

const ITEMS_PER_PAGE = 5;

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const userRole = localStorage.getItem("userRole") || "vendorAdmin";

  useEffect(() => {
    setBookings(mockBookings);
    setFilteredBookings(mockBookings);
  }, []);

  useEffect(() => {
    let data = [...bookings];

    if (filter !== "all") {
      data = data.filter((b) => b.status === filter);
    }
    if (search.trim()) {
      data = data.filter((b) => b.userName.toLowerCase().includes(search.toLowerCase()));
    }
    if (dateFilter) {
      data = data.filter((b) => b.date === dateFilter);
    }

    setFilteredBookings(data);
    setCurrentPage(1); // Reset to first page after filter
  }, [filter, search, dateFilter, bookings]);

  const updateStatus = async (bookingId, currentStatus, newStatus) => {
    if (currentStatus === newStatus) return;
    try {
      await axios.put(`/api/booking/${bookingId}/status`, { newStatus }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const updated = bookings.map((booking) =>
        booking._id === bookingId ? { ...booking, status: newStatus } : booking
      );
      setBookings(updated);
      toast.success("Status updated successfully");
    } catch (error) {
      toast.error("Update failed: " + (error?.response?.data?.message || "Server error"));
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredBookings);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bookings");
    XLSX.writeFile(wb, "bookings.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["#", "User", "Bike", "Date", "Status"];
    const tableRows = filteredBookings.map((b, i) => [
      i + 1,
      b.userName,
      b.bikeName,
      new Date(b.date).toLocaleDateString(),
      b.status,
    ]);
    doc.autoTable({ head: [tableColumn], body: tableRows });
    doc.save("bookings.pdf");
  };

  const getAllowedTransitions = (status) => {
    return transitionMap[userRole]?.[status] || [];
  };

  const totalPages = Math.ceil(filteredBookings.length / ITEMS_PER_PAGE);
  const currentData = filteredBookings.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Toaster />
      <h1 className="text-3xl font-bold text-orange-500 mb-6 font-poppins">Bookings</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white px-3 py-1 rounded"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>

          <input
            type="text"
            placeholder="Search by user"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white px-3 py-1 rounded"
          />

          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="bg-gray-800 border border-gray-600 text-white px-3 py-1 rounded"
          />
        </div>

        <div className="flex gap-2">
          <button onClick={exportToExcel} className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
            Export Excel
          </button>
          <button onClick={exportToPDF} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
            Export PDF
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-center">
          <thead className="bg-gray-800 uppercase text-xs text-gray-400">
            <tr>
              <th className="py-3 px-4 border-b border-gray-700">#</th>
              <th className="py-3 px-4 border-b border-gray-700">User</th>
              <th className="py-3 px-4 border-b border-gray-700">Bike</th>
              <th className="py-3 px-4 border-b border-gray-700">Date</th>
              <th className="py-3 px-4 border-b border-gray-700">Status</th>
              <th className="py-3 px-4 border-b border-gray-700">Update</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((booking, index) => {
              const allowed = getAllowedTransitions(booking.status);
              return (
                <tr key={booking._id} className="hover:bg-gray-800 transition">
                  <td className="py-2 px-4 border-b border-gray-700">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{booking.userName}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{booking.bikeName}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{new Date(booking.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b border-gray-700 capitalize">{booking.status}</td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    {allowed.length > 0 ? (
                      <select
                        value={booking.status}
                        onChange={(e) => updateStatus(booking._id, booking.status, e.target.value)}
                        className="bg-gray-800 border border-gray-600 text-white px-2 py-1 rounded"
                      >
                        <option value={booking.status}>{booking.status}</option>
                        {allowed.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <span className="text-gray-400">No permission</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="bg-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-gray-700 px-3 py-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageBooking;
