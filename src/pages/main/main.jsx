import React from "react";
import { iconList } from "../../constants/responsive-icon-list";
import logo from "../../assets/icons/logo-sm.png";

const Main = () => {
  return (
    <div className="grid grid-cols-[0%,100%] md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] ">
      {/* Selectors */}
      <div className="min-h-screen shadow-inner p-2">
        {/* Logo and Title */}
        <div className="h-20 w-full flex flex-row justify-center items-center gap-5">
          <img className="w-16 h-auto grayscale" src={logo} alt="ic-logo" />
          <h1 className="font-sans text-xl text-center text-grey-0">Kigen Template Builder</h1>
        </div>
      </div>
      {/* Display */}
      <div className="min-h-screen bg-white-10 p-2">
        {/* Responsive Icons Container */}
        <div className="min-w-full h-20 bg-white rounded-md shadow-sm flex flex-row justify-center items-center gap-10">
          {iconList.map((icon, idx) => {
            return (
              <img className="w-12 h-auto cursor-pointer" src={icon} alt={"ic-" + icon} key={idx} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
