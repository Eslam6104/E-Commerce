import React from "react";
import { useCart } from "react-use-cart";
import "../assets/style/checkout.css"; 

function Checkout() {
  const { items, cartTotal, isEmpty } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="checkout-page py-5">
      <div className="container">
        <h2 className="mb-4 checkout-title">Checkout</h2>

        {isEmpty ? (
          <p>Your cart is empty. Add some products before checking out.</p>
        ) : (
          <div className="row">
            {/* LEFT: Billing form */}
            <div className="col-lg-7">
              <h5 className="checkout-section-title mb-3">Billing details</h5>

              <form className="checkout-form" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      First name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="firstName"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Last name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="lastName"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="mb-3">
                  <label className="form-label">
                    Company name <span className="text-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                  />
                </div>

                {/* Country */}
                <div className="mb-3">
                  <label className="form-label">
                    Country / Region <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    defaultValue="United States (US)"
                    required
                    name="country"
                  >
                    <option>United States (US)</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">
                    Street address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="House number and street name"
                    required
                    name="address1"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    name="address2"
                  />
                </div>

                {/* City / State / Zip */}
                <div className="mb-3">
                  <label className="form-label">
                    Town / City <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    name="city"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      defaultValue="California"
                      required
                      name="state"
                    >
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      ZIP Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      name="zip"
                    />
                  </div>
                </div>

                {/* Phone / Email */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      required
                      name="phone"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      name="email"
                    />
                  </div>
                </div>

                {/* Additional info */}
                <div className="mt-4">
                  <h5 className="checkout-section-title mb-2">
                    Additional information
                  </h5>
                  <label className="form-label">
                    Order notes <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    name="notes"
                  />
                </div>
              </form>
            </div>

            {/* RIGHT: Order summary */}
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="checkout-order-card p-4 border">
                <h5 className="mb-3 checkout-section-title">Your order</h5>

                <div className="d-flex fw-semibold small mb-2">
                  <div className="flex-grow-1">Product</div>
                  <div>Subtotal</div>
                </div>

                <hr className="mt-1" />

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between py-2 small border-bottom"
                  >
                    <div>
                      {item.title} <span>× {item.quantity}</span>
                    </div>
                    <div>${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}

                {/* Subtotal & total */}
                <div className="d-flex justify-content-between py-2 small border-bottom">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between py-2 small fw-semibold border-bottom">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                {/* Payment methods notice */}
                <div className="checkout-alert mt-3 p-3">
                  <div className="small">
                    <strong>Sorry</strong>, it seems that there are no available
                    payment methods. Please contact us if you require assistance
                    or wish to make alternate arrangements.
                  </div>
                </div>

                <p className="mt-3 mb-3 checkout-privacy small text-muted">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>

                <button
                  type="submit"
                  form=""
                  className="btn btn-danger w-100 checkout-place-btn"
                  onClick={handleSubmit}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Checkout;
