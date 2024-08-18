import React from "react";

import about from "../../../assests/Image/about-section.png";
import aboutmobile from "../../../assests/Image/about-section-mobile.png";
import vision from "../../../assests/Svg/vision.svg";
import commitment from "../../../assests/Svg/commitment.svg";

const About = () => {
  return (
    <div className="py-16 px-4 md:px-16 md:py-[6.25rem] bg-white-200">
      {/* Header Section */}
      <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
        About Us
      </h2>

      {/* Main Content Section */}
      <div className="grid xl:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="flex flex-col md:order-1 order-2 mt-2">
          <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight mb-4">
            We are here to help small scale businesses get their success.
          </h1>

          <p className="font-body font-normal my-2 md:my-6 leading-7">
            Aruna Investment Partners (“Aruna”) is an investment management firm
            established to operate as an independent Sponsor to owners and
            managers of small-medium sized businesses operating in select
            segments of the North American economy. We provide long-term
            catalytic capital that empowers founders and managers to embark on
            ambitious growth objectives and the operational support to help them
            achieve their full potential.
          </p>

          <div className="my-8 md:my-6">
            <div className="flex flex-col md:flex-row md:items-start mb-6">
              <img
                src={vision}
                alt="vision"
                className="w-12 md:w-16 mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h4 className="font-main text-lg md:text-xl font-medium mb-2">
                  Vision
                </h4>
                <p className="font-body font-normal leading-7">
                  We aim to become the partner of choice for small scale
                  businesses in the United States, supporting them with long
                  term capital and strong operational value add.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start">
              <img
                src={commitment}
                alt="commitment"
                className="w-12 md:w-16 mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h4 className="font-main text-lg md:text-xl font-medium mb-2">
                  Commitment
                </h4>
                <p className="font-body font-normal leading-7">
                  At Aruna Investment Partners, we deliver more than capital. We
                  provide hands-on support to help small businesses grow and
                  succeed through tailored investments and expert operational
                  guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 py-4">
            <button className="bg-primary-100 text-white-100 py-3 px-8 rounded-md font-main text-base md:text-lg">
              More About Us
            </button>
            <button className="border border-primary-100 text-primary-100 py-3 px-4 rounded-md font-main text-base md:text-lg">
              Visit Our Affiliate Partner
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full xl:order-2 py-4 md:py-0">
          <img
            src={about}
            alt="about"
            className="hidden md:flex w-full  max-w-[34.25rem] xl:max-w-[31.25rem] h-auto object-cover"
          />

          <img
            src={aboutmobile}
            alt="about"
            className="w-full md:hidden h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
