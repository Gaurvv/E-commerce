import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/NavBar';
import CartCard from './CartCard';

function Cart() {
  const [local, setLocal] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setLocal(JSON.parse(storedCart));
    }
  }, []); // 

  return (
    <div>
      <NavBar />

      {local.length > 0 ? (
        local.map((item, index) => (
          <CartCard item={item} key={index} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-10 text-xl">🛒 Your cart is empty</div>
      )}
    </div>
  );
}

export default Cart;
