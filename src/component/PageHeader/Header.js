import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <>
      <div className="relative flex justify-center items-center h-[25vh] sm:h-[30vh] md:h-[35vh] text-white font-medium text-3xl sm:text-[36px] md:text-[44px] text-center leading-10 sm:leading-snug md:leading-loose bg-header-background-one bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-[#252B42] opacity-50"></div>
        <div className="relative z-10 font-main text-white-100 flex flex-col justify-center items-center">
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem]">
            {title}
          </h1>

          <div className="text-sm sm:text-base md:text-lg font-normal">
            <Link
              to="/"
              className="hover:text-primary-100 hover:font-medium px-1"
            >
              Home
            </Link>
            <Link>/ {title}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
