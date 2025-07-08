import React from "react";

function Chef() {

const chefs = [
  {
    id:1,
    img:" jhallu.jpg ",
    title:"Rachit Tiwari",
    desc:"Non-veg pizza specialist",
  },
    {
      id:2,
    img:" .jpg ",
    title:"Kavreli samdhi",
    desc:"all rounder",
  },
    {
      od:3,
    img:" dona.jpg ",
    title:"Sushant Tiwari",
    desc:"Veg pizza specialist",
  }
]

  return (
    <>
      <div   className=" uppercase bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        our chefs
      </div>   

      <div className="flex justify-center mt-20 gap-10    ">

       {
        chefs.map((items) => (
          <div   id={items.id} className="bg-red-500 w-90   pb-20 rounded-2xl h-[70vh] flex justify-center items-center"  >
          <img src={items.img} alt=""  className="  rounded-2xl  h-full w-full object-cover"  />
           
          </div>
        ))
       }

         

      </div>




    </>
  );
}

export default Chef;
