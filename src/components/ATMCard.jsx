import React from "react";

const ATMCard = ({status, accountNumber, number, expiry, cvv, }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl p-6 w-80 shadow-lg">

      {/* TOP SECTION */}
      <div className="flex justify-between items-start">

        {/* WIFI ICON */}
        <span className="text-xl">📶</span>

        {/* STATUS */}
        <span className=""></span>
      </div>

      {/* CARD NUMBER */}
      <div className="mt-6">
        <p className="text-sm text-gray-300">Account Number</p>
        <p className="text-lg tracking-widest font-semibold">
          {accountNumber}
        </p>
      </div>

      {/* MAIN NUMBER */}
      <p className="text-2xl tracking-[4px] mt-4 font-bold">
        {number}
      </p>

      {/* BOTTOM SECTION */}
      <div className="flex justify-between mt-6 text-sm">

        <div>
          <p className="text-gray-300">EXP</p>
          <p>{expiry}</p>
        </div>

        <div>
          <p className="text-gray-300">CVV</p>
          <p>{cvv}</p>
        </div>

      </div>
    </div>
  );
};

export default ATMCard;