const generateCartItem = (cartData ) => {
    console.log(cartData);
    const tempArray = [];
    cartData.map((item)=> {
        tempArray.push({itemName: item.productName, quantity: item.quantity })
    });
    return tempArray;

};
export  default  generateCartItem;