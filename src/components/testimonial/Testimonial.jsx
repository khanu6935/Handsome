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
      <div className="container mx-auto px-5 lg:px-0" id="section2">
        <div className="testimonial-wrapper py-[90px] relative">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div>
              <button className="bg-[#F3F5FF] rounded-[33554400px] py-[14px] px-6 text-base font-bold text-[#1D5BBF] wow animate__animated animate__fadeInUp cursor-pointer">
                Testimonial
              </button>
              <h2 className="font-bold text-[#182F45] text-sm md:text-[2.0833vw] leading-[40px] 2xl:leading-[56px] mt-6">
                Don’t take our word for it.
                <br /> See what our clients say.
              </h2>
            </div>
            <button className="bg-[#1D5BBF] rounded-[33554400px] py-[14px] px-6 text-base font-bold text-[#fff] flex items-center gap-3 cursor-pointer">
              Get started
              <img src={Images.buttonArrow} alt="" />
            </button>
          </div>
          <div className="relative py-[20rem] lg:py-0 lg:mt-5">
            <img
              src={Images.testimonialBg}
              alt=""
              // className="absolute top-64 left-[50%] -translate-x-[50%] hidden lg:block w-1/2"
              className="mx-auto hidden lg:block w-[50%] "
            />
            <div className="absolute top-1/2 translate-y-[-50%] w-full">
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              >
                {TestimonialData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row items-center gap-[38px] w-full lg:w-5/6 mx-auto bg-white rounded-2xl testimonial-inner p-6 lg:px-[47px] 2xl:px-[85px] lg:py-[47px]">
                      <img
                        src={item.imgSrc}
                        alt=""
                        className="rounded-[12px]"
                      />
                      <div className="flex items-start">
                        <img
                          src={Images.quote}
                          alt=""
                          className="w-[12px] mr-2 mt-1"
                        />
                        <div>
                          <p className="font-[Montserrat] text-[12px] lg:text-[18px] font-normal">
                            {item.description}
                          </p>
                          <h5 className="font-bold text-[#1F1D2B] text-[12px] lg:text-[18px] mt-10 2xl:mt-20">
                            {item.name}
                          </h5>
                          <p className="font-[Montserrat] text-[#434959] text-[12px] lg:text-[14px]">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
