import React from "react";
import { menuCategories } from "../../constants/DesktopMenuList";
import BannerSwiper from "./BannerSwiper";
function DescktopMenu() {
  return (
    <div className="container mx-auto  ">
      <ul className="hidden lg:flex justify-center gap-14 items-center container mx-auto ">
        {menuCategories?.map((category, index) => (
          <li key={index} className="py-4  link px-0 relative">
            <a
              href="#"
              className=" font-[600] uppercase text-gray-700  w-full  "
            >
              {category.title}
            </a>

            {category.subMenu && (
              <ul className=" opacity-0 translate-y-8 -z-50 px-6 py-8 flex flex-col gap-3  rounded-xl shadow-sm text-gray-500 font-medium absolute left-0 top-[60px] bg-white w-[200px]">
                {category?.subMenu?.map((item, index) => (
                  <li key={index}>
                    <a href="" className="hover:text-rose-300">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <BannerSwiper />
      <div className="h-24"></div>
    </div>
  );
}

export default DescktopMenu;
