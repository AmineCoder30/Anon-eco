import React, { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Context } from "../../App";
import { menuCategories } from "../../constants/DesktopMenuList";
import SocialMediaButtons from "../ui/SocialMediaButtons";

const options = [
  {
    label: "currency",
    values: ["USD $", "EUR $"],
  },
  {
    label: "language",
    values: ["english", "french", "spanish"],
  },
];
function MenuSideBar() {
  const { state, dispatch } = useContext(Context);
  const [active, setActive] = useState(null);
  const [activeSelector, setactiveSelector] = useState(null);

  const toggle = (index, setState, state) => {
    if (state === index) {
      setState(null);
    } else {
      setState(index);
    }
  };
  return (
    <div
      className={` fixed w-[300px] top-0 left-0 h-screen overflow-auto  p-5 z-[100] bg-white duration-300 lg:hidden ${
        state.showMenu ? " translate-x-0" : " -translate-x-full "
      }   `}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-pink-500 font-bold text-lg">Menu</h1>
        <button
          className="font-bold text-lg"
          onClick={() => dispatch("HIDE_MENU")}
        >
          <RxCross1 />
        </button>
      </div>
      <ul className=" lg:flex justify-center  items-center  mb-6 ">
        {menuCategories?.map((category, index) => (
          <li
            key={index}
            className="py-3 border-b border-gray-100   px-0 relative"
            onClick={() => toggle(index, setActive, active)}
          >
            <a
              href="#"
              className=" font-medium capitalize hover:text-rose-400  text-gray-500  w-full  "
            >
              {category.title}
            </a>

            {category.subMenu && (
              <ul
                className={`flex flex-col w-full gap-2 ml-2 first:pt-5   overflow-hidden origin-bottom delay-0 transition-all duration-700 ${
                  active === index ? "max-h-screen " : "max-h-0 "
                } `}
              >
                {category?.subMenu?.map((item, index) => (
                  <li key={index}>
                    <a
                      href=""
                      className="hover:text-rose-300 capitalize font-light text-gray-400 "
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="text-gray-500 flex flex-col gap-2 mb-6">
        {options.map((item, index) => {
          return (
            <div key={index}>
              <h3
                className="font-medium capitalize mb-3 text-lg cursor-pointer  text-gray-800  w-full "
                onClick={() => toggle(index, setactiveSelector, activeSelector)}
              >
                {item.label}
              </h3>
              <ul
                className={`flex flex-col w-full gap-1  overflow-hidden origin-bottom delay-0 transition-all duration-700 ${
                  activeSelector === index ? "max-h-screen" : "max-h-0"
                } `}
              >
                {item.values.map((value) => {
                  return (
                    <li
                      className="  p-2 cursor-pointer border border-gray-100 hover:bg-gray-900 hover:text-white rounded-lg ml-2 w-40 mb-2"
                      key={value}
                    >
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className=" w-full mt-6 flex justify-center">
        <SocialMediaButtons type="mobile" />
      </div>
    </div>
  );
}

export default MenuSideBar;
