import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] mt-24 lg:mt-40">
      <div className="container items-center pt-20 pb-10 py-9 mx-auto space-y-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <StaticImage
              src="../assets/images/logo/logo.png"
              alt="Smart Drone Logo"
              placeholder="none"
              width={225}
            />
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-10 md:gap-x-14 lg:gap-x-20 xl:gap-x-28">
            <div className="space-y-5">
              <span className="font-poppinsBold md:text-lg">Navigation</span>
              <ul className="!list-none font-poppins space-y-2">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Produkte</Link>
                </li>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Support</Link>
                </li>
                <li>
                  <Link to="#">Karriere</Link>
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
                  <Link to="/privacy">AGB's</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div>
          <p className="text-sm md:!text-center">
            2022 © Copyright, Smart Drone GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
