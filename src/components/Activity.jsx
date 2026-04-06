import React from 'react'

const Activity = ({ title, amount, user, time, type }) => {

  const colors = {
  income: "bg-green-500 text-white",
  expense: "bg-red-400 text-black",
  };
  return (
    <div className={`bg-gray-500 mt-6 rounded-xl w-full shadow-lg hover:scale-101 transition p-4 ${colors[type]}`}>

      {/* TOP ROW */}
      <div className='flex justify-between'>
        <div>
          <p className='font-semibold text-2xl'>{title}</p>
        </div>

        <div className='text-right'>
          <p className='font-bold text-2xl'>{amount}</p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex justify-between mt-3 text-sm">
        <div>
          <p className='text-xl'>{user}</p>
        </div>

        <div className='text-right'>
          <p className='text-xl'>{time}</p>
        </div>
      </div>

    </div>
  );
};

export default Activity;