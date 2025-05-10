import React, { useState } from "react";

const Preference = () => {
  const [selected, setSelected] = useState({
    gearType: [],
    bikeType: [],
    price: [],
    nearby: [],
  });

  const data = {
    gearType: ["Gear", "GearLess"],
    bikeType: ["Adventure", "Commuter", "Cruiser", "Naked", "Sports", "Touring"],
    price: ["Under 500", "500–1000", "Above 1000"],
    nearby: ["Around 3 km", "Around 5 km", "Around 10 km"],
  };

  const handleSelect = (category, label) => {
    const isSelected = selected[category]?.includes(label);

    setSelected((prev) => ({
      ...prev,
      [category]: isSelected
        ? prev[category].filter((item) => item !== label)
        : [...prev[category], label],
    }));
  };

  const handleClear = () => {
    setSelected({
      gearType: [],
      bikeType: [],
      price: [],
      nearby: [],
    });
  };

  const isSelectionEmpty = Object.values(selected).every((arr) => arr.length === 0);

  const renderCategory = (title, options, categoryKey, forceGrid3 = false) => (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">
        {title}
        {selected[categoryKey].length > 0 && (
          <span className="text-sm text-orange-500 ml-2">
            ({selected[categoryKey].length} selected)
          </span>
        )}
      </h2>
      <div
        className={`${
          forceGrid3
            ? "grid grid-cols-3 gap-3 w-full"
            : "flex flex-wrap gap-3"
        }`}
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(categoryKey, option)}
            className={`border border-orange-500 py-2 px-6 rounded-full transition duration-300 hover:bg-orange-100 focus:outline-none ${
              selected[categoryKey]?.includes(option)
                ? "bg-orange-500 text-white"
                : "text-black"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-md mx-auto mt-10 font-[Poppins]">
      <h1 className="text-2xl font-bold text-center mb-1">Preference</h1>
      <p className="text-center text-orange-500 mb-6">Sort & Select</p>

      {renderCategory("Gear Type", data.gearType, "gearType")}
      {renderCategory("Bike Type", data.bikeType, "bikeType", true)}
      {renderCategory("Price", data.price, "price")}
      {renderCategory("Nearby", data.nearby, "nearby")}

      <div className="flex justify-center gap-4 mt-10">
        <button
          className={`py-2 px-10 rounded-full transition text-white ${
            isSelectionEmpty
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
          disabled={isSelectionEmpty}
        >
          Find
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-300 text-black py-2 px-10 rounded-full hover:bg-gray-400 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Preference;
