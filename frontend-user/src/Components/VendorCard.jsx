import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VendorCard = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bikes") // 🔁 Update with your actual route
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="bg-gray-100 py-10 font-['Poppins']">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Choose Your Ride</h1>
        <p className="text-orange-500 text-lg mt-2">Browse available vendors</p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bikes.map((bike, index) => (
          <motion.div
            key={bike._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col sm:flex-row overflow-hidden"
          >
            <div className="relative w-full sm:w-1/2 bg-gradient-to-t from-white to-gray-100 flex items-center justify-center group">
              <motion.img
                src={bike.img}
                alt={bike.name}
                className="z-10 h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <motion.img
                src={bike.img}
                alt="mirror"
                className="absolute top-full left-1/2 transform -translate-x-1/2 scale-y-[-1] opacity-25 blur-sm h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow group">
              <div>
                <h2 className="text-2xl font-semibold mb-1">{bike.name}</h2>
                <p className="text-orange-500 text-sm mb-2">{bike.vendorName || "From Vendor"}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>₹ {bike.price}</strong> / Day</p>
                  <p>{bike.kmLimit || "250 km limit"}</p>
                  <p>{bike.extraCharge || "Extra ₹ 5/km"}</p>
                  <p>{bike.fuel || "Fuel Excluded"}</p>
                  <p>Deposit: ₹ {bike.deposit || "2000"}</p>
                </div>
              </div>
              <motion.button
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg self-start transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">
          See More Bikes
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
