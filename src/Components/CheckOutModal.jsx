import React from 'react';

const CheckOutModal = ({ visible, setVisible }) => {
  if (!visible) return null;


  
  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white dark:bg-gray-900 w-full max-w-3xl mx-auto p-8 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Checkout</h1>

        
        <div className="mb-6   ">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Shipping Address</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">First Name</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">Last Name</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-white mb-1">Address</label>
            <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 dark:text-white mb-1">City</label>
            <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">State</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">ZIP Code</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Payment Information</h2>
          <div className="mt-4">
            <label className="block text-gray-700 dark:text-white mb-1">Card Number</label>
            <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white mb-1">CVV</label>
              <input type="text" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-800"
            
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
