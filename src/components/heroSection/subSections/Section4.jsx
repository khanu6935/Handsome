import { useState, useRef, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Images } from "../../../assets/Images";
import useSwiperAnimation from "../../../customHooks/useSwiperAnimation";
import Button from "../../Button";
const sliderImages = [
  {
    phoneImg: Images.iPhone1,
  },
  {
    phoneImg: Images.iPhone2,
  },
  {
    phoneImg: Images.iPhone3,
  },
];
const cardImages = [
  {
    imgSrc: Images.Group1,
  },
  {
    imgSrc: Images.Group2,
  },
  {
    imgSrc: Images.Group3,
  },
];

export default function Section4() {
  const { swiperRef, applySlideAnimation, currentSlideIndex } =
    useSwiperAnimation();
  useEffect(() => {
    applySlideAnimation();
  }, [applySlideAnimation]);

  const headingBackground = [
    "blue-gradient-text",
    "green-gradient-text",
    "blue-heading",
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:pt-32 justify-center lg:items-center h-screen">
        <div className="w-full lg:w-2/3">
          <div>
            <div
              className="flex flex-col items-center relative"
              style={{ transition: "all 3s ease-out" }}
            >
              <img
                src={cardImages[currentSlideIndex].imgSrc}
                alt=""
                className="w-[300px] 2xl:w-[400px] custom-animation"
              />

              <h1
                className={`${headingBackground[currentSlideIndex]} text-3xl lg:text-5xl 2xl:text-[5vw] font-bold uppercase py-5`}
              >
                Personnalisable
              </h1>
            </div>
            <p className="font-[Montserrat] font-medium text-base lg:text-xl 2xl:text-2xl tracking-[1.5px] capitalize text-[#182F45] mb-8">
              HandSome permet aux entreprises de mieux répondre aux besoins
              spécifiques de leur clientèle, en leur offrant une expérience de
              paiement appropriée à leur handicap. ET DE QUALITE.
            </p>
            <Button />
          </div>
        </div>
        <div className="w-full lg:w-1/3 hidden lg:block">
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
                  className="flex flex-col items-center h-48 mt-5 lg:mt-0"
                  key={index}
                >
                  <img
                    src={item.phoneImg}
                    alt=""
                    className="w-[150px] lg:w-[280px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
