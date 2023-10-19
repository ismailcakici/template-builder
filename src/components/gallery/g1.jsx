import React, { useState } from "react";
import { slides } from "../../constants/gallery-constants/gallery_constants";
import arrow from "../../assets/icons/arrow.png";
const G1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    // main component container
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover grayscale duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block opacity-50 absolute w-[30px] h-auto top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-white cursor-pointer">
        <img className="rotate-90" src={arrow} alt="arrow-prev" onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block opacity-50 absolute w-[30px] h-auto top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-white cursor-pointer">
        <img className="-rotate-90" src={arrow} alt="arrow-next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default G1;
