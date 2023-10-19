import React from "react";
import { pricingConstants } from "../../constants/pricing/pricing_constants";
import { usePortContext } from "../../context/port_context";

const P2 = () => {
  // get device port value
  const { selectedPort } = usePortContext();
  return (
    // main component container
    <div className="w-full min-h-[600px] bg-white grid items-center justify-center p-5">
      {/* data table */}
      <table className="border-separate border border-slate-500">
        {/* table headlines */}
        <thead>
          {/* returning titles */}
          <tr>
            {pricingConstants.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className={`text-center font-semibold ${
                    selectedPort === "mobile" ? "text-md" : "text-lg"
                  }`}
                >
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* table body elements */}
          <tr>
            {pricingConstants.map((item, idx) => {
              // returning data
              return (
                <td className="bg-white-10" key={idx}>
                  <ul className="p-2 flex flex-col justify-center items-center">
                    {item.data.map((data, index) => (
                      <li className="py-3" key={index}>
                        <p className={`${selectedPort === "mobile" ? "text-md" : "text-lg"}`}>
                          {data}
                        </p>
                      </li>
                    ))}
                    <li>
                      <p
                        className={`font-bold text-center ${
                          selectedPort === "mobile" ? "text-xl" : "text-2xl "
                        }`}
                      >
                        ${item.price}
                      </p>
                    </li>
                    {/* choose plan btn */}
                    <li>
                      <button
                        className={` bg-white-10 shadow-lg rounded-md my-5 font-semibold transition-all hover:bg-grey-0 hover:text-white-10 ${
                          selectedPort === "mobile" ? "w-24 h-12" : "w-36 h-16"
                        }`}
                      >
                        <p className={`${selectedPort === "mobile" ? "text-sm" : "text-md "}`}>
                          Choose Plan
                        </p>
                      </button>
                    </li>
                  </ul>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default P2;
