import React, { useRef, useState } from "react";
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
      <div className="container mx-auto">
        <div className="testimonial-wrapper py-[90px]">
          <button className="bg-[#F3F5FF] rounded-[33554400px] py-[14px] px-6 text-base font-bold text-[#1D5BBF]">
            Testimonial
          </button>
          <h2 className="font-bold text-[40px]">
            Don’t take our word for it.
            <br /> See what our clients say.
          </h2>
          <div>
            <img src={Images.testimonialBg} alt="" className="mx-auto" />
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper absolute w-full"
            >
              {TestimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center gap-[38px] w-5/6 mx-auto bg-white rounded-2xl testimonial-inner px-[85px] py-[47px]">
                    <img src={item.imgSrc} alt="" />
                    <div>
                      <p>{item.description}</p>
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
