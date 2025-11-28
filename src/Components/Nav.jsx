import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
const links = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const linkClass = (path) =>
    "text-decoration-none text-uppercase small me-4 " +
    (pathname === path ? "text-danger fw-bold" : "text-secondary");

  return (
    <>
      <header className="border-bottom bg-white">
        <div className="container d-flex align-items-center justify-content-between py-2">
          <Link
            to="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <span
              className="bg-dark text-white rounded d-inline-flex align-items-center justify-content-center me-2"
              style={{ width: 32, height: 32, fontWeight: 700 }}
            >
              G
            </span>
            <span className="fw-bold fs-4 text-uppercase">arderobe</span>
          </Link>

          <nav className="d-none d-lg-flex align-items-center">
            {links.map(({ label, path }) => (
              <Link key={path} to={path} className={linkClass(path)}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <button className="btn p-0 border-0 bg-transparent">
              <Search size={18} />
            </button>
            <Link to="/signin" className="btn p-0 border-0 bg-transparent text-dark">
              <User size={18} />
            </Link>
            <button className="btn p-0 border-0 bg-transparent position-relative">
              <span
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: 10 }}
              >
                0
              </span>
              <ShoppingBag size={18} />
            </button>
          </div>

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

      {open && (
        <div className="bg-white border-bottom d-lg-none">
          <div className="container d-flex flex-column py-2">
            {links.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={linkClass(path) + " py-1"}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
