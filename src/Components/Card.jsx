import React from 'react'

import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'


const Card = (props) => {
  return (
    <div className='border-2 lg:w-[300px] p-5 rounded-lg space-y-4 w-[340px]'>
        <img src={props.img} alt="img" />
        <div className='space-y-1 py-4'>
        <p className='text-sm text-orange-500'>{props.exp}</p>
        <p className='text-2xl'>{props.name}</p>
        </div>
        <p className='text-sm text-slate-500 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dignissimos sunt harum sequi ea nihil unde in sed quo </p>

        <div className='flex space-x-4 text-2xl'>
          <AiFillFacebook/>
          <FaTwitter/>
          <AiFillInstagram/>
          <AiFillLinkedin/>
        </div>

    </div>
  )
}

export default Card