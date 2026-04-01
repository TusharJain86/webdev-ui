import React from 'react'

const navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-b from-white-400 to-gray-100 px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex-1'>
        <h1 className='text-2xl font-bold'>Finkano</h1>
        </div>

        {/* Navigation Links mid part */}
        <ul className='flex gap-6 justify-center flex-1'>
            <li className='cursor-pointer hover:text-orange-500'> Overview </li>
            <li className='cursor-pointer hover:text-orange-500'> Activity </li>
            <li className='cursor-pointer hover:text-orange-500'> Manage </li>
            <li className='cursor-pointer hover:text-orange-500'> Program </li>
            <li className='cursor-pointer hover:text-orange-500'> Account </li>
            <li className='cursor-pointer hover:text-orange-500'> Reports </li>
        </ul>

        {/* User Profile */}
        <div className='flex-1 flex justify-end'>
            <div className='flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-900 transition'>
                {/* User Avatar */}
                <div className='w-8 h-8 bg-blue-500 rounded-full'></div>

                {/* User Name */}
                <span className='text-sm text-white font-bold'>Franklin</span>

                {/* Dropdown Icon */}
                <span className='text-white'>▼</span>
            </div>
        </div>


    </nav>
  );
}

export default navbar