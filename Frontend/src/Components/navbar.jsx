import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css'
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">MyBrand</div>
        <ul className="flex space-x-6">
          <li>
            <Link 
              to='/' 
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-colors duration-300 
                 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard' 
              className={({ isActive }) => 
                `py-2 px-4 rounded-md transition-colors duration-300 
                 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`
              }
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
