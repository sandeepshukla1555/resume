import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faRightLong } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { local } from '../Local'

const Show = () => {
    const locals=local.getItem('resume')
    const toObject=JSON.parse(locals)
    const resumes=toObject.newItem;

    let skillss=resumes.skills===undefined?'No-Skills':resumes.skills;
    let toStrings=String(skillss)
    let toArray=toStrings.split(' ')

    let projects=resumes.projects===undefined?'No-Projects':resumes.projects;
    let toStrProject=String(projects)
    let toArrayProject=toStrProject.split(' ')

    let languages=resumes.language===undefined?'No-Languages':resumes.language;
    let toStrLanguage=String(languages)
    let toArrayLanguage=toStrLanguage.split(' ')


   function toPdf(){
    const res=document.querySelector('.resume')
    window.print()
   }
  return (
   <div className='flex flex-col justify-center gap-3 resume'>
     <div className='flex justify-center w-full md:max-w-[46rem] mx-auto mb-3 bg-stone-100 '>
        <div className='w-[40%] flex flex-col gap-2 box-border px-2 pt-5 pb-28'>
         <div className='flex flex-col justify-center items-center mb-3'>
           <div className='w-14 h-14 rounded-full p-3 bg-[#39D0FF] text-stone-50 flex justify-center items-center'><span className='uppercase'>{resumes.fName[0]+"."+resumes.lName[0]+'.'}</span></div>
           <span>{resumes.fName+" "+resumes.lName}</span>
         </div>
         <h3 className='text-lg text-stone-800 font-normal md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Personal Details</h3>
         <div className='flex flex-col gap-3'>
           <div className='flex flex-col md:flex-row md:justify-between border-b pb-1 pt-3 text-xs'>
             <span><span className='font-semibold'>Gender:</span> {resumes.gender}</span>
             <span><span className='font-semibold'>DOB:</span> {resumes.dob}</span>
           </div>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Email:</span>{resumes.email}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Mobile:</span>{resumes.mobile}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Address:</span>{resumes.address}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Father's:</span>{resumes.father}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Moter's:</span>{resumes.mother}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>State:</span>{resumes.state}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>City:</span>{resumes.city}</span>
           <span className='pb-1 pt-3 border-b text-xs break-words'><span className='font-normal md:font-semibold'>Zip-Code:</span> {resumes.zipcode}</span>
         </div>
        </div>
        <div className='w-[60%] border-l flex flex-col gap-2 md:gap-8 pt-20 pb-8 px-2'>
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-normal md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Education</h3>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-normal md:font-semibold'>10th:</span></span>
             <span className='text-xs'>{resumes.tenPer}</span>
             <span className='text-xs'>{resumes.tenBord}</span>
             <span className='text-xs'>{resumes.tenYear}</span>
           </div>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-normal md:font-semibold'>12th:</span></span>
             <span className='text-xs'>{resumes.twelPer}</span>
             <span className='text-xs'>{resumes.twelBord}</span>
             <span className='text-xs'>{resumes.twelYear}</span>
           </div>
           <div className='flex justify-start gap-2 md:gap-8 pl1 md:pl-5'>
             <span className='text-xs w-[30%]'><span className='font-normal md:font-semibold'>Greduation:</span></span>
             <span className='text-xs'>{resumes.grePer}</span>
             <span className='text-xs'>{resumes.greBord}</span>
             <span className='text-xs'>{resumes.greYear}</span>
           </div>
         </div>

         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-normal md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Skills</h3>
           <ul className='flex flex-col gap-0.5 pl1 md:pl-5 flex-wrap'>
             {
                toArray.map(ele=>{
                    return <li key={ele} className='text-xs text-stone-800 list-disc list-inside'>{ele}</li>
                })
             }
           </ul>
         </div>

         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-normal md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Exprience</h3>
           <div className='flex flex-col'>
           <div className='w-full flex flex-start gap-1 md:gap-2 md:pl-5 flex-wrap'>
           {
            resumes.pro.map((ele,index)=>{
              console.log(ele.cmpName)           
              return (
                 <div key={index} className='flex flex-col text-xs w-full border-b pb-2'>
                    <div className='flex flex-col'>
                       <span className='w-full mb-1'><span className='font-medium text-xs'>Company:</span>{ele.cmpName}</span>
                       <span className='w-full mb-1'><span className='font-medium text-xs'>Location:</span>{ele.cmpAddress}</span>
                    </div>
                    <div className='flex flex-start gap-5 items-center'>
                       <span><span className='font-medium text-xs'>From:</span>{ele.cmpStartDate}</span>
                       <span>
                       <svg width="48" height="8" viewBox="0 0 48 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.3528 4.39145C47.548 4.19203 47.548 3.87545 47.3528 3.68434L44.1715 0.570047C43.9763 0.378938 43.6598 0.385673 43.4646 0.585089C43.2693 0.784504 43.2693 1.10109 43.4646 1.2922L46.2923 4.06046L43.4646 6.94905C43.2693 7.14847 43.2693 7.46505 43.4646 7.65616C43.6598 7.84726 43.9763 7.84053 44.1715 7.64111L47.3528 4.39145ZM-4.37112e-08 5.54541L46.9993 4.54541L46.9993 3.54541L4.37112e-08 4.54541L-4.37112e-08 5.54541Z" fill="black"/>
                       </svg>
                       </span>
                       <span><span className='font-medium text-xs'>To:</span>{ele.cmpEndDate}</span>
                    </div>
                 </div>
              )
            })

           }
           </div>
           </div>
         </div>

         
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Goal/Aim</h3>
             <span className='text-xs'>{resumes.goal}</span>
         </div>
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Projects</h3>
           <ul className='flex flex-col gap-0.5 pl1 md:pl-5 flex-wrap'>
             {
                toArrayProject.map(ele=>{
                    return <li key={ele} className='text-xs text-stone-800 list-disc list-inside'><a href={`${ele}`} className="cursor-pointer underline">{ele}</a></li>
                })
             }
           </ul>
         </div>
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Lanuage</h3>
           <ul className='flex flex-col gap-0.5 pl1 md:pl-5 flex-wrap'>
             {
                toArrayLanguage.map(ele=>{
                    return <li key={ele} className='text-xs text-stone-800 list-disc list-inside'>{ele}</li>
                })
             }
           </ul>
         </div>
         <div className='flex flex-col'>
           <h3 className='text-lg text-stone-800 font-medium md:font-medium flex gap-1 items-center'><FontAwesomeIcon className="w-5 h-5"/>Hobbies</h3>
             <span className='text-xs'>{resumes.hobbies}</span>
         </div>
        </div>
    </div>
     <button onClick={()=>toPdf()} className='text-sm text-stone-50 bg-red-500 rounded-lg py-1 w-[8rem] mx-auto cursor-pointer hover:bg-red-800 hover:text-stone-300'>Print</button>
   </div>
  )
}

export default Show