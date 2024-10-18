import React from "react";
import { IoBagAddOutline, IoEyeOutline, IoHeartOutline } from "react-icons/io5";
import { LiaSyncAltSolid } from "react-icons/lia";
import { IoStar, IoStarOutline, IoStarHalfOutline } from "react-icons/io5";
const CheckForBadge = (product) => {
  if (product.badge) {
    if (product.badge.toLowerCase() === "sale") {
      return (
        <span className=" z-20 bg-gray-900 absolute -rotate-[40deg] py-1 px-10 top-[5px] -left-[30px] text-white">
          Sale
        </span>
      );
    } else if (product.badge.toLowerCase() === "new") {
      return (
        <span className="z-20 bg-rose-300 absolute -rotate-[40deg] py-1 px-10 top-[5px] -left-[30px] text-white">
          new
        </span>
      );
    } else {
      return (
        <span className="z-20 absolute top-3 left-3 bg-[#46c389] text-white text-base font-medium px-1 py-[1px] rounded">
          {product.badge}
        </span>
      );
    }
  }
};
function NewProductCard({ product }) {
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStar = 5 - Math.ceil(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar />);
    }

    if (halfStar) {
      stars.push(<IoStarHalfOutline />);
    } else {
      for (let j = 0; j < emptyStar; j++) {
        stars.push(<IoStarOutline />);
      }
    }

    return stars;
  };

  return (
    <div
      key={product.id}
      className="card cursor-pointer h-full flex flex-col  "
    >
      <div
        key={product.id}
        className=" bg-white rounded-lg flex-grow  border border-gray-200  overflow-hidden"
      >
        <div className="relative h-fit">
          {CheckForBadge(product)}
          <div className="relative h-fit  overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className=" basic_img  object-cover  w-full h-full  relative top-0 left-0 z-10 duration-300 opacity-100  scale-95  "
            />
            <img
              src={product.hoverImage}
              alt={product.title}
              className=" hover_img object-cover w-full h-full absolute top-0 left-0 z-0 scale-95 duration-300 "
            />
          </div>
          <div className="absolute icon_list top-2 right-2 flex flex-col space-y-2 text-gray-500 text-lg translate-x-28 duration-300 ">
            <button className="bg-white p-2 rounded-md border border-gray-200 hover:text-white hover:bg-black">
              <IoHeartOutline />
            </button>
            <button className="bg-white p-2 rounded-md border border-gray-200 hover:text-white hover:bg-black">
              <IoEyeOutline />
            </button>
            <button className="bg-white p-2 rounded-md border border-gray-200 hover:text-white hover:bg-black">
              <LiaSyncAltSolid />
            </button>
            <button className="bg-white p-2 rounded-md border border-gray-200 hover:text-white hover:bg-black">
              <IoBagAddOutline />
            </button>
          </div>
        </div>
        <div className="p-4 mt-3 ">
          <h3 className="text-pink-500 text-lg font-light">
            {product.category}
          </h3>
          <p className="text-gray-500 font-light mt-2 ">{product.title}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              {getStars(product.rating)}
            </div>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold text-gray-900">
              {product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-600 line-through ml-2">
              {product.discountPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProductCard;
