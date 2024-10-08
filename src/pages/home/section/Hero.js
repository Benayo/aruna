import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-hero-mobile-background sm:bg-hero-tab-background xl:bg-hero-desktop-background bg-cover bg-center bg-no-repeat min-h-[85vh] md:min-h-[90vh] flex justify-start items-center px-4 md:px-16 py-8  ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#040704cc] to-transparent md:from-[#000000cc] md:to-transparent z-10"></div>
      <div className="relative flex flex-col justify-center items-start text-white-100 h-full lg:w-[48%] max-w-7xl z-20 ">
        <h1 className="text-[2.5rem] md:text-[3.35rem] leading-tight md:leading-normal font-main font-semibold mb-2 animate-moveInLeft">
          Supporting small scale businesses beyond capital.
        </h1>

        <p className="text-base md:text-lg font-body font-normal mb-8 md:mb-12 animate-moveInBottom">
          We provide long term capital and invest with a strong operational
          mindset. We have an extensive track record of scaling small businesses
          into sector champions.
        </p>

        <Link
          to="/contact"
          className="bg-primary-100 font-body font-medium text-base py-5 px-12 md:py-6 md:px-16 rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
