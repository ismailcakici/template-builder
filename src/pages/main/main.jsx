import React, { useState } from "react";
import { iconList } from "../../constants/responsive-icon-list";
import logo from "../../assets/icons/logo-sm.png";
import Accordion from "../../components/accordion/accordion";
import { componentConstants } from "../../constants/components/component-constants";

const Main = () => {
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);

  const handleSelectedHeader = (header) => {
    setSelectedHeader(header);
  };

  const handleSelectedFooter = (footer) => {
    setSelectedFooter(footer);
  };

  return (
    <div className="h-screen grid grid-cols-[0%,100%] md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] ">
      {/* Selectors */}
      <div className="shadow-inner p-2">
        {/* Logo and Title */}
        <div className="h-20 w-full flex flex-row justify-center items-center gap-5">
          <img className="w-16 h-auto grayscale" src={logo} alt="ic-logo" />
          <h1 className="font-semibold text-xl text-center text-grey-0">Kigen Template Builder</h1>
        </div>
        {/* Selector Container */}
        <div className="">
          {componentConstants.map((item, itemIdx) => {
            // Returning all elements from componentConstants as Accordion
            return (
              <Accordion
                title={item.title}
                open={itemIdx === 0 ? true : false}
                content={
                  <div className="flex flex-row flex-wrap gap-3 justify-center items-center p-4">
                    {item.titles.map((title, titleIdx) => {
                      return (
                        <div
                          className="w-16 h-16 rounded-md shadow-lg bg-white grid items-center transition-shadow hover:cursor-pointer hover:drop-shadow-xl"
                          key={titleIdx}
                          // Switching component states as user's changes
                          onClick={() => {
                            switch (itemIdx) {
                              case 0:
                                handleSelectedHeader(item.components[titleIdx]);
                                break;

                              case 1:
                                handleSelectedFooter(item.components[titleIdx]);
                                break;
                              default:
                                break;
                            }
                          }}
                        >
                          <p className="text-3xl text-grey-0 font-bold text-center">{title}</p>
                        </div>
                      );
                    })}
                  </div>
                }
                key={itemIdx}
              />
            );
          })}
        </div>
      </div>
      {/* Display */}
      <div className="h-full bg-white-10 p-2">
        {/* Responsive Icons Container */}
        <div className="min-w-full h-20 bg-white rounded-md shadow-sm flex flex-row justify-center items-center gap-10">
          {iconList.map((icon, idx) => {
            return (
              <img
                className="w-12 h-auto cursor-pointer transition-transform hover:scale-110"
                src={icon}
                alt={"ic-" + icon}
                key={idx}
              />
            );
          })}
        </div>
        {/* Template Display */}
        <div className="max-w-full min-h-screen max-h-full rounded-md border-2 border-grey-50 border-dotted my-3">
          {/* Header */}
          {selectedHeader}
          {/* Footer */}
          {selectedFooter}
        </div>
      </div>
    </div>
  );
};

export default Main;
