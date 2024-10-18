import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CiUser, CiHeart, CiBag1 } from "react-icons/ci";
import logo from "../../assets/logo.svg";
function MainHeader() {
  return (
    <div className="w-full border-b border-gray-100">
      <div className="container mx-auto gap-20 py-5 flex justify-between items-center">
        <img src={logo} alt="logo" className="w-32" />
        <div className="flex-grow relative  text-gray-500">
          <input
            className="w-full rounded-lg border  border-gray-300 p-3 capitalize focus:outline-none"
            type="text"
            placeholder="enter the product name.."
          />
          <span className=" absolute right-2 top-1/2 -translate-y-1/2 text-2xl">
            <IoIosSearch />
          </span>
        </div>
        <div className="hidden gap-2 text-4xl lg:flex">
          <button className="relative  rounded-md ">
            <CiUser />
          </button>
          <button className="relative  rounded-md">
            <CiHeart />
            <span className=" bg-rose-500 text-white text-xs absolute px-1 py-[1px] rounded-full text-center -top-2 -right-1">
              0
            </span>
          </button>
          <button className="relative  rounded-md ">
            <CiBag1 />
            <span className=" bg-rose-500 text-white text-xs absolute px-1 py-[1px] rounded-full text-center -top-2 -right-1">
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
