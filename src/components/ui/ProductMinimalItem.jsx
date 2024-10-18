import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductMinimalItem({ list, title }) {
  const handleSlideChange = () => console.log("slide change");
  const handleSwiper = (swiper) => console.log(swiper);

  return (
    <div className=" w-full md:w-1/2 lg:w-1/3  px-3">
      <h3 className="border-b border-gray-200 pb-2 mb-4 font-medium text-lg capitalize">
        {title}
      </h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px

          // when window width is >= 640px
          570: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
        className="w-full"
      >
        {list?.map((items) => {
          return (
            <SwiperSlide
              key={items.id}
              className="flex flex-col cursor-pointer"
            >
              {items?.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="bg-white gap-2 mb-3 w-full rounded-lg overflow-hidden border border-gray-300 p-4 flex items-center ">
                      <img
                        src={item.image}
                        alt="Sweatshirt with a cute design"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="overflow-hidden">
                        <h2 className=" font-medium  whitespace-nowrap text-ellipsis  text-black overflow-hidden">
                          {item.title}
                        </h2>
                        <p className="text-gray-500 text-sm">{item.category}</p>
                        <div className="flex items-center space-x-2">
                          <span className="text-rose-400 text-lg font-medium">
                            {item.price.toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through">
                            {item.discountPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ProductMinimalItem;
