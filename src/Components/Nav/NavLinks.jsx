// src/components/Nav/NavLinks.jsx
import React from "react";
import { Link } from "react-router-dom";
 const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];


function NavLinks({ pathname, onClick, className = "" }) {
  const linkClass = (path) =>
    "text-decoration-none text-uppercase small me-4 " +
    (pathname === path ? "text-danger fw-bold" : "text-secondary");

  return (
    <nav className={className}>
      {navLinks.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          className={linkClass(path)}
          onClick={onClick}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
export default NavLinks;