import React from "react";
import map from "../../assets/images/map.jpg";
import { useGlobalContext } from "../../context/global_context";

const F1 = () => {
  const { headerTitles } = useGlobalContext();

  return (
    <div className="relative w-full min-h-[600px] py-3 bg-grey-0 flex flex-row flex-wrap justify-around items-center">
      <div className="w-[400px] h-auto mx-2 overflow-hidden rounded-md hover:cursor-pointer">
        <img className="object-cover hover:scale-110 transition-all" src={map} alt="map-img" />
      </div>
      <div className="flex flex-col gap-5 my-1">
        <p className="text-xl text-white-10 font-semibold">Site Navigation</p>
        <div className="flex flex-col gap-2 mb-10 text-grey-50 hover:cursor-pointer ">
          {headerTitles.map((title, idx) => {
            return <p key={idx}>{title}</p>;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-xl text-white-10 font-semibold ">Contact</p>
        <div className="flex flex-col gap-2 text-grey-50 hover:cursor-pointer ">
          <p>+555 555 55</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="absolute bottom-2 my-3 text-grey-30 flex flex-row flex-wrap text-center justify-center items-center">
        All Rights Reserved Kigen Template Builder 2023
      </div>
    </div>
  );
};

export default F1;
