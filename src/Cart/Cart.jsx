
import React from "react";
import { useCart } from "react-use-cart";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

import "../assets/style/cart.css"; 

function Cart() {
  const {
    items,
    isEmpty,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) {
    return (
      <main className="cart-page py-5">
        <div className="container">
          <h2 className="mb-4">Cart</h2>
          <p>Your cart is currently empty.</p>
          <Link to="/products" className="btn btn-danger">
            Go to products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page py-5">
      <div className="container">
        <h2 className="mb-4 cart-title">Cart</h2>

        <div className="row">
          {/* LEFT: items table */}
          <div className="col-lg-8">
            <div className="cart-table-wrapper">
              <div className="cart-table-header d-none d-md-flex">
                <div className="flex-grow-1">Product</div>
                <div className="cart-qty-col">Quantity</div>
                <div className="cart-subtotal-col text-end">Subtotal</div>
              </div>

              <hr className="mt-2 mb-0 d-none d-md-block" />

              {items.map((item) => (
                <div
                  key={item.id}
                  className="cart-row d-flex align-items-center py-3 border-bottom"
                >
                  {/* Product column */}
                  <div className="d-flex align-items-center flex-grow-1">
                    {item.image && (
                      <div className="cart-product-thumb me-3">
                        <img src={item.image} alt={item.title} />
                      </div>
                    )}
                    <div>
                      <div className="cart-product-name">{item.title}</div>
                      <div className="cart-product-price text-muted">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  {/* Quantity column */}
                  <div className="cart-qty-col d-flex justify-content-center my-2 my-md-0">
                    <div className="cart-qty-control d-inline-flex align-items-center">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        disabled={item.quantity === 1}
                      >
                        –
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal column */}
                  <div className="cart-subtotal-col text-end">
                    <div className="cart-row-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      className="btn btn-link p-0 ms-2 text-muted cart-remove-btn"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Coupon */}
              <div className="cart-actions d-flex flex-column flex-md-row align-items-md-center justify-content-between pt-3">
                <div className="d-flex mb-3 mb-md-0 w-100 w-md-auto">
                  <input
                    type="text"
                    className="form-control cart-coupon-input me-2"
                    placeholder="Coupon code"
                  />
                  <button className="btn btn-danger cart-coupon-btn">
                    Apply coupon
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: totals card */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="cart-totals-card p-4 border">
              <h5 className="mb-3 cart-totals-title">Cart totals</h5>

              <div className="d-flex justify-content-between py-2 cart-totals-row">
                <span className="text-muted">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              <hr className="my-2" />

              <div className="d-flex justify-content-between py-2 cart-totals-row">
                <span className="text-muted">Total</span>
                <strong>${cartTotal.toFixed(2)}</strong>
              </div>

              <Link
                to="/checkout"
                className="btn btn-danger w-100 mt-4 cart-checkout-btn"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
