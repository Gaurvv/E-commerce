const removeFromCart = (data, setItem) => {

     const cartData = JSON.parse(localStorage.getItem('cart'));
     const updatedData = cartData.filter((item)=> item.id != data.id);


    localStorage.setItem('cart', JSON.stringify(updatedData));  
    setItem(updatedData);



};

export default removeFromCart;