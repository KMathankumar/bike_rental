import React from 'react';
import { FaStar, FaStarHalfAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Booking = () => {
  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <header className="bg-black text-white p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">RideOn Rental</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Main */}
        <main className="bg-white p-6 mt-6 shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Panel */}
            <div className="md:w-2/3">
              <h1 className="text-xl font-bold mb-4 ml-56">Honda Dio</h1>
              <p className="text-gray-600 mb-4 ml-56">
                Rent Amount: ₹ 800<br />
                Refundable Deposit: ₹ 2000
              </p>
              <div className="flex items-center mb-4 ml-56">
                <button className="bg-gray-200 px-2 py-1">-</button>
                <input type="text" value="1" className="w-12 text-center border mx-2" readOnly />
                <button className="bg-gray-200 px-2 py-1">+</button>
              </div>
              <div className="mb-4 flex items-center ml-56">
                <FaMapMarkerAlt className="text-gray-600 mr-2" />
                <label>Pickup location</label>
              </div>
              <p className="text-gray-600 text-center ml-6">ABC Rentals, Theni</p>

              <div className="mb-4 mt-4">
                <label className="block mb-2 text-sm">Pickup Date & Time</label>
                <input type="text" value="March 30, 2025 7:00 PM" className="w-64 border p-2" readOnly />
              </div>

              <div className="mb-4 flex justify-between ml-72 -mt-20">
                <div>
                  <label className="block mb-2 text-sm">Dropoff Date & Time</label>
                  <input type="text" value="March 31, 2025 7:00 PM" className="w-64 border p-2" readOnly />
                </div>
              </div>

              <div className="flex space-x-4 mb-4 mt-4">
                <button className="bg-gray-200 px-4 py-2">View Details</button>
                <button className="bg-gray-200 px-4 py-2">Terms</button>
                <button className="bg-gray-200 px-4 py-2">View location on map</button>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2">Buy</button>
            </div>

            {/* Right Panel */}
            <div className="md:w-1/3 md:pl-6 mt-6 md:mt-0">
              <h2 className="text-lg font-bold mb-4">Subtotal</h2>
              <ul className="text-gray-600 mb-4">
                <li>Vehicle Rental Cost: ₹ 468</li>
                <li>Total Booking Amount: ₹ 468</li>
                <li>CGST (14% applied): ₹ 66</li>
                <li>SGST (14% applied): ₹ 66</li>
              </ul>
              <h2 className="text-lg font-bold mb-4">Payable Amount: ₹ 600</h2>
              <div className="mb-4">
                <input type="checkbox" id="confirm-age" className="mr-2" />
                <label htmlFor="confirm-age">
                  Confirm that you are above 18 years of age and agree to all Terms & Conditions
                </label>
              </div>
              <p className="text-gray-600 mb-4">
                The original Driving license needs to be submitted at pickup and will be returned at dropoff.
              </p>
            </div>
          </div>

          {/* Reviews Summary */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Customer Reviews of this Rideon Rental</h2>
            <div className="flex items-center mb-4">
              <div className="text-4xl font-bold">4.1</div>
              <div className="ml-4">
                <div className="flex items-center text-yellow-500">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  <div className="ml-2 text-gray-600">(427 reviews)</div>
                </div>
                <button className="bg-gray-200 px-4 py-2 mt-2">See all reviews</button>
              </div>
            </div>

            {/* Star Distribution */}
            {[
              { label: "5 stars", value: 80, count: 905 },
              { label: "4 stars", value: 60, count: 252 },
              { label: "3 stars", value: 40, count: 134 },
              { label: "2 stars", value: 20, count: 150 },
              { label: "1 star", value: 10, count: 36 }
            ].map((item, index) => (
              <div key={index} className="flex items-center mb-1">
                <div className="w-1/5">{item.label}</div>
                <div className="w-3/5 bg-gray-200 h-4 relative">
                  <div className="bg-orange-500 h-4" style={{ width: `${item.value}%` }}></div>
                </div>
                <div className="w-1/5 text-right">{item.count}</div>
              </div>
            ))}
          </div>

          {/* Single Review */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Reviews (1)</h2>
            <div className="flex items-center mb-4">
              <div className="text-4xl font-bold">4.0</div>
              <div className="ml-4">
                <div className="text-lg font-bold">Varun Mehta</div>
                <div className="text-gray-600">Good</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white p-4 mt-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold">Company</div>
              <nav className="space-x-4 mt-2">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About Us</a>
                <a href="#" className="hover:underline">Contact</a>
                <a href="#" className="hover:underline">Address</a>
              </nav>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm">
            <p>©2025, All Rights Reserved,</p>
            <p>Privacy Policy | Terms & Conditions</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Booking;
