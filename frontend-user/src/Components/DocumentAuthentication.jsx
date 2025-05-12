import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

const DocumentAuthentication = () => {
  const [activeTab, setActiveTab] = useState("aadhaar");
  const [otpSent, setOtpSent] = useState({ aadhaar: false, license: false });
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarOtp, setAadhaarOtp] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [dob, setDob] = useState("");
  const [licenseOtp, setLicenseOtp] = useState("");
  const navigate = useNavigate();

  // File Upload Refs and States
  const aadhaarFrontRef = useRef(null);
  const aadhaarBackRef = useRef(null);
  const licenseFrontRef = useRef(null);
  const licenseBackRef = useRef(null);
  const aadhaarPhotoRef = useRef(null);
  const licensePhotoRef = useRef(null);

  const [aadhaarFrontFile, setAadhaarFrontFile] = useState(null);
  const [aadhaarBackFile, setAadhaarBackFile] = useState(null);
  const [licenseFrontFile, setLicenseFrontFile] = useState(null);
  const [licenseBackFile, setLicenseBackFile] = useState(null);
  const [aadhaarPhotoFile, setAadhaarPhotoFile] = useState(null);
  const [licensePhotoFile, setLicensePhotoFile] = useState(null);

  // Unified file handler
  const handleFileChange = (e, setType, ref) => {
    const file = e.target.files[0];
    if (file) {
      setType(file);
      ref.current.value = null; // Reset input to allow re-selecting same file
    }
  };

  // Send OTP
  const sendOtp = (type) => {
    if (type === "aadhaar" && aadhaarNumber.length !== 12) {
      return Swal.fire(
        "Invalid Aadhaar",
        "Enter a valid 12-digit Aadhaar number.",
        "warning"
      );
    }
    if (type === "license" && (!licenseNumber || !dob)) {
      return Swal.fire(
        "Missing Info",
        "Enter License Number and Date of Birth.",
        "warning"
      );
    }
    setOtpSent((prev) => ({ ...prev, [type]: true }));
    Swal.fire({
      icon: "success",
      title: "OTP Sent",
      text: `OTP sent successfully to your registered ${type === "aadhaar" ? "Aadhaar" : "License"} number.`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Verify OTP
  const verifyOtp = (type) => {
    const otp = type === "aadhaar" ? aadhaarOtp : licenseOtp;
    if (otp.length !== 6) {
      return Swal.fire("Invalid OTP", "Enter a valid 6-digit OTP.", "warning");
    }
    Swal.fire({
      icon: "success",
      title: "Verified",
      text: `${type === "aadhaar" ? "Aadhaar" : "License"} verified successfully! 🎉`,
      timer: 2000,
      showConfirmButton: false,
    });
  };

  // Update handleSubmit function
const handleSubmit = () => {
  const isAadhaarValid =
    aadhaarNumber.length === 12 &&
    otpSent.aadhaar &&
    aadhaarOtp.length === 6 &&
    aadhaarFrontFile &&
    aadhaarBackFile &&
    aadhaarPhotoFile;

  const isLicenseValid =
    licenseNumber.length > 0 &&
    dob.length > 0 &&
    otpSent.license &&
    licenseOtp.length === 6 &&
    licenseFrontFile &&
    licenseBackFile &&
    licensePhotoFile;

  if (!isAadhaarValid || !isLicenseValid) {
    Swal.fire({
      icon: "error",
      title: "Incomplete Form",
      html: `
        <div style="text-align:left">
          ${!isAadhaarValid ? "<p>• Aadhaar section is incomplete</p>" : ""}
          ${!isLicenseValid ? "<p>• License section is incomplete</p>" : ""}
        </div>
      `,
      confirmButtonText: "OK",
      customClass: {
        container: "my-swal",
        popup: "my-swal-popup",
        title: "my-swal-title",
        htmlContainer: "my-swal-html",
        confirmButton: "my-swal-button",
      },
    });
    return;
  }

  // Navigate to payment page
  navigate("/payment");

    // Proceed with actual document submission
    Swal.fire({
      icon: "success",
      title: "Documents Submitted!",
      text: "Your documents have been submitted successfully.",
      confirmButtonText: "OK",
    });

    // You can now send data to backend or perform further actions
  };

  return (
    <div className="bg-gray-100 min-h-screen font-poppins pt-28">
      <main className="container mx-auto px-4 py-6 pt-28">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Document Authentication</h1>

          {/* Tabs */}
          <div className="flex mb-5 border-b">
            {["aadhaar", "license"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 font-medium text-sm ${
                  activeTab === tab
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-orange-400"
                }`}
              >
                {tab === "aadhaar" ? "Aadhaar" : "License"}
              </button>
            ))}
          </div>

          {/* Aadhaar Form */}
          {activeTab === "aadhaar" && (
            <>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Aadhaar Number</label>
                <input
                  type="text"
                  maxLength="12"
                  pattern="\d{12}"
                  title="Enter a valid 12-digit Aadhaar number"
                  placeholder="Enter your 12-digit Aadhaar number"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setAadhaarNumber(value);
                    }
                  }}
                  value={aadhaarNumber}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {!otpSent.aadhaar ? (
                <button
                  onClick={() => sendOtp("aadhaar")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium mb-4"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    value={aadhaarOtp}
                    onChange={(e) => setAadhaarOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength="6"
                    className="w-full p-2 mb-4 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    onClick={() => verifyOtp("aadhaar")}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium mb-4"
                  >
                    Verify Aadhaar
                  </button>
                </>
              )}

              {/* Aadhaar Upload Section */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Upload Aadhaar</label>
                <div className="grid grid-cols-2 gap-2">
                  {/* Front */}
                  <label
                    className="h-24 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                    onClick={() => aadhaarFrontRef.current.click()}
                  >
                    {aadhaarFrontFile ? aadhaarFrontFile.name : "Front"}
                    <input
                      type="file"
                      ref={aadhaarFrontRef}
                      onChange={(e) =>
                        handleFileChange(e, setAadhaarFrontFile, aadhaarFrontRef)
                      }
                      className="hidden"
                      accept="image/*,application/pdf"
                    />
                  </label>
                  {/* Back */}
                  <label
                    className="h-24 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                    onClick={() => aadhaarBackRef.current.click()}
                  >
                    {aadhaarBackFile ? aadhaarBackFile.name : "Back"}
                    <input
                      type="file"
                      ref={aadhaarBackRef}
                      onChange={(e) =>
                        handleFileChange(e, setAadhaarBackFile, aadhaarBackRef)
                      }
                      className="hidden"
                      accept="image/*,application/pdf"
                    />
                  </label>
                </div>
              </div>

              {/* Aadhaar Photo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Upload Your Photo</label>
                <label
                  className="h-28 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                  onClick={() => aadhaarPhotoRef.current.click()}
                >
                  {aadhaarPhotoFile ? aadhaarPhotoFile.name : "Click to upload photo"}
                  <input
                    type="file"
                    ref={aadhaarPhotoRef}
                    onChange={(e) =>
                      handleFileChange(e, setAadhaarPhotoFile, aadhaarPhotoRef)
                    }
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </>
          )}

          {/* License Form */}
          {activeTab === "license" && (
            <>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">License Number</label>
                <input
                  type="text"
                  pattern="^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{7}$"
                  title="Enter a valid License Number (e.g., TN0920160012345)"
                  placeholder="Enter License Number (e.g., TN0920160012345)"
                  onChange={(e) => setLicenseNumber(e.target.value.toUpperCase())}
                  value={licenseNumber}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm font-medium mb-1 block">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              {!otpSent.license ? (
                <button
                  onClick={() => sendOtp("license")}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium mb-4"
                >
                  Send OTP
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    value={licenseOtp}
                    onChange={(e) => setLicenseOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength="6"
                    className="w-full p-2 mb-4 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    onClick={() => verifyOtp("license")}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium mb-4"
                  >
                    Verify License
                  </button>
                </>
              )}

              {/* License Upload Section */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Upload License</label>
                <div className="grid grid-cols-2 gap-2">
                  {/* Front */}
                  <label
                    className="h-24 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                    onClick={() => licenseFrontRef.current.click()}
                  >
                    {licenseFrontFile ? licenseFrontFile.name : "Front"}
                    <input
                      type="file"
                      ref={licenseFrontRef}
                      onChange={(e) =>
                        handleFileChange(e, setLicenseFrontFile, licenseFrontRef)
                      }
                      className="hidden"
                      accept="image/*,application/pdf"
                    />
                  </label>
                  {/* Back */}
                  <label
                    className="h-24 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                    onClick={() => licenseBackRef.current.click()}
                  >
                    {licenseBackFile ? licenseBackFile.name : "Back"}
                    <input
                      type="file"
                      ref={licenseBackRef}
                      onChange={(e) =>
                        handleFileChange(e, setLicenseBackFile, licenseBackRef)
                      }
                      className="hidden"
                      accept="image/*,application/pdf"
                    />
                  </label>
                </div>
              </div>

              {/* License Photo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Upload Your Photo</label>
                <label
                  className="h-28 border-2 border-dashed flex items-center justify-center rounded bg-gray-50 cursor-pointer text-center text-xs text-gray-500"
                  onClick={() => licensePhotoRef.current.click()}
                >
                  {licensePhotoFile ? licensePhotoFile.name : "Click to upload photo"}
                  <input
                    type="file"
                    ref={licensePhotoRef}
                    onChange={(e) =>
                      handleFileChange(e, setLicensePhotoFile, licensePhotoRef)
                    }
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded font-medium"
          >
            Submit Documents
          </button>
        </div>
      </main>
    </div>
  );
};

export default DocumentAuthentication;