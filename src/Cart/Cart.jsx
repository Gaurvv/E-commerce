import React, { useState, useEffect } from 'react';
import NavBar from '../Components/Navbar/NavBar';
import CartCard from './CartCard';
import OrangeButton from '../Components/OrangeButton';
import totalAmount from '../Components/CustomFunction/TotalAmount';
import CheckOutModal from '../Components/CheckOutModal';

function Cart() {
   const[visible, setVisible] = useState(false)

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
     <div className="flex  justify-end  mt-5    ">
      <div className=" text-2xl text-orange-500  " >  total Amount: ${totalAmount(local)}
      <div   className=""> <OrangeButton  title={"CheckOut"} onClick={()=> setVisible(true)}  />  </div></div>
     </div>
     </div>
     {
     visible && (
     <CheckOutModal  visible = {visible} setVisible={setVisible} />
     )
}
    </>
  );
}

export default Cart;
