import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center py-[11%]'>
        <form className='w-[22rem] lg:w-[26rem] shadow-md px-9 flex flex-col gap-5 py-14 rounded-lg'>
            <input type="email" placeholder="Email:" className="w-full rounded-lg placeholder:text-stone-800 border border-[#39D0FF] px-4 py-1"/>
            <input type="text" placeholder="Authkey:" className="w-full rounded-lg placeholder:text-stone-800 border border-[#39D0FF] px-4 py-1"/>
            <div className='flex justify-center'><button className='px-3 py-1 text-stone-50 bg-[#39D0FF] rounded-lg'>Login</button></div>
        </form>
    </div>
  )
}

export default Login