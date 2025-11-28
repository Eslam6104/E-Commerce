import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/newsLetter.css";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export default function NewsletterUpdates() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");

    const result = schema.safeParse({ email });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    toast.success(`Subscribed with ${email}!`);
    e.target.reset();
  };

  return (
    <section className="newsletter-bg">
      <div className="newsletter-content container">
        <h3 className="fw-bold mb-2">Newsletter Updates</h3>
        <p className="fw-light mb-4">
          Subscribe to receive emails on new product arrivals & special offers
        </p>

        <form
          className="row g-2 justify-content-center"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="col-md-4 col-sm-8">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className="form-control"
            />
          </div>

          <div className="col-md-auto col-sm-4">
            <button type="submit" className="btn btn-danger px-4">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
