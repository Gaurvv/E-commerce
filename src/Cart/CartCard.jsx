import React from "react";
import removeFromCart from "../Components/Local Storage/removeFromCart";
import { useState } from "react";
import Quantity from "./Quantity";
import { useEffect } from "react";

function CartCard({ item, setItem }) {
  const [clear, setClear] = useState(1);

  const [count, setCount] = useState(item.quantity || 1);

  const updateLocalStorage = (newQty) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: newQty };
      }
      return cartItem;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    setItem(cart);
  };

  const Add = () => {
    const newQty = count + 1;
    setCount(newQty);
    updateLocalStorage(newQty);
  };

  const Sub = () => {
    if (count > 1) {
      const newQty = count - 1;
      setCount(newQty);
      updateLocalStorage(newQty);
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center p-5 mt-6 mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={item.image}
          alt={item.pName}
          className="h-32 w-32 object-cover rounded-xl shadow-md border-2 border-gray-100 transform transition-transform duration-200 hover:scale-105"
        />
      </div>

      <div className="flex-grow text-center md:text-left text-gray-800 space-y-1 md:space-y-2 mb-4 md:mb-0">
        <p className="text-2xl font-bold text-gray-800">{item.productName}</p>
        <p className="text-md text-gray-600">
          Category:{" "}
          <span className="font-semibold">
            {item.category || "Not Specified"}
          </span>
        </p>
        <p className="text-lg text-gray-700">
          Price:{" "}
          <span className="font-bold text-green-600">
            $ {item.price * item.quantity}
          </span>
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 mb-4 md:mb-0 md:mr-6">
        <p className="text-lg text-gray-700 font-semibold mr-2">Quantity:</p>
        <button
          onClick={Sub}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-xl"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <div className="w-12 text-center border border-gray-300 bg-gray-50 text-gray-800 font-semibold py-2 rounded-md">
          <Quantity quantity={item?.quantity} />
        </div>
        <button
          onClick={Add}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-xl"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="flex-shrink-0 flex flex-col items-center md:items-end space-y-3">
        <button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
          Order Now
        </button>
        <button
          onClick={() => removeFromCart(item, setItem)}
          className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;
