import React from 'react'
import {ArrowRightOnRectangleIcon, BackwardIcon, DevicePhoneMobileIcon, EnvelopeIcon, UserIcon, UserPlusIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { useState } from 'react'
import { local } from '../Local'
import done from '../img/done.png'
import cancel from '../img/cancel.png'
import { Link } from 'react-router-dom'

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

    let loged=local.getItem('resumes')
    
  return (
    <>
    {loged===null?<div className='flex flex-col justify-center items-center py-[9%]'>
        <div className='flex justify-start gap-5'>
          <div><BackwardIcon onClick={()=>{
            window.history.back()
            }} className='w-6 h-6 bg-stone-800 text-stone-50 p-2 rounded-full hover:bg-stone-500 cursor-pointer'/></div>
          <h3 className='text-stone-800 flex mb-5'><ArrowRightOnRectangleIcon className='w-6 h-6'/> {loged===null?'Please First Sign-In 🤔':'Login Your Own Account 😊'}</h3>
        </div>
        <div className='w-[22rem] w-full lg:w-[26rem] rounded-lg pt-9 pb-14 shadow-md '>
        <div className={`rounded-lg py-2 px-4 font-bold flex justify-center items-center ${status===true?'text-stone-50 bg-green-200 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':status===false?'text-red-50 bg-red-100 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':''}`}>{status===true?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold'><img className='w-20 h-20' src={done} alt={done}/><span>Success!</span></span><Link to="/create"><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></Link></div>:status===false?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold justify-center'><img className='w-20 h-20' src={cancel} alt={cancel}/><span className='text-center'>Failed!</span></span><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></div>:''}</div>
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
    </div>:window.history.close('/')}
    </>
  )
}

export default SignIn