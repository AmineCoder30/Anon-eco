import React from "react";
import image from "../../assets/cta-banner.jpg";
import girlImage from "../../assets/testimonial-1.jpg";
import quote from "../../assets/icons/quotes.svg";
import { services } from "../../constants/services";

function TestimonialAndSevices() {
  return (
    <div className="container mx-auto flex flex-wrap justify-center items-center mt-12">
      <div className="w-full md:w-1/3 xl:w-1/4 p-4 flex-grow">
        <h2 className="border-b border-gray-200 pb-2 my-6 font-medium text-xl capitalize">
          Testimonial
        </h2>
        <div className="bg-white border rounded-lg p-6 text-center flex flex-col justify-center items-center h-full">
          <img
            src={girlImage}
            alt="Portrait of Alan Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-bold">ALAN DOE</h3>
          <p className="text-gray-500 mb-4">CEO & Founder Invision</p>
          <img src={quote} alt="quote " className="w-8 mb-6" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-2/4 p-4 flex-grow">
        <div className="relative h-full">
          <img
            src={image}
            alt="Summer Collection Background"
            className="rounded-lg w-full h-full aspect-video object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-lg">
            <span className="bg-gray-900 text-white text-lg font-medium py-1 px-2 rounded">
              25% DISCOUNT
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 text-center">
              Summer Collection
            </h2>
            <p className="text-gray-600">Starting @ $10</p>
            <a href="#" className="text-black font-semibold mt-2">
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 p-4 flex-grow">
        <h2 className="border-b border-gray-200 pb-2 my-6 font-medium text-xl capitalize">
          Our Services
        </h2>
        <div className="bg-white border rounded-lg p-6 h-full flex flex-col justify-between">
          {services.map((service, index) => (
            <div className="flex items-center mb-4 group" key={index}>
              <p className="text-rose-300 text-5xl group-hover:text-gray-900 ">
                {service.icon}
              </p>
              <div className="text-gray-500 ml-2">
                <h3 className="font-medium">{service.title}</h3>
                <p className="">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialAndSevices;
