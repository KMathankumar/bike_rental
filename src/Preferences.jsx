import React, { useState } from "react";

const Preferences = () => {
  const [selected, setSelected] = useState({
    gearType: [],
    bikeType: [],
    price: [],
    nearby: [],
  });

  const toggleSelection = (category, value) => {
    setSelected((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  const isSelected = (category, value) => selected[category].includes(value);

  const handleClear = () => {
    setSelected({
      gearType: [],
      bikeType: [],
      price: [],
      nearby: [],
    });
  };

  const renderButton = (category, value) => (
    <button
      key={value}
      onClick={() => toggleSelection(category, value)}
      className={`border border-orange-500 py-2 px-4 rounded-full ${
        isSelected(category, value) ? "bg-orange-500 text-white" : "text-black"
      }`}
    >
      {value}
    </button>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center font-[Poppins]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Preference</h1>
        <p className="text-center text-orange-500 mb-6">Sort & Select</p>

        {/* Gear Type */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Gear Type</h2>
          <div className="flex gap-3">
            {["Gear", "GearLess"].map((option) =>
              renderButton("gearType", option)
            )}
          </div>
        </div>

        {/* Bike Type */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Bike Type</h2>
          <div className="grid grid-cols-3 gap-3">
            {["Adventure", "Commuter", "Cruiser", "Naked", "Sports", "Touring"].map(
              (option) => renderButton("bikeType", option)
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Price</h2>
          <div className="grid grid-cols-3 gap-3">
            {["Under 500", "500-1000", "Above 1000"].map((option) =>
              renderButton("price", option)
            )}
          </div>
        </div>

        {/* Nearby */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Nearby</h2>
          <div className="grid grid-cols-3 gap-3">
            {["Around 3 km", "Around 5 km", "Around 10 km"].map((option) =>
              renderButton("nearby", option)
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-orange-600 transition">
            Find
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-300 text-black py-2 px-8 rounded-full hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
