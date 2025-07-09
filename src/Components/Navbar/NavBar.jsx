import React, { useState, useRef, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaGoogle, FaGithub } from "react-icons/fa";

function NavBar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const menuRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowRes(false);
      }
      if (
        showPopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !event.target.closest('button.bg-green-600')
      ) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRes, showPopup]);

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
          <span className="text-3xl font-bold text-white tracking-wide cursor-pointer font-serif">
            FOOD
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex items-center space-x-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search pizzas..."
              className="rounded-full pl-4 pr-10 py-2 w-64 text-black bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-green-500 transition"
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
          </div>

          <MdOutlineShoppingCart className="text-3xl text-white hover:scale-110 transition cursor-pointer w-8 h-8" />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
            onClick={() => setShowPopup(true)}
          >
            Sign In
          </button>
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

                <button
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                  onClick={() => {
                    setShowPopup(true);
                    setShowRes(false);
                  }}
                >
                  Sign In
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sign In Popup */}
      {showPopup && (
        <>
          {/* Overlay with blur */}
          <div className="fixed inset-0 z-[90] bg-transparent  backdrop-blur-sm flex justify-center items-center"></div>

          {/* Centered popup */}
          <div
            ref={popupRef}
            className="fixed z-[100] inset-0 flex justify-center items-center p-4"
          >
            <div className="bg-white w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl p-8 relative z-[101]">
              <button
                className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-red-600 transition"
                onClick={() => setShowPopup(false)}
              >
                <IoMdClose />
              </button>

              <h2 className="bg-gradient-to-r from-green-500 to-green-600 mt-4 text-white rounded-full h-14 flex items-center justify-center w-full text-2xl font-bold mb-6 shadow-md">
                SIGN IN
              </h2>

              <input
                type="text"
                placeholder="Enter Username"
                className="w-full mb-4 px-5 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full mb-6 px-5 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-400 transition"
              />

              <p className="flex justify-center items-center pb-3 font-semibold text-gray-700">
                or login with
              </p>

              <ul className="flex gap-6 pb-6 justify-center items-center text-3xl">
                <li className="hover:cursor-pointer bg-gradient-to-r from-orange-500 to-orange-400 w-12 h-10 rounded-lg flex justify-center items-center text-white shadow-md hover:scale-110 transition">
                  <FaGoogle />
                </li>
                <li className="hover:cursor-pointer bg-gradient-to-r from-orange-500 to-orange-400 w-12 h-10 rounded-lg flex justify-center items-center text-white shadow-md hover:scale-110 transition">
                  <FaGithub />
                </li>
              </ul>

              <button className="uppercase text-white w-full bg-green-600 hover:bg-orange-400 font-bold py-4 rounded-full transition shadow-lg">
                Login
              </button>

              <p className="pt-4 flex gap-2 justify-center items-center text-gray-700 text-sm">
                Don't have an account?{" "}
                <a className="underline text-orange-500 hover:text-orange-600 font-semibold" href="#">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
