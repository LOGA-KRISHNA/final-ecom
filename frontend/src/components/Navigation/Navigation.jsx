import React from 'react'
import {Search,Heart,UserRound,ShoppingCart  } from 'lucide-react'
import { NavLink } from 'react-router-dom'
export const Navigation = () => {
  return (
    <nav className='flex item-center px-8 py-6 justify-between'>
        
        <div className='flex item-center gap-6'> 
            {/* logo */}
            <h1 className='text-3xl font-bold'>Hello</h1>
        </div>
        
        <div className='flex flex-wrap item-center'>
            {/* features */}
            <ul className='flex gap-10 item-center text-gray-600' >
                <li className='hover:text-black'><NavLink to="/" className={({ isActive }) => (isActive ? "font-bold text-black" : "")}>Home</NavLink></li>
                <li className='hover:text-black'><NavLink to="/mens" className={({ isActive }) => (isActive ? "font-bold text-black" : "")}>Mens</NavLink></li>
                <li className='hover:text-black'><NavLink to="/womens" className={({ isActive }) => (isActive ? "font-bold text-black" : "")}>Womens</NavLink></li>
                <li className='hover:text-black'><NavLink to="/kids" className={({ isActive }) => (isActive ? "font-bold text-black" : "")}>Kids</NavLink></li>
            </ul>
        </div>
        
        <div className='flex justify-center'>
            {/* search bar */}
            <div className='border rounded flex'>
                <button className='flex  border-lg'>
                <Search className='m-2'/>
                <input type='text' className='px-4 outline-none' placeholder='Search'/>
            </button>
            </div>
        </div>

        <div className='flex flex-wrap item-center'>
        {/* icons */}
            <ul className='flex gap-8'>
                <li><button><Heart className='hover:text-red-500'/></button></li>
                <li><button><UserRound className='hover:text-blue-900'/></button></li>
                <li><button><ShoppingCart className='hover:text-blue-500'/></button></li>
            </ul>
        </div>
    </nav>
  )
}
