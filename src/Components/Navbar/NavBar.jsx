import React, { useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // no dropdown now but placeholder
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Updated icon class for the new theme
  const iconClass = "text-gray-700 hover:text-gray-900 transition cursor-pointer";

  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between
        bg-gray-100
        px-3 sm:px-6 py-2 sm:py-3 shadow-md relative"
    >
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="bg-white w-9 h-9 sm:w-12 sm:h-12 rounded-full shadow-md overflow-hidden">
          <img
            src="org.jpg"
            alt="logo"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
        <NavLink to="/">
          <span className="text-xl sm:text-3xl font-bold text-gray-900 tracking-wide cursor-pointer font-serif">
            FOOD
          </span>
        </NavLink>
      </div>

      {/* Right: Search + Cart + Settings */}
      <div className="flex items-center space-x-3 sm:space-x-5">
        {/* Search Input (desktop only) */}
        <div className="hidden md:flex relative w-36 sm:w-64">
          <input
            type="text"
            placeholder="Search Foods ..."
            className="rounded-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-1 sm:py-2 text-sm sm:text-base text-gray-800 bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-gray-400 transition w-full"
          />
          <IoSearch className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Search Icon (mobile only) */}
        <div className="md:hidden">
          <IoSearch className={`${iconClass} text-2xl`} />
        </div>

        {/* Cart */}
        <NavLink to="/Cart">
          <MdOutlineShoppingCart
            className={`${iconClass} text-2xl sm:text-3xl hover:scale-110 transition`}
          />
        </NavLink>

        {/* Settings */}
        <div onClick={handleSettingsClick}>
          <MdSettings
            className={`${iconClass} text-2xl sm:text-3xl hover:scale-110 transition`}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;