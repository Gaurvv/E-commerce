import { useEffect } from "react";
import SecureFetch from "./Components/API/Auth/ApiConfiguration";
import { useState } from "react";
import { Outlet } from "react-router";
import mainEndPoint from "./Components/API/Auth/mainEndPoint";
import MainAuth from "./Components/Authentication/MainAuth";

const Hoome = () => {
  const [mainData, setMainData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await SecureFetch( mainEndPoint + "/products", "GET", {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });

      const resData = await response.json();
      if (response.status === 200) {
        setMainData(resData.data); 
      }
    };

    if (token) {
      fetchProductData();
    }
  }, [token]);

  return (
    <div className="h-[100vh]">
      {token ? <Outlet context={mainData} /> : <MainAuth />}
    </div>
  );
};

export default Hoome;