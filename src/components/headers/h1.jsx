import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo-sm.png";
import { usePortContext } from "../../context/port-context";
import { headerConstants } from "../../constants/header-constants/header-constants";

const H1 = () => {
  // get device port value
  const { selectedPort } = usePortContext();

  // menu state
  const [menuActive, setMenuActive] = useState(false);

  // handle menu state

  const handleSetMenuActive = () => setMenuActive(!menuActive);

  // handle menu state when port changes

  useEffect(() => {
    selectedPort !== "mobile" && setMenuActive(false);
  }, [selectedPort]);

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
        onClick={handleSetMenuActive}
      >
        <div
          className={`w-8 h-1 rounded-lg bg-grey-0 transition-all ${
            menuActive && "rotate-45 -mb-2"
          }`}
        ></div>
        <div
          className={`w-8 h-1 rounded-lg bg-grey-0 transition-all ${
            menuActive && "-translate-x-5 opacity-0"
          }`}
        ></div>
        <div
          className={`w-8 h-1 rounded-lg bg-grey-0 transition-all ${
            menuActive && "-rotate-45 -mt-2"
          }`}
        ></div>
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
      <div
        className={`${selectedPort === "mobile" ? !menuActive && "hidden" : "block"} ${
          menuActive && "relative"
        }`}
      >
        <ul
          className={`flex flex-row justify-around items-center font-semibold gap-3 ${
            menuActive &&
            "absolute left-[-47px] top-8 px-20 py-40 gap-12 flex-col text-center bg-white"
          }`}
        >
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
