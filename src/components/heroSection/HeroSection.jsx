import React, { useRef, useState, useEffect, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

import Section1 from "./subSections/Section1";
import Section2 from "./subSections/Section2";
import Section3 from "./subSections/Section3";
import Section4 from "./subSections/Section4";
import Section5 from "./subSections/Section5";
import useSwiperAnimation from "../../customHooks/useSwiperAnimation";
export default function HeroSection({ setCurrentIndex }) {
  const [sliderEnd, setSliderEnd] = useState(false);
  const [swiperValue, setSwiperVAlue] = useState();
  const { swiperRef, applySlideAnimation, currentSlideIndex } =
    useSwiperAnimation();

  useEffect(() => {
    applySlideAnimation();
  }, [applySlideAnimation]);
  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setSwiperVAlue(swiper);
    if (swiper.isEnd) {
      setSliderEnd(true);
    } else {
      setSliderEnd(false);
    }
  };
  // if (sliderEnd) {
  //   swiperValue.disable();
  //   // Enable body scrolling
  //   document.body.style.overflow = "auto";
  //   // setInterval(() => swiperValue.enable(), 5000);
  //   window.onscroll = function (e) {
  //     if (window.scrollY >= 500) {
  //       swiperValue.enable();
  //     }
  //   };
  // }
  const arrowHandler = () => {
    window.scrollTo(0, window.scrollY + 400);
  };
  return (
    <>
      <div
        className={`${
          currentSlideIndex === 3 ? "bg-[#fff]" : "hero-background"
        } w-full h-screen overflow-hidden`}
      >
        <div className="container mx-auto text-center px-5 lg:px-0">
          <Swiper
            slidesPerView={1}
            mousewheel={sliderEnd ? false : true}
            direction="vertical"
            autoHeight={true}
            modules={[Mousewheel]}
            className="mySwiper"
            ref={swiperRef}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Section1 currentSlideIndex={currentSlideIndex} />
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
              <Section5 arrowHandler={arrowHandler} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
