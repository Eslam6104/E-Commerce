import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/newsLetter.css";
import toast from "react-hot-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export default function NewsletterUpdates() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    toast.success(`Subscribed with ${data.email}!`);
    reset();
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
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="col-md-4 col-sm-8">
            <input
              type="email"
              placeholder="Email address"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email")}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="col-md-auto col-sm-4">
            <button
              type="submit"
              className="btn btn-danger px-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
