import React, { useState, useRef, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [showRes, setShowRes] = useState(false);
  const menuRef = useRef(null);

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
      <div className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 shadow-lg rounded-b-3xl relative">
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
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setShowRes(!showRes)}
            aria-label="Toggle menu"
            className="text-white text-4xl"
          >
            {showRes ? <IoMdClose /> : <IoMdMenu />}
          </button>

          {showRes && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-50 transform transition-all duration-300 ease-out"
            >
              <div className="p-6 space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search pizzas..."
                    className="w-full rounded-xl pl-4 pr-11 py-3 text-black bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  />
                  <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 text-xl" />
                </div>

                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 flex items-center space-x-3 border border-orange-200 hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="bg-orange-500 p-2 rounded-full">
                      <MdOutlineShoppingCart className="text-white text-xl" />
                    </div>
                    <span className="font-medium text-gray-800">Cart</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar;
