import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChevronLink = ({ children, to }) => {
  return (
    <AnchorLink to={to} className="group inline-block">
      <div className="flex items-center gap-1">
        <div>{children}</div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-sm h-[14px] w-[10.5px] group-hover:translate-x-1 transition-transform"
        />
      </div>
    </AnchorLink>
  );
};

export default ChevronLink;
