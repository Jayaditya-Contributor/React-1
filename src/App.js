
import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Program from "./Components/Program";
import {GiBladeBite} from 'react-icons/gi'
import Think from "./Components/Think";
import Trainer from "./Components/Trainer";

function App() {
  const arr = ['Basic fitness','Advance Muscle Course','New Gym Training','Yoga Training','Basic Muscle Course','Body Building Course']
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <div className="flex items-center flex-col py-10 space-y-5">
    <p className="text-3xl font-semibold">CHOOSE <span className="text-orange-500">PROGRAM</span></p>
    <GiBladeBite className="text-orange-500 text-5xl"/>
    <div className="lg:w-[800px] text-center">
    <p className="font-light text-slate-600 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora. Dignissimos assumenda inventore odio architecto accusantium maxime debitis.</p>
    </div>
    </div>

    <div className="grid lg:grid-cols-2 lg:place-items-center gap-10 lg:px-52 px-6 lg:mt-24 lg:pb-60 pb-32">
   {
    arr.map((value,index)=>{

      return(<Program title={value} key={index}/>)
      
    })
   }
   </div>
   <Think/>
   <Trainer/>

   <p className="text-center lg:m-40 text-slate-400 text-sm lg:text-base leading-8 m-20">copyright © {new Date().getFullYear()} Aditya Studio - Design by <span className="text-orange-500">Jayaditya</span> </p>
    </div>
  );
}

export default App;
