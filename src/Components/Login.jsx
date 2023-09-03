import { ArrowRightOnRectangleIcon, BackwardIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import { local } from '../Local'

const Login = () => {
    let loged=local.getItem('resumes')
  return (
    <div className={`flex justify-center flex-col items-center py-[11%] ${loged===null?'h-screen py-0':''}`}>
        <div className='flex justify-start gap-5'>
        <div><BackwardIcon onClick={()=>{
            window.history.back()
            }} className='w-6 h-6 bg-stone-800 text-stone-50 p-2 rounded-full hover:bg-stone-500 cursor-pointer'/></div>
          <h3 className='text-stone-800 flex mb-5'><ArrowRightOnRectangleIcon className='w-6 h-6'/> {loged===null?'Please First Sign-In 🤔':'Login Your Own Account 😊'}</h3>
        </div>
        {
            loged===null?<div className='w-[22rem] lg:w-[26rem] shadow-md px-9 flex justify-center items-center gap-5 py-14 rounded-lg'>
            <div className='flex justify-center'><Link to='/signin' className='px-3 py-1 text-stone-50 bg-[#39D0FF] rounded-lg'>Sign-In</Link></div>
        </div>:<form className='w-[22rem] lg:w-[26rem] shadow-md px-9 flex flex-col gap-5 py-14 rounded-lg'>
            <input type="email" placeholder="Email:" className="w-full rounded-lg placeholder:text-stone-800 border border-[#39D0FF] px-4 py-1"/>
            <input type="text" placeholder="Authkey:" className="w-full rounded-lg placeholder:text-stone-800 border border-[#39D0FF] px-4 py-1"/>
            <div className='flex justify-center'><button className='px-3 py-1 text-stone-50 bg-[#39D0FF] rounded-lg'>Login</button></div>
        </form>
        }
        
    </div>
  )
}

export default Login