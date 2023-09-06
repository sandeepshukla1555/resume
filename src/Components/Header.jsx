import { Link } from 'react-router-dom'
import '../global.css'
import header from '../img/header.svg';
import headerMobile from '../img/headerMobile.svg';
import logo from '../img/logo.svg';
import { local } from '../Local';
import { useState, useEffect } from 'react';

const Header = () => {
    const [resumes, setResumes]=useState(null);
    let screen=window.screen.width;
    const locals=local.getItem('resume')
    useEffect(()=>{
      if(locals===null)
      {
        setResumes(null)
      }
      else
      {
        const toObject=JSON.parse(locals)
        const resume=toObject;
        setResumes(resume)
      }
    })
    
       
  return (
    <div className='sticky -top-18'>
       <div className='relative'>
       <img height={100} className='top-0' src={screen<=680?headerMobile:header}/>
       </div>
       <div className='flex justify-between gap-1 items-center absolute top-3 md:top-5 w-full px-2 md:px-5'>
        <div className='pl-0 md:pl-22 lg:pl-28'><img className='w-20 md:w-full' src={logo} alt={logo}/></div>
        <div className='flex justify-between items-center w-[95%] md:w-[60%]'>
            <ul className='flex md:justify-between gap-2 overflow-scroll flex-nowrap w-full md:w-[70%] scrollHeight'>
              <li><Link to='/' className='text-sm md:text-lg text-stone-50'>Home</Link></li>
              <li><Link to='/update' className='text-sm md:text-lg text-stone-50 border-l md:border-l-0 pl-0.5'>Update</Link></li>
              <li><Link to='/download' className='text-sm md:text-lg text-stone-50 border-l md:border-l-0 pl-0.5'>Download</Link></li>
              {locals===null?<li><Link to='/signin' className='text-sm md:text-lg text-stone-50 border-l md:border-l-0 pl-0.5'>Signin</Link></li>:<li><span onClick={()=>{
                local.removeItem('resume')
              }} className='text-sm md:text-lg text-stone-50 border-l md:border-l-0 pl-0.5'>Logout</span></li>}
            </ul>
              {
                resumes===null?<div className='flex flex-col gap-1 items-center w-[10%]'><div className='w-9 h-9 rounded-full bg-stone-800 flex justify-center items-center text-xs text-stone-50 uppercase'></div><span className='text-[5px] text-stone-800 text-center'>Not Sign-In</span></div>:<div className='flex flex-col gap-1 items-center w-[10%]'><div className='w-9 h-9 rounded-full bg-stone-800 flex justify-center items-center text-xs text-stone-50 uppercase'>{locals===null?'':`${resumes.fName[0]+"."+resumes.lName[0]+"."}`}</div><span className='text-[5px] text-stone-800 text-center'>{resumes.fName+" "+resumes.lName}</span></div>
              }
        </div>
    </div>
    </div>
  )
}

export default Header