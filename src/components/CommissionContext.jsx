// CommissionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CommissionContext = createContext();

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

export function useCommission() {
  return useContext(CommissionContext);
}
