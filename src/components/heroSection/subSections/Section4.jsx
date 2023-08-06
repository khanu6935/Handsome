import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Images } from "../../../assets/Images";
export default function Section4() {
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
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3">
              <div>
                <div className="flex flex-col items-center">
                  <img
                    src={Images.Group1}
                    alt=""
                    className="w-[400px] wow animate__animated animate__fadeInUp"
                  />
                  <h1 className="blue-gradient-text text-[5vw] font-bold uppercase">
                    Personnalisable
                  </h1>
                </div>
                <p className="text-white mb-16">
                  HandSome permet aux entreprises de mieux répondre aux besoins
                  spécifiques de leur clientèle, en leur offrant une expérience
                  de paiement appropriée à leur handicap. ET DE QUALITE.
                </p>
                <button className="bg-[#235EE8] py-[12px] px-[20px] rounded-[5px] text-white text-lg font-[450]">
                  Prendez un RDV
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <img src={Images.iPhone1} alt="" className="w-full" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
