import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-[Poppins]">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        {/* Form Section */}
        <div className="bg-gray-300 p-8 rounded-lg md:mr-8 w-full md:w-2/3">
          <form className="space-y-4">
            <div>
              <label className="block text-black font-bold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-black font-bold mb-2">Mail Id</label>
              <input
                type="email"
                placeholder="Enter Your Mailid"
                className="w-full p-2 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-black font-bold mb-2">Message</label>
              <textarea
                placeholder="Enter Your Description"
                className="w-full p-2 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={4}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Title Section */}
        <div className="mt-8 md:mt-0 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold text-black ml-0 md:ml-6">Contact Us</h1>
          <p className="text-orange-500 ml-0 md:ml-6">Get in Touch</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
