import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

import Section1 from "./subSections/Section1";
import Section2 from "./subSections/Section2";
import Section3 from "./subSections/Section3";
import Section4 from "./subSections/Section4";
import Section5 from "./subSections/Section5";

export default function HeroSection() {
  return (
    <>
      <div className="bg-[#09002C] py-[10rem]">
        <div className="container mx-auto text-center px-5 lg:px-0 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            modules={[Mousewheel]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Section1 />
            </SwiperSlide>
            <SwiperSlide>
              <Section2 />
            </SwiperSlide>
            <SwiperSlide>
              <Section3 />
            </SwiperSlide>
            <SwiperSlide>
              <Section4 />
            </SwiperSlide>
            <SwiperSlide>
              <Section5 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
