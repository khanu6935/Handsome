import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "../../assets/css/styles.css"
import { Images } from "../../assets/Images";
import { BloogData } from "./BloogData";
export default function BloogSection() {
  return (
    <>
      <div className="bg-[#09002C]">
        <div className="container mx-auto">
          <div className="blog-wrapper px-5 md:px-0 py-[40px] md:py-[90px] mx-auto w-full xl:max-w-[1200]">
            <div className="w-full md:w-[530px] mx-auto text-white">
              <h2 className="font-bold text-[40px] mb-[16px] text-center">
                {" "}
                Blogs{" "}
              </h2>
              <p className="text-center text-[14px] md:text-[18px] leading-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem.
              </p>
            </div>
            {/* card code */}
            <div className="flex flex-col xl:flex-row gap-[30px] md:gap-[48px] py-[48px]">
              {BloogData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full lg:w-1/2 xl:w-1/3  items-center mx-auto text-white"
                >
                  <img src={item.imgSrc} alt="" className="w-full" />
                  <div className="pt-[20px] md:py-[20px] md:p-[24px]">
                    <h5 className="text-[24px] leading-[30px] font-[600]">
                      {item.title}
                    </h5>
                    <p className=" text-[14px] md:text-[16px] leading-[150%] font-[400] mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex items-center justify-center mx-auto text-[18px] text-white font-[450] w-[243px] h-[58px] py-[12px] px-[20px] bg-[#235EE8] rounded-[5px]">
              Voir Plus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
