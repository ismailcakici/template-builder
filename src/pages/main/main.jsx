import React, { useState, useEffect } from "react";
import { iconList } from "../../constants/responsive_icon_list";
import logo from "../../assets/icons/logo-sm.png";
import Accordion from "../../components/accordion/accordion";
import { componentConstants } from "../../constants/components-constants/component_constants";
import { devicePorts } from "../../constants/device_ports";
import { usePortContext } from "../../context/port_context";
import arrow from "../../assets/icons/arrow.png";

const Main = () => {
  const { selectedPort, setSelectedPort } = usePortContext(getSelectedPort());
  const [windowWidth, setWindowWidth] = useState(getWindowWidth);
  const [menuActive, setMenuActive] = useState(false);

  const [selectedHeader, setSelectedHeader] = useState(null);
  const [selectedHomePage, setSelectedHomePage] = useState(null);
  const [selectedPricing, setSelectedPricing] = useState(null);
  const [selectedFooter, setSelectedFooter] = useState(null);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedAboutUs, setSelectedAboutUs] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const handleSelectedHeader = (header) => {
    setSelectedHeader(header);
  };

  const handleSelectedHomePage = (homePage) => {
    setSelectedHomePage(homePage);
  };

  const handleSelectedFooter = (footer) => {
    setSelectedFooter(footer);
  };

  const handleSelectedPricing = (pricing) => {
    setSelectedPricing(pricing);
  };

  const handleSelectedAboutUs = (aboutUs) => {
    setSelectedAboutUs(aboutUs);
  };

  const handleSelectedFaq = (faq) => {
    setSelectedFaq(faq);
  };

  const handleSelectedGallery = (gallery) => {
    setSelectedGallery(gallery);
  };

  const handleSelectedTestimonial = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleSetSelectedPort = (port) => {
    const windowWidth = window.innerWidth;
    if (port === devicePorts[0] && windowWidth <= 1500) {
      return;
    } else if (port === devicePorts[1] && windowWidth <= 1200) {
      return;
    } else {
      setSelectedPort(port);
    }
  };

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

  function getWindowWidth() {
    return window.innerWidth;
  }

  useEffect(() => {
    function handleResize() {
      setSelectedPort(getSelectedPort());
      setWindowWidth(getWindowWidth());
      if (getWindowWidth() > 768) {
        setMenuActive(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setSelectedPort, windowWidth]);

  return (
    <div
      className={`h-screen grid md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] ${
        menuActive ? "grid-cols-[100%,0%]" : "grid-cols-[0%,100%]"
      }`}
    >
      <div
        className={`z-10 opacity-50 hover:opacity-100 absolute left-0 top-1/2 bg-grey-50 shadow-lg cursor-pointer flex items-center justify-center rounded-r-xl w-6 h-16 ${
          windowWidth <= 768 ? "block" : "hidden"
        }`}
        onClick={handleMenuActive}
      >
        <img className="-rotate-90" src={arrow} alt="menu-img" />
      </div>
      <div className="shadow-2xl overflow-y-auto p-2">
        <div className="h-20 w-full flex flex-row justify-center items-center gap-5">
          <img className="w-16 h-auto grayscale" src={logo} alt="ic-logo" />
          <h1 className="font-semibold text-xl text-center text-grey-0">Kigen Template Builder</h1>
        </div>
        <div className="p-5">
          {componentConstants.map((item, itemIdx) => {
            return (
              <Accordion
                title={item.title}
                open={itemIdx === 0 ? true : false}
                content={
                  <div className="flex flex-row flex-wrap gap-3 justify-center items-center p-4">
                    {item.titles.map((title, titleIdx) => {
                      return (
                        <div
                          className="rounded-md shadow-lg bg-white grid items-center transition-shadow hover:cursor-pointer hover:drop-shadow-xl"
                          key={titleIdx}
                          onClick={() => {
                            switch (itemIdx) {
                              case 0:
                                handleSelectedHeader(item.components[titleIdx]);
                                break;
                              case 1:
                                handleSelectedHomePage(item.components[titleIdx]);
                                break;
                              case 2:
                                handleSelectedPricing(item.components[titleIdx]);
                                break;
                              case 3:
                                handleSelectedAboutUs(item.components[titleIdx]);
                                break;
                              case 4:
                                handleSelectedFaq(item.components[titleIdx]);
                                break;
                              case 5:
                                handleSelectedGallery(item.components[titleIdx]);
                                break;
                              case 6:
                                handleSelectedTestimonial(item.components[titleIdx]);
                                break;
                              case 7:
                                handleSelectedFooter(item.components[titleIdx]);
                                break;
                              default:
                                break;
                            }
                          }}
                        >
                          <img src={item.images[titleIdx]} alt={item.titles[titleIdx]} />
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
      <div className={`h-full bg-white-10 p-2 ${menuActive ? "hidden" : "block"}`}>
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
        <div
          className={`max-w-full h-[800px] no-scrollbar overflow-y-auto rounded-md border-2 mx-auto my-3 border-grey-50 border-dotted ${
            selectedPort === "tablet"
              ? "w-[900px]"
              : selectedPort === "mobile"
              ? "w-[400px]"
              : "w-auto"
          }`}
        >
          {selectedHeader}
          {selectedHomePage}
          {selectedPricing}
          {selectedAboutUs}
          {selectedFaq}
          {selectedGallery}
          {selectedTestimonial}
          {selectedFooter}
        </div>
      </div>
    </div>
  );
};

export default Main;
