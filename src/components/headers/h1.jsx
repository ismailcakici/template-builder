import React from "react";
import logo from "../../assets/icons/logo-sm.png";
import { usePortContext } from "../../context/port-context";
import { headerConstants } from "../../constants/header-constants/header-constants";

const H1 = () => {
  // get device port value
  const { selectedPort } = usePortContext();

  return (
    // header container
    <div
      className={`bg-white w-full h-16 p-1 flex flex-row items-center shadow-xl px-16  ${
        selectedPort === "desktop"
          ? "justify-between"
          : selectedPort === "mobile"
          ? "justify-start px-4"
          : "justify-center"
      }`}
    >
      {/* menu section */}
      <div
        className={`flex flex-col gap-1 cursor-pointer ${
          selectedPort === "mobile" ? "block" : "hidden"
        }`}
      >
        <div className="w-8 h-1 rounded-lg bg-grey-0"></div>
        <div className="w-8 h-1 rounded-lg bg-grey-0"></div>
        <div className="w-8 h-1 rounded-lg bg-grey-0"></div>
      </div>
      {/* logo section */}
      <div
        className={`min-w-min flex justify-center items-center gap-4 ${
          selectedPort === "tablet" ? "hidden" : selectedPort === "mobile" ? "hidden" : "block"
        }`}
      >
        <img className="w-12 h-12 grayscale cursor-pointer" src={logo} alt="ic-logo" />
        <p className="text-grey-0 font-semibold text-lg">LOGO</p>
      </div>
      {/* navbar section */}
      <div className={`${selectedPort === "mobile" ? "hidden" : "block"}`}>
        <ul className="flex flex-row justify-around items-center font-semibold gap-3">
          {headerConstants.map((title, idx) => {
            return (
              <li className="cursor-pointer hover:text-grey-50" key={idx}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default H1;
