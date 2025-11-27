import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/newsLetter.css";

export default function NewsletterUpdates() {
  return (
    <section className="newsletter-bg">
      <div className="newsletter-content container">

        <h3 className="fw-bold mb-2">Newsletter Updates</h3>
        <p className="fw-light mb-4">
          Subscribe to receive emails on new product arrivals & special offers
        </p>

        <form className="row g-2 justify-content-center">
          <div className="col-md-4 col-sm-8">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>

          <div className="col-md-auto col-sm-4">
            <button className="btn btn-danger px-4">Subscribe</button>
          </div>
        </form>

      </div>
    </section>
  );
}
