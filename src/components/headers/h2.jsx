import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo-sm.png";
import { usePortContext } from "../../context/port_context";
import { headerConstants } from "../../constants/header-constants/header_constants";

const H2 = () => {
  const { selectedPort } = usePortContext();

  const [menuActive, setMenuActive] = useState(false);

  const handleSetMenuActive = () => setMenuActive(!menuActive);

  useEffect(() => {
    selectedPort !== "mobile" && setMenuActive(false);
  }, [selectedPort]);

  return (
    <div
      className={`sticky top-0 bg-white h-16 p-1 flex flex-row items-center shadow-xl px-16 z-10  ${
        selectedPort === "desktop"
          ? "justify-between"
          : selectedPort === "mobile"
          ? "absolute w-[395px] justify-start px-4"
          : "justify-evenly"
      }`}
    >
      {selectedPort !== "mobile" && (
        <div className="flex items-center gap-4 font-semibold">
          {headerConstants.slice(0, 3).map((title, idx) => (
            <div className="cursor-pointer hover:text-grey-50" key={idx}>
              {title}
            </div>
          ))}
        </div>
      )}

      <div className={`flex items-center gap-4 ${selectedPort === "mobile" && "hidden"}`}>
        <img className="w-12 h-12 grayscale cursor-pointer" src={logo} alt="ic-logo" />
        <p className="text-grey-0 font-semibold text-lg">LOGO</p>
      </div>

      {selectedPort !== "mobile" && (
        <div className="flex items-center gap-4 font-semibold">
          {headerConstants.slice(3).map((title, idx) => (
            <div className="cursor-pointer hover:text-grey-50" key={idx}>
              {title}
            </div>
          ))}
        </div>
      )}

      {selectedPort === "mobile" && (
        <div className={`flex flex-col gap-1 cursor-pointer`} onClick={handleSetMenuActive}>
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
      )}

      {selectedPort === "mobile" && menuActive && (
        <div className="relative">
          <ul className="absolute max-h-[732px] left-[-48px] top-8 px-20 py-40 gap-14 flex flex-col text-center bg-white font-semibold z-10">
            {headerConstants.map((title, idx) => (
              <li className="cursor-pointer hover:text-grey-50" key={idx}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default H2;
