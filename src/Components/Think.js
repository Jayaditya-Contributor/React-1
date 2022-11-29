import React from 'react'

import gym from '../assests/gym.jpg'

const Think = () => {
  return (
    <div className='pb-40 relative '>
    
        <img className='w-full h-[450px] ' src={gym} alt='gym'/>
       

       

        <div className='text-center text-white space-y-20 mt-32 backdrop-blur-sm lg:backdrop-blur-md w-full  absolute top-0'>
            <p className='text-4xl font-extrabold'>DON'T <span className='text-orange-500'>THINK</span>, BEGIN <span className='text-orange-500'>TODAY</span> </p>
      
            <button className='bg-orange-600 py-3 px-4 rounded-lg hover:opacity-75'>BECOME A MEMBER</button>
            </div>
       
    </div>
  )
}

export default Think