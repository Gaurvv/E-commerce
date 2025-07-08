import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function NavBar() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3 shadow-lg rounded-b-3xl">
        <div className="flex items-center space-x-4">
          <div className="bg-white w-12 h-12 rounded-full shadow-md overflow-hidden">
            <img
              src="org.jpg"
              alt="logo"
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
          <span className="text-3xl font-bold text-white tracking-wide cursor-pointer font-serif">
            PIZZA
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Search pizzas..."
              className="rounded-full pl-4 pr-10 py-2 w-64 text-black bg-white shadow-md outline-none border-none focus:ring-2 focus:ring-green-500 transition"
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-600" />
          </div>

          <MdOutlineShoppingCart className="text-3xl text-white hover:scale-110 transition cursor-pointer" />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
            onClick={() => setShowPopup(true)}
          >
            Sign In
          </button>
        </div>

        <IoMdMenu className="sm:hidden text-4xl text-white cursor-pointer" />
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent  backdrop-blur-xs   ">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-96 relative">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-500"
              onClick={() => setShowPopup(false)}
            >
              <IoMdClose />
            </button>
            <h2 className="  bg-green-500 mt-4  text-white justify-center items-center  ml-auto mr-auto rounded-3xl  h-14 flex w-full  text-2xl  font-bold mb-5 text-center">SIGN IN </h2>
            <input
              type="text"
              placeholder="Enter UserName"
              className="   w-full mb-3 px-4 py-4 border rounded-3xl outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="password"
              placeholder=" Enter Password"
              className="w-full mb-4 px-4 py-4 border rounded-2xl outline-none focus:ring-2 focus:ring-orange-400"
            />
             <p  className="flex justify-center items-center pb-2  font-bold "  >or login with </p>
              <ul  className="  flex gap-5  pb-5 justify-center items-center text-2xl   " >
                <li className= "  hover:cursor-pointer  bg-orange-500    w-10 h-8 rounded-[5px]  flex justify-center items-center  text-white  "  ><FaGoogle /></li>
                <li  className= " hoevr:cursor-pointer  bg-orange-500    w-10 h-8 rounded-[5px]  flex justify-center items-center text-white  hover:cursor-pointer  "  ><FaGithub /></li>
              </ul>

            <button className="  uppercase text-white  w-full bg-green-600 hover:bg-orange-500 hover:cursor-pointer  font-bold py-4 rounded-3xl transition">
              Login
            </button>
            <p  className=" pt-3 flex  gap-2 justify-center items-center" >don't have an account <a className="underline"  href="#">SignUp</a>  </p>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
