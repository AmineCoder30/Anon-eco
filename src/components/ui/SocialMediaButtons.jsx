import React from "react";
import { SocialMediaList } from "../../constants/socialMedia";
function SocialMediaButtons({ type }) {
  return (
    <ul className={`${type === "mobile" ? "flex " : "hidden lg:flex"} gap-1`}>
      {SocialMediaList.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer  bg-gray-100 rounded-md p-2 text-gray-600 hover:text-white hover:bg-rose-400 duration-200"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialMediaButtons;
