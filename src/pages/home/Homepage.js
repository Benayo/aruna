import React from "react";

import Hero from "./section/Hero";
import About from "./section/About";
import Approach from "./section/Approach";
import Focus from "./section/Focus";
import Portfolio from "./section/Portfolio";
import Contact from "./section/Contact";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <Focus />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Homepage;
