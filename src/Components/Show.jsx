import React from 'react'
import { local } from '../Local'

const Show = () => {
    const locals=local.getItem('resume')
    const toObject=JSON.parse(locals)
    const resumes=toObject.newItem;

    let skillss=resumes.skills;
    let toStrings=String(skillss)
    let toArray=toStrings.split(' ')
   function toPdf(){
    const res=document.querySelector('.resume')
    window.print()
   }
  return (
   <div className='flex flex-col justify-center gap-3 resume'>
     <div className='flex justify-center w-full md:max-w-[46rem] mx-auto mb-3 bg-stone-100 '>
        <div className='w-[30%] flex flex-col gap-2 box-border px-2 pt-5 pb-28'>
         <div className='flex flex-col justify-center items-center mb-3'>
           <div className='w-14 h-14 rounded-full p-3 bg-[#39D0FF] text-stone-50 flex justify-center items-center'><span className='uppercase'>{resumes.fName[0]+"."+resumes.lName[0]+'.'}</span></div>
           <span>{resumes.fName+" "+resumes.lName}</span>
         </div>
         <h3 className='text-lg text-stone-800 font-medium md:font-bold'>Personal Details</h3>
         <div className='flex flex-col gap-3'>
           <div className='flex flex-col md:flex-row md:justify-between border-b pb-1 pt-3 text-xs'>
             <span><span className='font-semibold'>Gender:</span> {resumes.gender}</span>
             <span><span className='font-semibold'>DOB:</span> {resumes.dob}</span>
           </div>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Email:</span>{resumes.email}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Mobile:</span>{resumes.mobile}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Address:</span>{resumes.address}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Father's:</span>{resumes.father}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Moter's:</span>{resumes.mother}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>State:</span>{resumes.state}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>City:</span>{resumes.city}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-medium md:font-semibold'>Zip-Code:</span> {resumes.zipcode}</span>
         </div>
        </div>
        <div className='w-[70%] border-l flex flex-col gap-2 md:gap-8 pt-20 pb-8 px-2'>
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-bold'>Education</h3>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-medium md:font-semibold'>10th:</span></span>
             <span className='text-xs'>{resumes.tenPer}</span>
             <span className='text-xs'>{resumes.tenBord}</span>
             <span className='text-xs'>{resumes.tenYear}</span>
           </div>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-medium md:font-semibold'>12th:</span></span>
             <span className='text-xs'>{resumes.twelPer}</span>
             <span className='text-xs'>{resumes.twelBord}</span>
             <span className='text-xs'>{resumes.twelYear}</span>
           </div>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-medium md:font-semibold'>Greduation:</span></span>
             <span className='text-xs'>{resumes.grePer}</span>
             <span className='text-xs'>{resumes.greBord}</span>
             <span className='text-xs'>{resumes.greYear}</span>
           </div>
         </div>

         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-bold'>Skills</h3>
           <div className='flex justify-start gap-2 pl1 md:pl-5 flex-wrap'>
             {
                toArray.map(ele=>{
                    return <span key={ele} className='text-xs px-2 p-1 rounded-lg bg-teal-600 text-stone-50'>{ele}</span>
                })
             }
           </div>
         </div>

         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-bold'>Exprience</h3>
           <div className='flex justify-start gap-3 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-medium md:font-semibold'>{resumes.cmp1}:</span></span>
             <span className='text-xs'>{resumes.cmpAddr1}</span>
             <span className='text-xs'>{resumes.startDate1}</span>
             <span className='text-xs'>{resumes.endDate1}</span>
           </div>
         </div>

         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-bold'>Hobbies</h3>
             <span className='text-xs'>{resumes.hobbies}</span>
         </div>
        </div>
    </div>
     <button onClick={()=>toPdf()} className='text-sm text-stone-50 bg-red-500 rounded-lg py-1 w-[8rem] mx-auto cursor-pointer hover:bg-red-800 hover:text-stone-300'>Print</button>
   </div>
  )
}

export default Show