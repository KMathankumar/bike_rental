import React, { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import DatePicker from "react-datepicker";

const VehicleRentalPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropoffDate, setDropoffDate] = useState(new Date());

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-100 font-roboto">
      <main className="container mx-auto p-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Section */}
            <div className="p-6 md:w-2/3">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-48 flex-shrink-0">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/b60daeba-5d43-4f4f-556b-63554d99ff51.jpg"
                    alt="Honda Dio"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl font-bold">Honda Dio</h1>
                  <div className="space-y-2 mt-2">
                    <p>
                      Rent Amount: <span className="font-semibold">₹800</span>
                    </p>
                    <p>
                      Refundable Deposit:{" "}
                      <span className="font-semibold">₹2000</span>
                    </p>

                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Pickup location: ABC Rental, Theni</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-4">
                      <button
                        onClick={decreaseQty}
                        className="border border-gray-300 rounded-l px-3 py-1 bg-gray-100"
                      >
                        -
                      </button>
                      <div className="border-t border-b border-gray-300 px-4 py-1">
                        {quantity}
                      </div>
                      <button
                        onClick={increaseQty}
                        className="border border-gray-300 rounded-r px-3 py-1 bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Pickup Date Picker */}
                  <div className="relative w-full">
                    {/* Label overlays input border */}
                    <label className="absolute -top-1 left-3 bg-white px-1 text-sm text-gray-600 font-medium z-10 flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      <span>Pickup Date & Time</span>
                    </label>

                    {/* DatePicker input */}
                    <DatePicker
                      selected={pickupDate}
                      onChange={(date) => setPickupDate(date)}
                      showTimeSelect
                      dateFormat="Pp"
                      placeholderText="Select pickup date & time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none mt-2"
                    />
                  </div>

                  {/* Dropoff Date Picker */}
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold mb-2 text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-2" /> Dropoff Date & Time
                    </label>
                    <DatePicker
                      selected={dropoffDate}
                      onChange={(date) => setDropoffDate(date)}
                      showTimeSelect
                      dateFormat="Pp"
                      placeholderText="Select dropoff date & time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50">
                  View Details
                </button>
                <button className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50">
                  Terms
                </button>
                <button className="border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50">
                  View location on map
                </button>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded mt-4">
                Buy
              </button>
            </div>

            {/* Order Summary (Same as before) */}
            <div className="bg-gray-50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between font-semibold border-b border-gray-300 pb-2">
                  <span>Subtotal</span>
                  <span>₹800</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle Rental Cost</span>
                  <span>₹680</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Booking Amount</span>
                  <span>₹680</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST (14%)</span>
                  <span>₹56</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (14%)</span>
                  <span>₹56</span>
                </div>
                <div className="flex justify-between font-semibold border-t border-gray-300 pt-2">
                  <span>Payable Amount</span>
                  <span>₹800</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4">
                Cancellation policy
              </button>

              <div className="mt-4 space-y-3 text-sm">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>
                    Confirm that you are above 18 and agree to all
                    <a href="#" className="text-blue-600 underline ml-1">
                      Terms & Conditions
                    </a>
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>
                    Submit original Driving License at pickup; it will be
                    returned at drop-off.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VehicleRentalPage;
