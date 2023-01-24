import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const isIndex = location.pathname === "/";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  const menuClickHandler = () => {
    setShowMenu(!showMenu);
  };

  let navBarStyle = "z-[998] w-full left-0 top-0 fixed ";
  navBarStyle += scroll ? "shadow-navbar " : "transition-all ";
  navBarStyle += scroll && !showMenu && "bg-white";

  let containerStyle = "flex items-center justify-between transition-all duration-300 ";
  containerStyle += scroll ? "h-16 md:h-[4.5rem] lg:h-20" : "h-20 md:h-28";

  let logoStyle = scroll
    ? "w-[5.5rem] md:w-[6.5rem] lg:w-40 mt-1 "
    : "w-[5.5rem] md:w-28 lg:w-48 ";
  logoStyle += "md:mx-auto transition-width duration-300";

  return (
    <nav className={navBarStyle}>
      <div className="container md:!px-1 lg:!px-6 z-[999] relative mx-auto">
        <div className={containerStyle}>
          {/* Logo */}
          <Link to="/" className="w-36">
            <StaticImage src="../assets/images/logo/logo.png" className={logoStyle} alt="Logo" loading="eager" placeholder="none" />
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex items-center md:mt-1 space-x-3">
            {[
              ["Home", "/#home"],
              ["Produkte", "/#produkte"],
              ["FAQ", "/#faq"],
              ["Support", "/#support"],
              ["Karriere", "/#karriere"],
            ].map(([title, url], index) => (
              <AnchorLink
                key={index}
                to={url}
                className="px-0.5 lg:px-3.5 py-0.5 text-sm font-montserratBold hover:text-primaryBlue transition-colors uppercase"
                activeClassName="border-2"
                activeStyle="border-2"
              >
                {title}
              </AnchorLink>
            ))}
          </div>

          <div className="flex gap-5 items-center">
            <a href="tel:+43164834878">+43 1648 34878</a>
            <Button>Kontaktieren</Button>
          </div>

          <div className="flex md:hidden gap-4 items-center">
            {/* Hamburger Icon */}
            <button
              id="menu-btn"
              className={`${
                showMenu && "menu-open"
              } block hamburger md:hidden focus:outline-none`}
              onClick={menuClickHandler}
              aria-label="Menu"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </div>

      {showMenu && <MobileMenu handleMenuClick={menuClickHandler} />}
    </nav>
  );
};

export default Navbar;
