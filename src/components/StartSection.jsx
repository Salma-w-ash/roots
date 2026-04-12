import React from 'react'
import logo from '../assets/Isologo.png'
export default function StartSection({title}) {
  return (
    <div className="w-1/2 min-h-screen bg-[var(--primary-color)] flex flex-col justify-start items-center pt-22 gap-4 ">
      <div className="container mx-auto p-10">
        <img src={logo} alt="Logo" className="w-[130px] h-[130px]" />
        <h1 className="font-primary font-bold text-[92px] text-white  h-[201px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
