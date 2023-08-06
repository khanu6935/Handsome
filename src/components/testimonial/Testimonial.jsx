import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Images } from "../../assets/Images";
import { TestimonialData } from "./Testimonialdata";
export default function Testimonial() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="testimonial-wrapper py-[90px] relative">
          <button className="bg-[#F3F5FF] rounded-[33554400px] py-[14px] px-6 text-base font-bold text-[#1D5BBF]">
            Testimonial
          </button>
          <h2 className="font-bold text-[2.0833vw]">
            Don’t take our word for it.
            <br /> See what our clients say.
          </h2>
          <div>
            <img
              src={Images.testimonialBg}
              alt=""
              className="absolute top-64 left-[50%] -translate-x-[50%] hidden lg:block w-1/2"
            />
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mt-5 lg:mt-[150px]"
            >
              {TestimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col lg:flex-row items-center gap-[38px] w-5/6 mx-auto bg-white rounded-2xl testimonial-inner p-6 lg:px-[85px] lg:py-[47px]">
                    <img src={item.imgSrc} alt="" />
                    <div>
                      <p className="text-[12px] lg:text-[18px] font-normal">
                        {item.description}
                      </p>
                      <h5>{item.name}</h5>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
