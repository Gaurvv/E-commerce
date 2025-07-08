import React from "react";

function Chef() {
  return (
    <>
      <div className=" uppercase bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        our chefs
      </div>

      <div className=" mt-15 flex justify-center items-center  ml-auto mr-auto gap-30   ">
        <img
          src="dona.jpg"
          alt="manrash-pic"
          className="   w-60 h-80 object-cover rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 "
        />

        <img
          src="jhallu.jpg"
          alt="jhallu-pic"
          className="  w-60 h-80 object-cover rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 "
        />

        <img
          src="samdhi.jpg"
          alt="samdhi-pic"
          className="  w-60 h-80 object-cover rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105  "
        />
      </div>

      <div className="text-2xl mt-5 font-bold  ">
        <ul className="flex gap-62  justify-center ml-auto mr-auto  ">
          <li className=" ">Dona Chef</li>
          <li>Rachit Chef</li>
          <li>Kavreli Chef</li>
        </ul>
      </div>
    </>
  );
}

export default Chef;
