import React from "react";
import { useGlobalContext } from "../../context/global_context";
import homePageBgImg from "../../assets/images/background2.jpg";

const HP1 = () => {
  const { selectedPort, title, setTitle, slogan, setSlogan } = useGlobalContext();
  const tempTitle = "Change your title";
  const tempSlogan = "Change your slogan";

  return (
    <div className="w-full h-[600px] bg-grey-70 flex flex-row justify-around items-center flex-wrap-reverse">
      <div className="flex flex-col">
        <input
          name="title-hp1"
          id="title-hp1"
          type="text"
          maxLength={25}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title === "" ? tempTitle : title}
          className={`font-bold text-center bg-white bg-opacity-0 text-grey-0 hover:border-2 border-dotted border-grey-0 ${
            selectedPort === "mobile" ? "text-5xl" : "text-6xl "
          }`}
        ></input>
        <input
          type="text"
          name="slogan-hp1"
          id="slogan-hp1"
          maxLength={55}
          onChange={(e) => {
            setSlogan(e.target.value);
          }}
          value={slogan === "" ? tempSlogan : slogan}
          className={`text-center bg-white bg-opacity-0 font-semibold my-3 hover:border-2 border-dotted  text-grey-0 ${
            selectedPort === "mobile" ? "text-md" : "text-xl"
          }
          `}
        />
        <div className="flex flex-row justify-around">
          <button
            className={`self-center  bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
              selectedPort === "mobile" ? "w-32 h-12" : "w-36 h-16"
            }`}
          >
            Explore
          </button>
        </div>
      </div>
      <div className="w-[500px] h-[300px] rounded-md p-1">
        <img className="rounded-md grayscale" src={homePageBgImg} alt="your-img" />
      </div>
    </div>
  );
};

export default HP1;
