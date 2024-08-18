import React from "react";
import { Link } from "react-router-dom";

import arrow from "../../../assests/Svg/arrow-right.svg";

const Approach = () => {
  return (
    <div className="py-16 px-4 md:px-16  md:pb-[6.25rem] bg-white-200">
      {/* Header Section */}
      <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
        Approach
      </h2>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight mb-4">
            Investing criteria
          </h1>

          <p className="font-body font-normal leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet accumsan arcu. Sed vel lectus nec purus dapibus ultricies.
            Vestibulum vel urna eu augue posuere vehicula et non magna. Nulla
            facilisi. Ut in turpis tincidunt, ultricies eros vel, viverra mi.
            Curabitur vel tincidunt lorem. Nam varius orci vel libero cursus,
            non hendrerit mi efficitur. Mauris venenatis, dolor vel convallis
            euismod, metus eros.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Quisque sit amet accumsan arcu. Sed vel lectus nec
            purus
          </p>
        </div>

        {/* List Section */}
        <div className="flex flex-col gap-4">
          <Link className="py-6 border-b flex justify-between items-center">
            <span className="text-xl md:text-2xl font-main text-primary-300">
              Revenue
            </span>
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </Link>

          <Link className="py-6 border-b flex justify-between items-center">
            <span className="text-xl md:text-2xl font-main text-primary-300">
              Gross Margin
            </span>
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </Link>

          <Link className="py-6 border-b flex justify-between items-center">
            <span className="text-xl md:text-2xl font-main text-primary-300">
              EBITDA
            </span>
            <img src={arrow} alt="arrow" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Approach;
