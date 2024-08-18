import React from "react";

import envelop from "../../assests/Svg/filled-envelope.svg";
import location from "../../assests/Svg/location-filled.svg";
import facebook from "../../assests/Svg/facebook-f.svg";
import linkedIn from "../../assests/Svg/linkedin-in.svg";
import X from "../../assests/Svg/x-filled.svg";

const HeaderInfo = () => {
  return (
    <div>
      <div className="hidden w-full md:flex justify-between items-center py-1 md:px-16 text-xs font-body font-light bg-primary-100 text-white-100">
        <div className="flex justify-between items-center">
          <a
            href="mailto:info@arunaip.com"
            className="flex justify-center items-center"
          >
            <img src={envelop} alt="envelop" />
            <span className="mx-2">info@arunaip.com</span>
          </a>

          <div className="border-[0.025rem] h-5 mx-8"></div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=900+S+Stonebridge,+Suite+number+102,+McKinney+Texas,+75070"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img src={location} alt="location" className="w-5" />
            <div className="mx-2">
              900 S. Stonebridge, Suite number 102, McKinney Texas, 75070
            </div>
          </a>
        </div>

        <div className="flex justify-between items-center pr-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" className="mx-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={X} alt="twitter" />
          </a>
        </div>
      </div>

      <div className="md:hidden w-full grid grid-cols-2 py-2 text-[0.5rem] bg-primary-100 text-white-100 pl-4 font-body">
        <a
          href="mailto:info@arunaip.com"
          className="flex justify-center items-center col-span-1"
        >
          <img src={envelop} alt="envelop" />
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=900+S+Stonebridge,+Suite+number+102,+McKinney+Texas,+75070"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center col-span-1"
        >
          <img src={location} alt="location" className="w-5" />
        </a>
      </div>
    </div>
  );
};

export default HeaderInfo;
