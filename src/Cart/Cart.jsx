import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/NavBar';
import CartCard from './CartCard';
import OrangeButton from '../Components/OrangeButton';
import totalAmount from '../Components/CustomFunction/TotalAmount';

function Cart() {
  const data = localStorage.getItem('cart')

  const [local, setLocal] = useState(JSON.parse(data));
  
  
   




  return (
    <>
    <div>
      <NavBar />

      {local.length > 0 ? (
        local.map((item, index) => (
          <CartCard item={item} setItem={setLocal} key={index} />
        ))
      ) : (
        <div className="text-center text-gray-500 mt-10 text-xl">🛒 Your cart is empty</div>
      )}
    </div>
    <div className="border-t-3 w-[60%] ml-auto mr-auto  mt-5  ">
     <div className="flex  justify-end  mt-8    ">
      <div className=" text-2xl text-orange-500  " >  total Amount: ${totalAmount(local)}
      <div   className=""> <OrangeButton  title={"CheckOut"} />  </div></div>
     </div>
     </div>

    </>
  );
}

export default Cart;
