import { memo, useEffect } from "react";
import AOS from "aos"

const Animate = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-3 pt-[900px]">
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
      <div data-aos="fade-up" className="bg-pink-300 h-72"></div>
    </div>
  );
};

export default memo(Animate);
