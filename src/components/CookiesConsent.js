import React from "react";
import { Link } from "gatsby";
import Button from "./Button";
import { useState } from "react";

const CookiesConsent = () => {
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    console.log("Hallo");
    setShow(!setShow);
  };

  if (!show) return <></>;

  return (
    <div className="fixed right-0 bottom-0 left-0 md:left-auto md:right-5 md:bottom-5 px-4 py-6 md:max-w-[600px] shadow-holistic rounded-2xl bg-white">
      <p className="text-sm md:text-md">
        Wir verwenden Cookies für Marketingzwecke und um Ihr Nutzererlebnis zu
        verbessern. Lesen Sie unsere{" "}
        <Link to="/" className="text-primaryBlue hover:text-grayishBlue">
          Cookie-Richtlinie
        </Link>{" "}
        oder{" "}
        <Link to="/" className="text-primaryBlue hover:text-grayishBlue">
          Verwaltung von Cookies
        </Link>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-3 items-center">
        <Button clickHandler={clickHandler}>Alle akzeptieren</Button>
        <Button clickHandler={clickHandler}>Alle ablehnen</Button>
        <div
          onClick={clickHandler}
          to="/"
          className="block text-sm md:text-md cursor-pointer hover:text-primaryBlue transition-colors"
        >
          Cookie-Einstellungen
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
