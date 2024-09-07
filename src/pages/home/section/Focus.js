import React from "react";
import { useInView } from "react-intersection-observer";

import design from "../../../assests/Svg/design-1.svg";
import { Link } from "react-router-dom";

const Focus = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={textRef}
      className="relative py-16 px-4 md:px-16 md:py-[6.25rem] bg-white-300"
    >
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
        <div className="text-center px-4 md:px-8 xl:px-24 ">
          <h2
            className={`text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4 ${
              textInView ? " animate-moveInLeft" : ""
            }`}
          >
            Focus Sectors
          </h2>

          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
            Aruna Investment Focus Sector & Expertise
          </h1>

          <p className="font-body font-normal text-sm xl:text-base my-6 md:my-4 leading-6 xl:leading-8">
            We partner with and invest in owners of specialized, smaller-scale
            manufacturing companies and distributors of advanced components. Our
            focus is on businesses in the lower middle market looking for a
            collaborator to help drive faster growth.
          </p>
        </div>

        <div className="flex flex-col gap-4 py-4 w-full md:flex-row md:w-auto ">
          <Link
            to="/focus"
            className="bg-primary-100 text-white-100 py-4 px-8 rounded-md font-main text-base flex justify-center items-center text-center font-medium"
          >
            View Focus Sectors
          </Link>
          <Link
            to="/focus#criteria"
            className="border border-primary-100 text-primary-100 py-4 px-4 rounded-md font-main ext-base flex justify-center items-center text-center font-medium"
          >
            Acquisition Criteria
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Focus;
