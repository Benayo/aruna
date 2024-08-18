import React from "react";
import HeaderInfo from "../Navigation/HeaderInfo";
import NavBar from "../Navigation/NavBar";
import MobileMenu from "../Navigation/MobileMenu";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white-100">
        <HeaderInfo />
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="hidden md:block">
          <NavBar />
        </div>
      </header>

      <main className="pt-16 md:pt-20 lg:pt-24 min-h-screen bg-white-100">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
