import React, { useState } from "react";
import ContactUser from "./Component/ContactUser";
import AddressUser from "./Component/AddressUser";
import PasswordUser from "./Component/PasswordUser";
import { useNavigate } from "react-router-dom";
import signUpApi from "../../API/Auth/signUpApi";

const Signup = ({ switchToLogin }) => {
  const [userDetail, setUserDetail] = useState({
    userName: "",
    contactNumber: "",
    email: "",
    password: "",
    city: "",
    street: "",
    deliveryDescription: "",
  });

  const [stage, setStage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (updatedUserDetail = null) => {
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors
    
    // Use updated user details if provided, otherwise use current state
    const finalUserDetail = updatedUserDetail || userDetail;
    
    // Basic validation
    if (!finalUserDetail.userName || !finalUserDetail.email || !finalUserDetail.password) {
      setErrorMessage("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    try {
      await signUpApi(finalUserDetail, navigate, setUserDetail, setStage, setErrorMessage);
    } catch (error) {
      setErrorMessage("An error occurred during signup. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchToLogin = () => {
    if (switchToLogin && typeof switchToLogin === 'function') {
      switchToLogin();
    } else {
      // Fallback navigation if switchToLogin is not provided
      navigate('/login');
    }
  };

  // Global error display for API errors
  const renderGlobalError = () => {
    if (!errorMessage) return null;
    
    return (
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg shadow-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-500 text-xl">⚠️</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-700">{errorMessage}</p>
            </div>
            <button 
              onClick={() => setErrorMessage("")}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderGlobalError()}
      
      {stage === 1 && (
        <ContactUser
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setStage={setStage}
          setErrorMessage={setErrorMessage}
          switchToLogin={handleSwitchToLogin}
        />
      )}

      {stage === 2 && (
        <AddressUser
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setStage={setStage}
          setErrorMessage={setErrorMessage}
        />
      )}

      {stage === 3 && (
        <PasswordUser
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setStage={setStage}
          onSubmit={handleSubmit}
          setErrorMessage={setErrorMessage}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Signup;