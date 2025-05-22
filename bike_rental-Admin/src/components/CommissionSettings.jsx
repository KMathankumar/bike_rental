import React, { useState } from 'react';
import { useCommission } from './CommissionContext';

export default function CommissionSettings() {
  const {
    defaultCommission,
    setDefaultCommission,
    categoryCommissions,
    setCategoryCommissions,
    tiers,
    setTiers,
  } = useCommission();

  const [localTiers, setLocalTiers] = useState(tiers);

  const saveSettings = () => {
    setTiers(localTiers);
    alert('Commission settings saved!');
  };

  const addTier = () => {
    setLocalTiers([...localTiers, { min: 0, max: '', rate: 0 }]);
  };

  const deleteTier = (index) => {
    const updatedTiers = localTiers.filter((_, i) => i !== index);
    setLocalTiers(updatedTiers);
  };

  const resetDefaults = () => {
    setDefaultCommission(10);
    setCategoryCommissions({
      standard: 10,
      premium: 15,
      vip: 20,
    });
    const defaultTiers = [
      { min: 0, max: 10000, rate: 12 },
      { min: 10001, max: 50000, rate: 10 },
      { min: 50001, max: Infinity, rate: 8 },
    ];
    setLocalTiers(defaultTiers);
    setTiers(defaultTiers);
    alert('Settings reset to defaults!');
  };

  return (
    <div className="p-4 md:p-6 bg-gray-900 min-h-screen font-poppins overflow-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">Commission Settings</h1>

      {/* Default Commission */}
      <section className="bg-gray-800 p-4 md:p-6 rounded border border-gray-700 mb-6">
        <label className="block text-sm md:text-base text-gray-300 mb-2">Default Commission (%)</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={defaultCommission}
            onChange={(e) => setDefaultCommission(+e.target.value)}
            className="w-24 p-2 border border-gray-700 bg-gray-700 text-white rounded"
          />
          <span className="text-gray-300">%</span>
        </div>
      </section>

      {/* Category Commissions */}
      <section className="bg-gray-800 p-4 md:p-6 rounded border border-gray-700 mb-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-4">Category Commissions</h2>
        <div className="space-y-3">
          {Object.entries(categoryCommissions).map(([cat, rate]) => (
            <div key={cat} className="flex flex-wrap items-center gap-3">
              <span className="w-24 text-gray-400 capitalize">{cat}</span>
              <input
                type="number"
                value={rate}
                onChange={(e) =>
                  setCategoryCommissions({
                    ...categoryCommissions,
                    [cat]: +e.target.value,
                  })
                }
                className="w-20 p-2 border border-gray-700 bg-gray-700 text-white rounded"
              />
              <span className="text-gray-300">%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tiered Commissions */}
      <section className="bg-gray-800 p-4 md:p-6 rounded border border-gray-700 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-300">Tiered Commissions</h2>
          <button
            onClick={addTier}
            className="px-3 py-1 text-sm bg-orange-600 hover:bg-orange-700 text-white rounded"
          >
            + Add New Tier
          </button>
        </div>
        <div className="space-y-4">
          {localTiers.map((tier, i) => (
            <div key={i} className="flex flex-wrap items-center gap-3">
              <input
                type="number"
                value={tier.min}
                onChange={(e) => {
                  const copy = [...localTiers];
                  copy[i].min = +e.target.value;
                  setLocalTiers(copy);
                }}
                className="w-20 p-2 border border-gray-700 bg-gray-700 text-white rounded"
                placeholder="Min"
              />
              <span className="text-gray-400">to</span>
              <input
                type="number"
                value={tier.max === Infinity ? '' : tier.max}
                onChange={(e) => {
                  const copy = [...localTiers];
                  copy[i].max = e.target.value === '' ? Infinity : +e.target.value;
                  setLocalTiers(copy);
                }}
                className="w-20 p-2 border border-gray-700 bg-gray-700 text-white rounded"
                placeholder="∞"
              />
              <span className="text-orange-400">⇒</span>
              <input
                type="number"
                value={tier.rate}
                onChange={(e) => {
                  const copy = [...localTiers];
                  copy[i].rate = +e.target.value;
                  setLocalTiers(copy);
                }}
                className="w-20 p-2 border border-gray-700 bg-gray-700 text-white rounded"
                placeholder="%"
              />
              <span className="text-gray-300">%</span>
              <button
                onClick={() => deleteTier(i)}
                className="ml-2 px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-3">
        <button
          onClick={saveSettings}
          className="w-full md:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-medium"
        >
          Save All
        </button>
        <button
          onClick={resetDefaults}
          className="w-full md:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-medium"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}
