import React from "react";

const Button = ({ children, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="px-5 py-2 inline-block cursor-pointer bg-primaryBlue text-sm text-white font-bold uppercase rounded-full text-center hover:bg-grayishBlue transition-colors"
    >
      {children}
    </div>
  );
};

export default Button;
