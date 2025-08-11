import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const ContactUser = ({ userDetail, setUserDetail, setStage, switchToLogin }) => {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();

  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleProceed = () => {
    const name = nameRef.current?.value.trim();
    const contact = contactNumberRef.current?.value.trim();
    const email = emailRef.current?.value.trim();

    // Reset errors
    setError(0);
    setErrorMessage("");

    // Validation
    if (!name || name.length < 2) {
      setError(1);
      setErrorMessage("Name must be at least 2 characters long");
      return;
    } 
    
    if (!email || !validateEmail(email)) {
      setError(2);
      setErrorMessage("Please enter a valid email address");
      return;
    } 
    
    if (!contact || !validatePhoneNumber(contact)) {
      setError(3);
      setErrorMessage("Please enter a valid contact number");
      return;
    }

    // Success path
    setUserDetail({
      userName: name,
      contactNumber: contact,
      email: email,
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(2);
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
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-orange-500 font-medium">Contact</span>
            </div>
            <div className="w-12 h-1 bg-gray-300 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-gray-500">Address</span>
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
              <span className="text-xl font-bold text-white">👤</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
            <p className="text-gray-600">Let's start with your basic details</p>
          </div>

          {/* Form */}
          <div onKeyPress={handleKeyPress} className="space-y-6">
            <div className="space-y-1">
              <InputDetails
                label="Full Name"
                placeholder="Enter your full name"
                ref={nameRef}
                err={error === 1}
                errormessage={error === 1 ? errorMessage : ""}
              />
            </div>
            
            <div className="space-y-1">
              <InputDetails
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                ref={emailRef}
                err={error === 2}
                errormessage={error === 2 ? errorMessage : ""}
              />
            </div>
            
            <div className="space-y-1">
              <InputDetails
                label="Phone Number"
                type="tel"
                placeholder="Enter your phone number"
                ref={contactNumberRef}
                err={error === 3}
                errormessage={error === 3 ? errorMessage : ""}
              />
            </div>
          </div>

          {/* Button */}
          <div className="pt-8 flex justify-center ">
            <div className="ml-auto mr-auto ">
              <OrangeButton title="Continue" onClick={handleProceed} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button 
              onClick={switchToLogin}
              className="text-orange-500 font-medium hover:text-orange-600 hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUser;