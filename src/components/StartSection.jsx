import React from 'react'
import logo from '../assets/Isologo.png'
export default function StartSection({title}) {
  return (
    <div className='w-[820px] min-h-screen bg-[var(--primary-color)] flex flex-col justify-center gap-2 '>
      <img src={logo} alt="Logo" className="w-[130px] h-[130px]" />
      <h1 className='font-primary font-bold text-[92px] text-white w-[503px] h-[201px]'>{title}</h1>
    </div>
  );
}
