import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const Address = ({ userDetail, setUserDetail, setStage }) => {
  const cityRef = useRef();
  const stateRef = useRef();
  const deliverydescRef = useRef();

  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProceed = () => {
    const city = cityRef.current?.value.trim();
    const state = stateRef.current?.value.trim();
    const desc = deliverydescRef.current?.value.trim();

    // Reset errors
    setError(0);
    setErrorMessage("");

    // Validation
    if (!city || city.length < 2) {
      setError(1);
      setErrorMessage("City name must be at least 2 characters");
      return;
    } 
    
    if (!state || state.length < 2) {
      setError(2);
      setErrorMessage("State name must be at least 2 characters");
      return;
    } 
    
    if (!desc || desc.length < 10) {
      setError(3);
      setErrorMessage("Please provide detailed delivery instructions (min 10 characters)");
      return;
    }

    setUserDetail((prev) => ({
      ...prev,
      city,
      street: state,
      deliveryDescription: desc,
    }));
    setStage(3);
  };

  const handleBack = () => {
    setStage(1);
    setError(0);
    setErrorMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleProceed();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-green-500 font-medium">Contact</span>
            </div>
            <div className="w-12 h-1 bg-green-500 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-orange-500 font-medium">Address</span>
            </div>
            <div className="w-12 h-1 bg-gray-300 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-gray-500">Password</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white px-8 py-10 rounded-2xl shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-xl font-bold text-white">📍</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Delivery Address</h2>
            <p className="text-gray-600">Where should we deliver your delicious meals?</p>
          </div>

          {/* Form */}
          <div onKeyPress={handleKeyPress} className="space-y-6">
            <div className="space-y-1">
              <InputDetails
                label="City"
                placeholder="Enter your city"
                ref={cityRef}
                err={error === 1}
                errormessage={error === 1 ? errorMessage : ""}
              />
            </div>
            
            <div className="space-y-1">
              <InputDetails
                label="State/Province"
                placeholder="Enter your state or province"
                ref={stateRef}
                err={error === 2}
                errormessage={error === 2 ? errorMessage : ""}
              />
            </div>
            
            <div className="space-y-1">
              <InputDetails
                label="Delivery Instructions"
                placeholder="e.g., Apartment 4B, Ring doorbell twice, Leave at door..."
                ref={deliverydescRef}
                err={error === 3}
                errormessage={error === 3 ? errorMessage : ""}
                isTextArea={true}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-8 flex gap-4">
            <button
              onClick={handleBack}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-200 hover:bg-gray-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Back
            </button>
            <div className="flex-1">
              <OrangeButton title="Continue" onClick={handleProceed} />
            </div>
          </div>
        </div>

        {/* User Info Display */}
        <div className="mt-6 bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-sm text-gray-600">
            <p><span className="font-medium">Name:</span> {userDetail.userName}</p>
            <p><span className="font-medium">Email:</span> {userDetail.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;