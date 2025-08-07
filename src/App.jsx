import React, { useEffect } from "react";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import { useNavigate, useOutletContext } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const mainData = useOutletContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token check in App:", token);
    
    if (!token) {
      console.log("No token found, redirecting to auth");
      navigate("/auth", { replace: true });
    }
  }, [navigate]);


  return (
    <div>
      <NavBar />
      <Home />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;