const totalAmount = (cartData) => {
  let totalAmount = 0;
  cartData.forEach(
    (item) =>
      (totalAmount = totalAmount + Number(item.price) * Number(item.quantity)) 
  ) 
  return totalAmount;
};
export default totalAmount;
