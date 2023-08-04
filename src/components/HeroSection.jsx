import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = ["Connectee", "inclusive"];
const intervalTime = 3000;

export default function HeroSection() {
  const [nameIndex, setNameIndex] = useState(0);
  const intervalId = useRef();

  const changeName = () => {
    setNameIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  useEffect(() => {
    intervalId.current = setInterval(changeName, intervalTime);
    return () => clearInterval(intervalId.current);
  }, []); // Run only on initial mount

  return (
    <>
      <div className="bg-[#09002C] py-[10rem]">
        <div className="container mx-auto text-center">
          <div className="w-5/6 mx-auto text-left">
            <h1 className="text-[85px] 2xl:text-[120px] font-bold uppercase">
              <span className="gradient-text mr-6">Le carte</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={nameIndex} // Unique key to enable smooth transition
                  initial={{ opacity: 0, y: 20 }} // Initial state before entering
                  animate={{ opacity: 1, y: 0 }} // End state after entering
                  exit={{ opacity: 0, y: -20 }} // State when exiting
                  transition={{ duration: 0.4 }} // Animation duration
                  className="gradient-text"
                >
                  {names[nameIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </div>
          <p className="text-white w-1/2 mx-auto mb-16">
            HandSome, Une carte de paiement innovante qui murmure aux oreilles
            des déficients visuels.
          </p>
          <button className="bg-[#235EE8] py-[12px] px-[20px] rounded-[5px] text-white text-lg font-[450]">
            Prendez un RDV
          </button>
        </div>
      </div>
    </>
  );
}
