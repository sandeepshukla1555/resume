import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { local } from '../Local'
import done from '../img/signin.png'
import cancel from '../img/wrong.png'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const [signin, setSignin]=useState('')
    const [status, setStatus]=useState(undefined)
    const [validation, setValidation]=useState(undefined)
    function inputData(e)
    {
        // console.log(e.target.name+": "+e.target.value)
        let name=e.target.name;
        setSignin({...signin,[name]:e.target.value})
    }
    function submit(event){
        event.preventDefault()
        console.log(signin)
        setValidation(signin)
        
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
          <div><FontAwesomeIcon onClick={()=>{
            window.history.back()
            }} className='w-6 h-6 bg-stone-800 text-stone-50 p-2 rounded-full hover:bg-stone-500 cursor-pointer'/></div>
          <h3 className='text-stone-800 flex mb-5'><FontAwesomeIcon className='w-6 h-6'/> {loged===null?'Please First Sign-In 🤔':'Login Your Own Account 😊'}</h3>
        </div>
        <div className='w-[22rem] w-full lg:w-[26rem] rounded-lg pt-9 pb-14 shadow-md '>
        {status===undefined?'':<div className='fixed bg-stone-900 bg-opacity-90 top-0 left-0 w-full h-screen z-40 flex justify-center items-center'><div className={`rounded-lg py-2 px-4 font-bold flex justify-center items-center ${status===true?'text-stone-50 bg-green-200 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':status===false?'text-red-50 bg-red-100 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':''}`}>{status===true?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold'><img className='w-40 h-40' src={done} alt={done}/><span className='text-center'>Success!</span></span><Link to="/create"><FontAwesomeIcon  icon={faXmark} onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></Link></div>:status===false?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold justify-center'><img className='w-20 h-20' src={cancel} alt={cancel}/><span className='text-center'>Failed!</span></span><FontAwesomeIcon  icon={faXmark} onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></div>:''}</div></div>}
        <form onSubmit={(event)=>submit(event)} className='px-9 flex flex-col gap-5'>
            <div className='relative'>
              <input name='fName' onChange={(e)=>inputData(e)} type="text" placeholder="First-Name:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              {validation===undefined?'':validation.fName===''?<span className='text-xs font-medium text-red-500'>Please Enter First Name!</span>:''}
              <FontAwesomeIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-[34px] bg-[#39D0FF]'/>
            </div>
            <div className='relative flex-col gap-1'>
              <input name='lName' onChange={(e)=>inputData(e)} type="text" placeholder="Last-Name:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              {validation===undefined?'':validation.lName===''?<span className='text-xs font-medium text-red-500'>Please Enter Last Name!</span>:''}
              <FontAwesomeIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-[34px] bg-[#39D0FF]'/>
            </div>
            <div className='relative'>
              <input name='email' onChange={(e)=>inputData(e)} type="email" placeholder="Email:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              {validation===undefined?'':validation.email===''?<span className='text-xs font-medium text-red-500'>Please Enter Your Email!</span>:''}
              <FontAwesomeIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-[34px] bg-[#39D0FF]'/>
            </div>
            <div className='relative w-full '>
              <input name='mobile' onChange={(e)=>inputData(e)} type="tel" placeholder="Mobile:" className="w-full rounded-lg placeholder:text-stone-500 border border-[#39D0FF] pl-8 pr-4 py-1 relative"/>
              {validation===undefined?'':validation.mobile===''?<span className='text-xs font-medium text-red-500'>Please Enter Your Mobile Number!</span>:''}
              <FontAwesomeIcon className='absolute text-stone-50 w-6 top-0 left-0 p-1 h-[34px] bg-[#39D0FF]'/>
            </div>
            <div className='flex justify-center'><button className='px-3 py-1 text-stone-50 bg-[#39D0FF] rounded-lg'>Sign-in</button></div>
        </form>
        </div>
    </div>:window.history.close('/')}
    </>
  )
}

export default SignIn