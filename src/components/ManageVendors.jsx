import React, { useState } from 'react';
import { FaPlus, FaEye, FaTrash, FaCheck, FaBan, FaFilePdf, FaFileExcel } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ManageVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [newVendor, setNewVendor] = useState({
    name: '',
    email: '',
    phone: '',
    image: '',
    status: 'Pending',
    bikes: '',
    location: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    setNewVendor({ ...newVendor, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setNewVendor({ ...newVendor, image: imageUrl });
    }
  };

  const handleAddVendor = (e) => {
    e.preventDefault();
    if (!newVendor.name || !newVendor.email || !newVendor.phone || !newVendor.bikes || !newVendor.location) {
      toast.error('Please fill all required fields.');
      return;
    }
    setVendors([...vendors, newVendor]);
    toast.success('Vendor added successfully!');
    setNewVendor({
      name: '',
      email: '',
      phone: '',
      image: '',
      status: 'Pending',
      bikes: '',
      location: ''
    });
    setPreviewImage(null);
  };

  const handleApprove = (index) => {
    const updated = [...vendors];
    updated[index].status = 'Approved';
    setVendors(updated);
    toast.success('Vendor approved');
  };

  const handleBlock = (index) => {
    const updated = [...vendors];
    updated[index].status = 'Blocked';
    setVendors(updated);
    toast.warning('Vendor blocked');
  };

  const handleDelete = (index) => {
    const updated = vendors.filter((_, i) => i !== index);
    setVendors(updated);
    toast.info('Vendor removed');
  };

  const filteredVendors = vendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vendor.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportAsPDF = () => {
    // Placeholder: Implement PDF export (e.g., using jsPDF)
    toast.info('PDF export feature coming soon!');
  };

  const exportAsExcel = () => {
    // Placeholder: Implement Excel export (e.g., using SheetJS)
    toast.info('Excel export feature coming soon!');
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-orange-500 mb-6 font-poppins">
        Manage Vendor
      </h1>

      {/* Add Vendor Form */}
      <form onSubmit={handleAddVendor} className="border border-gray-700 p-4 rounded shadow mb-6 bg-gray-800">
        <h3 className="text-xl font-semibold mb-2 flex items-center text-gray-300">
          <FaPlus className="mr-2 text-orange-500" /> Add New Vendor
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Vendor Name"
            className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
            value={newVendor.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
            value={newVendor.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
            value={newVendor.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="bikes"
            placeholder="Number of Bikes"
            className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
            value={newVendor.bikes}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
            value={newVendor.location}
            onChange={handleInputChange}
            required
          />
          <div className="flex flex-col">
            <input
              type="file"
              accept="image/*"
              className="border border-gray-700 p-2 rounded bg-gray-700 text-white"
              onChange={handleImageUpload}
            />
            {previewImage && (
              <img src={previewImage} alt="Preview" className="w-24 h-24 object-cover rounded mt-2 border border-gray-700" />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
        >
          Add Vendor
        </button>
      </form>

      {/* Search, Status Dropdown, Export Buttons */}
      <div className="flex flex-wrap items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search vendors..."
          className="border border-gray-700 p-2 rounded w-full sm:w-1/3 bg-gray-800 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex space-x-2 w-full sm:w-auto">
          <button
            onClick={exportAsPDF}
            className="flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
          >
            <FaFilePdf className="mr-2" /> PDF
          </button>
          <button
            onClick={exportAsExcel}
            className="flex items-center px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
          >
            <FaFileExcel className="mr-2" /> Excel
          </button>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="overflow-x-auto bg-gray-800 shadow rounded">
        <table className="min-w-full text-left text-gray-300">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Bikes</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-4 py-2">
                  <img
                    src={vendor.image}
                    alt="Vendor"
                    className="w-12 h-12 object-cover rounded-full border border-gray-700"
                  />
                </td>
                <td className="px-4 py-2">{vendor.name}</td>
                <td className="px-4 py-2">{vendor.email}</td>
                <td className="px-4 py-2">{vendor.phone}</td>
                <td className="px-4 py-2">{vendor.location}</td>
                <td className="px-4 py-2">{vendor.bikes}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      vendor.status === 'Approved'
                        ? 'bg-green-500'
                        : vendor.status === 'Blocked'
                        ? 'bg-red-500'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {vendor.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => setSelectedVendor(vendor)}
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApprove(index)}
                    className="text-green-500 hover:text-green-400"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleBlock(index)}
                    className="text-yellow-500 hover:text-yellow-400"
                  >
                    <FaBan />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {filteredVendors.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No vendors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Vendor Modal */}
      {selectedVendor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white p-6 rounded shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">{selectedVendor.name}</h2>
        <img src={selectedVendor.image} alt="Vendor" className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
        <p><strong>Email:</strong> {selectedVendor.email}</p>
        <p><strong>Phone:</strong> {selectedVendor.phone}</p>
        <p><strong>Location:</strong> {selectedVendor.location}</p>
        <p><strong>Bikes:</strong> {selectedVendor.bikes}</p>
        <p><strong>Status:</strong> {selectedVendor.status}</p>
        <div className="mt-4">
        <button
        onClick={() => setSelectedVendor(null)}
        className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600"
        >
        Close
        </button>
        </div>
        </div>
        </div>
        )}
        </div>
        );
        };
        
        export default ManageVendors;
        
        
