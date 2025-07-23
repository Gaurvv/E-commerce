import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import Chef from './Chef';
import ProductModal from './Modal/ProductModal';
import addToCart from './Local Storage/AddToCart';

const Categories = () => {
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        if (res.status === 200) {
          setProductData(data.recipes);
        } else {
          console.error("Failed to fetch recipes.");
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const exists = cartItems.find(product => product.id === item.id);
    if (exists) {
      setCartItems(prevCartItems =>
        prevCartItems.map(product =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
      addToCart({ ...item, quantity: exists.quantity + 1 });
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...item, quantity: 1 }]);
      addToCart({ ...item, quantity: 1 });
    }
  };

  const mealTypeSet = new Set();

  productData.forEach(item => {
    if (Array.isArray(item.mealType)) {
      item.mealType.forEach(type => mealTypeSet.add(type));
    } else if (item.mealType) {
      mealTypeSet.add(item.mealType);
    }
  });

  const dynamicCategories = ["All", ...Array.from(mealTypeSet)];

  const categoryImages = {
  All: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
  Lunch: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=500&q=80",
  Dinner: "https://images.unsplash.com/photo-1543352634-3f209f7ae7a7?auto=format&fit=crop&w=500&q=80",
  Snack: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
  Dessert: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  Breakfast: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
};


  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter(item =>
          Array.isArray(item.mealType)
            ? item.mealType.includes(selectedCategory)
            : item.mealType === selectedCategory
        );

  return (
    <>
      <div className="uppercase bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-10 shadow-md">
        Categories
      </div>

      <div className="text-center mt-4 text-orange-600 font-bold text-lg">
        🛒 Cart: {cartItems.reduce((acc, item) => acc + item.quantity, 0)} item{cartItems.reduce((acc, item) => acc + item.quantity, 0) !== 1 ? 's' : ''}
      </div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-6 px-4">
        {dynamicCategories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedCategory(cat)}
          >
            <div
              className={`rounded-full w-28 h-28 bg-orange-200 flex items-center justify-center shadow-lg border-4 transition-all duration-300 overflow-hidden ${
                selectedCategory === cat ? 'border-green-500 scale-105' : 'border-transparent'
              }`}
            >
              <img
                src={categoryImages[cat] || categoryImages["All"]}
                alt={cat}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-lg font-semibold text-orange-800">{cat}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        Explore Our Menu
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500"></p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] bg-gradient-to-b from-orange-600 to-orange-400 rounded-2xl shadow-2xl overflow-hidden transition hover:scale-[1.01] cursor-pointer"
              style={{ minWidth: '160px', height: '440px' }}
            >
              <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
              <div className="p-4 flex flex-col justify-between h-[calc(100%-176px)]">
                <div>
                  <h2 className="text-white text-lg font-semibold mb-1 font-serif">{item.name}</h2>
                  <p className="text-white text-sm font-serif mb-2 line-clamp-2">{item.instructions}</p>
                  <p className="text-white font-bold text-base font-serif">🍕 {item.cuisine}</p>
                  <p className="text-white font-medium text-sm font-serif mt-1">🍽️ {Array.isArray(item.mealType) ? item.mealType.join(', ') : item.mealType}</p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl h-10 text-white font-bold text-sm font-serif transition-transform hover:scale-110 bg-green-500"
                >
                  <FiShoppingCart className="text-base" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Chef />

      {showModal && selectedProduct && (
        <ProductModal
          addItemToCart={handleAddToCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          item={selectedProduct}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
        />
      )}
    </>
  );
};

export default Categories;
