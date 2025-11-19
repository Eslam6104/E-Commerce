/**
 * Root footer component that composes all footer sections.
 */
import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      {/* Top links & contact info */}
      <FooterTop />
      {/* Logo row */}
      <FooterMiddle />
      {/* Copyright bar */}
      <FooterBottom />
    </footer>
  );
}

export default Footer;