import React from "react";
import { usePortContext } from "../../context/port_context";
import { homePageBgImg } from "../../constants/home-page-constants/home_page_constants";

const HP3 = () => {
  // get device port value
  const { selectedPort } = usePortContext();

  return (
    // component main container
    <div className="w-full h-[600px] bg-grey-70 flex flex-row-reverse justify-around items-center flex-wrap-reverse">
      {/* text and btns container */}
      <div className="flex flex-col">
        <span
          className={`font-bold text-center text-grey-0 ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        >
          Your Title Here
        </span>
        <span
          className={`text-center font-semibold my-3 text-grey-0 ${
            selectedPort === "mobile" ? "text-md" : "text-xl"
          }
          `}
        >
          Your Slogan Here
        </span>
        <div className="flex flex-row justify-around">
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
      {/* img container */}
      <div className="w-[500px] h-[300px] rounded-md p-1">
        <img className="rounded-md" src={homePageBgImg} alt="your-img" />
      </div>
    </div>
  );
};

export default HP3;
