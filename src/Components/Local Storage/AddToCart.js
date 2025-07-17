const addToCart = (productData) => {
  productData.quantity = 1;

  let localData = localStorage.getItem('cart');

  if (localData === null) {
    let tempArr = [];
    tempArr.push(productData);
    localStorage.setItem('cart', JSON.stringify(tempArr));
  } else {
    let tempArr = JSON.parse(localData);
    let itemExists = false;

    tempArr = tempArr.map(item => {
      if (item.id === productData.id) {
        item.quantity += 1;
        itemExists = true;
      }
      return item;
    });

    if (!itemExists) {
      tempArr.push(productData);
    }

    localStorage.setItem('cart', JSON.stringify(tempArr));
  }
};

export default addToCart;
