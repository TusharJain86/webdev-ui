import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-b from-white to-gray-100 px-6 py-4 flex justify-between items-center'>

        {/* Logo */}
        <div className='flex-1'>
            <h1 className='text-2xl font-bold'>Finkano</h1>
        </div>

        {/* Navigation Links */}
        <ul className='flex gap-6 justify-center flex-1'>
            <li className='hover:text-orange-500 cursor-pointer'>
                <Link to="/">Overview</Link>
            </li>
            <li className='hover:text-orange-500 cursor-pointer'>Activity</li>
            <li className='hover:text-orange-500 cursor-pointer'>Manage</li>
            <li className='hover:text-orange-500 cursor-pointer'>
                <Link to="/Program">Program</Link>
            </li>
            <li className='hover:text-orange-500 cursor-pointer'>Account</li>

            <li className='hover:text-orange-500 cursor-pointer'>
                <Link to="/Report">Reports</Link>
            </li>
        </ul>

        {/* User Profile */}
        <div className='flex-1 flex justify-end'>
            <div className='flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-full cursor-pointer hover:bg-zinc-900 transition'>
                <div className='w-8 h-8 bg-blue-500 rounded-full'></div>
                <span className='text-sm text-white font-bold'>Franklin</span>
                <span className='text-white'>▼</span>
            </div>
        </div>

    </nav>
  );
}

export default Navbar;