import React, { useState } from 'react';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment method selected: ${selectedPayment}`);
  };

  return (
    <div className="bg-gray-300 flex justify-center items-start min-h-screen pt-10 font-[Poppins]">
      <div className="bg-gray-200 rounded-lg p-6 w-full max-w-md">
        <h1 className="font-bold text-lg mb-4">Payment</h1>
        <form onSubmit={handleSubmit} className="bg-gray-300 rounded-lg p-4 space-y-4">
          {/* Online Mode */}
          <div>
            <p className="font-semibold mb-2">Online Mode</p>

            {[
              {
                id: 'gpay',
                name: 'Google Pay',
                icon: 'https://storage.googleapis.com/a1aa/image/fe00c62f-a234-4dc8-3752-c8df5e5f32a6.jpg',
                label: 'Pay',
                description: 'Confirm Your Payment on Google pay'
              },
              {
                id: 'phonepe',
                name: 'Phone Pe',
                icon: 'https://storage.googleapis.com/a1aa/image/ba4e55ab-89ba-4536-78af-c7f6435a9755.jpg',
                label: 'Phone Pe',
                description: 'Confirm Your Payment on Phone Pe'
              },
              {
                id: 'paytm',
                name: 'Paytm',
                icon: '',
                label: 'PAYTM',
                description: 'Confirm Your Payment on Paytm'
              }
            ].map(({ id, icon, label, description }) => (
              <div key={id} className="flex items-start border-b border-gray-400 pb-2 mb-2">
                <label className="flex items-start space-x-2 w-full">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1"
                    value={id}
                    onChange={() => setSelectedPayment(id)}
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center space-x-1">
                      {icon && <img src={icon} alt={label} width="16" height="16" className="inline-block" />}
                      <span className="font-semibold">{label}</span>
                    </div>
                    <p className="text-xs">{description}</p>
                  </div>
                </label>
                <span className="text-sm ml-auto">Price : ₹ 800</span>
              </div>
            ))}
          </div>

          {/* Net Banking */}
          <div>
            <p className="mb-2">Net Banking</p>
            <div className="flex items-start border-b border-gray-400 pb-2 mb-2">
              <label className="flex items-start space-x-2 w-full">
                <input
                  type="radio"
                  name="payment"
                  className="mt-1"
                  value="netbanking"
                  onChange={() => setSelectedPayment('netbanking')}
                />
                <div className="flex flex-col w-full">
                  <div className="flex items-center space-x-1 font-bold">
                    <i className="fas fa-university"></i>
                    <span>Net Banking</span>
                  </div>
                  <p className="text-xs">Confirm Your Payment on Net Banking</p>
                </div>
              </label>
              <span className="text-sm ml-auto">Price : ₹ 800</span>
            </div>
          </div>

          {/* Offline Mode */}
          <div>
            <p className="mb-2">Offline Mode</p>
            <div className="flex items-start border-b border-gray-400 pb-2 mb-2">
              <label className="flex items-start space-x-2 w-full">
                <input
                  type="radio"
                  name="payment"
                  className="mt-1"
                  value="cod"
                  onChange={() => setSelectedPayment('cod')}
                />
                <div className="flex flex-col w-full">
                  <div className="flex items-center space-x-1 font-semibold text-black">
                    <img
                      src="https://storage.googleapis.com/a1aa/image/3db355a1-6646-4c60-8190-dceba7d3c70e.jpg"
                      alt="Cash on Delivery"
                      width="16"
                      height="16"
                      className="inline-block"
                    />
                    <span>Cash on Delivery</span>
                  </div>
                  <p className="text-xs">Confirm Your Payment on Cash on delivery</p>
                </div>
              </label>
              <span className="text-sm ml-auto">Price : ₹ 800</span>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-orange-600 text-black px-6 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
