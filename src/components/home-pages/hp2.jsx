import React from "react";
import { usePortContext } from "../../context/port_context";
import bgImage from "../../assets/images/background2.jpg";

const HP2 = () => {
  // get device port value
  const { selectedPort } = usePortContext();

  // component main container
  return (
    <div className="w-full h-[600px] relative">
      {/* background img */}
      <img
        className="w-full h-full object-cover grayscale brightness-75"
        src={bgImage}
        alt="bg-img"
      />
      {/* content container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <span
          className={`text-white-10 text-center font-bold ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        >
          Your Title Here
        </span>
        <span
          className={`text-white text-center  font-semibold my-2 ${
            selectedPort === "mobile" ? "text-xl" : "text-4xl"
          }`}
        >
          Your Slogan Here
        </span>
        {/* btns container */}
        <div className="flex flex-row justify-around w-full gap-2">
          <button
            className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
              selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
            }`}
          >
            Explore
          </button>
          <button
            className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
              selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
            }`}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HP2;
