import React from "react";

const bikes = [
  {
    id: 1,
    name: "DIO",
    price: 400,
    img: "https://via.placeholder.com/200x150?text=DIO",
  },
  {
    id: 2,
    name: "Splendor",
    price: 500,
    img: "https://via.placeholder.com/200x150?text=Splendor",
  },
  {
    id: 3,
    name: "Pulsar",
    price: 600,
    img: "https://via.placeholder.com/200x150?text=Pulsar",
  },
  {
    id: 4,
    name: "Duke",
    price: 700,
    img: "https://via.placeholder.com/200x150?text=Duke",
  },
  {
    id: 5,
    name: "R15",
    price: 800,
    img: "https://via.placeholder.com/200x150?text=R15",
  },
  {
    id: 6,
    name: "RE Classic",
    price: 900,
    img: "https://via.placeholder.com/200x150?text=RE+Classic",
  },
];

const VendorCard = () => {
  return (
    <div className="bg-gray-100 font-['Roboto'] min-h-screen">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold">Select Your</h1>
        <h2 className="text-xl text-orange-500">Vendor</h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((vendor) => (
            <div key={vendor.id} className="bg-white border border-orange-500 rounded-lg p-4 shadow-sm">
              <div className="flex justify-center mb-4">
                <img
                  src={vendor.img}
                  alt={vendor.name}
                  className="w-[200px] h-[150px] object-contain bg-gray-50 rounded"
                />
              </div>
              <div className="text-center relative">
                <p className="text-sm text-gray-500 font-bold absolute top-0 right-0 pr-4">
                  Available at
                </p>
                <h3 className="text-lg font-bold border border-gray-300 py-1 rounded-lg mb-2">
                  ABC Rental
                </h3>
                <p className="text-2xl font-bold mt-2 text-left ml-4">₹ {vendor.price}</p>
                <p className="text-sm text-gray-500 text-left ml-4">250 km limit</p>
                <p className="text-sm text-gray-500 text-left ml-4">Extra ₹ 5/km</p>
                <p className="text-sm text-gray-500 text-left ml-4">Fuel Excluded</p>
                <div className="flex justify-center mt-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                    View
                  </button>
                </div>
                <hr className="border-black my-2 w-full" />
                <p className="text-sm text-gray-500 mt-2">Deposit: ₹ 2000</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">
          More
        </button>
      </div>
    </div>
  );
};

export default VendorCard;
