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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handlePasswordChange = () => {
    const password = passwordRef.current?.value || "";
    setPasswordStrength(checkPasswordStrength(password));
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1: return { text: "Weak", color: "text-red-500" };
      case 2: return { text: "Fair", color: "text-orange-500" };
      case 3: return { text: "Good", color: "text-yellow-500" };
      case 4:
      case 5: return { text: "Strong", color: "text-green-500" };
      default: return { text: "", color: "" };
    }
  };

  const handleProceed = () => {
    const password = passwordRef.current?.value.trim();
    const confirmPassword = confirmPasswordRef.current?.value.trim();

    // Clear previous errors
    setError(0);
    if (setErrorMessage) setErrorMessage("");

    // Validation
    if (!password || password.length < 6) {
      setError(1);
      if (setErrorMessage) setErrorMessage("Password must be at least 6 characters");
      return;
    }

    if (passwordStrength < 2) {
      setError(1);
      if (setErrorMessage) setErrorMessage("Please choose a stronger password");
      return;
    }

    if (password !== confirmPassword) {
      setError(2);
      if (setErrorMessage) setErrorMessage("Passwords do not match");
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
    if (setErrorMessage) setErrorMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleProceed();
    }
  };

  const strengthData = getPasswordStrengthText();

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
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-green-500 font-medium">Address</span>
            </div>
            <div className="w-12 h-1 bg-green-500 rounded"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-orange-500 font-medium">Password</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white px-8 py-10 rounded-2xl shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-xl font-bold text-white">🔒</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Secure Your Account</h2>
            <p className="text-gray-600">Create a strong password to protect your account</p>
          </div>

          {/* Form */}
          <div onKeyPress={handleKeyPress} className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <InputDetails
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password (min 6 characters)"
                  ref={passwordRef}
                  err={error === 1}
                  errormessage={error === 1 ? "Password must be at least 6 characters" : ""}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {passwordRef.current?.value && (
                <div className="space-y-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded ${
                          level <= passwordStrength
                            ? passwordStrength <= 1
                              ? "bg-red-500"
                              : passwordStrength <= 2
                              ? "bg-orange-500"
                              : passwordStrength <= 3
                              ? "bg-yellow-500"
                              : "bg-green-500"
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-sm font-medium ${strengthData.color}`}>
                    Password strength: {strengthData.text}
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <InputDetails
                label="Confirm Password"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                ref={confirmPasswordRef}
                err={error === 2}
                errormessage={error === 2 ? "Passwords do not match" : ""}
              />
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-gray-700 mb-2">Password requirements:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  At least 6 characters long
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Mix of letters, numbers, and symbols (recommended)
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-8 flex gap-4">
            <button
              onClick={handleBack}
              disabled={isLoading}
              className="flex-1 py-3 px-4 bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all duration-200 hover:bg-gray-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Back
            </button>
            <div className="flex-1">
              <button
                onClick={handleProceed}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* User Summary */}
        <div className="mt-6 bg-white/50 backdrop-blur-sm rounded-lg p-4">
          <div className="text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">Name:</span> {userDetail.userName}</p>
            <p><span className="font-medium">Email:</span> {userDetail.email}</p>
            <p><span className="font-medium">Location:</span> {userDetail.city}, {userDetail.street}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordUser;