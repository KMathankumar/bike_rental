import React, { useState } from "react";

const DocumentAuthentication = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("aadhaar");
  const [errors, setErrors] = useState({
    aadhaar: false,
    licenseFront: false,
    licenseBack: false,
    photo: false
  });

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleFileChange = (field) => (e) => {
    setErrors(prev => ({
      ...prev,
      [field]: !e.target.files?.[0]
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      {/* Compact Header */}
      <header className="bg-black text-white p-3 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-orange-500 text-2xl sm:text-3xl font-bold">R</span>
            <div className="flex flex-col text-white">
              <span className="text-xs sm:text-sm font-semibold leading-tight">ideOn</span>
              <span className="text-xs sm:text-sm font-semibold -mt-1 leading-tight">rental</span>
            </div>
          </div>

          {/* Navigation Group */}
          <div className="flex items-center gap-4">
            {/* Desktop Nav - Tightly spaced */}
            <nav className="hidden md:flex gap-3 mr-2">
              <a href="#" className="text-sm hover:text-orange-400 transition-colors">Home</a>
              <a href="#" className="text-sm hover:text-orange-400 transition-colors">About</a>
              <a href="#" className="text-sm hover:text-orange-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-1 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
            
            {/* Profile Icon */}
            <div className="w-7 h-7 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 text-white transition-all duration-200 overflow-hidden ${
        showMobileMenu ? 'max-h-36 py-3' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 space-y-2">
          <a href="#" className="block py-1 text-sm hover:text-orange-400">Home</a>
          <a href="#" className="block py-1 text-sm hover:text-orange-400">About</a>
          <a href="#" className="block py-1 text-sm hover:text-orange-400">Contact</a>
        </div>
      </div>

      {/* Main Form */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold mb-5 text-center">Document Authentication</h1>

          {/* Tab Navigation */}
          <div className="flex mb-5 border-b border-gray-200">
            <button
              className={`flex-1 py-2 text-sm sm:text-base font-medium ${
                activeTab === 'aadhaar' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-500 hover:text-orange-400'
              }`}
              onClick={() => setActiveTab('aadhaar')}
            >
              Aadhaar
            </button>
            <button
              className={`flex-1 py-2 text-sm sm:text-base font-medium ${
                activeTab === 'license' 
                  ? 'text-orange-500 border-b-2 border-orange-500' 
                  : 'text-gray-500 hover:text-orange-400'
              }`}
              onClick={() => setActiveTab('license')}
            >
              License
            </button>
          </div>

          {/* Aadhaar Form */}
          {activeTab === 'aadhaar' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
                  Verify Your Aadhaar
                  {errors.aadhaar && <span className="text-red-500 ml-1">(required)</span>}
                </label>
                <input
                  type="text"
                  placeholder="Enter 12-digit Aadhaar"
                  className={`w-full p-2 text-xs sm:text-sm border rounded focus:ring-1 focus:ring-orange-500 ${
                    errors.aadhaar ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  maxLength="12"
                />
              </div>

              <div className="mb-4 flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full p-2 text-xs sm:text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 text-xs sm:text-sm rounded font-medium">
                  Send OTP
                </button>
              </div>

              <div className="mb-4">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium">
                  Verify Aadhaar
                </button>
              </div>
            </>
          )}

          {/* License Form */}
          {activeTab === 'license' && (
            <div className="mb-4">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium">
                Verify License
              </button>
            </div>
          )}

          {/* Document Upload */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
              {activeTab === 'aadhaar' ? 'Upload Your Aadhaar' : 'Upload Your License'}
              {(errors.licenseFront || errors.licenseBack) && <span className="text-red-500 ml-1">(required)</span>}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Front', 'Back'].map((side) => {
                const field = `license${side}`;
                return (
                  <label 
                    key={side}
                    className={`h-28 border-2 border-dashed rounded flex flex-col items-center justify-center cursor-pointer ${
                      errors[field.toLowerCase()] 
                        ? 'bg-red-50 border-red-500' 
                        : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange(field.toLowerCase())}
                    />
                    <svg 
                      className={`w-6 h-6 mb-1 ${
                        errors[field.toLowerCase()] ? 'text-red-400' : 'text-gray-400'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className={`text-2xs ${
                      errors[field.toLowerCase()] ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {side} Side
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Photo Upload */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
              Upload Your Photo
              {errors.photo && <span className="text-red-500 ml-1">(required)</span>}
            </label>
            <label 
              className={`w-full h-32 border-2 border-dashed rounded flex flex-col items-center justify-center cursor-pointer ${
                errors.photo 
                  ? 'bg-red-50 border-red-500' 
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              }`}
            >
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange('photo')}
              />
              <svg 
                className={`w-8 h-8 mb-1 ${
                  errors.photo ? 'text-red-400' : 'text-gray-400'
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
              <span className={`text-2xs ${
                errors.photo ? 'text-red-500' : 'text-gray-500'
              }`}>
                {errors.photo ? 'Please select a file' : 'Click to upload your photo'}
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium">
            Submit Documents
          </button>
        </div>
      </main>
    </div>
  );
};

export default DocumentAuthentication;