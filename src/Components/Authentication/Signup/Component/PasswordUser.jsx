import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const PasswordUser = ({
  userDetail,
  setUserDetail,
  setStage,
  onSubmit,
  setErrorMessage,
  isLoading
}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [error, setError] = useState(0);

  const handleProceed = () => {
    const password = passwordRef.current?.value.trim();
    const confirmPassword = confirmPasswordRef.current?.value.trim();

    // Clear previous errors
    setError(0);
    setErrorMessage("");

    // Validation
    if (!password || password.length < 6) {
      setError(1);
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError(2);
      setErrorMessage("Passwords do not match");
      return;
    }

    // Update userDetail with password and then call onSubmit
    const updatedUserDetail = {
      ...userDetail,
      password: password,
    };

    // Update the state first
    setUserDetail(updatedUserDetail);

    // Then call the API with the complete user data
    if (onSubmit) {
      onSubmit(updatedUserDetail);
    }
  };

  const handleBack = () => {
    setStage(2);
    setError(0);
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-8">
      <InputDetails
        label="Password"
        type="password"
        placeholder="Enter your password (min 6 characters)"
        ref={passwordRef}
        err={error === 1}
        errormessage={error === 1 ? "Password must be at least 6 characters" : ""}
      />
      <InputDetails
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        ref={confirmPasswordRef}
        err={error === 2}
        errormessage={error === 2 ? "Passwords do not match" : ""}
      />
      
      <div className="flex gap-3 w-full">
        <button
          onClick={handleBack}
          disabled={isLoading}
          className="flex-1 py-2 px-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <div className="flex-1">
          <OrangeButton 
            title={isLoading ? "Creating Account..." : "Create Account"} 
            onClick={handleProceed}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordUser;