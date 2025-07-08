import React from "react";

function Chef() {
  const chefs = [
    {
      id: 1,
      img: "jhallu.jpg",
      title: "Rachit Tiwari",
      desc: "Non-veg pizza specialist",
    },
    {
      id: 2,
      img: "manrash.jpg",
      title: "Kavreli Samdhi",
      desc: "All-rounder",
    },
    {
      id: 3,
      img: "dona.jpg",
      title: "Sushant Tiwari",
      desc: "Veg pizza specialist",
    },
  ];

  return (
    <>
      {/* Section Heading */}
      <div className="uppercase bg-gradient-to-r from-[#FF6F00] to-[#FFA726] max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        Our Chefs
      </div>

      {/* Flex Container */}
      <div className="flex flex-wrap justify-center gap-10 mt-16 px-4">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="w-100 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center"
          >
            <img
              src={chef.img}
              alt={chef.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-bold text-[#2E7D32] font-serif">
              {chef.title}
            </h3>
            <p className="text-gray-600 font-serif text-center">
              {chef.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Chef;
