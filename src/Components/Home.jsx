import React from 'react'
import resume from '../img/resume.svg'

export const Home = () => {
  return (
    <div className='flex justify-between py-2 w-full px-3 mb-[11.813rem]'>
        <div className='items-center w-1/2 flex justify-between'>
          <img className='mx-auto' src={resume}/>
        </div>
        <div className='flex flex-col justify-center w-1/2'>
           <h1 className='text-3xl lg:text-4xl xl:text-5xl text-stone-800 mb-5 text-center'>Welcome  To free Resume Buiilder</h1>
           <p className='text-base lg:text-xl xl:text-2xl text-stone-800 mb-4 text-center'>
              Our Goal to provide a best resume for your
              better career with 15 stylish and HR 
              Faverate Templets only in RS-5
           </p>
            <div className='flex justify-center'>
              <button className='text-base text-stone-50 bg-[#39D0FF] rounded-lg inline px-8 py-3 hover:bg-[#67cdec]'>Login</button>
            </div>
        </div>
    </div>
  )
}
