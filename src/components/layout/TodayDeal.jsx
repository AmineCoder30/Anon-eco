import React from "react";
import { dealList } from "../../constants/DealList";
import { IoStar, IoStarOutline, IoStarHalfOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function TodayDeal() {
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
    <div className="w-full">
      <h3 className="border-b border-gray-200 pb-2 my-6 font-medium text-xl capitalize">
        Deal of the day
      </h3>
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=" rounded-xl w-full mt-10 lg:mt-0 one "
      >
        {dealList.map((deal, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center bg-white rounded-lg p-3 items-center  border border-gray-200 ">
              <div className="  ">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2">
                    <img
                      src={deal.image}
                      alt="Pair of rose gold diamond earrings with intricate design"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-1/2 pl-6 p-3">
                    <div className="flex items-center my-3">
                      <div className="text-yellow-400 flex">
                        {getStars(deal.rating)}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold mb-1">{deal.title}</h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {deal.description}
                    </p>
                    <div className="text-2xl font-medium text-rose-400 mb-2">
                      {deal.price}
                      <span className="text-gray-500 ml-2 line-through font-light text-2xl">
                        {deal.originalPrice}
                      </span>
                    </div>
                    <button className="bg-rose-300 text-white px-6 py-2 rounded-lg text-lg font-semibold mb-4">
                      ADD TO CART
                    </button>
                    <div className="mb-4">
                      <div className="w-full flex justify-between items-center">
                        <span className="text-gray-600">
                          ALREADY SOLD:{" "}
                          <span className="font-bold">{deal.sold}</span>
                        </span>
                        <span className="text-gray-600">
                          AVAILABLE:
                          <span className="font-bold">{deal.available}</span>
                        </span>
                      </div>
                      <div className="w-full p-1 my-2 bg-gray-100 rounded-full ">
                        <div
                          className=" h-1 bg-rose-400 rounded-full"
                          style={{ width: "27%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-gray-600 font-semibold mb-2">
                      HURRY UP! OFFER ENDS IN:
                    </div>
                    <div className="flex space-x-2">
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-2xl font-medium">
                          {deal.countdown.days}
                        </div>
                        <div className="text-gray-600">Days</div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-2xl font-medium">
                          {deal.countdown.hours}
                        </div>
                        <div className="text-gray-600">Hours</div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-2xl font-medium">
                          {deal.countdown.minutes}
                        </div>
                        <div className="text-gray-600">Min</div>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg text-center">
                        <div className="text-2xl font-medium">
                          {deal.countdown.seconds}
                        </div>
                        <div className="text-gray-600">Sec</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TodayDeal;
