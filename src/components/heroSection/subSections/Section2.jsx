// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Images } from "../../../assets/Images";
import MainHeading from "../../MainHeading";
import { useEffect } from "react";
import WOW from "wowjs";
export default function Section2() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <MainHeading textColor="blue-gradient-text" />
            <img
              src={Images.card1}
              alt=""
              className="w-[400px] wow animate__animated animate__fadeInUp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <MainHeading textColor="green-gradient-text" />
            <img
              src={Images.card2}
              alt=""
              className="w-[400px] wow animate__animated animate__fadeInUp"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <MainHeading textColor="pink-gradient-text" />
            <img
              src={Images.card3}
              alt=""
              className="w-[400px] wow animate__animated animate__fadeInUp"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
