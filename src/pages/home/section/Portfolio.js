import React from "react";
import design from "../../../assests/Svg/design-2.svg";

import portfolio from "../../../assests/Image/portfolio.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="py-16 px-4 md:px-16 md:py-[6.25rem]  bg-white-200">
      <div className="grid lg:grid-cols-2 gap-4 xl:gap-20  items-center">
        {/* Image Container */}
        <div className=" relative flex items-center justify-center  w-full ">
          <img
            src={portfolio}
            alt="portfolio"
            className=" z-10 flex w-full  h-auto object-cover"
          />

          <img
            src={design}
            alt="about"
            className=" absolute  top-4 left-[-2%] md:top-0   xl:left-[-5%] h-[30%] xl:h-[45%]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold my-4 lg:my-0 ">
            Portfolio
          </h2>
          <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-primary-200 font-semibold md:leading-snug md:my-4">
            Our Capital Portfolio Companies
          </h1>
          <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
            We believe that achieving successful outcomes starts and ends with
            exceptional people united by a shared vision. We collaborate with
            skilled entrepreneurs and management teams to foster remarkable
            organic growth.
          </p>
          <div className="my-4">
            <Link
              to="portfolio"
              className="bg-primary-100 text-white-100 py-4 px-8 rounded-md font-main text-base flex justify-center items-center text-center font-medium"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
