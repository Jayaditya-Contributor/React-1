import React from 'react'
import img from "../assests/first-trainer.jpg"
import img1 from "../assests/second-trainer.jpg"
import img2 from "../assests/third-trainer.jpg"
import {SiTrainerroad} from 'react-icons/si'
import Card from './Card'

const Trainer = () => {
  return (
    <div>
    <div className='grid place-items-center'>
    <div className='flex flex-col items-center lg:w-[600px] text-center space-y-4'>
        <p className='text-4xl font-bold'>EXPERT <span className='text-orange-500'>TRAINERS</span> </p>

        <SiTrainerroad className='text-orange-500 text-3xl'/>

        <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore rem nostrum, deserunt eum dolor delectus. </p>
        </div>
    </div>

    <div className='flex flex-col items-center space-y-10 lg:flex-row lg:justify-center lg:items-baseline lg:space-x-20 mt-20'>
        <Card img={img} name="Bret D. Bowers" exp="Strength Trainer"/>
        <Card img={img1} name="Hector T. Daigl" exp="Muscle Trainer"/>
        <Card img= {img2} name="Paul D. Newman" exp="Power Trainer"/>
    </div>
        

    </div>
  )
}

export default Trainer