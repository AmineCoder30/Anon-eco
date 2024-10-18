import React, { useState, useContext } from "react";
import { categories } from "../../constants/SideBarCategoriesList";
import { list } from "../../constants/BestSellerList";
import { IoStar, IoStarOutline, IoStarHalfOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Context } from "../../App";

function CategoriesSideBar({ isSticky }) {
  const [active, setActive] = useState(null);
  const { state, dispatch } = useContext(Context);

  const toggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar />);
    }

    if (halfStar) {
      stars.push(<IoStarHalfOutline />);
    }

    return stars;
  };

  return (
    <div
      className={` fixed lg:static top-0 left-0   w-fit z-[100] duration-300  lg:w-fit    ${
        state.showCategories
          ? " translate-x-0"
          : " -translate-x-full lg:translate-x-0"
      }   `}
    >
      <div className="flex flex-col w-fit p-2 bg-white h-screen lg:h-fit overflow-y-auto lg:sticky top-0 ">
        <ul className="flex flex-col w-[300px] rounded-md border border-gray-200 p-4">
          <h1 className=" uppercase flex justify-between font-medium tracking-wider text-gray-800 text-xl mb-4">
            Category
            <button
              className="lg:hidden"
              onClick={() => dispatch("HIDE_CATEGORIES")}
            >
              {" "}
              <RxCross1 />
            </button>
          </h1>
          {categories?.map((item, index) => (
            <li key={index} className="flex flex-col w-full  ">
              <button
                className={`flex justify-between items-center w-full py-2 border-b duration-700 ${
                  active === index ? "border-gray-200" : "border-transparent"
                }   `}
                onClick={() => toggle(index)}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 mr-2"
                  />
                  <p className="text-lg font-medium text-gray-600  ">
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center">
                  {active === index ? <span>-</span> : <span>+</span>}
                </div>
              </button>
              {
                <ul
                  className={`flex flex-col w-full gap-1 pt-3 overflow-hidden origin-bottom delay-0 transition-all duration-700 ${
                    active === index ? "max-h-screen" : "max-h-0"
                  } `}
                >
                  {item?.products?.map((subItem, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between w-full px-2 text-gray-500"
                    >
                      <p className="text-base">{subItem.name}</p>
                      <p className="text-base ml-4">{subItem.stock}</p>
                    </li>
                  ))}
                </ul>
              }
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-3 py-4">
          <h1 className=" uppercase font-medium tracking-wider text-gray-800 text-xl mb-4">
            best sellers
          </h1>
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3  overflow-hidden "
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-20 h-20 rounded-lg"
              />
              <div className="overflow-hidden">
                <h2 className="text-lg text-gray-600   whitespace-nowrap text-ellipsis   overflow-hidden">
                  {item.title}
                </h2>
                <div className="flex items-center text-orange-300 my-1">
                  {getStars(item.rating)}
                </div>
                <div className="flex items-center gap-5">
                  <del className="line-through text-gray-400 font-light">
                    {item.originalPrice}
                  </del>
                  <p className="text-lg font-medium text-gray-700">
                    {item.price}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoriesSideBar;
