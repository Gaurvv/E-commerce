import React from "react";

function ProductModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-orange-500 w-[90%] sm:w-[70%] md:w-[60%] h-[75vh] rounded-2xl overflow-hidden relative shadow-2xl flex flex-col sm:flex-row">
        
        {/* Image */}
        <div className="w-full sm:w-1/2 h-60 sm:h-full">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="w-full sm:w-1/2 p-6 flex flex-col gap-4 overflow-y-auto">
          <h1 className="text-white text-3xl font-bold">{item.name}</h1>
          <p className="text-white text-base">{item.instructions}</p>
          <p className="text-white text-lg"> Cuisine: <span className="font-semibold">{item.cuisine}</span></p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-auto bg-white text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
