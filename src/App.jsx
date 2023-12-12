import React from 'react';
import { useState } from 'react';

const App = () => {
  const [x,setx]=useState(0)
  const [y,sety]=useState(0)
  const mouseHandle=e=>{
    setx(e.clientX )
    sety(e.clientY )
     
  }
  console.log(x)
  return (
    <div onMouseMove={mouseHandle} className='w-full flex justify-center items-center h-screen bg-gray-300'>
      <div className='w-[70%] h-[80vh] bg-white relative'>
      <div  className={`w-[150px] h-[150px]  bg-red-400 absolute `} style={{"left":Math.ceil(x/10)+"px","top":Math.ceil(y/10)+"px"}}></div>
      <div  className={`w-[150px] h-[150px]  bg-green-400 absolute `} style={{"left":Math.ceil(x/10)*1.5+"px","top":-Math.ceil(y/10)*1.5+"px"}}></div>

      </div>
      
    </div>
  );
};

export default App;