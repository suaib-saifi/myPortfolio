import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Suaib Saifi. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
