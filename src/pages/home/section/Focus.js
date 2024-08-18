import React from "react";

import design from "../../../assests/Svg/design-1.svg";

const Focus = () => {
  return (
    <div className="relative py-16 px-4 md:px-16 bg-white-300">
      {/* Image Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={design}
          alt="design"
          className="w-auto h-full object-cover max-w-full max-h-full"
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Text and Button Container */}
      <div
        className="relative flex flex-col justify-center items-center"
        style={{ zIndex: 1 }}
      >
        <div className="text-center px-4 md:px-8 xl:px-24">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-2">
            Focus Sectors
          </h2>

          <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight mb-4">
            Aruna Investment Focus Sector & Expertise
          </h1>

          <p className="font-body font-normal my-4 md:my-8 leading-7">
            We partner with and invest in owners of specialized, smaller-scale
            manufacturing companies and distributors of advanced components. Our
            focus is on businesses in the lower middle market looking for a
            collaborator to help drive faster growth.
          </p>
        </div>

        <div className="flex flex-col gap-4 py-4 w-full md:flex-row md:w-auto">
          <button className="bg-primary-100 text-white-100 py-3 px-6 rounded-md font-main text-base md:text-lg w-full md:w-auto">
            View Focus Sectors
          </button>
          <button className="border border-primary-100 text-primary-100 py-3 px-6 rounded-md font-main text-base md:text-lg w-full md:w-auto">
            Acquisition Criteria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Focus;
