const addToCart = (productData)=> {
    let localData = localStorage.getItem('cart');
    
    if (localData==null) {
        let tempArr = [];
        tempArr.push(productData)
        localStorage.setItem('cart', JSON.stringify(tempArr))
        
    }
    else{
        let tempArr = JSON.parse(localStorage.getItem('cart'));
        tempArr.push(productData)
        localStorage.setItem('cart', JSON.stringify(tempArr))
    }
    
};

export default addToCart;