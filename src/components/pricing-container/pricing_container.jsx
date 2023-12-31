import React from "react";
import { useGlobalContext } from "../../context/global_context";

const PricingContainer = ({ price, title }) => {
  const { selectedPort } = useGlobalContext();
  return (
    <div
      className={`bg-grey-70 cursor-pointer border-grey-30 border rounded-md  flex flex-col items-center py-3 drop-shadow-xl transition-all hover:scale-105 hover:drop-shadow-2xl ${
        selectedPort === "tablet"
          ? "w-[240px] h-[370px]"
          : selectedPort === "mobile"
          ? "w-[200px] h-[350px]"
          : "w-[250px] h-[400px]"
      }`}
    >
      <span className="font-bold text-grey-0 text-3xl">${price}</span>
      <span className="font-semibold text-grey-30 text-2xl py-2">{title}</span>
      <div className="flex flex-col text-start gap-3 text-grey-30">
        <p>Unlimited Support</p>
        <p>5GB Server Space</p>
        <p>2 Users Per Project</p>
        <p>Email Integration</p>
        <p>Unlimited Download</p>
      </div>
      <button
        className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
          selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
        }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingContainer;
