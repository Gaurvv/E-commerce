import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteUserAccount from "../../Components/API/Auth/deleteUserApi";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
    navigate("/");
  };

  const handleDelete = () => {
    setError("");
    deleteUserAccount(setError, () => {
      // On successful deletion, logout and redirect
      handleLogout();
    });
  };

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <div className="text-gray-700 font-bold text-xl italic ">Delete Account</div>
        <div
          className="w-fit border border-red-300 bg-red-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-red-300 hover:shadow-xl hover:shadow-red-700/50 hover:border-red-700 hover:bg-red-700 cursor-pointer"
          onClick={handleDelete}
        >
          Delete Account
        </div>
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">
        <div className="text-gray-700 font-bold text-xl italic ">Log Out</div>
        <div
          className="w-fit border border-gray-300 bg-gray-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-700/50 hover:border-gray-700 hover:bg-gray-700 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
