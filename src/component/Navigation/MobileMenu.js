import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assests/Svg/Logo.svg";
import close from "../../assests/Svg/closeMenu.svg";
import menu from "../../assests/Svg/menu.svg";

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleBackdropClick = () => {
    setShowMobileMenu(false);
  };

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Backdrop */}
      {showMobileMenu && (
        <div
          className="fixed top-9 left-0 w-full h-full bg-gray-800 opacity-75 z-30"
          onClick={handleBackdropClick}
        ></div>
      )}

      {/* Mobile menu content */}
      <div className="fixed w-full z-40">
        <div className="fixed w-full z-50 flex flex-col">
          <div className="flex justify-between items-center px-4 py-4 w-full bg-white-100 shadow-sm  font-body">
            <NavLink to="/">
              <img src={logo} alt="aruna_logo" className="w-16" />
            </NavLink>
            <div className="">
              <img
                src={showMobileMenu ? close : menu} // Toggle between menu and close icons
                alt="menu"
                className="cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </div>
          </div>

          {showMobileMenu && (
            <div className=" w-full bg-white-100 z-50 transform transition-transform ease-in-out duration-300">
              <div className=" px-4">
                <ul className="flex flex-col justify-center items-center font-body  py-4 cursor-pointer font-medium pb-12">
                  <NavLink to="/about" onClick={closeMenu} className="py-4">
                    About
                  </NavLink>

                  <NavLink to="/focus" onClick={closeMenu} className="py-4">
                    Focus
                  </NavLink>

                  <NavLink to="/portfolio" onClick={closeMenu} className="py-4">
                    Portfolio
                  </NavLink>

                  <NavLink to="/contact" onClick={closeMenu} className="py-4">
                    Contact us
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
