import React, { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    username: "Mathankumar",
    email: "mathan@example.com",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [theme, setTheme] = useState("light");

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">⚙️ Settings</h2>

      {/* Profile Settings */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Profile Settings</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={profile.username}
              onChange={handleProfileChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="border p-2 rounded w-full"
            />
          </div>
        </form>
      </div>

      {/* Notification Settings */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="email"
                checked={notifications.email}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Email Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="sms"
                checked={notifications.sms}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              SMS Notifications
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="push"
                checked={notifications.push}
                onChange={handleNotificationChange}
                className="mr-2"
              />
              Push Notifications
            </label>
          </div>
        </div>
      </div>

      {/* Theme Settings */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Theme Settings</h3>
        <div>
          <label className="block text-sm font-medium mb-2">Select Theme</label>
          <div className="flex space-x-4">
            <button
              onClick={() => handleThemeChange({ target: { value: "light" } })}
              className={`px-4 py-2 rounded ${theme === "light" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              Light
            </button>
            <button
              onClick={() => handleThemeChange({ target: { value: "dark" } })}
              className={`px-4 py-2 rounded ${theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
