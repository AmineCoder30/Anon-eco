import React, { useContext } from "react";
import { CiUser, CiHeart, CiBag1, CiMenuFries, CiGrid41 } from "react-icons/ci";
import { Context } from "../../App";
function MobileNavabr() {
  const { dispatch } = useContext(Context);
  return (
    <div className="flex lg:hidden justify-between z-50 border bg-white border-gray-200 px-6 py-4 rounded-lg  text-4xl w-full max-w-[500px] fixed bottom-3 left-1/2 -translate-x-1/2">
      <button
        className="relative  rounded-md "
        onClick={() => dispatch("SHOW_MENU")}
      >
        <CiMenuFries />
      </button>
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
      <button
        className="relative  rounded-md "
        onClick={() => dispatch("SHOW_CATEGORIES")}
      >
        <CiGrid41 />
      </button>
    </div>
  );
}

export default MobileNavabr;
