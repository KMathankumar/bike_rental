// File: src/components/ManageUsers.jsx

import React, { useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Papa from "papaparse";

const safetyOrange = "#FF6700";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "1234567890", status: "Active", profilePicture: "" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "9876543210", status: "Blocked", profilePicture: "" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "", status: "Active", profilePicture: "" });
  const [previewImage, setPreviewImage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setNewUser((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.phone) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setShowModal(false);
      setNewUser({ name: "", email: "", phone: "", status: "Active", profilePicture: "" });
      setPreviewImage("");
    }
  };

  const handleEditUser = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? selectedUser : u));
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleExportCSV = () => {
    const csvData = users.map(({ id, name, email, phone, status }) => ({ id, name, email, phone, status }));
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [["ID", "Name", "Email", "Phone", "Status"]],
      body: users.map((user) => [user.id, user.name, user.email, user.phone, user.status]),
    });
    doc.save("users.pdf");
  };

  const toggleStatus = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" } : u));
  };

  const getFilteredSortedUsers = () => {
    let filtered = [...users];
    if (searchQuery) {
      filtered = filtered.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    if (filterStatus) filtered = filtered.filter(u => u.status === filterStatus);
    if (sortField) {
      filtered.sort((a, b) => {
        const aVal = a[sortField]?.toString().toLowerCase();
        const bVal = b[sortField]?.toString().toLowerCase();
        return sortDirection === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
    }
    return filtered;
  };

  const totalPages = Math.ceil(getFilteredSortedUsers().length / usersPerPage);
  const currentUsers = getFilteredSortedUsers().slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6" style={{ color: safetyOrange }}>Manage Users</h1>

        {/* Top Controls */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-4 gap-3">
          <div className="flex flex-1 gap-2">
            <input type="text" placeholder="Search by name/email..." value={searchQuery} onChange={handleSearch} className="flex-grow p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="p-2 rounded bg-gray-800 text-white">
              <option value="">All</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setShowModal(true)} className="bg-blue-600 px-4 py-2 rounded">Add User</button>
            <button onClick={handleExportCSV} className="bg-green-600 px-4 py-2 rounded">Export CSV</button>
            <button onClick={handleExportPDF} className="bg-orange-600 px-4 py-2 rounded">Export PDF</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full table-auto bg-gray-800 text-left text-sm">
            <thead>
              <tr className="text-gray-300">
                {["ID", "Name", "Email", "Phone", "Status"].map((heading, idx) => (
                  <th key={idx} onClick={() => handleSort(heading.toLowerCase())} className="py-3 px-4 cursor-pointer hover:text-white">
                    <div className="flex items-center gap-1">{heading} <FaSort className="text-xs" /></div>
                  </th>
                ))}
                <th className="py-3 px-4">Profile</th>
                <th className="py-3 px-4">Toggle</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700">
                  <td className="py-2 px-4">{user.id}</td>
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.phone}</td>
                  <td className="py-2 px-4">{user.status}</td>
                  <td className="py-2 px-4">{user.profilePicture ? <img src={user.profilePicture} alt="avatar" className="w-8 h-8 rounded-full" /> : "N/A"}</td>
                  <td className="py-2 px-4">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={user.status === "Active"} onChange={() => toggleStatus(user.id)} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 relative after:content-[''] after:absolute after:left-1 after:top-1 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:left-6" />
</label>
</td>
<td className="py-2 px-4">
<button onClick={() => { setSelectedUser(user); setShowViewModal(true); }} className="bg-blue-500 px-3 py-1 rounded">View</button>
<button onClick={() => { setSelectedUser(user); setShowEditModal(true); }} className="bg-yellow-500 px-3 py-1 rounded">Edit</button>
<button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 px-3 py-1 rounded">Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>


    {/* Pagination */}
    <div className="flex justify-center mt-4">
      <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} className="bg-gray-600 px-4 py-2 rounded">Prev</button>
      <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
      <button onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))} className="bg-gray-600 px-4 py-2 rounded">Next</button>
    </div>
  </div>
</div>
);
};

export default ManageUsers;
