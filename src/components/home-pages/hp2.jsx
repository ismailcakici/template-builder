import React from "react";
import { useGlobalContext } from "../../context/global_context";
import bgImage from "../../assets/images/background2.jpg";

const HP2 = () => {
  const { selectedPort, title, setTitle, slogan, setSlogan } = useGlobalContext();

  const tempTitle = "Change your title";
  const tempSlogan = "Change your slogan";
  return (
    <div className="w-full h-[600px] relative">
      <img
        className="w-full h-full object-cover grayscale brightness-75"
        src={bgImage}
        alt="bg-img"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <input
          name="title-hp2"
          id="title-hp2"
          type="text"
          maxLength={25}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title === "" ? tempTitle : title}
          className={`font-bold text-center bg-white bg-opacity-0 text-white hover:border-2 border-dotted border-grey-0 ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        ></input>
        <input
          type="text"
          name="slogan-hp2"
          id="slogan-hp2"
          maxLength={55}
          onChange={(e) => {
            setSlogan(e.target.value);
          }}
          value={slogan === "" ? tempSlogan : slogan}
          className={`text-center bg-white bg-opacity-0 text-white font-semibold my-3 hover:border-2 border-dotted ${
            selectedPort === "mobile" ? "text-md" : "text-xl"
          }
          `}
        />
        <div className="flex flex-row justify-around w-full gap-2">
          <button
            className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
              selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
            }`}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default HP2;
