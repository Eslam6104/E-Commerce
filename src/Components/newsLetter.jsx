import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/newsLetter.css";
import toast from "react-hot-toast";

export default function NewsletterUpdates() {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    toast.success("Subscribed to newsletter!");
  };

  return (
    <section className="newsletter-bg">
      <div className="newsletter-content container">

        <h3 className="fw-bold mb-2">Newsletter Updates</h3>
        <p className="fw-light mb-4">
          Subscribe to receive emails on new product arrivals & special offers
        </p>

        <form className="row g-2 justify-content-center" onSubmit={handleSubmit}>
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
