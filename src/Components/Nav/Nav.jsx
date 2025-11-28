// src/Components/Nav/Nav.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartPreview from "./CartPreview";
import { Menu,ShoppingBag } from "lucide-react";
import { useCart } from "react-use-cart";
import NavbarSearch from "../NavSearch/NavbarSearch";
import UserProfile from "./UserProfile";
export default function Nav() {
  const { pathname } = useLocation();
  const { totalItems } = useCart();

  return (
    <>
      {/* MAIN NAV */}
      <header className="border-bottom bg-white fixed-top py-3">
        <div className="container py-2">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <Logo />

            {/* Desktop links */}
            <div className="d-none d-md-block">
              <NavLinks pathname={pathname} />
            </div>

            {/* Right side icons */}
            <div className="d-flex align-items-center gap-3">
        
              <NavbarSearch></NavbarSearch>
              <UserProfile></UserProfile>

              {/* Cart dropdown */}
              <div className="d-none d-md-inline">
                <Link to="/cart">
                <CartPreview />
                </Link>
              </div>

              {/* Mobile cart badge */}
              <Link
                to="/cart"
                className="d-md-none position-relative text-decoration-none text-dark"
              >
                {totalItems > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle small">
                    {totalItems}
                  </span>
                )}
                <ShoppingBag size={20} />
              </Link>

              {/* Mobile menu button */}
              <button
                className="btn d-md-none border-0 bg-transparent"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileNav"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV (simple offcanvas) */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="mobileNav"
        aria-labelledby="mobileNavLabel"
      >
        <div className="offcanvas-header">
          <h5 id="mobileNavLabel" className="mb-0">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavLinks
            pathname={pathname}
            className="d-flex flex-column gap-3"
            onClick={() => {
              // Close offcanvas after navigation
              const offcanvasEl = document.getElementById("mobileNav");
              if (offcanvasEl) {
                const evt = new Event("hide.bs.offcanvas");
                offcanvasEl.dispatchEvent(evt);
              }
            }}
          />
          <div className="mt-4">
            <CartPreview />
          </div>
        </div>
      </div>
    </>
  );
}
