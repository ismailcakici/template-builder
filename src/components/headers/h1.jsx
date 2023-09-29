import React from "react";
import logo from "../../assets/icons/logo-sm.png";

const H1 = () => {
  return (
    <div className="bg-white w-full h-16 p-1 flex flex-row items-center justify-between shadow-xl px-16">
      <div className="min-w-min flex justify-center items-center gap-4">
        <img className="w-12 h-12 grayscale cursor-pointer" src={logo} alt="ic-logo" />
        <p className="text-grey-0 font-semibold text-lg">LOGO</p>
      </div>
      <div className="min-w-min">
        <ul className="flex flex-row justify-around items-center font-semibold gap-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">F.A.Q</li>
        </ul>
      </div>
    </div>
  );
};

export default H1;
