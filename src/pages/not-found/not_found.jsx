import React from "react";

const NotFound = () => {
  // main component
  return (
    <div className="flex flex-col gap-2 min-h-screen min-w-screen justify-center items-center bg-danger-30">
      <h1 className="text-white text-9xl">404</h1>
      <h1 className="text-white text-3xl text-center">Aradığınız Sayfa Bulunamadı</h1>
    </div>
  );
};

export default NotFound;
