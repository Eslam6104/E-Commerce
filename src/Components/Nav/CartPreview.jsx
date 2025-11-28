import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "react-use-cart";

function CartPreview() {
  const [open, setOpen] = useState(false);
  const { items, totalItems, cartTotal, removeItem } = useCart();

  return (
    <div
      className="position-relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="btn p-0 border-0 bg-transparent position-relative">
        {totalItems > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 10 }}>
            {totalItems}
          </span>
        )}
        <ShoppingBag size={18} />
      </button>

      {open && (
        <div className="bg-dark text-white rounded shadow"
          style={{ position: "absolute", right: 0, top: "100%", width: 280, zIndex: 1000 }}>
          <div className="p-3">
            <h6 className="mb-3 text-uppercase small">Your Cart</h6>

            {items.length === 0 ? (
              <p className="mb-0 small text-white">No items in your cart.</p>
            ) : (
              <>
                <ul className="list-unstyled mb-3">
                  {items.map((item) => (
                    <li key={item.id} className="d-flex align-items-center mb-2 pb-2 border-bottom border-secondary">
                      {item.image && (
                        <img src={item.image} alt={item.title}
                          style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 4, marginRight: 8 }} />
                      )}

                      <div className="flex-grow-1">
                        <div className="small fw-semibold">{item.title}</div>
                        <div className="small text-white-50">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </div>
                      </div>

                      <button className="btn btn-sm p-1 ms-2 text-white-50" onClick={() => removeItem(item.id)}>
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
                  <Link to="/cart" className="btn btn-outline-light btn-sm w-50">
                    View Cart
                  </Link>
                  <Link to="/checkout" className="btn btn-danger btn-sm w-50">
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPreview;