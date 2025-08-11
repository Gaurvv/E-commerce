
import SecureFetch from '../API/Auth/ApiConfiguration'
import mainEndPoint from '../API/Auth/mainEndPoint';

const addOrderApi = async (orderData, navigate) => {
  const request = await SecureFetch(
    mainEndPoint + "order",
    "POST",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    orderData
  );
  if (request.status == 200) {
    alert("Order placed Sucessfully");
    localStorage.removeItem("cart");
    navigate("/");
  } else {
    alert("Something went wrong please try again");
  }
};
export default addOrderApi;