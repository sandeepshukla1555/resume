import React from 'react'
import { Link } from 'react-router-dom'
import '../global.css'
import header from '../img/header.svg';
import logo from '../img/logo.svg';

const Header = () => {
  return (
    <div className='sticky -top-18'>
       <div className='relative'>
       <img height={100} className='top-0' src={header}/>
       </div>
       <div className='flex justify-between items-center absolute top-5 w-full px-5'>
        <div className='pl-28'><img src={logo}/></div>
        <div className='flex justify-between items-center w-[60%]'>
            <ul className='flex justify-between gap-2 overflow-scroll flex-nowrap w-[70%]'>
                <li><Link to='/' className='text-lg text-stone-50'>Home</Link></li>
                <li><Link to='/' className='text-lg text-stone-50'>Update</Link></li>
                <li><Link to='/' className='text-lg text-stone-50'>Download</Link></li>
            </ul>
            <div className='flex flex-col gap-1 items-center w-[30%]'>
               <div className='w-9 h-9 rounded-full bg-stone-800'>

               </div>
               <span className='text-xs text-stone-800'>Sandeep Shukla</span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header