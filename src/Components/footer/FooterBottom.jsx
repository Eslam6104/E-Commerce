/**
 * Bottom section of the footer: copyright + theme credit.
 */
import React from "react";
function FooterBottom(){
  return ( <div className="border-top">
    <div className="container py-3">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small">
        {/* Left side: copyright text */}
        <span className="text-muted">Copyright © 2025</span>
        {/* Right side: theme attribution */}
        <span>
          WordPress Theme by{" "}
          <a
            href="https://creativethemes.com"
            target="_blank"
            rel="noreferrer"
          >
            CreativeThemes
          </a>
        </span>
      </div>
    </div>
  </div>
  );
};

export default FooterBottom;
