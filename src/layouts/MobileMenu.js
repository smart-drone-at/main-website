import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const MobileMenu = ({ handleMenuClick }) => {
  return (
    <div className="md:hidden z-40">
      <div
        id="menu"
        className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-5 text-3xl font-bold bg-white"
      >
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
            className="px-3.5 py-0.5 text-2xl font-montserratBold hover:text-primaryBlue transition-colors uppercase"
            activeClassName="text-primaryBlue"
            onAnchorLinkClick={handleMenuClick}
          >
            {title}
          </AnchorLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
