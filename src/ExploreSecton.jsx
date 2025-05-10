import React from "react";

const ExploreSection = () => {
  return (
    <div className="bg-gray-100 p-4 font-[Poppins] w-full min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Section 1 */}
        <div className="text-center mb-16 md:flex md:items-center md:justify-between">
          <img
            src="https://storage.googleapis.com/a1aa/image/O0ysnMTI_QCPUMtPz7a47393Z9-jexlBDaBgRd2r7m4.jpg"
            alt="Adventure"
            className="rounded-2xl shadow-lg w-full md:w-[50%] h-auto mb-6 md:mb-0"
          />
          <div className="md:w-2/5">
            <h1 className="text-3xl font-bold">Adventure Awaits!</h1>
            <p className="text-gray-700 mt-2">
              Why wait? Hop on, rev up, and explore the world on two wheels.
              Your perfect ride is just a click away!
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="text-center mb-16 md:flex md:items-center md:justify-between md:flex-row-reverse">
          <img
            src="https://storage.googleapis.com/a1aa/image/4XJ2CoEP_JVKEzoFKdrGv0yu9pGkkVKxCWn3ex58QDQ.jpg"
            alt="Sports Bike"
            className="rounded-2xl shadow-lg w-full md:w-[50%] h-auto mb-6 md:mb-0"
          />
          <div className="md:w-2/5">
            <h1 className="text-3xl font-bold">Your Ride, Your Rules!</h1>
            <p className="text-gray-700 mt-2">
              Choose from a range of stylish, well-maintained bikes and ride
              the way you want. The journey starts with you!
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="text-center mb-16 md:flex md:items-center md:justify-between">
          <img
            src="https://storage.googleapis.com/a1aa/image/iANTCSX9aEOkOweLja3jwGJLhZApcgEI1p_FeU3pPo4.jpg"
            alt="Freedom Ride"
            className="rounded-2xl shadow-lg w-full md:w-[50%] h-auto mb-6 md:mb-0"
          />
          <div className="md:w-2/5">
            <h1 className="text-3xl font-bold">Ride with Freedom!</h1>
            <p className="text-gray-700 mt-2">
              Experience the thrill of the open road with our hassle-free bike
              rentals. No commitments, just pure adventure!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExploreSection;
