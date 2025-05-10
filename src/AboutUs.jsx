import React from "react";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-[500px] font-[Poppins]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/a1aa/image/nGrt0U2HWsR2VlUa22DBGlP0Pd1pwRoEEEqnr7w63EE.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center h-full min-h-[500px] px-4 sm:px-12 py-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">AboutUs!</h1>
          <h2 className="text-orange-400 text-lg sm:text-2xl mb-4 font-semibold">Our Story</h2>
          <p className="text-sm sm:text-lg leading-relaxed">
            At <span className="italic font-semibold text-orange-300">Rideon Rentals</span>, we make bike rentals easy,
            affordable, and hassle-free. Whether it's a city ride or a long trip, our well-maintained bikes ensure a
            smooth journey. With a quick booking process and flexible rental options, you get the freedom to ride on your
            terms. Experience convenience, quality, and adventure—all in one ride!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
