import React, { useRef, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart, MdSettings } from "react-icons/md";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [role, setRole] = useState(localStorage.getItem("role"));
  const [searchInput, setSearchInput] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    // Update role if it changes in localStorage
    const handleStorageChange = () => {
      setRole(localStorage.getItem("role"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // On URL search param change, update local input state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search") || "";
    setSearchInput(search);
  }, [location.search]);

  // Update URL search param on input change
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchInput(val);

    const params = new URLSearchParams(location.search);

    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }

    // Push new URL with updated search param, keeps other params intact
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  // When search bar focused, scroll to menu (handled inside Categories too for URL change)
  const handleSearchFocus = () => {
    const menuSection = document.getElementById("explore-menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const iconClass =
    "text-gray-700 hover:text-gray-900 transition cursor-pointer";

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-100 px-3 sm:px-6 py-2 sm:py-3 shadow-md relative">
      {/* Left */}
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

      {/* Right */}
      <div className="flex items-center space-x-3 sm:space-x-5">
        {/* Search Input - visible on md+ */}
        <div className="hidden md:flex relative w-36 sm:w-64">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search Foods ..."
            value={searchInput}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            className="rounded-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-1 sm:py-2 text-sm sm:text-base text-gray-800 bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-gray-400 transition w-full"
          />
          <IoSearch className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Search icon for small screens */}
        <div className="md:hidden">
          <IoSearch
            className={`${iconClass} text-2xl`}
            onClick={() => {
              // Focus search input on small screens or you can implement a modal search here
              if (searchInputRef.current) {
                searchInputRef.current.focus();
              }
            }}
          />
        </div>

        <NavLink to="/cart">
          <MdOutlineShoppingCart
            className={`${iconClass} text-2xl sm:text-3xl hover:scale-110 transition`}
          />
        </NavLink>

        <div onClick={handleSettingsClick}>
          <MdSettings
            className={`${iconClass} text-2xl sm:text-3xl hover:scale-110 transition`}
          />
        </div>

        {/* Dashboard button only for admin */}
        {role?.toLowerCase() === "admin" && (
          <NavLink to="/dashboard">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-md transition transform hover:scale-105">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default NavBar;
