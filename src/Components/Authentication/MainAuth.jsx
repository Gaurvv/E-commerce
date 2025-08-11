import React, { useState } from "react";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const MainAuth = () => {
  const [screen, setScreen] = useState(false); // false = Login, true = Signup

  const switchToSignup = () => {
    setScreen(true);
  };

  const switchToLogin = () => {
    setScreen(false);
  };

  return (
    <div className="min-h-screen">
      {screen ? (
        <Signup switchToLogin={switchToLogin} />
      ) : (
        <Login switchToSignup={switchToSignup} />
      )}
    </div>
  );
};

export default MainAuth;