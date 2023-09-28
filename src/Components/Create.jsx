import React from 'react'
import { useState } from 'react'
import { local } from '../Local'
import done from '../img/created.png'
import cancel from '../img/wrong.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsDownToLine, faBackward, faCalendar, faLocation, faMobile, faMobileAndroid, faPenNib, faPeopleRoof, faUser, faMap, faBuilding, faChartArea, faAward, faUserGraduate, faPerson, faChildren, faClipboard, faCalendarAlt, faArrowUpRightDots, faCommentDots, faLocationArrow, faPersonWalking, faPersonWalkingArrowRight, faPlus, faBullseye, faLanguage, faBookBookmark, faBookmark, faLink, faThumbsUp, faEarListen, faListCheck, faBuildingShield, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvira } from '@fortawesome/free-brands-svg-icons'

const Create = () => {
 
  const [formData, setFormData]=useState('')
  const [formProject, setFormProject]=useState([{cmpName:'',cmpAddress:'',cmpStartDate:'',cmpEndDate:''}])
  const [skill, setSkills]=useState([{skills:''}])
  const [status, setStatus]=useState(undefined)
  let localData=local.getItem('resume')

  const [exprience, setExprience]=useState([1])

  function getCreate(e)
  {
    console.log(e.target.name+" : "+e.target.value)
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  //Skills section
  function skillAdd(){
   let expLen=exprience.length;
   let expAdd=expLen+1;
   const newArr=[];
   const concats=newArr.concat(exprience)
   concats.push(expAdd)
   setSkills([...skill,{skills:''}])
  }
  function skillCreate(e,i)
  {
   const {name, value}=e.target;
   const collectData=[...skill];
   collectData[i][name]=value;
   console.log(skill)
  }

  //Exprience Section
  function handleAdd()
  {
   let expLen=exprience.length;
   let expAdd=expLen+1;
   const newArr=[];
   const concats=newArr.concat(exprience)
   concats.push(expAdd)
   setExprience(concats) 
   setFormProject([...formProject,{cmpName:'',cmpAddress:'',cmpStartDate:'',cmpEndDate:''}])
}
  function getFormProject(e,i)
  {
   const {name, value}=e.target;
   const collectData=[...formProject];
   collectData[i][name]=value;
   console.log(formProject)
  }



  function create(event){
    event.preventDefault()
    const toObject=JSON.parse(localData);
    let insertResume={...toObject,newItem:formData}
    insertResume.newItem.pro=formProject;
    insertResume.newItem.skill=skill;
    console.log(insertResume)
    let toText=JSON.stringify(insertResume)
    local.setItem('resume',toText)
    setStatus(true)
    setFormProject()
  }
  return (
   <>
    {localData===null?'':<div className='py-[3%] mx-auto w-[90%] box-border'>
        <div className='flex justify-start items-center gap-5 mb-5'>
          <div>
            <FontAwesomeIcon icon={faBackward} onClick={()=>{
            window.history.back()
            }} className='w-4 h-4 bg-stone-800 text-stone-50 p-2 rounded-full hover:bg-stone-500 cursor-pointer'/>
          </div>
          <h3 className='text-stone-800 flex'><FontAwesomeIcon icon={faPenToSquare} className='w-6 h-6'/> Create Your Own Resume...</h3>
        </div>
        <form className='flex flex-col box-border' onSubmit={(event)=>create(event)}>
        {status===undefined?'':<div className='fixed bg-stone-900 bg-opacity-90 top-0 left-0 w-full h-screen z-40 flex justify-center items-center'><div className={`rounded-lg py-2 px-4 font-bold flex justify-center items-center ${status===true?'text-stone-50 bg-green-200 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':status===false?'text-red-50 bg-red-100 shadow-md block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] z-50':''}`}>{status===true?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold'><img className='w-40 h-40' src={done} alt={done}/><span className='text-center'>Success!</span></span><Link to="/show"><FontAwesomeIcon  icon={faXmark} onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-6 h-6 cursor-pointer rounded-full bg-stone-300 p-1'/></Link></div>:status===false?<div><span className='relative flex flex-col gap-8 text-stone-800 font-bold justify-center'><img className='w-20 h-20' src={cancel} alt={cancel}/><span className='text-center'>Failed!</span></span><FontAwesomeIcon  icon={faXmark} onClick={()=>setStatus(undefined)} className='absolute top-2.5 right-2 text-stone-800 w-6 h-6 cursor-pointer rounded-full bg-stone-300 p-1'/></div>:''}</div></div>}
            <div className='flex flex-col gap-5'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faUser}  className='w-5 h-5'/> Personal Details</h3>
               <div className='flex flex-col md:flex-row md:justify-between gap-5 w-full box-border'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='First Name:' name="fName" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUser} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Last Name:' name="lName" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUser} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full'>
                    <div className='flex justify-start gap-4 items-center'>
                     <h3 className='text-sm text-stone-800 font-normal'><FontAwesomeIcon icon={faArrowsDownToLine}  className='w-4 h-4 text-[#39D0FF]'/> Gender:</h3>
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
                    <FontAwesomeIcon icon={faEnvelope} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-[40%] flex ml-2 items-center'>
                    <input onChange={(e)=>getCreate(e)} type="date" placeholder='DOB:' name="dob" className='w-full border-b border-b-stone-800 overflow-hidden text-stone-800 relative pr-2 pl-5 pb-2 text-xs'/>
                    <FontAwesomeIcon icon={faCalendar} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>

               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" cols="1" placeholder='Address:' name="address" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex h-6'></textarea>
                    <FontAwesomeIcon icon={faLocation} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>

               <div className='flex justify-between gap-5 w-full box-border'>
                 <div className='relative w-1/2 flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Father Name:' name="father" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faChildren} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-1/2 flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Mother Name:' name="mother" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faChildren} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>

               <div className='flex flex-col md:flex-row md:justify-between gap-5 w-full'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Mobile:' name="mobile" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faMobileAndroid} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='State:' name="state" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faMap} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='City:' name="city" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faBuilding} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Zip-Code:' name="zipcode" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faChartArea} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl w-full text-stone-800 font-bold'><FontAwesomeIcon icon={faBuilding} className='w-5 h-5'/>Education</h3>

               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='10th:' name="ten" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUserGraduate} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="tenPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faAward} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="tenBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faClipboard} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="tenYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faCalendar} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='12th:' name="twel" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUserGraduate} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="twelPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faAward} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Bord:' name="twelBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faClipboard} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="twelYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faCalendar} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Greduation:' name="greduation" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUserGraduate} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="grePer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faAward} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Univercity:' name="greBord" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faClipboard} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="greYear" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faCalendar} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
               <div className='flex justify-between gap-5 w-full'>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Post Graduation:' name="postGre" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faUserGraduate} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='percent:' name="postPer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faAward} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Univercity:' name="postBoard" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faClipboard} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-full flex items-center'>
                    <input onChange={(e)=>getCreate(e)} type="text" placeholder='Year:' name="postYer" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faCalendar} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>
           
            <div className='flex flex-col gap-5 mt-8'>
            <h3 className='text-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faArrowUpRightDots} className='w-5 h-5'/> Skills</h3>
           {skill.map((ele,i)=>{
             return (
               <div key={i}>
             <div className='w-full box-border'>
               <div className='relative flex items-center'>
                  <input onChange={(e)=>skillCreate(e,i)} type="text" placeholder='Skills:' value={ele.skill} name="skills" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex h-6'/>
                  <FontAwesomeIcon icon={faCommentDots} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
               </div>
             </div>
             </div>
            )
           })}
           <div className='flex justify-center gap-5 w-full'>
                 <FontAwesomeIcon onClick={()=>skillAdd()} icon={faPlus} className='w-6 h-6 rounded-full p-1 text-stone-50 font-bold border bg-green-500 hover:bg-green-800 cursor-pointer'/>
         </div>
         </div>
            

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faArrowUpRightDots} className='w-5 h-5'/> Experience</h3>
               
               { exprience.map((ele,i)=>{
               return (<div key={ele} className='flex justify-between w-full gap-y-4 md:gap-y-0 flex-wrap md:flex-nowrap border-b border-b-zinc-200 pb-4'>
                 <div className='relative w-1/2 md:w-full px-1 flex items-center'>
                    <input onChange={(e)=>getFormProject(e,i)} type="text" placeholder='Company Name:' value={ele.cmpName} name="cmpName" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faBuilding} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-1/2 md:w-full px-1 flex items-center'>
                    <input onChange={(e)=>getFormProject(e,i)} type="text" placeholder='Company Address:' value={ele.cmpAddress} name="cmpAddress" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faLocationArrow} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-1/2 md:w-full px-1 flex items-center'>
                    <input onChange={(e)=>getFormProject(e,i)} type="text" placeholder='Start Date:' value={ele.cmpStartDate} name="cmpStartDate" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faPersonWalking} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
                 <div className='relative w-1/2 md:w-full px-1 flex items-center'>
                    <input onChange={(e)=>getFormProject(e,i)} type="text" placeholder='End Date:' value={ele.cmpEndDate} name="cmpEndDate" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5'/>
                    <FontAwesomeIcon icon={faPersonWalkingArrowRight} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>)
               })
               }
               
               <div className='flex justify-center gap-5 w-full'>
                 <FontAwesomeIcon onClick={()=>handleAdd()} icon={faPlus} className='w-6 h-6 rounded-full p-1 text-stone-50 font-bold border bg-green-500 hover:bg-green-800 cursor-pointer'/>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faBookmark} className='w-5 h-5'/> Hobbies</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Hobbies:' name="hobbies" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <FontAwesomeIcon icon={faThumbsUp} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faBullseye} className='w-5 h-5'/> Goal/Aim</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Goal/Aim:' name="goal" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <FontAwesomeIcon icon={faEnvira} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faLanguage} className='w-5 h-5'/> Language</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Language:' name="language" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <FontAwesomeIcon icon={faEarListen} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 mt-8'>
               <h3 className='ttext-2xl text-stone-800 font-bold'><FontAwesomeIcon icon={faListCheck} className='w-5 h-5'/> Projects</h3>
               <div className='w-full box-border'>
                 <div className='relative flex items-center'>
                    <textarea onChange={(e)=>getCreate(e)} type="text" rows="2" cols="5" placeholder='Projects:' name="projects" className='w-full border-b border-b-stone-800 overflow-hidden placeholder:text-stone-800 placeholder:text-xs relative pr-2 pl-5 flex'></textarea>
                    <FontAwesomeIcon icon={faBuildingShield} className='absolute w-4 h-4 text-[#39D0FF] left-0 top-0'/>
                 </div>
               </div>
            </div>

            <div className='flex flex-col gap-5 mt-8'>
               <div className='flex justify-center'>
                 <button className='bg-[#39D0FF] hover:bg-[#25add6] cursor-pointer text-stone-50 flex px-4 py-2 rounded-lg'><span>Create</span> <FontAwesomeIcon icon={faPenToSquare} className='border-0 w-4 h-4 font-bold p-1'/></button>
               </div>
            </div>


        </form>
    </div>}
    </>
  )
}

export default Create