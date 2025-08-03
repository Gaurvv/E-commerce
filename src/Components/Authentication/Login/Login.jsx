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

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <div className="text-xl font-bold text-orange-500 text-center mb-4">Login</div>
      
      <div onKeyPress={handleKeyPress}>
        <InputDetails
          label="UserName"
          placeholder="Enter UserName"
          err={err === 1 || err === 3}
          errormessage={
            err === 1
              ? "Please provide a valid UserName"
              : err === 3
              ? "Invalid username or password"
              : ""
          }
          ref={userNameRef}
        />
        <InputDetails
          label="Password"
          type="password"
          placeholder="Enter Password"
          err={err === 2 || err === 3}
          errormessage={
            err === 2 
              ? "Please provide a valid Password"
              : err === 3
              ? "Invalid username or password"
              : ""
          }
          ref={passwordRef}
        />
      </div>
      
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
      
      <div className="mt-4 text-center">
        Don't have an account?{" "}
        <span 
          onClick={switchToSignup} 
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Signup
        </span>
      </div>
    </div>
  );
};

export default Login;