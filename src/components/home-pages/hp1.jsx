import React from "react";
import { useGlobalContext } from "../../context/global_context";
import homePageBgImg from "../../assets/images/background2.jpg";

const HP1 = () => {
  const { selectedPort, title, slogan } = useGlobalContext();

  return (
    <div className="w-full h-[600px] bg-grey-70 flex flex-row justify-around items-center flex-wrap-reverse">
      <div className="flex flex-col">
        <span
          className={`font-bold text-center text-grey-0 ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        >
          {title}
        </span>
        <span
          className={`text-center font-semibold my-3 text-grey-0 ${
            selectedPort === "mobile" ? "text-md" : "text-xl"
          }
          `}
        >
          {slogan}
        </span>
        <div className="flex flex-row justify-around">
          <button
            className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
              selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
            }`}
          >
            Explore
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[300px] rounded-md p-1">
        <img className="rounded-md grayscale" src={homePageBgImg} alt="your-img" />
      </div>
    </div>
  );
};

export default HP1;
