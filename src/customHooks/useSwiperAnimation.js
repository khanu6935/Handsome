import { useRef, useState, useCallback, useEffect } from "react";

const useSwiperAnimation = () => {
  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const updateIndex = useCallback(() => {
    setCurrentSlideIndex(swiperRef.current.swiper.activeIndex);
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex]);

  const applySlideAnimation = () => {
    const slides = swiperRef.current.querySelectorAll(".swiper-slide");

    slides.forEach((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add("animate__animated", "animate__slideInUp");
      } else {
        slide.classList.remove("animate__animated", "animate__slideInUp");
      }
    });
  };

  return { swiperRef, applySlideAnimation, currentSlideIndex };
};

export default useSwiperAnimation;
