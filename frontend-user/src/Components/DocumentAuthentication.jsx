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

  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [dob, setDob] = useState("");

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleFileChange = (field) => (e) => {
    setErrors(prev => ({
      ...prev,
      [field]: !e.target.files?.[0]
    }));
  };

  const handleSendOtp = () => {
    if (aadhaarNumber.length !== 12) {
      alert("Please enter a valid 12-digit Aadhaar number.");
      return;
    }
    setOtpSent(true);
    alert("OTP sent successfully! (For demo, enter any 6-digit OTP)");
  };

  const handleVerifyAadhaar = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    alert("Aadhaar verified successfully! 🎉");
  };

  const handleVerifyLicense = () => {
    if (!licenseNumber || !dob) {
      alert("Please enter License Number and Date of Birth.");
      return;
    }
    alert("License verified successfully! 🎉");
  };

  return (
<div className="bg-gray-100 min-h-screen font-poppins pt-28">

      {/* Main Form */}
      <main className="container mx-auto px-4 py-6 sm:py-8 pt-28">
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
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder="Enter 12-digit Aadhaar"
                  className="w-full p-2 text-xs sm:text-sm border rounded focus:ring-1 focus:ring-orange-500 border-gray-300"
                  maxLength="12"
                />
              </div>

              {!otpSent ? (
                <button 
                  onClick={handleSendOtp}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium mb-4"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <div className="mb-4">
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter OTP"
                      className="w-full p-2 text-xs sm:text-sm border rounded focus:ring-1 focus:ring-orange-500 border-gray-300"
                      maxLength="6"
                    />
                  </div>
                  <button 
                    onClick={handleVerifyAadhaar}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium mb-4"
                  >
                    Verify Aadhaar
                  </button>
                </>
              )}
            </>
          )}

          {/* License Form */}
          {activeTab === 'license' && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
                  License Number
                </label>
                <input
                  type="text"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
                  placeholder="Enter License Number"
                  className="w-full p-2 text-xs sm:text-sm border rounded focus:ring-1 focus:ring-orange-500 border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-2 text-xs sm:text-sm border rounded focus:ring-1 focus:ring-orange-500 border-gray-300"
                />
              </div>

              <button 
                onClick={handleVerifyLicense}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded text-sm sm:text-base font-medium mb-4"
              >
                Verify License
              </button>
            </>
          )}

          {/* Document Upload */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
              {activeTab === 'aadhaar' ? 'Upload Your Aadhaar' : 'Upload Your License'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Front', 'Back'].map((side) => {
                const field = `license${side}`;
                return (
                  <label 
                    key={side}
                    className="h-28 border-2 border-dashed rounded flex flex-col items-center justify-center cursor-pointer bg-gray-50 border-gray-300 hover:bg-gray-100"
                  >
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleFileChange(field.toLowerCase())}
                    />
                    <svg className="w-6 h-6 mb-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className="text-2xs text-gray-500">{side} Side</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Photo Upload */}
          <div className="mb-5">
            <label className="block text-gray-700 mb-1 text-xs sm:text-sm font-medium">
              Upload Your Photo
            </label>
            <label className="w-full h-32 border-2 border-dashed rounded flex flex-col items-center justify-center cursor-pointer bg-gray-50 border-gray-300 hover:bg-gray-100">
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileChange('photo')}
              />
              <svg className="w-8 h-8 mb-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
              <span className="text-2xs text-gray-500">Click to upload your photo</span>
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
