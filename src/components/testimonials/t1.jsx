import React from "react";
import { testimonialConstants } from "../../constants/testimonial-constants/testimonial_constants";

const T1 = () => {
  // main component container
  return (
    <div className="w-full min-h-[600px]  gap-4 py-3 flex flex-row flex-wrap justify-around items-center">
      {/* testimonial container */}
      {testimonialConstants.map((testimonial, idx) => {
        return (
          <div
            key={idx}
            className="w-[300px] h-[450px] p-3 text-center flex flex-col justify-around items-center bg-white rounded-md shadow-2xl border-2 border-dotted border-grey-0 hover:border-solid hover:cursor-pointer"
          >
            {/* client */}
            <p className="text-xl">{testimonial.client}</p>
            {/* comment */}
            <p className="text-lg ">{testimonial.testimonial}</p>
            {/* company */}
            <p className="text-xl">{testimonial.company}</p>
          </div>
        );
      })}
    </div>
  );
};

export default T1;
