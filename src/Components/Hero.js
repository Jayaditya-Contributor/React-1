import React from 'react'
import video from '../assests/video.mp4'

const Hero = () => {
  return (
    <div className='relative'>
        <video className='opacity-80 h-[1000px] lg:h-[870px] w-full object-cover'  src={video} autoPlay loop muted></video>

        <div className='absolute top-64 w-full'>
        <div className='text-center text-white space-y-10'>
        <p className='lg:text-2xl '>WORK HARDER, GET STRONGER</p>
        <p className='lg:text-7xl font-extrabold text-3xl'>EASY WITH OUR <span className='text-orange-600'>GYM</span></p>
         <button className='bg-orange-600 py-3 px-4 rounded-lg hover:opacity-75'>BECOME A MEMBER</button>
        </div>
        </div>

    </div>
  )
}

export default Hero