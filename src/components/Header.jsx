import React from "react";
import logo from "../assets/Menu logo roots (1).png"
import { Link } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { RxPerson } from "react-icons/rx";
export default function Header() {
  return (
    <div className="w-full h-[95px] bg-(--primary-color) p-2">
      <div className="container mx-auto h-full flex justify-between items-center gap-2 ">
        <img src={logo} alt="" className="w-[100px] h-[53px]" />
        <div className="w-[800px] flex justify-center items-center gap-2">
          <Link
            to={"/"}
            className="w-[150px]  font-primary font-medium text-white text-[16px] bg-[#7CD185]/50 rounded-[100px] p-2 flex items-center justify-center"
          >
            Home
          </Link>
          <Link
            to={"/Our Dishes"}
            className="w-[150px] font-primary font-medium text-white text-[16px] bg-[#7CD185]/50 rounded-[100px] p-2 flex items-center justify-center"
          >
            Our Dishes
          </Link>
          <Link
            to={"/Subscribe"}
            className="w-[150px] font-primary font-medium text-white text-[16px] bg-[#7CD185]/50 rounded-[100px] p-2 flex items-center justify-center"
          >
            Subscribe
          </Link>
          <Link
            to={"/About us"}
            className="w-[150px] font-primary font-medium text-white text-[16px] bg-[#7CD185]/50 rounded-[100px] p-2 flex items-center justify-center"
          >
            About us
          </Link>
        </div>
        <div className="w-[120px] flex justify-between items-center gap-1">
          <RxPerson className="w-[50px] h-[50px] bg-[#1D5423] text-white rounded-full p-2" />
          <CgShoppingBag className="w-[50px] h-[50px] bg-[#1D5423] text-white rounded-full p-2" />
        </div>
      </div>
    </div>
  );
}
