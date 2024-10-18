import React from "react";
import { categories } from "../../constants/SuggestionsList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Suggestions() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      // Responsive breakpoints
      breakpoints={{
        // when window width is >= 320px

        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ visible: true }}
      className="container mx-auto mb-10"
    >
      {categories.map((item, i) => {
        return (
          <SwiperSlide
            key={i}
            className="flex items-center p-4 border rounded-lg shadow-sm"
          >
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
              <img src={item.image} alt={item.alt} className="w-10 h-10" />
            </div>
            <div className="ml-4">
              <div className="flex items-center justify-between">
                <span className="font-medium uppercase text-black">
                  {item.title}
                </span>
                <span className="text-gray-500 ml-2">{item.amount}</span>
              </div>
              <div className="text-pink-500">Show All</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Suggestions;
