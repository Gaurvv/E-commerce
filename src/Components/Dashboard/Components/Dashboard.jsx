import React from "react";
import Order from "./Order";

const Dashboard = ({orderData, productData}) => {
  return (
    <div className=" flex-1 flex p-4 flex-wrap justify-center gap-8">
      <div className="border p-3 rounded-lg border-gray-500 h-fit bg-sky-200 text-lg font-semibold  text-gray-700 flex flex-col items-center w-40">
        <p>No of Products:</p>
        <p className="text-xl text-gray-800 font-bold">{productData.length}</p>
      </div>
      <div className="border p-3 rounded-lg border-gray-500 h-fit bg-sky-200 text-lg font-semibold  text-gray-700 flex flex-col items-center w-40">
        <p>No of Order:</p>
        <p className="text-xl text-gray-800 font-bold">{orderData.length}</p>
      </div>
      <div className="border p-3 rounded-lg border-gray-500 h-fit bg-sky-200 text-lg font-semibold  text-gray-700 flex flex-col items-center w-40">
        <p>Total Sales:</p>
        <p className="text-xl text-gray-800 font-bold">{10}</p>
      </div>
      <div className="border p-3 rounded-lg border-gray-500 h-fit bg-sky-200 text-lg font-semibold  text-gray-700 flex flex-col items-center w-40">
        <p>Pending Order:</p>
        <p className="text-xl text-gray-800 font-bold">{10}</p>
      </div>
    </div>
  );
};

export default Dashboard;
