import React from 'react'
import footerlogo from '../assets/WHITE ROOTS.png'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
export default function Footer() {
  return (
    <div className="w-full bg-(--primary-color) h-[110px]">
      <div className="container mx-auto flex justify-between items-center p-2">
        <img src={footerlogo} alt="" className="w-[100px] h-[53px]" />
        <div className="w-[227px] flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <FaFacebook size={40} className="text-white" />
            <FaTiktok size={40} className="text-white" />
            <FaInstagram size={40} className="text-white" />
          </div>
          <p className="font-primary font-normal text-white text-[14px]">
            © 2025 Roots. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
