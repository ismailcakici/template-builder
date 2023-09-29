import React, { useState } from "react";
import arrow from "../../assets/icons/arrow.png";

const Accordion = ({ title, content, open }) => {
  // Handle expanding state
  const [isOpen, setIsOpen] = useState(open);

  // Change it
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full min-h-[30px] flex flex-col gap-3 bg-white-10 rounded-md shadow-lg p-1 my-5 hover:shadow-xl transition-all">
      {/* Title Container */}
      <div
        className="flex flex-row justify-between items-center p-1 cursor-pointer "
        onClick={handleIsOpen}
      >
        <p className="text-lg font-semibold text-grey-0">{title}</p>
        <img
          className={`w-auto h-5 transition-transform
          ${isOpen ? "rotate-180" : "rotate-0"}
          ${isOpen ? "transform rotate-180" : "transform rotate-0"}`}
          src={arrow}
          alt="ic-arrow"
        />
      </div>
      {/* Content Container */}
      {isOpen && content}
    </div>
  );
};

export default Accordion;
