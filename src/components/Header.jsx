import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Images } from "../assets/Images";
import { CircleFlag } from "react-circle-flags";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
export default function Header({ currentIndex }) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  return (
    <>
      <div
        className={
          currentIndex == 3
            ? `bg-[#09002C] py-4 absolute top-0 w-full`
            : `py-4 absolute top-0 w-full`
        }
      >
        <div className="container mx-auto relative">
          <div className="flex justify-between items-center px-10">
            <img src={Images.logo} alt="" className="w-[150px] h-[25px]" />
            {/* <h1 className="text-[22px] leading-[22px] tracking-[1.5px] uppercase hidden lg:block">
              <span className="gradient-text font-bold mr-[6px]">
                Pour Enterprise
              </span>
              <span className="text-[#BCBCBC]">Pour Enterprise</span>
            </h1> */}
            <div className="flex items-center gap-4">
              <div
                className="switch flex justify-start items-center bg-[#235EE8] w-[30px] h-[16px] px-[2px]"
                data-isOn={isOn}
                onClick={toggleSwitch}
              >
                <motion.div
                  className="w-[12px] h-[12px] bg-white rounded-[40px]"
                  layout
                  transition={spring}
                />
              </div>
              <h5 className="text-base font-medium uppercase text-white">
                Voice on
              </h5>
            </div>
            <div className="lg:flex items-center gap-5 hidden">
              <div className="w-12">
                <CircleFlag countryCode="uk" />
              </div>
              <img src={Images.arrow} alt="" className="w-[15px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
