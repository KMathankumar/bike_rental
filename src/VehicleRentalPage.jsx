import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const VehicleRentalPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-roboto">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">RideOn Rental</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">About Us</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
          </nav>
          <button className="md:hidden text-xl">☰</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Vehicle Details */}
            <div className="p-6 md:w-2/3">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Vehicle Image */}
                <div className="w-full sm:w-48 flex-shrink-0">
                  <img 
                    src="https://storage.googleapis.com/a1aa/image/b60daeba-5d43-4f4f-556b-63554d99ff51.jpg" 
                    alt="Honda Dio" 
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Vehicle Info */}
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">Honda Dio</h1>
                  <div className="space-y-2 mt-2">
                    <p>Rent Amount: <span className="font-semibold">₹800</span></p>
                    <p>Refundable Deposit: <span className="font-semibold">₹2000</span></p>
                    
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Pickup location: ABC Rental, Theni</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center mt-4">
                      <button className="border border-gray-300 rounded-l px-3 py-1 bg-gray-100">-</button>
                      <div className="border-t border-b border-gray-300 px-4 py-1">1</div>
                      <button className="border border-gray-300 rounded-r px-3 py-1 bg-gray-100">+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="mt-6">
                <div className="flex justify-between mb-2 text-sm font-semibold text-gray-700">
                  <span>Pickup Date & Time</span>
                  <span>Dropoff Date & Time</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2 flex-1">
                    <span className="flex-1">March 30, 2025 7:00 PM</span>
                    <FaCalendarAlt className="text-gray-500" />
                  </div>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2 flex-1">
                    <span className="flex-1">March 31, 2025 7:00 PM</span>
                    <FaCalendarAlt className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
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

              {/* Buy Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded mt-4">
                Buy
              </button>

              {/* Reviews Section */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Customer Reviews of this Rideon Rental</h2>
                
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold mr-4">4.1</div>
                  <div>
                    <div className="flex text-yellow-500 mb-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <div className="text-gray-600 text-sm">out of 5 (1477 reviews)</div>
                  </div>
                </div>

                {/* Rating Bars */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const values = {
                      5: { width: "80%", count: 905 },
                      4: { width: "60%", count: 252 },
                      3: { width: "40%", count: 134 },
                      2: { width: "20%", count: 150 },
                      1: { width: "10%", count: 36 }
                    };
                    return (
                      <div key={stars} className="flex items-center">
                        <div className="w-16 text-sm">{stars} stars</div>
                        <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
                            style={{ width: values[stars].width }}
                          ></div>
                        </div>
                        <div className="w-12 text-right text-sm">{values[stars].count}</div>
                      </div>
                    );
                  })}
                </div>

                <button className="mt-4 border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50">
                  See all reviews
                </button>

                {/* Sample Review */}
                <div className="mt-6 bg-gray-100 p-4 rounded">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>Reviews (1)</span>
                    <span>Oct 14, 2023</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="bg-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold mr-2">4.0</div>
                    <div className="font-semibold">Varun Mehta</div>
                  </div>
                  <p className="text-sm text-gray-700">Good</p>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-gray-50 p-6 md:w-1/3 border-t md:border-t-0 md:border-l border-gray-200">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between font-semibold border-b border-gray-300 pb-2">
                  <span>Subtotal</span>
                  <span>₹600</span>
                </div>
                <div className="flex justify-between">
                  <span>Vehicle Rental Cost</span>
                  <span>₹468</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Booking Amount</span>
                  <span>₹468</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST (14% applied)</span>
                  <span>₹66</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST (14% applied)</span>
                  <span>₹66</span>
                </div>
                <div className="flex justify-between font-semibold border-t border-gray-300 pt-2">
                  <span>Payable Amount</span>
                  <span>₹600</span>
                </div>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded mt-4">
                Cancellation policy
              </button>

              <div className="mt-4 space-y-3 text-sm">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>
                    Confirm that you are above 18 years of age and you agree to all 
                    <a href="#" className="text-blue-600 underline ml-1">Terms & Conditions</a>
                  </span>
                </label>
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>
                    The original Driving license needs to be submitted at the time of pickup and the same will be returned at the time of dropping the vehicle.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-4">
                Ride<span className="text-orange-500">On</span> Rentals
              </div>
              <p className="text-gray-400 max-w-xs">
                Your trusted partner for premium vehicle rentals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Home</a></li>
                  <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                  <li><a href="#" className="hover:text-orange-500">Vehicles</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                  <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                  <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-orange-500">Cancellation Policy</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} RideOn Rentals. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VehicleRentalPage;