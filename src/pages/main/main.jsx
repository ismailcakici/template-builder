import React, { useState, useEffect } from "react";
import { iconList } from "../../constants/responsive-icon-list";
import logo from "../../assets/icons/logo-sm.png";
import Accordion from "../../components/accordion/accordion";
import { componentConstants } from "../../constants/components-constants/component-constants";
import { devicePorts } from "../../constants/device-ports";
import { usePortContext } from "../../context/port-context";

const Main = () => {
  // Port Context -  Responsive States
  const { selectedPort, setSelectedPort } = usePortContext(getSelectedPort());

  // Selector States
  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);

  // Change selector states
  const handleSelectedHeader = (header) => {
    setSelectedHeader(header);
  };

  const handleSelectedFooter = (footer) => {
    setSelectedFooter(footer);
  };

  // Change devicePort state
  const handleSetSelectedPort = (port) => {
    setSelectedPort(port);
  };

  // Function to get the selected port based on window width
  function getSelectedPort() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1500) {
      return devicePorts[0];
    } else if (windowWidth >= 1200) {
      return devicePorts[1];
    } else {
      return devicePorts[2];
    }
  }

  // Event listener to update selectedPort when window is resized
  useEffect(() => {
    function handleResize() {
      setSelectedPort(getSelectedPort());
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSelectedPort]);

  return (
    <div className="h-screen grid grid-cols-[0%,100%] md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] ">
      {/* Selectors */}
      <div className="shadow-2xl p-2">
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
                // Pass content to accordion
                content={
                  <div className="flex flex-row flex-wrap gap-3 justify-center items-center p-4">
                    {item.titles.map((title, titleIdx) => {
                      return (
                        <div
                          className="rounded-md shadow-lg bg-white grid items-center transition-shadow hover:cursor-pointer hover:drop-shadow-xl"
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
                          <img src={item.images[titleIdx]} alt="component-img" />
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
              <div
                className={`bg-white-10 rounded-md overflow-hidden p-2 drop-shadow-lg ${
                  selectedPort === devicePorts[idx] && "border-dotted border-2 border-grey-50"
                }`}
                key={idx}
              >
                <img
                  className={`w-12 h-auto cursor-pointer transition-transform ${
                    selectedPort === devicePorts[idx] ? "hover:scale-100" : "hover:scale-110"
                  }`}
                  src={icon}
                  alt={"ic-" + icon}
                  onClick={() => {
                    handleSetSelectedPort(devicePorts[idx]);
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* Template Display */}
        <div
          className={`max-w-full h-[800px] rounded-md border-2 mx-auto my-3 border-grey-50 border-dotted ${
            selectedPort === "tablet"
              ? "w-[900px]"
              : selectedPort === "mobile"
              ? "w-[400px]"
              : "w-auto"
          }`}
        >
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
