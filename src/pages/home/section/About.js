import React from "react";
import { Link } from "react-router-dom";

import about from "../../../assests/Image/about-section.png";
import design from "../../../assests/Svg/design-2.svg";
import vision from "../../../assests/Svg/vision.svg";
import commitment from "../../../assests/Svg/commitment.svg";

const About = () => {
  return (
    <div className="py-16 px-4 md:px-16 md:py-[6.25rem] bg-white-200">
      {/* Header Section */}
      <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-6 lg:mb-0 ">
        About Us
      </h2>
      {/* Main Content Section */}
      <div className="grid lg:grid-cols-2 gap-4 xl:gap-20  items-center">
        {/* Text Section */}
        <div className="  flex flex-col lg:order-1 order-2 md:mt-2">
          <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-primary-200 font-semibold md:leading-snug my-6 md:my-4">
            We are here to help small businesses succeed
          </h1>

          <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
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
                className="w-10 md:w-16 mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h4 className="font-main text-lg md:text-xl font-medium mb-2">
                  Vision
                </h4>
                <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                  We aim to become the premier catalyst for transformative
                  growth, empowering small and medium-sized businesses in North
                  America to achieve market leadership through strategic capital
                  investment, operational excellence, and unparalleled ecosystem
                  partnerships.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start">
              <img
                src={commitment}
                alt="commitment"
                className="w-10 md:w-16 mb-4 md:mb-0"
              />
              <div className="md:ml-6">
                <h4 className="font-main text-lg md:text-xl font-medium mb-2">
                  Commitment
                </h4>
                <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                  At Aruna Investment Partners, we deliver more than capital. We
                  provide hands-on support to help small businesses grow and
                  succeed through tailored investments and expert operational
                  guidance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 py-4">
            <Link
              to="/about"
              className="bg-primary-100 text-white-100 py-4 px-8 rounded-md font-main text-base flex justify-center items-center text-center font-medium"
            >
              More About Us
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.cardinalstone.com/"
              className="border border-primary-100 text-primary-100 py-4 px-4 rounded-md font-main ext-base flex justify-center items-center text-center font-medium"
            >
              Visit Our Affiliate Partner
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className=" relative flex items-center justify-center  w-full lg:order-2 ">
          <img
            src={about}
            alt="about"
            className=" z-10 flex w-full   h-auto object-cover"
          />

          <img
            src={design}
            alt="about"
            className=" absolute  bottom-4 left-[-2%] md:bottom-0   xl:left-[-5%] h-[30%] xl:h-[45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
