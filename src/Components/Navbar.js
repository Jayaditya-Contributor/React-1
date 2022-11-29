import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import {ImCancelCircle} from 'react-icons/im'

const Navbar = () => {
  const [state,setState] = useState(false)

    const arr =['HOME','ABOUT','SCHEDULE','CONTACT']
  return (
    <>
    <nav className='flex justify-between lg:justify-evenly bg-black text-white lg:h-20 items-center absolute z-[100] w-full lg:bg-opacity-40 bg-opacity-0 px-4 py-2'>
        <h1 className='lg:text-4xl font-bold text-xl'>ADITYA <span className={state===false?'text-orange-500':'text-white'}>GYM</span></h1>

        <div className={'lg:flex lg:space-x-10 lg:font-medium lg:items-center hidden'}>
           {arr.map((value,index)=>{
            
              return index===0?<p className='text-orange-500 cursor-pointer' key={index}>{value}</p>:<p className='hover:text-orange-500 duration-300 cursor-pointer'>{value}</p>
              

           })}

           <button className='bg-orange-600 px-4 py-3 rounded-md cursor-pointer hover:opacity-70'>SIGNUP</button>
        </div>
 
        {state===false?<GiHamburgerMenu  onClick={()=>{setState(true)}} className='text-4xl lg:hidden'/>:<ImCancelCircle onClick={()=>{setState(false)}} className='text-3xl lg:hidden'/>}



    </nav>


    <div className={state===true?'  w-screen h-screen bg-orange-500 flex flex-col items-center justify-center space-y-8 text-white text-2xl':'hidden'}>
           {arr.map((value,index)=>{
            
              return index===0?<p className='text-orange-500 cursor-pointer' key={index}>{value}</p>:<p className='hover:text-orange-500 duration-300 cursor-pointer'>{value}</p>
              

           })}

           <button className={state===false?'bg-orange-600 px-4 py-3 rounded-md cursor-pointer hover:opacity-70':'bg-white text-orange-500 px-4 py-3 rounded-md cursor-pointer hover:opacity-70 '}>SIGNUP</button>
        </div>
    </>
  )
}

export default Navbar