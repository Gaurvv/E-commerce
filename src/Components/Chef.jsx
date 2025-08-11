  import React from "react";

  function Chef() {
    const chefs = [
      {
        id: 1,
        img: "jhallu.jpg",
        title: "Rachit Tiwari",
        desc: "Non-veg specialist",
      },
      {
        id: 2,
        img: "manrash.jpg",
        title: "Prashant Sunar",
        desc: "All-rounder",
      },
      {
        id: 3,
        img: "dona.jpg",
        title: "Sushant Tiwari",
        desc: "Veg specialist",
      },
    ];

    return (
      <>
        {/* Section Heading - The existing styling already matches the new theme */}
        <div className="uppercase max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-gray-900 text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
          Our Chefs
        </div>

        {/* Flex Container */}
        <div className="flex flex-wrap justify-center gap-10 mt-16 px-4">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              // Updated card styling to use a consistent white background
              className="w-100 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col items-center"
            >
              <img
                src={chef.img}
                alt={chef.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              {/* Updated font color to match the rest of the site */}
              <h3 className="text-xl font-bold text-gray-900 font-serif">
                {chef.title}
              </h3>
              {/* Kept text color as it already fits the theme */}
              <p className="text-gray-700 font-serif text-center">
                {chef.desc}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }

  export default Chef;
