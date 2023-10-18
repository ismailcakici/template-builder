import React from "react";
import Accordion from "../accordion/accordion";
import { faqConstants } from "../../constants/f.a.q-constants/faq_constants";

const FAQ1 = () => {
  return (
    <div className="w-full min-h-[600px] bg-white flex flex-col justify-start items-center gap-20">
      <h1 className="font-bold text-grey-0 text-4xl mt-5">F.A.Q</h1>
      <div className="w-3/4">
        {faqConstants.map((faq, idx) => {
          return (
            <Accordion
              title={faq.question}
              content={<p className="text-lg p-3">{faq.answer}</p>}
              open={idx === 0 && true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FAQ1;
