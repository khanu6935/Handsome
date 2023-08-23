import { useEffect } from "react";
import MainHeading from "../../MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Images } from "../../../assets/Images";
import useSwiperAnimation from "../../../customHooks/useSwiperAnimation";
import Button from "../../Button";
const sliderImages = [
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
export default function Section3() {
  const { swiperRef, applySlideAnimation, currentSlideIndex } =
    useSwiperAnimation();
  useEffect(() => {
    applySlideAnimation();
  }, [applySlideAnimation]);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full h-1/3">
          <Swiper
            slidesPerView={1}
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
                  className="flex flex-col items-center h-44 mt-5 lg:mt-0"
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
        <h1 className="gradient-text text-3xl lg:text-5xl 2xl:text-[5vw] font-bold uppercase mt-5">
          UNE CARTE CONNECTEE
        </h1>
        <p className="font-[Montserrat] font-medium text-base lg:text-xl 2xl:text-2xl tracking-[1.5px] capitalize text-white w-full md:w-1/2 mx-auto my-5 2xl:my-[42px]">
          HandSome, Une carte de paiement innovante qui murmure aux oreilles des
          déficients visuels.
        </p>
        <Button />
      </div>
    </>
  );
}
