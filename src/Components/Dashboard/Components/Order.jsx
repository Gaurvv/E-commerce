import React from "react";
import getOrderApi from "../../order/getOrderApi";
import { useState } from "react";
import OrderCard from "./OrderCard";

const Order = ({Order}) => {
  return <>
    {Order.map((orderData)=>(
      <OrderCard data={orderData}/>
    ))}
  </>;
};

export default Order;