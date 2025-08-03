import React, { useState } from "react";
import ContactUser from "./Component/ContactUser";
import AddressUser from "./Component/AddressUser";
import PasswordUser from "./Component/PasswordUser";
import { useNavigate } from "react-router-dom";
import signUpApi from "../../API/Auth/signUpApi";

const Signup = ({ setScreen }) => {
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
      setErrorMessage("An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-3">
      <div className="text-xl font-bold text-orange-500 text-center">SignUp</div>

      {errorMessage && (
        <div className="text-red-500 text-center mb-3 p-2 bg-red-50 rounded">
          {errorMessage}
        </div>
      )}

      {stage === 1 && (
        <ContactUser
          userDetail={userDetail}
          setUserDetail={setUserDetail}
          setStage={setStage}
          setErrorMessage={setErrorMessage}
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

      {/* Progress indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        <div className={`w-3 h-3 rounded-full ${stage >= 1 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
        <div className={`w-3 h-3 rounded-full ${stage >= 2 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
        <div className={`w-3 h-3 rounded-full ${stage >= 3 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
      </div>

      <div className="mt-4 text-center">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer hover:underline"
          onClick={() => setScreen(false)}
        >
          login
        </span>
      </div>
    </div>
  );
};

export default Signup;