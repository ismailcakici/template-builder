import React from "react";
import { socialIconsList } from "../../constants/socails_icon_list";
import { useGlobalContext } from "../../context/global_context";

const F2 = () => {
  const { title, slogan, headerTitles } = useGlobalContext();

  return (
    <div className="relative w-full min-h-[600px] pb-5 bg-grey-0 flex flex-row flex-wrap justify-around items-center">
      <div className="flex-col max-w-xs gap-5 text-white-10 text-center text-4xl font-bold">
        <p>{title}</p>
        <p>{slogan}</p>
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
      <div className="absolute bottom-2 my-3 text-grey-30 flex flex-row flex-wrap text-center justify-evenly items-center">
        {socialIconsList.map((icon, idx) => {
          return (
            <div className="rounded-full p-1 bg-grey-0">
              <img className="w-[30px] h-auto hover:cursor-pointer" src={icon} alt="social-icon" />;
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-2 my-3 text-grey-30 flex flex-row flex-wrap text-center justify-center items-center">
        All Rights Reserved Kigen Template Builder 2023
      </div>
    </div>
  );
};

export default F2;
