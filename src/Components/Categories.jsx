import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import Chef from './Chef';
import ProductModal from './Modal/ProductModal';

const Categories = () => {
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  



  

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
    if (!exists) {
      setCartItems(prevCartItems => [...prevCartItems, item]);
      console.log("Item added:", item.name);
    } else {
      console.log("Already in cart:", item.name);
    }
  };

  const categories = [
    { name: "Soft Drinks", image: "https://i5.walmartimages.com/seo/Coca-Cola-Sprite-Soft-Drink-12-Oz-Can-24-PK_4b6c5e01-1e94-4abb-a41a-8ba23d2c65ab.0e9fe0c63f0259a5813b9d9686269dfc.jpeg" },
    { name: "Hard Drinks", image: "https://cheers.com.np/uploads/products/02720948331757621247044276918793046374483267.png" },
    { name: "Snacks", image: "https://www.allrecipes.com/thmb/Abdqr-LSh-3MFM5VlKOphxA98fQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/87605-original-chex-party-mix-ddmfs-001-4x3-2a4d9811d7fd489da2e87408676eb185.jpg" },
    { name: "Desserts", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=60" },
    { name: "Fast Food", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfTyKiKOaifAdMwtibhG3I4czAMK8YQOMJg&s" },
    { name: "Salads", image: "https://www.tasteofhome.com/wp-content/uploads/2025/02/Favorite-Mediterranean-Salad_EXPS_TOHcom25_41556_MD_P2_02_05_1b.jpg?w=892" },
    { name: "Pasta", image: "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/roasted-tomato-sauce-portion-800x1200.jpg" },
  ];

  return (
    <>
      {/* Category Heading */}
      <div className="uppercase bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-10 shadow-md">
        Categories
      </div>

      {/* Cart Count */}
      <div className="text-center mt-4 text-orange-600 font-bold text-lg">
        🛒 Cart: {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
      </div>

      {/* Category List */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-8 px-4">
        {categories.map((cat, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={cat.image}
              alt={cat.name}
              className="rounded-full w-28 h-28 object-cover shadow-lg"
            />
            <p className="mt-3 text-lg font-semibold text-orange-800">{cat.name}</p>
          </div>
        ))}
      </div>

     
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 max-w-lg mx-auto h-14 flex items-center justify-center rounded-2xl text-white text-2xl sm:text-3xl font-serif font-bold mt-16 shadow-md">
        Explore Our Menu
      </div>

      
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 sm:px-6 lg:px-8">
        {productData.length === 0 ? (
          <p className="text-center text-lg text-gray-500">Loading recipes...</p>
        ) : (
          productData.map((item) => {
            const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedProduct(item);
                  setShowModal(true);
                }}
                className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] bg-gradient-to-b from-orange-600 to-orange-400 rounded-2xl shadow-2xl overflow-hidden transition hover:scale-[1.01] cursor-pointer"
                style={{ minWidth: '160px', height: '420px' }}
              >
                <img src={item.image} alt={item.name} className="w-full h-44 object-cover" />
                <div className="p-4 flex flex-col justify-between h-[calc(100%-176px)]">
                  <div>
                    <h2 className="text-white text-lg font-semibold mb-1 font-serif">{item.name}</h2>
                    <p className="text-white text-sm font-serif mb-2 line-clamp-2">{item.instructions}</p>
                    <p className="text-white font-bold text-base font-serif">🍕 {item.cuisine}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className={`mt-4 w-full flex items-center justify-center gap-2 rounded-2xl h-10 text-white font-bold text-sm font-serif transition-transform hover:scale-110
                      ${isInCart ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}`}
                    disabled={isInCart} 
                  >
                    <FiShoppingCart 
                      cartItem = {  cartItems  }
                      onClick={()=> { setCartItems(true), addItemToCart();  } }
                    
                     className="text-base" />
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <Chef />

      {showModal && selectedProduct && (
        <ProductModal
        addItemToCart={addItemToCart}
           cartItems = { cartItems  }
           setCartItems = {  setCartItems  }
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