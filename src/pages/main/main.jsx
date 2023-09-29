import React from "react";

const Main = () => {
  return (
    <div className="grid grid-cols-[0%,100%] md:grid-cols-[35%,65%] lg:grid-cols-[30%,70%] ">
      {/* Selectors */}
      <div className="min-h-screen shadow-inner"></div>
      {/* Display */}
      <div className="min-h-scree bg-white-10"></div>
    </div>
  );
};

export default Main;
