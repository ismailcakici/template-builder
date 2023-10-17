import React from "react";
import bgImage from "../../assets/images/background.png";

const AU2 = () => {
  return (
    <div className="flex flex-wrap gap-3 p-3 flex-row justify-around items-center w-full min-h-[600px] bg-white-10">
      <div className=" rounded-md overflow-hidden w-[350px] h-auto">
        <img className="grayscale" src={bgImage} alt="bg-img" />
      </div>
      <div className=" w-3/5">
        <p className="leading-10 text-grey-0 text-center font-semibold text-2xl ">
          Welcome to [Firma Adı]! We are a passionate team dedicated to [sizin işletmenizin amacını
          veya misyonunu ekleyin]. Our journey began with a simple yet powerful idea: to [sizin
          işletmenizin kökenlerini veya nedenini ekleyin].
        </p>
      </div>
    </div>
  );
};

export default AU2;
