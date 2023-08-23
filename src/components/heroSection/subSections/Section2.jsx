// Import Swiper React components
import { useState, useRef, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Images } from "../../../assets/Images";
import MainHeading from "../../MainHeading";
import useSwiperAnimation from "../../../customHooks/useSwiperAnimation";
const sliderImages = [
  {
    imgSrc: Images.card1,
  },
  {
    imgSrc: Images.card2,
  },
  {
    imgSrc: Images.card3,
  },
];

export default function Section2() {
  const { swiperRef, applySlideAnimation, currentSlideIndex } =
    useSwiperAnimation();
  useEffect(() => {
    applySlideAnimation();
  }, [applySlideAnimation]);
  const textGradient = [
    "blue-gradient-text",
    "green-gradient-text",
    "pink-gradient-text",
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <MainHeading
          textColor={textGradient[currentSlideIndex]}
          headingStyle="mb-[23px]"
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          direction="vertical"
          autoHeight={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          mousewheel={true}
          modules={[Autoplay, Mousewheel]}
          className="mySwiper"
          ref={swiperRef}
        >
          {sliderImages.map((item, index) => (
            <SwiperSlide>
              <div
                className="flex flex-col items-center h-20 lg:h-24"
                key={index}
              >
                <img
                  src={item.imgSrc}
                  alt=""
                  className="w-[300px] 2xl:w-[400px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
