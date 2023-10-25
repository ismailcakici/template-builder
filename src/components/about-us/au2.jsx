import React from "react";
import bgImage from "../../assets/images/background.png";
import { useGlobalContext } from "../../context/global_context";

const AU2 = () => {
  const { aboutUs } = useGlobalContext();

  return (
    <div className="flex flex-wrap gap-3 p-3 flex-row justify-around items-center w-full min-h-[600px] bg-white-10">
      <div className=" rounded-md overflow-hidden w-[350px] h-auto">
        <img className="grayscale" src={bgImage} alt="bg-img" />
      </div>
      <div className=" w-3/5">
        <p className="leading-10 text-grey-0 text-center font-semibold text-2xl ">{aboutUs}</p>
      </div>
    </div>
  );
};

export default AU2;
