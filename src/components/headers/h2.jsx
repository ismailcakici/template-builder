import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo-sm.png";
import { useGlobalContext } from "../../context/global_context";

const H2 = () => {
  const { selectedPort, headerTitles, headerLogo, setHeaderLogo } = useGlobalContext();

  const [menuActive, setMenuActive] = useState(false);

  const tempLogoText = "LOGO";

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
          {headerTitles.slice(0, 3).map((title, idx) => (
            <div className="cursor-pointer hover:text-grey-50" key={idx}>
              {title}
            </div>
          ))}
        </div>
      )}

      <div className={`flex items-center gap-4 ${selectedPort === "mobile" && "hidden"}`}>
        <img className="w-12 h-12 grayscale cursor-pointer" src={logo} alt="ic-logo" />
        <input
          name="logoText-h3"
          id="logoText-h3"
          type="text"
          maxLength={15}
          onChange={(e) => {
            setHeaderLogo(e.target.value);
          }}
          defaultValue={headerLogo === "" ? tempLogoText : headerLogo}
          className={`w-36 font-semibold text-xl mx-0 text-center bg-white bg-opacity-0 text-grey-0 hover:border-2 border-dotted border-grey-0 ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        ></input>{" "}
      </div>

      {selectedPort !== "mobile" && (
        <div className="flex items-center gap-4 font-semibold">
          {headerTitles.slice(3).map((title, idx) => (
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
          <ul className="absolute max-h-[732px] left-[-48px] top-8 px-20 py-5 gap-12 flex flex-col items-center justify-start text-center bg-white font-semibold z-10">
            {headerTitles.map((title, idx) => (
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
