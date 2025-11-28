/**
 * Root footer component that composes all footer sections.
 */
import React from "react";
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";

function Footer() {
  return (
    <footer className="bg-light border-top mt-5">
      {/* Top links & contact info */}
      <FooterTop />
      {/* Logo row */}
      <FooterMiddle />
      {/* Copyright bar */}
    </footer>
  );
}

export default Footer;