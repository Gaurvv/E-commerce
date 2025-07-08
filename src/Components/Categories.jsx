import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import Chef from './Chef'

const pizzas = [
  {
    title: "Mushroom Pizza",
    img: "mushroom.jpg",
    desc: "Fresh mushrooms, mozzarella & savory sauce on a golden crust.",
    price: "Rs. 399",
    type: "veg"
  },
  {
    title: "Spicy Chicken Pizza",
    img: "diablo.jpg",
    desc: "Juicy chicken, jalapeños & cheese with a fiery kick!",
    price: "Rs. 459",
    type: "non-veg"
  },
  {
    title: "Cheese Lovers",
    img: "pep.jpeg",
    desc: "Mozzarella, cheddar & parmesan — a cheese dream!",
    price: "Rs. 429",
    type: "non-veg"
  },
  {
    title: "Hawaiian Pizza",
    img: "mar.jpg",
    desc: "Pineapple, ham & cheese on a soft crust.",
    price: "Rs. 449",
    type: "non-veg"
  },
  {
    title: "Veggie Delight",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "non-veg"
  },
  {
    title: "Manrash Delight",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "non-veg"
  },
  {
    title: "Rachit Pizza",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "veg"
  },
  {
    title: "Rachit Pizza",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "veg"
  },
  {
    title: "Rachit Pizza",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "veg"
  },
  {
    title: "Rachit Pizza",
    img: "veg.jpg",
    desc: "Peppers, onions, olives, tomatoes & mozzarella.",
    price: "Rs. 389",
    type: "veg"
  }
];

function Categories() {
  return (
    <>
      {/* Top Section */}
      <div className="uppercase bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-10 shadow-md">
        Categories
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-35">
        {/* Non-Veg */}
        <div className="flex flex-col items-center">
          <img src="non-veg.jpg" className="rounded-full w-32 h-32 object-cover shadow-lg" alt="non-veg" />
          <p className="mt-3 text-lg font-semibold text-orange-800">Non-Veg Pizza</p>
        </div>

        {/* Veg */}
        <div className="flex flex-col items-center">
          <img src="veg.jpg" className="rounded-full w-32 h-32 object-cover shadow-lg" alt="veg" />
          <p className="mt-3 text-lg font-semibold text-green-500 ">Veg Pizza</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
          Explore Our Menu
        </div>

        {/* Veg Section */}
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-green-700 mt-10 mb-4 text-center">Veg Pizzas</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pizzas.filter(p => p.type === "veg").map((pizza, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] bg-gradient-to-b from-orange-600 to-orange-400 rounded-2xl shadow-2xl overflow-hidden transition hover:scale-[1.01]"
              style={{ minWidth: '160px' }}
            >
              <img src={pizza.img} alt={pizza.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h2 className="text-white text-lg font-semibold mb-1 font-serif">{pizza.title}</h2>
                <p className="text-white text-sm font-serif mb-2">{pizza.desc}</p>
                <p className="text-white font-bold text-base font-serif">{pizza.price}</p>
                <button className="mt-2 bg-green-500 w-full flex items-center justify-center gap-2 rounded-2xl h-10 text-white font-bold text-sm font-serif transition-transform hover:scale-110">
                  <FiShoppingCart className="text-base" />
                  Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Veg Section */}
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-orange-700 mt-14 mb-4 text-center">Non-Veg Pizzas</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {pizzas.filter(p => p.type === "non-veg").map((pizza, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] bg-gradient-to-b from-orange-600 to-orange-400 rounded-2xl shadow-2xl overflow-hidden transition hover:scale-[1.01]"
              style={{ minWidth: '160px' }}
            >
              <img src={pizza.img} alt={pizza.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h2 className="text-white text-lg font-semibold mb-1 font-serif">{pizza.title}</h2>
                <p className="text-white text-sm font-serif mb-2">{pizza.desc}</p>
                <p className="text-white font-bold text-base font-serif">{pizza.price}</p>
                <button className="mt-2 bg-orange-800 w-full flex items-center justify-center gap-2 rounded-2xl h-10 text-white font-bold text-sm font-serif transition-transform hover:scale-110">
                  <FiShoppingCart className="text-base" />
                  Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chef/>
    </>
  );
}

export default Categories;
