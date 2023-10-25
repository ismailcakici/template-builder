import React from "react";
import bgImage from "../../assets/images/background.png";
import { useGlobalContext } from "../../context/global_context";

const AU1 = () => {
  const { selectedPort, aboutUs } = useGlobalContext();
  return (
    <div className=" relative w-full min-h-[600px] flex flex-col items-center justify-evenly">
      <img
        className="grayscale absolute brightness-75 w-full h-full object-cover z-0"
        src={bgImage}
        alt="bg-img"
      />
      <div className=" bg-white bg-opacity-20 backdrop-blur-sm w-3/4 flex flex-col items-center gap-5 p-10 z-1">
        <h1
          className={`text-white font-bold ${selectedPort === "mobile" ? "text-3xl" : "text-5xl"}`}
        >
          About Us
        </h1>
        <p className="leading-10 text-white text-center font-semibold text-2xl ">{aboutUs}</p>
      </div>
    </div>
  );
};

export default AU1;
