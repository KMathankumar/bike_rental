import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Settings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [adminRole, setAdminRole] = useState('superadmin');
  const [formData, setFormData] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    password: '',
  });
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme !== 'light';
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setProfileImage(previewURL);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Settings updated successfully!');
      console.log('Updated data:', formData);
      console.log('Selected Role:', adminRole);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white font-poppins transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Settings</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 rounded-full flex items-center px-1 transition-all ${
              darkMode ? 'bg-safetyOrange' : 'bg-gray-400'
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Profile Picture</h2>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-safetyOrange">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-400 text-sm">
                No Image
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-sm text-white"
          />
        </div>
      </div>

      {/* Account Info */}
      <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Account Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">New Password</label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Leave blank to keep current"
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>

      {/* Admin Role */}
      <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">Admin Role</h2>
        <select
          value={adminRole}
          onChange={(e) => setAdminRole(e.target.value)}
          className="bg-gray-700 text-white px-4 py-2 rounded w-full"
        >
          <option value="superadmin">Super Admin</option>
          <option value="vendoradmin">Vendor Admin</option>
          <option value="supportadmin">Support Admin</option>
        </select>
        <p className="text-sm text-gray-400 mt-2">
          Role determines access permissions on the admin panel.
        </p>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSaveChanges}
          className={`bg-safetyOrange hover:bg-orange-600 text-white px-6 py-2 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
