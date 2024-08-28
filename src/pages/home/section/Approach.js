import React from "react";

import InvestCriteriaCard from "../../../component/Cards/InvestCriteriaCard";

const Approach = () => {
  return (
    <div className="py-16 px-4 md:px-16  md:py-[6.25rem]  bg-white-100">
      {/* Header Section */}

      <div className=" flex flex-col justify-center items-center ">
        <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
          Approach
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
          Investing Criteria
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center py-12 md:py-16 gap-8">
          <InvestCriteriaCard
            title="Revenue"
            value="$5 - $10M+"
            percentage={75}
            text="Positive"
            description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
          />
          <InvestCriteriaCard
            percentage={20}
            text="$5-10M"
            title="EBITDA Margin"
            value="20%+"
            description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
          />
          <InvestCriteriaCard
            percentage={20}
            text="20%"
            title="Cashflow"
            value="Positive"
            description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
          />
        </div>
      </div>
    </div>
  );
};

export default Approach;
