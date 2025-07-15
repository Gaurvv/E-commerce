import React from 'react';
import {MdDeleteForever} from 'react-icons/md'


function CartCard({ item }) {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-gradient-to-r from-orange-600 to-orange-400 mt-5 rounded-2xl flex items-center p-4 shadow-lg mx-auto">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 object-cover rounded-xl shadow-md"
      />
      <div className="ml-6 text-white text-base md:text-lg font-semibold space-y-1">
        <p>{item.name}</p>
        <p>Cuisine: {item.cuisine || 1}</p>
        <p>Price: ${item.caloriesPerServing}</p>
        
      </div>
     
      <button className=' hover:cursor-pointer hover:scale-105 shadow-lg  text-white flex bg-green-500 h-10  w-30 justify-center  items-center  mb-auto rounded-2xl ml-auto mt-auto    ' >Order Now</button>

     
    </div>
    
  );
}

export default CartCard;
