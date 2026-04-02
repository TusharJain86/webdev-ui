import React from "react";

const Card = ({ title, value, children, className}) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow relative ${className}`}>
      <h3 className="text-gray-500 text-md font-bold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>

      {/* top right side options */}
      <div className=" absolute top-4 right-4 bg-white px-3 py-1 font-black rounded-full text-sm shadow cursor-pointer hover:bg-gray-700 hover:text-white transition">
        <span className='font-bold'>i</span>
      </div>

      {/* extra content */}
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default Card;