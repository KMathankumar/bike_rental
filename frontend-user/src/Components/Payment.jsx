// File: src/Components/Payment.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePayment = () => {
    if (!selectedMethod) return alert("Please select a payment method.");
    alert(`Proceeding with ${selectedMethod}`);
  };

  const methods = [
    { name: "Google Pay", icon: "fab fa-google-pay", color: "text-red-600" },
    { name: "PhonePe", icon: "fas fa-mobile-alt", color: "text-indigo-600" },
    { name: "Paytm", icon: "fas fa-wallet", color: "text-blue-500" },
    { name: "Net Banking", icon: "fas fa-university", color: "text-green-600" },
    {
      name: "Credit/Debit Card",
      icon: "fas fa-credit-card",
      color: "text-orange-600",
    },
  ];

  const createOrder = async () => {
    const response = await fetch(
      "http://localhost:5000/api/payments/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ method: selectedMethod }),
      }
    );

    const data = await response.json();
    openRazorpay(data.orderId);
  };

  const openRazorpay = (orderId) => {
    const options = {
      key: "rzp_test_1aVErRURGmjREi",
      amount: 1500 * 100,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: orderId,
      handler: async function (response) {
        const verifyRes = await fetch(
          "http://localhost:5000/api/payments/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          }
        );

        const result = await verifyRes.json();
        if (result.success) {
          alert("Payment Successful!");
        } else {
          alert("Payment Failed or Signature Mismatch!");
        }
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
          Select Payment Method
        </h2>

        <div className="space-y-4 mb-8">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMethod(method.name)}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                selectedMethod === method.name
                  ? "border-orange-500 bg-orange-50 ring-2 ring-orange-300"
                  : "border-gray-300 hover:border-orange-400"
              }`}
            >
              <div className="flex items-center gap-3">
                <i className={`${method.icon} text-xl ${method.color}`}></i>
                <span className="text-black font-medium">{method.name}</span>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  selectedMethod === method.name
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-400"
                } flex items-center justify-center`}
              >
                {selectedMethod === method.name && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
          className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Proceed to Pay ₹ 1500
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Payment;
