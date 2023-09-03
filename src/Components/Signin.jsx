import React from 'react'
import {DevicePhoneMobileIcon, EnvelopeIcon, UserIcon, UserPlusIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { local } from '../Local'

const SignIn = () => {
    const [signin, setSignin]=useState('')
    const [status, setStatus]=useState(undefined)
    function inputData(e)
    {
        // console.log(e.target.name+": "+e.target.value)
        let name=e.target.name;
        setSignin({...signin,[name]:e.target.value})
    }
    function submit(event){
        event.preventDefault()
        console.log(signin)
        
        if(signin.fName!=='' && signin.lName!=='' && signin.email!=='' && signin.mobile!=='')
        {
            const toText=JSON.stringify(signin)
            const sets=local.setItem('resume', toText)
            setStatus(true)
        }
        else
        {
            setStatus(false)
        }
    }
    
  return (
    <div className='flex justify-center items-center py-[9%]'>
        <div className='w-[22rem] w-full lg:w-[26rem] rounded-lg py-14 shadow-md '>
        <div className={`mx-9 mb-5 rounded-lg py-2 px-4 font-bold relative ${status===true?'text-stone-50 bg-green-600 block':status===false?'text-stone-50 bg-red-500 block':''}`}>{status===true?<div><span className='relative'>Success!</span><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-5 h-5 cursor-pointer'/></div>:status===false?<div><span className='relative'>Please Fill Every Fields!</span><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-5 h-5 cursor-pointer'/></div>:''}</div>
        <form onSubmit={(event)=>submit(event)} className='px-9 flex flex-col gap-5'>
            <div className='relative'>
              <input name='fName' onChange={(e)=>inputData(e)} type="text" placeholder="First-Name:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              <UserIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-full bg-[#39D0FF]'/>
            </div>
            <div className='relative'>
              <input name='lName' onChange={(e)=>inputData(e)} type="text" placeholder="Last-Name:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              <UserPlusIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-full bg-[#39D0FF]'/>
            </div>
            <div className='relative'>
              <input name='email' onChange={(e)=>inputData(e)} type="email" placeholder="Email:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              <EnvelopeIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-full bg-[#39D0FF]'/>
            </div>
            <div className='relative w-full '>
              <input name='mobile' onChange={(e)=>inputData(e)} type="tel" placeholder="Mobile:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              <DevicePhoneMobileIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-full bg-[#39D0FF]'/>
            </div>
            <div className='flex justify-center'><button className='px-3 py-1 text-stone-50 bg-[#39D0FF] rounded-lg'>Sign-in</button></div>
        </form>
        </div>
    </div>
  )
}

export default SignIn