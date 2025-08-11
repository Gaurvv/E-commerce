import React, { useRef, useState } from "react";
import InputDetails from "../../Modal/InputDetails";
import loginApi from "../../API/Auth/LoginApi";
import { useNavigate } from "react-router-dom";

const Login = ({ switchToSignup }) => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = userNameRef.current?.value.trim();
    const pass = passwordRef.current?.value.trim();

    // Clear previous errors
    setErr(0);

    // Validation
    if (!user) {
      setErr(1);
      return;
    } 
    
    if (!pass) {
      setErr(2);
      return;
    }

    setIsLoading(true);
    
    try {
      await loginApi({ userName: user, password: pass }, navigate, setErr);
    } catch (error) {
      console.error("Login failed:", error);
      setErr(3);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const handleSwitchToSignup = () => {
    if (switchToSignup && typeof switchToSignup === 'function') {
      switchToSignup();
    } else {
      // Fallback navigation if switchToSignup is not provided
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-8">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-2xl font-bold text-white">🍽️</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        {/* Form */}
        <div onKeyPress={handleKeyPress} className="space-y-6">
          <InputDetails
            label="Username"
            placeholder="Enter your username"
            err={err === 1 || err === 3}
            errormessage={
              err === 1
                ? "Please provide a valid username"
                : err === 3
                ? "Invalid username or password"
                : ""
            }
            ref={userNameRef}
          />
          
          <InputDetails
            label="Password"
            type="password"
            placeholder="Enter your password"
            err={err === 2 || err === 3}
            errormessage={
              err === 2 
                ? "Please provide a valid password"
                : err === 3
                ? "Invalid username or password"
                : ""
            }
            ref={passwordRef}
          />
        </div>
        
        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className="mt-8 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
        

        
        {/* Divider */}
        <div className="mt-8 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        
        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button 
              onClick={handleSwitchToSignup}
              className="text-orange-500 font-semibold hover:text-orange-600 hover:underline transition-colors"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;