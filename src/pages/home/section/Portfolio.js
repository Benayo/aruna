import React from "react";

import portfolio from "../../../assests/Image/portfolio.png";

import portfoliomobile from "../../../assests/Image/portfoliomobile.png";

const Portfolio = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white-200">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Image Container */}
        <div className="relative flex items-center justify-center w-full">
          <img
            src={portfolio}
            alt="portfolio"
            className="hidden xl:block w-full max-w-[34rem] xl:max-w-[31rem] h-auto object-cover"
          />
          <img
            src={portfoliomobile}
            alt="portfolio"
            className="xl:hidden w-full h-[40vh] object-cover" // Adjust height for mobile view
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-start px-4 md:px-6 lg:px-0">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
            Portfolio
          </h2>
          <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight mb-4">
            Our Capital Portfolio Companies
          </h1>
          <p className="font-body font-normal my-4 md:my-6 leading-7">
            We believe that achieving successful outcomes starts and ends with
            exceptional people united by a shared vision. We collaborate with
            skilled entrepreneurs and management teams to foster remarkable
            organic growth.
          </p>
          <div className="my-4">
            <button className="bg-primary-100 text-white-100 py-3 px-6 md:py-4 md:px-10 rounded-md font-main text-base md:text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
