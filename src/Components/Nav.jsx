// src/Components/Nav.jsx
import React, { useState } from "react";
import { Search, User, ShoppingBag, Menu } from "lucide-react";

const links = ["Home", "Products", "Services", "About Us", "News", "Contact"];

const Nav = () => {
  const [open, setOpen] = useState(false);

  const current = "Home"; // ✅ Default active tab

  return (
    <>
      <header className="border-bottom bg-white">
        <div className="container d-flex align-items-center justify-content-between py-2">

          {/* LOGO */}
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <span
              className="bg-dark text-white rounded d-inline-flex align-items-center justify-content-center me-2"
              style={{ width: 32, height: 32, fontWeight: 700 }}
            >
              G
            </span>
            <span
              className="fw-bold fs-4 text-uppercase"
              style={{ letterSpacing: "0.16em" }}
            >
              arderobe
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <nav className="d-none d-lg-flex gap-4 text-uppercase">
            {links.map((item) => (
              <button
                key={item}
                className={
                  "btn btn-link text-decoration-none p-0 position-relative " +
                  (item === current ? "text-danger fw-bold" : "text-secondary")
                }
                style={{ letterSpacing: "0.16em", fontSize: 14 }}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* DESKTOP ICONS */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <button className="btn p-0 border-0 bg-transparent">
              <Search size={18} />
            </button>
            <button className="btn p-0 border-0 bg-transparent">
              <User size={18} />
            </button>
            <button className="btn p-0 border-0 bg-transparent position-relative">
              <span className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: 10 }}>
                0
              </span>
              <ShoppingBag size={18} />
            </button>
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="d-flex d-lg-none align-items-center gap-3">
            <button className="btn p-0 border-0 bg-transparent position-relative">
              <span 
                className="position-absolute top-0 start-100 translate-middle" 
                style={{ fontSize: 10 }}
              >
                0
              </span>
              <ShoppingBag size={20} />
            </button>
            <button 
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setOpen(!open)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={"bg-white border-bottom d-lg-none " + (open ? "d-flex" : "d-none")}>
        <div className="container d-flex flex-column py-2">
          {links.map((item) => (
            <button
              key={item}
              className={
                "btn btn-link text-start px-0 py-2 text-uppercase " +
                (item === current ? "text-danger fw-bold" : "text-secondary")
              }
              style={{ letterSpacing: "0.16em", fontSize: 14 }}
              onClick={() => setOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
