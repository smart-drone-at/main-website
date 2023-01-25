import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] mt-12 md:mt-24 lg:mt-40">
      <div className="container items-center pt-12 md:pt-20 pb-10 py-9 mx-auto space-y-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <StaticImage
              src="../assets/images/logo/logo.png"
              alt="Smart Drone Logo"
              placeholder="none"
              width={225}
            />
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-10 md:gap-x-14 lg:gap-x-20 xl:gap-x-28">
            <div className="space-y-5">
              <span className="font-poppinsBold md:text-lg">Navigation</span>
              <ul className="!list-none font-poppins space-y-2">
                <li>
                  <AnchorLink to="/#home">Home</AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#produkte">Produkte</AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#faq">FAQ</AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#support">Support</AnchorLink>
                </li>
                <li>
                  <AnchorLink to="/#karriere">Karriere</AnchorLink>
                </li>
              </ul>
            </div>
            <div className="space-y-5">
              <span className="font-poppinsBold md:text-lg">Rechtliches</span>
              <ul className="!list-none font-poppins space-y-2">
                <li>
                  <Link to="/imprint">Impressum</Link>
                </li>
                <li>
                  <Link to="/privacy">Datenschutz</Link>
                </li>
                <li>
                  <Link to="/agb">AGB's</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div>
          <p className="text-sm !text-center">
            2022 © Copyright, Smart Drone GmbH. <br className="md:hidden"/> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
