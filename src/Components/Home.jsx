import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../img/resume.svg'
import { local } from '../Local'
import { useState, useEffect } from 'react'
import { ArrowRightIcon, ForwardIcon } from '@heroicons/react/24/solid'

export const Home = () => {
    const [toObj, setToObj]=useState(undefined)
    const locals=local.getItem('resume')
    useEffect(()=>{
        if(locals===null)
        {
            console.log('Null')
        }
        else
        {
            const toObjs=JSON.parse(locals)
            let items=toObjs.newItem
            if(items===undefined)
            {
              setToObj(undefined)
              console.log('Resume Not Created')
            }
            else
            {
                setToObj(toObjs)
            }
        }
    },[])
    
    
  return (
    <div className='mt-5 flex flex-col md:flex-row md:justify-between py-2 w-full px-3 mb-[3rem] md:mb-[8rem] lg:mb-[11.813rem]'>
        <div className='items-center md:w-[1/2] flex justify-between mb-5 md:mb-0'>
          <img className='mx-auto w-[75%] md:w-auto' src={resume}/>
        </div>
        <div className='flex flex-col justify-center w-full md:w-1/2'>
           <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-stone-800 mb-3 md:mb-5 text-center'>Welcome  To free Resume Buiilder</h1>
           <p className='text-sm md:text-base lg:text-xl xl:text-2xl text-stone-800 mb-4 text-center'>
              Our Goal to provide a best resume for your
              better career with 15 stylish and HR 
              Faverate Templets only in RS-5
           </p>
            <div className='flex justify-center'>
              <Link to={`${locals===null?'/login':toObj===undefined?'/create':'/show'}`} className='text-base text-stone-50 bg-[#39D0FF] rounded-lg inline px-5 md:px-5 p-2 md:py-3 hover:bg-[#67cdec]'>{locals===null?<span className='flex justify gap-2'>Login<ArrowRightIcon className='w-6 h-6'/></span>:toObj===undefined?<span className='flex justify gap-2'>Create<ArrowRightIcon className='w-6 h-6'/></span>:<span className='flex justify gap-2'>Show<ArrowRightIcon className='w-6 h-6'/></span>}</Link>
              {/* <Link to={`${locals===null?'/login':'/create'}`} className='text-base text-stone-50 bg-[#39D0FF] rounded-lg inline px-5 md:px-8 p-2 md:py-3 hover:bg-[#67cdec]'>{locals===null?'Login':'Create'}</Link> */}
            </div>
        </div> 
    </div>
  )
}
