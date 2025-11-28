import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, User, ShoppingBag, Menu, Trash2 } from "lucide-react";
import NavbarSearch from "./NavSearch/NavbarSearch";
import { useCart } from "react-use-cart";

const links = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);         
  const [cartOpen, setCartOpen] = useState(false); 
  const { pathname } = useLocation();
  const navigate = useNavigate();                  

  const { items, totalItems, cartTotal, removeItem } = useCart();

  const linkClass = (path) =>
    "text-decoration-none text-uppercase small me-4 " +
    (pathname === path ? "text-danger fw-bold" : "text-secondary");


  return (
    <>
      <header className="border-bottom bg-white fixed-top">
        <div className="container d-flex align-items-center justify-content-between py-2">
          
          {/* LOGO */}
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

          {/* DESKTOP LINKS */}
          <nav className="d-none d-lg-flex align-items-center">
            {links.map(({ label, path }) => (
              <Link key={path} to={path} className={linkClass(path)}>
                {label}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ICONS */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {/* <button className="btn p-0 border-0 bg-transparent">
              <Search size={18} />
            </button> */}
            <NavbarSearch></NavbarSearch>
            <Link to="/signin" className="btn p-0 border-0 bg-transparent text-dark">
              <User size={18} />
            </Link>
            {/* Cart icon + dropdown (Desktop Only) */}
            <div
              className="position-relative"
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
            >
              <button className="btn p-0 border-0 bg-transparent position-relative">
                {totalItems > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: 10 }}
                  >
                    {totalItems}
                  </span>
                )}
                <ShoppingBag size={18} />
              </button>

              {cartOpen && (
                <div
                  className="bg-dark text-white rounded shadow"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "100%",
                    width: 280,
                    zIndex: 1000,
                  }}
                >
                  <div className="p-3">
                    <h6 className="mb-3 text-uppercase small">Your Cart</h6>

                    {items.length === 0 ? (
                      <p className="mb-0 small text-white">No items in your cart.</p>
                    ) : (
                      <>
                        <ul className="list-unstyled mb-3">
                          {items.map((item) => (
                            <li
                              key={item.id}
                              className="d-flex align-items-center mb-2 pb-2 border-bottom border-secondary"
                            >
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.title }
                                  style={{
                                    width: 40,
                                    height: 40,
                                    objectFit: "cover",
                                    borderRadius: 4,
                                    marginRight: 8,
                                  }}
                                />
                              )}

                              <div className="flex-grow-1">
                                <div className="small fw-semibold">
                                  {item.title }
                                </div>
                                <div className="small text-white-50">
                                  {item.quantity} × ${item.price.toFixed(2)}
                                </div>
                              </div>

                              <button
                                className="btn btn-sm p-1 ms-2 text-white-50"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 size={14} />
                              </button>
                            </li>
                          ))}
                        </ul>

                        <div className="d-flex justify-content-between align-items-center mb-3 small">
                          <span className="text-uppercase">Subtotal:</span>
                          <strong>${cartTotal.toFixed(2)}</strong>
                        </div>

                        <div className="d-flex gap-2">
                          <Link
                            to="/cart"
                            className="btn btn-outline-light btn-sm w-50"
                          >
                            View Cart
                          </Link>
                          <Link
                            to="/checkout"
                            className="btn btn-danger btn-sm w-50"
                          >
                            Checkout
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE ICONS */}
          <div className="d-flex d-lg-none align-items-center gap-3">
            {/* MOBILE CART → redirect to /cart */}
            <button
              className="btn p-0 border-0 bg-transparent position-relative"
              onClick={() => navigate("/cart")}   // <-- MOBILE REDIRECT HERE
            >
              {totalItems > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: 10 }}
                >
                  {totalItems}
                </span>
              )}
              <ShoppingBag size={20} />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setOpen(!open)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV MENU */}
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
