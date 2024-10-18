import React from "react";
import { sliderItems } from "../../constants/TrendingItemsList";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BannerSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className=" rounded-xl mt-10 lg:mt-0 "
    >
      {sliderItems.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className=" cursor-pointer max-h-[450px] relative"
          >
            <img
              className="object-contain w-full"
              src={item.image}
              alt={item.alt}
            />
            <div className="absolute flex flex-col gap-2 top-1/2 left-16 -translate-y-1/2 max-w-[300px] lg:max-w-[450px]">
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-rose-300  tracking-wide ">
                {item.subtitle}
              </p>
              <h2 className="text-gray-800 font-bold text-3xl md:text-4xl lg:text-6xl ">
                {item.title}
              </h2>
              <p className=" text-gray-500 font-medium text-xl md:text-3xl ">
                starting at ${" "}
                <span className="text-gray-700 font-bold">
                  {item.price.toFixed(2)}
                </span>
              </p>
              <button className="py-2 px-5 w-fit rounded-lg bg-rose-300 text-white uppercase font-bold hover:bg-slate-950">
                shop now
              </button>
            </div>
          </SwiperSlide>
        );
      })}
      <SwiperSlide>Slide 1</SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;
