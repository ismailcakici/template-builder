import React, { useRef, useEffect } from "react";
import bgImage from "../../assets/images/background.png";
import { useGlobalContext } from "../../context/global_context";

const AU1 = () => {
  const { selectedPort, aboutUs, setAboutUs } = useGlobalContext();
  const tempAboutUs = "Click here to change your About Us text.";
  const textareaRef = useRef(null);

  const handleTextareaInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  useEffect(() => {
    handleTextareaInput();
  }, [selectedPort, aboutUs]);

  return (
    <div className=" relative w-full min-h-[600px] flex flex-col items-center justify-evenly">
      <img
        className="grayscale absolute brightness-75 w-full h-full object-cover z-0"
        src={bgImage}
        alt="bg-img"
      />
      <div className=" bg-white bg-opacity-20 backdrop-blur-sm w-3/4 flex flex-col items-center gap-5 p-10 z-1">
        <h1
          className={`text-white font-bold ${selectedPort === "mobile" ? "text-3xl" : "text-5xl"}`}
        >
          About Us
        </h1>
        <textarea
          onChange={(e) => {
            setAboutUs(e.target.value);
            handleTextareaInput();
          }}
          onInput={handleTextareaInput}
          value={aboutUs === "" ? tempAboutUs : aboutUs}
          ref={textareaRef}
          className="leading-10 p-2 h-auto resize-none w-full overflow-hidden bg-white bg-opacity-0 hover:border-2 border-dotted border-white-10 text-white text-center font-semibold text-2xl"
          name="aboutUs1"
          id="aboutUs1"
        ></textarea>
      </div>
    </div>
  );
};

export default AU1;
