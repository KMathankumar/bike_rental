import React, { createContext, useState, useContext } from 'react';

// Create the context
const CommissionContext = createContext();

// Provider component
export function CommissionProvider({ children }) {
  const [defaultCommission, setDefaultCommission] = useState(10);
  const [categoryCommissions, setCategoryCommissions] = useState({
    standard: 10,
    premium: 15,
    vip: 20,
  });
  const [tiers, setTiers] = useState([
    { min: 0, max: 10000, rate: 12 },
    { min: 10001, max: 50000, rate: 10 },
    { min: 50001, max: Infinity, rate: 8 },
  ]);

  function getCommissionRate(earnings, category) {
    if (categoryCommissions[category] != null) {
      return categoryCommissions[category];
    }
    const tier = tiers.find(t => earnings >= t.min && earnings <= t.max);
    if (tier) return tier.rate;
    return defaultCommission;
  }

  return (
    <CommissionContext.Provider
      value={{
        defaultCommission,
        setDefaultCommission,
        categoryCommissions,
        setCategoryCommissions,
        tiers,
        setTiers,
        getCommissionRate,
      }}
    >
      {children}
    </CommissionContext.Provider>
  );
}

// Settings UI
export default function CommissionSettings() {
  const {
    defaultCommission,
    setDefaultCommission,
    categoryCommissions,
    setCategoryCommissions,
    tiers,
    setTiers,
    getCommissionRate,
  } = useContext(CommissionContext);

  const [localTiers, setLocalTiers] = useState(tiers);

  function saveSettings() {
    setTiers(localTiers);
    alert('Commission settings saved');
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
   <h1 className="text-3xl font-bold text-orange-500 mb-6 font-poppins">Commission Setting      </h1>

      {/* Default Commission */}
      <div className="bg-gray-800 p-6 rounded shadow mb-6 border border-gray-700">
        <label className="block mb-2 text-gray-300">Default Commission</label>
        <div className="flex items-center">
          <input
            type="number"
            value={defaultCommission}
            onChange={(e) => setDefaultCommission(+e.target.value)}
            className="border border-gray-700 p-2 w-24 bg-gray-700 text-white"
          />
          <span className="ml-1 text-gray-300">%</span>
        </div>
      </div>

      {/* Category Commissions */}
      <div className="bg-gray-800 p-6 rounded shadow mb-6 border border-gray-700">
        <h3 className="font-medium mb-2 text-gray-300">Category Commissions</h3>
        {Object.entries(categoryCommissions).map(([cat, rate]) => (
          <div key={cat} className="flex items-center mb-2">
            <span className="w-24 text-gray-400">{cat}</span>
            <input
              type="number"
              value={rate}
              onChange={(e) =>
                setCategoryCommissions({
                  ...categoryCommissions,
                  [cat]: +e.target.value,
                })
              }
              className="border border-gray-700 p-1 w-20 bg-gray-700 text-white"
            />
            <span className="ml-1 text-gray-300">%</span>
          </div>
        ))}
      </div>

      {/* Tiered Commissions */}
      <div className="bg-gray-800 p-6 rounded shadow mb-6 border border-gray-700">
        <h3 className="font-medium mb-2 text-gray-300">Tiered Commissions</h3>
        {localTiers.map((t, i) => (
          <div key={i} className="flex items-center mb-2 space-x-2">
            <input
              type="number"
              value={t.min}
              onChange={(e) => {
                const copy = [...localTiers];
                copy[i].min = +e.target.value;
                setLocalTiers(copy);
              }}
              className="border border-gray-700 p-1 w-20 bg-gray-700 text-white"
            />
            <span className="text-gray-400">to</span>
            <input
              type="number"
              value={t.max === Infinity ? '' : t.max}
              onChange={(e) => {
                const copy = [...localTiers];
                copy[i].max =
                  e.target.value === '' ? Infinity : +e.target.value;
                setLocalTiers(copy);
              }}
              placeholder="∞"
              className="border border-gray-700 p-1 w-20 bg-gray-700 text-white"
            />
            <span className="text-orange-400">{'=>'}</span>
            <input
              type="number"
              value={t.rate}
              onChange={(e) => {
                const copy = [...localTiers];
                copy[i].rate = +e.target.value;
                setLocalTiers(copy);
              }}
              className="border border-gray-700 p-1 w-16 bg-gray-700 text-white"
            />
            <span className="ml-1 text-gray-300">%</span>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
      >
        Save All
      </button>
    </div>
  );
}
