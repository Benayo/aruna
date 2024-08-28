import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assests/Svg/logo-footer.svg";
import facebook from "../../assests/Svg/facebook-f.svg";
import X from "../../assests/Svg/x-filled.svg";
import linkedin from "../../assests/Svg/linkedin-in.svg";

const Footer = () => {
  return (
    <div className="bg-[#000000] py-8 md:py-16 text-white-100 font-body">
      <div className="px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between md:items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center mb-8 md:mb-0">
            <img src={logo} alt="logo" className="w-16 md:w-24" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0 md:text-center">
            <li className="mb-6 md:mb-0">
              <Link
                to="/about"
                className="text-base md:text-lg hover:underline"
              >
                About us
              </Link>
            </li>
            <li className="mb-6 md:mb-0">
              <Link
                to="/portfolio"
                className="text-base md:text-lg hover:underline"
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-6 md:mb-0">
              <Link
                to="/focus"
                className="text-base md:text-lg hover:underline"
              >
                Focus
              </Link>
            </li>
            <li className="mb-6 md:mb-0">
              <Link
                to="/contact"
                className="text-base md:text-lg hover:underline"
              >
                Contact us
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <ul className="flex space-x-6">
            <li className=" md:mx-0">
              <img src={facebook} alt="facebook" className="w-5 " />
            </li>
            <li className="mr-8 md:mx-0">
              <a
                href="https://x.com/arunaip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={X} alt="twitter" className="w-5 " />
              </a>
            </li>
            <li className="mr-8 md:mx-0">
              <a
                href="https://www.linkedin.com/company/arunaip/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-5 " />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 md:mt-16 border-t border-white-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
            <div className="mb-4 md:mb-0">
              © 2024 Aruna. All rights reserved.
            </div>
            <ul className="flex space-x-4 text-xs md:text-sm">
              <li className="underline">Privacy Policy</li>
              <li className="underline">Terms of Service</li>
              <li className="underline">Cookies Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
