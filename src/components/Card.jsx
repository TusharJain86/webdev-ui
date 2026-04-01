import React from "react";

const Card = ({ title, value, children }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>

      {/* extra content */}
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default Card;