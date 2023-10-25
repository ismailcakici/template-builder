import React from "react";
import { slides } from "../../constants/gallery-constants/gallery_constants";
import { useGlobalContext } from "../../context/global_context";

const G2 = () => {
  const { selectedPort } = useGlobalContext();

  return (
    <div
      className={`w-full max-w-5xl p-5 mx-auto my-auto gap-5 space-y-5  ${
        selectedPort === "mobile"
          ? "columns-1"
          : selectedPort === "tablet"
          ? "columns-2"
          : "columns-3"
      } `}
    >
      {slides.map((img, idx) => {
        return (
          <div className="overflow-hidden rounded-md" key={idx}>
            <img
              className="hover:scale-125 transition-all cursor-pointer grayscale duration-500"
              src={img.url}
              alt="gallery-img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default G2;
