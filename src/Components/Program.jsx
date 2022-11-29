import React from 'react'
import {CgGym} from 'react-icons/cg'
const Program = (props) => {
  return (
    <div className='flex gap-5 lg:w-[700px]'>
        <div>
            <CgGym className='bg-orange-500 text-white lg:w-24 lg:h-24 rounded w-16 h-16'/>
        </div>
        <div className='space-y-2'>
           <p className='lg:text-2xl text-xl'>{props.title}</p> 
           <p className='lg:text-base font-light text-slate-600 leading-relaxed text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste rerum maxime nisi eaque consequuntur </p>
           <p className='text-orange-500 hover:underline text-base'>DISCOVER MORE</p>
        </div>
    </div>
  )
}

export default Program