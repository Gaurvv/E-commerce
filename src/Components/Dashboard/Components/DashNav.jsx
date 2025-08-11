import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";

const DashNav = ({ activeScreen, setActiveScreen }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[15%] bg-orange-300 p-2 space-y-4">
      <div
        className={`flex items-center gap-3 p-2 bg-orange-400 text-white rounded-md border border-orange-400 hover:border-orange-50 hover:shadow-sm font-medium hover:shadow-white ${
          activeScreen == 1 && "bg-orange-500 shadow-md shadow-orange-100/50"
        }`}
        onClick={() => setActiveScreen(1)}
      >
        <RiDashboardFill />
        <span>Dashboard</span>
      </div>
      <div
        className={`flex items-center gap-3 p-2 bg-orange-400 text-white rounded-md border border-orange-400 hover:border-orange-50 hover:shadow-sm font-medium hover:shadow-white ${
          activeScreen == 2 && "bg-orange-500 shadow-md shadow-orange-100/50"
        }`}
        onClick={() => setActiveScreen(2)}
      >
        <RiDashboardFill />
        <span>Order</span>
      </div>

      <div
        className={`flex items-center gap-3 p-2 bg-orange-400 text-white rounded-md border border-orange-400 hover:border-orange-50 hover:shadow-sm font-medium hover:shadow-white ${
          activeScreen == 3 && "bg-orange-500 shadow-md shadow-orange-100/50"
        }`}
        onClick={() => navigate("/AddProd")}
      >
        <RiDashboardFill />
        <span>Add Product</span>
      </div>
      <div
        className={`flex items-center gap-3 p-2 bg-orange-400 text-white rounded-md border border-orange-400 hover:border-orange-50 hover:shadow-sm font-medium hover:shadow-white ${
          activeScreen == 3 && "bg-orange-500 shadow-md shadow-orange-100/50"
        }`}
        onClick={() => navigate("/")}
      >
        <FaHome />
        <span>Home </span>
      </div>
    </div>
  );
};

export default DashNav;
