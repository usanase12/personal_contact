import React from 'react'
// import {CgProfile} from "react-icons/cg";

function Header() {
  return (
    <div className='flex justify-between bg-gray-700 h-[60px] text-white px-32 items-center'>

       <h2 className='font-bold text-[26px]'>Contacts </h2>
            <a className='text-[18px]' href='/'>Home</a>
            <div className='h-[50px] bg-gray-800 flex justify-between w-96 rounded-lg items-center px-3'>   
             <h1 className='text-[18px]'>Sandrine</h1>
            <a href='' className='text-[18px] bg-gray-900 px-8 h-10 pt-2 rounded-lg'>Sign out</a>
            </div>
            
    </div>
  )
}

export default Header