import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/global_context";
import { iconList } from "../../constants/responsive_icon_list";
import logo from "../../assets/icons/logo-sm.png";
import Accordion from "../../components/accordion/accordion";
import { componentConstants } from "../../constants/components-constants/component_constants";
import { devicePorts } from "../../constants/device_ports";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { headerConstants } from "../../constants/header-constants/header_constants";
import edit from "../../assets/icons/edit.png";
import Modal from "../../components/modal/modal";
import arrow from "../../assets/icons/arrow.png";

const Main = () => {
  const {
    selectedPort,
    setSelectedPort,
    headerTitles,
    handleSetHeaderTitles,
    removeTitleFromHeaders,
    title,
    setTitle,
    slogan,
    setSlogan,
    aboutUs,
    setAboutUs,
  } = useGlobalContext(getSelectedPort());

  const [windowWidth, setWindowWidth] = useState(getWindowWidth);
  const [menuActive, setMenuActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedHeader, setSelectedHeader] = useState([]);
  const [selectedOthers, setSelectedOthers] = useState({});
  const [selectedFooter, setSelectedFooter] = useState([]);
  const [accordionItems, setAccordionItems] = useState(componentConstants);

  const handleSelectedComponents = (compType, comp) => {
    if (compType === "Headers") {
      setSelectedHeader(comp);
    } else if (compType === "Footers") {
      setSelectedFooter(comp);
    } else {
      setSelectedOthers((prevComps) => ({
        ...prevComps,
        [compType]: comp,
      }));
    }
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

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const sourceItem = accordionItems[sourceIndex];
    const destinationItem = accordionItems[destinationIndex];

    if (
      sourceItem.title === "Headers" ||
      destinationItem.title === "Headers" ||
      sourceItem.title === "Footers" ||
      destinationItem.title === "Footers"
    ) {
      return;
    }

    const reorderedItems = Array.from(accordionItems);
    const [movedItem] = reorderedItems.splice(sourceIndex, 1);
    reorderedItems.splice(destinationIndex, 0, movedItem);
    setAccordionItems(reorderedItems);
  };

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
    <>
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
        <div className="shadow-2xl overflow-y-scroll p-2">
          <div className="h-20 w-full flex flex-row justify-center items-center gap-5">
            <img className="w-16 h-auto grayscale" src={logo} alt="ic-logo" />
            <h1 className="font-semibold text-xl text-center text-grey-0">
              Kigen Template Builder
            </h1>
            <img
              className="w-10 hover:cursor-pointer hover:bg-grey-70 p-1 bg-white-10 rounded-full transition-all"
              onClick={() => {
                setOpenModal(true);
              }}
              src={edit}
              alt="edit-ic"
            />
          </div>
          <div className="p-5">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="accordion">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {accordionItems.map((item, index) => (
                      <Draggable
                        key={item.title}
                        draggableId={item.title}
                        index={index}
                        isDragDisabled={item.title === "Headers" || item.title === "Footers"}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Accordion
                              title={item.title}
                              open={index === 0 && true}
                              content={
                                <div className="flex flex-row flex-wrap gap-3 justify-center items-center p-4">
                                  {item.titles.map((title, titleIdx) => {
                                    const isHeaderSelected =
                                      selectedHeader === item.components[titleIdx];
                                    const isFooterSelected =
                                      selectedFooter === item.components[titleIdx];
                                    const isItemSelected =
                                      selectedOthers[item.title] === item.components[titleIdx];

                                    return (
                                      <div
                                        className={`rounded-md shadow-lg bg-white grid items-center transition-shadow hover:cursor-pointer hover:drop-shadow-xl ${
                                          isItemSelected || isHeaderSelected || isFooterSelected
                                            ? "border-2 border-grey-30 border-dotted"
                                            : ""
                                        }`}
                                        key={titleIdx}
                                        onClick={() => {
                                          handleSelectedComponents(
                                            item.title,
                                            item.components[titleIdx]
                                          );
                                        }}
                                      >
                                        <img
                                          src={item.images[titleIdx]}
                                          alt={item.titles[titleIdx]}
                                        />
                                      </div>
                                    );
                                  })}
                                </div>
                              }
                              key={index}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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
            {accordionItems.map((item, idx) => (
              <div key={idx}>
                <div>{selectedOthers[item.title]}</div>
              </div>
            ))}
            {selectedFooter}
          </div>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="py-3 px-5 my-3 text-xl text-grey-0 font-semibold text-center">
          Let's gather the necessary information before we started.
        </div>
        <div className="w-full p-3 flex flex-col justify-center gap-5">
          <div className="text-xl">First, choose the header titles you want.</div>
          <div className="flex flex-row flex-wrap justify-around items-center gap-1 p-1">
            {headerConstants.map((title, idx) => {
              const include = headerTitles.includes(title);
              return (
                <div
                  className={`px-4 py-1 rounded-3xl transition-all font-normal text-lg hover:cursor-pointer hover:bg-grey-70 ${
                    include ? "bg-grey-0 text-white" : "bg-white-10 text-black"
                  }`}
                  onClick={() => {
                    handleSetHeaderTitles(title);
                    include && removeTitleFromHeaders(title);
                  }}
                  key={idx}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full p-3 flex flex-col justify-center gap-5">
          <div className="text-xl">Now we can get your business title and slogan.</div>
        </div>
        <div className="w-full p-3 flex flex-row flex-wrap justify-start gap-5">
          <div className="flex flex-col">
            <label className="text-xl my-1" htmlFor="title">
              Title
            </label>
            <input
              className="border rounded-lg text-lg font-semibold py-1 px-2"
              type="text"
              name="title"
              id="title"
              maxLength={25}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl my-1" htmlFor="slogan">
              Slogan
            </label>
            <input
              className="border rounded-lg text-lg font-semibold py-1 px-2"
              type="text"
              name="slogan"
              id="slogan"
              maxLength={55}
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full p-3 flex flex-col justify-center gap-5">
          <div className="text-xl">
            Let's get some more detailed information about your business.
          </div>
        </div>
        <div className="w-full p-3 flex flex-row flex-wrap justify-start gap-5">
          <label className="text-xl my-1" htmlFor="about">
            About Us
          </label>
          <textarea
            className="border rounded-lg text-lg font-semibold py-1 px-2 w-full"
            name="about"
            id="about"
            rows="5"
            value={aboutUs}
            onChange={(e) => setAboutUs(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-grey-70 px-4 py-2 rounded-lg mx-3 my-1 hover:bg-grey-50"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Kaydet
        </button>
      </Modal>
    </>
  );
};

export default Main;
