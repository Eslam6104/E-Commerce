/**
 * Middle section of the footer: centered logo row.
 */
import React from "react";
function FooterMiddle() {
  return (
    <div className="border-top">
      <div className="container py-4 text-center">
        {/* Replace src with your logo path if needed */}
        <img src="/logo-dark.svg" alt="Logo" width="170" height="60" />
      </div>
    </div>
  );
}

export default FooterMiddle;
