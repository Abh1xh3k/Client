import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { LiaStoreSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa6";


 export function Navbar() {
  return (
   <nav className='bg-white px-8 py-3  '>
   <div className='flex justify-between space-x-7'>
   <div className='font-body text-2xl text-gray-400 no-underline hover:underline'>Foodie Goodie!</div>
    <div className='flex px-5 space-x-7'>
      <div className='flex  hover:scale-110 transition-all duration-500 cursor-pointer"'>
      <div  className='font-body text-3xl text-gray-400 no-underline'><LiaStoreSolid /></div>
      <span className='font-body  text-gray-400 text-2xl'>Nearby  stores</span>
      </div>
    <div className='font-body text-3xl text-gray-400 no-underline  hover:scale-125 transition-all duration-500 cursor-pointer" '> <BsFillCartFill /></div>
    <div>
    <div className='flex  hover:scale-110 transition-all duration-500 cursor-pointer"'>
      <div  className='font-body text-3xl text-gray-400 no-underline'><FaUser /></div>
      <span className='font-body  text-gray-400 text-2xl'>Login</span>
      </div>
    </div>
   </div>                                  
    </div>
   </nav>
  )
}