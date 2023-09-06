import React from 'react'
import { BackwardIcon, DocumentTextIcon, PencilIcon, PlusIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { local } from '../Local'
import done from '../img/created.png'
import cancel from '../img/wrong.png'
import { Link } from 'react-router-dom'

const Create = () => {
 
  const [formData, setFormData]=useState('')
  const [status, setStatus]=useState(undefined)
  let localData=local.getItem('resume')

  function getCreate(e)
  {
    console.log(e.target.name+" : "+e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function create(event){
    event.preventDefault()
    const toObject=JSON.parse(localData);
    let insertResume={...toObject,newItem:formData}
    let toText=JSON.stringify(insertResume)
    local.setItem('resume',toText)
    setStatus(true)
  }
  return (
   <>
    {localData===null?'':<div className='py-[3%] mx-auto w-[90%] box-border'>
        <div className='flex justify-start gap-5'>
          <div><BackwardIcon onClick={()=>{
            window.history.back()
            }} className='w-6 h-6 bg-stone-800 text-stone-50 p-2 rounded-full hover:bg-stone-500 cursor-pointer'/></div>
          <h3 className='text-stone-800 flex mb-5'><DocumentTextIcon className='w-6 h-6'/> Create Your Own Resume...</h3>
        </div>
        <form className='flex flex-col box-border' onSubmit={(event)=>create(event)}>
        {status===undefined?'':<div className='fixed bg-stone-900 bg-opacity-90 top-0 left-0 w-full h-screen z-40 flex justify-center items-center'><div className={`rounded-lg py-2 px-4 font-bold flex justify-center items-center ${status===true?'text-stone-50 bg-green-200 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':status===false?'text-red-50 bg-red-100 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':''}`}>{status===true?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold'><img className='w-40 h-40' src={done} alt={done}/><span className='text-center'>Success!</span></span><Link to="/show"><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></Link></div>:status===false?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold justify-center'><img className='w-20 h-20' src={cancel} alt={cancel}/><span className='text-center'>Failed!</span></span><XMarkIcon onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-9 h-9 cursor-pointer rounded-full bg-stone-300 p-1'/></div>:''}</div></div>}
            <div className='flex flex-col gap-5'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Personal Details</h3>
               <div className='flex flex-col md:flex-row md:justify-between gap-5 w-full box-border'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='First Name:' name="fName" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Last Name:' name="lName" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <div className='flex justify-start gap-4 items-center'>
                     <h3 className='text-sm text-stone-800 font-medium'>Gender:</h3>
                      <div className='flex justify-between gap-4'>
                      <div className='flex gap-0.5 items-center'>
                        <input onChange={(e)=>getCreate(e)} type="radio" id="male" name="gender" value="Male"/>
                        <label className='text-xs text-stone-800' htmlFor="male">Male</label>
                      </div>
                      <div className='flex gap-0.5 items-center'>
                        <input onChange={(e)=>getCreate(e)} type="radio" id="female" name="gender" value="female"/>
                        <label className='text-xs text-stone-800' htmlFor="female">Female</label>
                      </div>
                      <div className='flex gap-0.5 items-center'>
                        <input onChange={(e)=>getCreate(e)} type="radio" id="other" name="gender" value="other"/>
                        <label className='text-xs text-stone-800' htmlFor="other">Other</label>
                      </div>
                      </div>
                    </div>
                    
                 </div>
               </div>

               <div className='flex justify-between items-center w-full box-border'>
                 <div className='relative w-[60%] flex items-center  mr-2'>
                    <input onChange={(e)=>getCreate(e)} type="email" placeholder='Email:' name="email" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-[40%] flex ml-2'>
                    <input onChange={(e)=>getCreate(e)} type="date" placeholder='DOB:' name="dob" className='w-full border-b border-b-stone-800 overflow-hidden text-stone-800 relative pr-2 pl-5 pb-2 text-xs'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>

               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" cols="1" placeholder='Address:' name="address" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex h-6'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>

               <div className='flex justify-between gap-5 w-full box-border'>
                 <div className='relative w-1/2'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Father Name:' name="father" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-1/2'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Mother Name:' name="mother" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>

               <div className='flex flex-col md:flex-row md:justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Mobile:' name="mobile" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='State:' name="state" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='City:' name="city" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Zip-Code:' name="zipcode" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl w-full text-stone-800 font-bold'>Education</h3>

               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='10th:' name="ten" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="tenPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="tenBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="tenYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='12th:' name="twel" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="twelPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="twelBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="twelYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Greduation:' name="greduation" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="grePer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="greBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="greYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Post Graduation:' name="postGre" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="postPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="postBoard" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="postYer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Skills</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" cols="1" placeholder='Skills:' name="skills" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex h-6'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Experience</h3>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Company Name:' name="cmp1" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Company Address:' name="cmpAddr1" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Start Date:' name="startDate1" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='End Date:' name="endDate1" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-center gap-5 w-full'>
                 <PlusIcon className='w-6 h-6 rounded-full p-1 text-stone-50 font-bold border bg-green-500 hover:bg-green-800 cursor-pointer'/>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Hobbies</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Hobbies:' name="hobbies" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Goal/Aim</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Goal/Aim:' name="goal" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Language</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Language:' name="language" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5'>
               <h3 className='ttext-2xl text-stone-800 font-bold'>Projects</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Projects:' name="projects" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <UserIcon className='absolute w-5 h-5 text-[#39D0FF] left-0 -top-1'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <div className='flex justify-center'>
                 <button className='bg-[#39D0FF] hover:bg-[#25add6] cursor-pointer text-stone-50 flex px-4 py-2 rounded-lg'><span>Create</span> <PencilIcon className='border-0 w-6 h-6 font-bold p-1'/></button>
               </div>
            </div>


        </form>
    </div>}
    </>
  )
}

export default Create