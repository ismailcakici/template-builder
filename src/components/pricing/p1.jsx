import React from "react";
import PricingContainer from "../pricing-container/pricing_container";

const P1 = () => {
  return (
    <div className="w-full min-h-[600px] flex flex-row flex-wrap items-center justify-center gap-20 bg-white py-5">
      <PricingContainer price={145} title={"Normal"} />
      <PricingContainer price={345} title={"Standart"} />
      <PricingContainer price={545} title={"Pro"} />
    </div>
  );
};

export default P1;
