import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
      <span className="bg-dark text-white rounded d-inline-flex align-items-center justify-content-center me-2"
        style={{ width: 32, height: 32, fontWeight: 700 }}>
        G
      </span>
      <span className="fw-bold fs-4 text-uppercase">arderobe</span>
    </Link>
  );
}

export default Logo;