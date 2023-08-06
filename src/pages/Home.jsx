import Footer from "../components/Footer";
import Header from "../components/Header";
import BloogSection from "../components/bloog/BloogSection";
import HeroSection from "../components/heroSection/HeroSection";
import Testimonial from "../components/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Testimonial />
      <BloogSection />
      <Footer />
    </>
  );
}
