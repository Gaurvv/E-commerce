import React from "react";
import { LuDot } from "react-icons/lu";

const OrderCard = ({ data }) => {
  return (
    <div className="border  h-fit p-3 rounded-md bg-sky-100 w-60 text-gray-600 text-xs font-medium">
      <div className="flex flex-col items-center gap-2 ">
        <div className="text-sm font-semibold italic text-gray-900">
          Customer Details
        </div>
        <div className="text-xs flex justify-between gap-7 w-full font-medium">
          <p>{data.cName}</p> <p>{data.contactNumber}</p>
        </div>
        <div className="flex justify-between w-full">
          <p>
            {/* <span>City : </span> */}
            <span>{data.city}</span>
          </p>
          <p>
            {/* <span>Street : </span> */}
            <span>{data.street}</span>
          </p>
        </div>
        <div className="w-full">
          <p>Delivery Details: </p>
          <p>{data.deliveryDescription}</p>
        </div>
      </div>
      <div className=" flex flex-col items-center mt-5 gap-2">
        <div className="text-sm font-semibold italic text-gray-900">Items</div>
        <div className="flex w-full">
          <p>Total Amount =</p>
          <p>{data.totalAmount}</p>
        </div>
        <div className="w-full">
          {data.items.map((item) => (
            <div className="flex w-full justify-between">
              <div className="flex gap-1">
                <LuDot />
                <p>{item.itemName}</p>
              </div>
              <div>{item.quantity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;