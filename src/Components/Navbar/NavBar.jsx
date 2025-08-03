import React, { useState, useRef, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function NavBar() {
  const [showRes, setShowRes] = useState(false);
  const menuRef = useRef(null);
  const handleLogout = () =>{
    localStorage.removeItem("token");
    alert("Logout succesfully");
    Navigate("/auth")
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowRes(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRes]);

  return (
    <>
      <div className=" top-0 z-50 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 shadow-lg rounded-b-3xl relative">
        <div className="flex items-center space-x-4">
         
            <div className="bg-white w-12 h-12 rounded-full shadow-md overflow-hidden">
              <img
                src="org.jpg"
                alt="logo"
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
            <NavLink to ="/" >
            <span className="text-3xl font-bold text-white tracking-wide cursor-pointer font-serif">
              FOOD
            </span>
            </NavLink>
          
        </div>

        <div className="hidden sm:flex items-center space-x-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Foods ..."
              className="rounded-full pl-4 pr-10 py-2 w-64 text-black bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-green-500 transition"
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
          </div>

          <NavLink to="/Cart">
            <MdOutlineShoppingCart className="text-3xl text-white hover:scale-110 transition cursor-pointer w-8 h-8" />
          </NavLink>
           <NavLink to="/settings">
          <FaSignOutAlt className="text-3xl text-white hover:scale-110 transition cursor-pointer w-8 h-8" onClick={handleLogout}  />
          </NavLink>
        </div>

      </div>
    </>
  );
}

export default NavBar;
