import React from "react";

import InvestCriteriaCard from "../../../component/Cards/InvestCriteriaCard";

const Approach = () => {
  return (
    <div className="py-16 px-4 md:px-16 md:py-[6.25rem]  bg-white-200">
      {/* Header Section */}

      <div className=" flex flex-col justify-center items-center">
        <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
          Approach
        </h2>
        <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
          Investing Criteria
        </h1>

        <div className=" grid md:grid-cols-3 py-12 md:py-16 gap-8">
          <InvestCriteriaCard
            title="Revenue"
            value="$2 - $10M+"
            percentage={75}
            text="$2 - $10M+"
            description="Our expertise lies in acquiring specialized manufacturing and distribution companies with annual revenues ranging from $2M to over $10M."
          />

          <InvestCriteriaCard
            percentage={20}
            text="20%+"
            title="EBITDA Margin"
            value="20%+"
            description="We target businesses that regularly achieve profit margins of at least 20% before accounting for interest, taxes, depreciation, and amortization."
          />

          <InvestCriteriaCard
            percentage={20}
            text="Positive"
            title="Cashflow"
            value="Positive"
            description="We focus on acquiring niche manufacturing and value-added distribution businesses that consistently maintain a positive cash flow."
          />
        </div>
      </div>
    </div>
  );
};

export default Approach;
