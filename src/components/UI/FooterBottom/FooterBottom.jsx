import React from "react";
import './footerbottom.scss'
const FooterBottom = () => {
  return (
    <div className="footerBottom">
      <div className="footerBottom__wrapper">
        <p className="footerBottom__text">
          Copyright © {new Date().getFullYear()}Zamon Business Tour. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
