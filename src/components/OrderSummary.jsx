import React from "react";

function OrderSummary({ total, items }) {

  return (

    <div className="bg-white dark:bg-gray-800 border-[1px] border-red-300 dark:border-gray-600 shadow-lg rounded-xl p-6 lg:sticky lg:top-20">

      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Order Summary
      </h2>

      <div className="flex justify-between mb-3">

        <span className="text-gray-600 dark:text-gray-300">
          Items
        </span>

        <span className="font-semibold dark:text-gray-400">
          {items}
        </span>

      </div>

      <div className="flex justify-between mb-4">

        <span className="text-gray-600 dark:text-gray-300">
          Total
        </span>

        <span className="text-lg font-bold text-blue-600">
          ${total.toFixed(2)}
        </span>

      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition">
        Order Now
      </button>

    </div>

  );

}

export default OrderSummary;