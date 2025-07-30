import React, { useEffect, useState } from "react";
import totalAmount from "./CustomFunction/TotalAmount";
import UserDetails from "./Modal/UserDetails";

const tdClass = "border border-gray-300 p-2 text-center";
const tdClassLeft = "border border-gray-300 p-2 text-left";

const CheckOutModal = ({ visible, setVisible }) => {
  const [cartData, setCartData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(data);
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        className="  shadow-lg fixed inset-0 backdrop-blur-sm bg-opacity-30 flex items-center justify-center z-50"
        onClick={() => setVisible(false)}
      >
        <div
          className="bg-white rounded-2xl p-4 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-bold mb-4 text-black">Checkout</h2>

          <table className="w-full text-sm mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className={tdClassLeft}>Item</th>
                <th className={tdClass}>Qty</th>
                <th className={tdClass}>Price</th>
                <th className={tdClass}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map(({ name, quantity, caloriesPerServing }, index) => {
                const total = Number(quantity) * Number(caloriesPerServing);
                return (
                  <tr key={index}>
                    <td className={tdClassLeft}>{name}</td>
                    <td className={tdClass}>{quantity}</td>
                    <td className={tdClass}>{caloriesPerServing}</td>
                    <td className={tdClass}>{total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="text-right font-semibold text-black border-t pt-2 mb-6">
            Total: {totalAmount(cartData)} cal
          </div>
          <UserDetails />
        </div>
      </div>
    </>
  );
};

export default CheckOutModal;
