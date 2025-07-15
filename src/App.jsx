import React from "react";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Home from './Components/Home'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import { Outlet } from "react-router-dom";







function App() {
  return (
    <div >
      <title>experience the best pizza </title>
      <NavBar />
      <Home/>
      <Categories/>
      <Footer/>
      
    
     
    
    </div>
  );
}

export default App;
