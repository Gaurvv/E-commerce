import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Chef from "./Chef";
import ProductModal from "./Modal/ProductModal";
import addToCart from "./Local Storage/AddToCart";

const Categories = () => {
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("http://localhost:3000/product");
        const data = await res.json();

        console.log("API Response:", data); // Debug log

        if (res.status === 200) {
          // Add id field for compatibility (MongoDB uses _id)
          const productsWithId = data.data.map((product) => ({
            ...product,
            id: product._id || product.id,
          }));

          setProductData(productsWithId);
          console.log("Products set:", productsWithId); // Debug log
        } else {
          console.error("Failed to fetch products:", data.message);
          setError("Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const exists = cartItems.find((product) => product.id === item._id);
    if (exists) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((product) =>
          product.id === item._id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
      addToCart({ ...item, quantity: exists.quantity + 1 });
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ]);
      addToCart({ ...item, quantity: 1 });
    }
  };

  // Define standard meal categories
  const standardCategories = ["All", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];
  
  const mealTypeSet = new Set();

  productData.forEach((item) => {
    if (Array.isArray(item.mealType)) {
      item.mealType.forEach((type) => mealTypeSet.add(type));
    } else if (item.mealType) {
      mealTypeSet.add(item.mealType);
    }
  });

  // Combine standard categories with any additional ones from the data
  const additionalCategories = Array.from(mealTypeSet).filter(
    (category) => !standardCategories.includes(category)
  );
  
  const dynamicCategories = [...standardCategories, ...additionalCategories];

  const categoryImages = {
    All: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
    Lunch:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=500&q=80",
    Dinner:
      "https://images.unsplash.com/photo-1543352634-3f209f7ae7a7?auto=format&fit=crop&w=500&q=80",
    Snack:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=80",
    Dessert:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
    Breakfast:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
  };

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((item) => {
          // Handle both array and string mealType formats
          if (Array.isArray(item.mealType)) {
            return item.mealType.some(type => 
              type.toLowerCase() === selectedCategory.toLowerCase()
            );
          } else if (item.mealType) {
            return item.mealType.toLowerCase() === selectedCategory.toLowerCase();
          } else if (item.category) {
            // Fallback to category field if mealType is not available
            return item.category.toLowerCase() === selectedCategory.toLowerCase();
          }
          return false;
        });

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-orange-600">Loading products...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="uppercase max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-gray-900 text-2xl sm:text-3xl font-serif font-bold mt-10 shadow-md">
        Categories
      </div>

      <div className="text-center mt-4 text-orange-600 font-bold text-lg">
        🛒 Cart: {cartItems.reduce((acc, item) => acc + item.quantity, 0)} item
        {cartItems.reduce((acc, item) => acc + item.quantity, 0) !== 1
          ? "s"
          : ""}
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
                selectedCategory === cat
                  ? "border-green-500 scale-105"
                  : "border-transparent"
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

      <div className="uppercase max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-gray-900 text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        Explore Our Menu
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            {productData.length === 0
              ? "No products available"
              : "No products found in this category"}
          </p>
        ) : (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProduct(item);
                setShowModal(true);
              }}
              className="w-full sm:w-[280px] md:w-[300px] lg:w-[280px] xl:w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
              style={{ height: "420px" }}
            >
              {/* Product Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={item.name || item.pName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col justify-between h-[calc(100%-208px)] bg-gray-50">
                <div className="space-y-3">
                  {/* Product Name */}
                  <h2 className="text-gray-800 text-lg font-bold font-serif line-clamp-1">
                    {item.productName || item.name || "Unnamed Product"}
                  </h2>

                  {/* Category */}
                  <div className="flex items-center">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full">
                      {Array.isArray(item.mealType) 
                        ? item.mealType.join(", ") 
                        : item.mealType || item.category || "Uncategorized"}
                    </span>
                    {/* Show additional category info if available */}
                    {item.features && (
                      <span className="ml-2 inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-200 rounded-full">
                        {item.features}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${item.price || "N/A"}
                    </span>
                    {item.rating && (
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="text-yellow-400 mr-1">⭐</span>
                        <span>{item.rating}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                  className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
                >
                  <FiShoppingCart className="text-lg" />
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
