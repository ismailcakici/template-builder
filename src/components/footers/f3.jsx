import React from "react";
import { socialIconsList } from "../../constants/socails_icon_list";
import { useGlobalContext } from "../../context/global_context";

const F3 = () => {
  const { title, slogan } = useGlobalContext();

  return (
    <div className="relative w-full min-h-[400px] pb-5 bg-grey-0 flex flex-row flex-wrap justify-around items-center">
      <div className="flex flex-col gap-5 text-white-10 text-center text-4xl font-bold">
        <p>{title}</p>
        <p>{slogan}</p>
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

export default F3;
