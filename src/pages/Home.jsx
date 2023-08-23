import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BloogSection from "../components/bloog/BloogSection";
import HeroSection from "../components/heroSection/HeroSection";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState();
  return (
    <>
      <Header currentIndex={currentIndex} />
      <HeroSection setCurrentIndex={setCurrentIndex} />
      <Testimonial />
      <BloogSection />
      <Footer />
    </>
  );
}
