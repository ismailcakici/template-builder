import React, { useRef, useEffect } from "react";
import bgImage from "../../assets/images/background.png";
import { useGlobalContext } from "../../context/global_context";

const AU2 = () => {
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
    <div className="flex flex-wrap gap-3 p-3 flex-row justify-around items-center w-full min-h-[600px] bg-white-10">
      <div className=" rounded-md overflow-hidden w-[350px] h-auto">
        <img className="grayscale" src={bgImage} alt="bg-img" />
      </div>
      <div className=" w-3/5">
        <h1
          className={`text-grey-0 text-center font-bold my-3 ${
            selectedPort === "mobile" ? "text-3xl" : "text-5xl"
          }`}
        >
          About Us
        </h1>
        <textarea
          onChange={(e) => {
            setAboutUs(e.target.value);
            handleTextareaInput();
          }}
          value={aboutUs === "" ? tempAboutUs : aboutUs}
          onInput={handleTextareaInput}
          ref={textareaRef}
          className="leading-10 p-2 h-auto resize-none w-full overflow-hidden bg-white bg-opacity-0 hover:border-2 border-dotted border-grey-0 text-grey-0 text-center font-semibold text-2xl"
          name="aboutUs2"
          id="aboutUs2"
        ></textarea>{" "}
      </div>
    </div>
  );
};

export default AU2;
