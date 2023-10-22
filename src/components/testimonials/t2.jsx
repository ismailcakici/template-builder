import React from "react";
import { testimonialConstants } from "../../constants/testimonial-constants/testimonial_constants";
import { useState } from "react";
import arrow from "../../assets/icons/arrow.png";

const T2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonialConstants.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialConstants.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover grayscale duration-500">
        <div className="w-full h-[450px] p-3 text-center flex flex-col justify-around items-center bg-white rounded-md shadow-2xl border-2 border-solid border-grey-0 ">
          <p className="text-xl">{testimonialConstants[currentIndex].client}</p>
          <p className="text-lg ">{testimonialConstants[currentIndex].testimonial}</p>
          <p className="text-xl">{testimonialConstants[currentIndex].company}</p>
        </div>
      </div>
      <div className="hidden group-hover:block opacity-50 absolute w-[30px] h-auto top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-white cursor-pointer">
        <img className="rotate-90" src={arrow} alt="arrow-prev" onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block opacity-50 absolute w-[30px] h-auto top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-white cursor-pointer">
        <img className="-rotate-90" src={arrow} alt="arrow-next" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default T2;
