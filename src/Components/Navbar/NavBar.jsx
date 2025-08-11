import React, { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdSettings } from "react-icons/md";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract current search from URL params (optional, for controlled input)
  const urlSearchParams = new URLSearchParams(location.search);
  const currentSearch = urlSearchParams.get("search") || "";

  const handleFocus = () => {
    // Scroll smoothly to the menu section (Categories) by id
    const menuSection = document.getElementById("explore-menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    const params = new URLSearchParams(location.search);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-100 px-3 sm:px-6 py-2 sm:py-3 shadow-md relative">
      {/* Left */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="bg-white w-9 h-9 sm:w-12 sm:h-12 rounded-full shadow-md overflow-hidden">
          <img src="org.jpg" alt="logo" className="w-full h-full object-cover cursor-pointer" />
        </div>
        <NavLink to="/">
          <span className="text-xl sm:text-3xl font-bold text-gray-900 tracking-wide cursor-pointer font-serif">
            FOOD
          </span>
        </NavLink>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-3 sm:space-x-5">
        {/* Search */}
        <div className="hidden md:flex relative w-36 sm:w-64">
          <input
            type="text"
            placeholder="Search Foods ..."
            className="rounded-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-1 sm:py-2 text-sm sm:text-base text-gray-800 bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-gray-400 transition w-full"
            onFocus={handleFocus}
            onChange={handleSearchChange}
            value={currentSearch}
          />
          <IoSearch className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <div className="md:hidden">
          <IoSearch className="text-gray-700 hover:text-gray-900 transition cursor-pointer text-2xl" />
        </div>

        <NavLink to="/cart">
          <MdOutlineShoppingCart className="text-gray-700 hover:text-gray-900 transition cursor-pointer text-2xl sm:text-3xl hover:scale-110 transition" />
        </NavLink>

        <div onClick={() => navigate("/settings")}>
          <MdSettings className="text-gray-700 hover:text-gray-900 transition cursor-pointer text-2xl sm:text-3xl hover:scale-110 transition" />
        </div>

        {/* Show Dashboard if admin */}
        {/* ... your existing admin code */}
      </div>
    </div>
  );
}

export default NavBar;
