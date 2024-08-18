import React from "react";

import Logo from "../../assests/Svg/Logo.svg";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center px-4 py-4 md:px-16 md:py-6 w-full bg-white-100  text-primary-200 font-body shadow-sm">
        <Link to="/">
          <img src={Logo} alt="aruna-logo" />
        </Link>

        <ul className="hidden md:flex justify-between items-center text-sm font-normal">
          <NavLink className="mr-6 text-primary-200 hover:text-primary-100 transition-colors duration-300 hover:font-medium">
            <p className="pr-2">Home</p>
          </NavLink>

          <NavLink className="mr-6 text-primary-200 hover:text-primary-100 transition-colors duration-300 hover:font-medium">
            <p className="pr-2">About us</p>
          </NavLink>

          <NavLink className="mr-6 text-primary-200 hover:text-primary-100 transition-colors duration-300 hover:font-medium">
            <p className="pr-2">Focus</p>
          </NavLink>

          <NavLink className="mr-6 text-primary-200 hover:text-primary-100 transition-colors duration-300 hover:font-medium">
            <p className="pr-2">Portfolio</p>
          </NavLink>

          <NavLink className="mr-6 text-primary-200 hover:text-primary-100 transition-colors duration-300 hover:font-medium">
            <p className="pr-2">Contact us</p>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
