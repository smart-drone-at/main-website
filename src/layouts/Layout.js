import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CookiesConsent from "../components/CookiesConsent";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <CookiesConsent />
    </>
  );
};

export default Layout;
