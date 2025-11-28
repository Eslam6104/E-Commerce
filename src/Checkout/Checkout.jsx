import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "react-use-cart";
import toast from "react-hot-toast";
import "../assets/style/checkout.css";

// Zod schema for validation
const checkoutSchema = z.object({
  firstName: z
  .string()
  .min(1, "First name is required")
  .regex(/^[A-Za-z\s]+$/, "First name must contain only letters"),
  lastName: z
  .string()
  .min(1, "Last name is required")
  .regex(/^[A-Za-z\s]+$/, "Last name must contain only letters"),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  address1: z.string().min(1, "Street address is required"),
  address2: z.string().optional(),
  city: z.string().min(1, "Town / City is required"),
  state: z.string().min(1, "State is required"),
  zip: z
    .string()
    .min(3, "ZIP code is too short")
    .max(10, "ZIP code is too long"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),
  email: z.string().email("Please enter a valid email address"),
  notes: z.string().optional(),
});

function Checkout() {
  const { items, cartTotal, isEmpty } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      country: "United States (US)",
      address1: "",
      address2: "",
      city: "",
      state: "California",
      zip: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Submitting order with:", data, items, cartTotal);
    toast.success("Order placed successfully!");
  };

  return (
    <main className="checkout-page py-5">
      <div className="container">
        <h2 className="mb-4 checkout-title">Checkout</h2>

        {isEmpty ? (
          <p>Your cart is empty. Add some products before checking out.</p>
        ) : (
          <div className="row">
            {/* Left: Billing form */}
            <div className="col-lg-7">
              <h5 className="checkout-section-title mb-3">Billing details</h5>

              <form
                id="checkout-form"
                className="checkout-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Name */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      First name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <div className="text-danger small mt-1">
                        {errors.firstName.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Last name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <div className="text-danger small mt-1">
                        {errors.lastName.message}
                      </div>
                    )}
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
                    {...register("company")}
                  />
                  {errors.company && (
                    <div className="text-danger small mt-1">
                      {errors.company.message}
                    </div>
                  )}
                </div>

                {/* Country */}
                <div className="mb-3">
                  <label className="form-label">
                    Country / Region <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select"
                    {...register("country")}
                  >
                    <option>United States (US)</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                  {errors.country && (
                    <div className="text-danger small mt-1">
                      {errors.country.message}
                    </div>
                  )}
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
                    {...register("address1")}
                  />
                  {errors.address1 && (
                    <div className="text-danger small mt-1">
                      {errors.address1.message}
                    </div>
                  )}

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    {...register("address2")}
                  />
                  {errors.address2 && (
                    <div className="text-danger small mt-1">
                      {errors.address2.message}
                    </div>
                  )}
                </div>

                {/* City */}
                <div className="mb-3">
                  <label className="form-label">
                    Town / City <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("city")}
                  />
                  {errors.city && (
                    <div className="text-danger small mt-1">
                      {errors.city.message}
                    </div>
                  )}
                </div>

                {/* State / Zip */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("state")}
                    >
                      <option>California</option>
                      <option>New York</option>
                      <option>Texas</option>
                      <option>Florida</option>
                    </select>
                    {errors.state && (
                      <div className="text-danger small mt-1">
                        {errors.state.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      ZIP Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("zip")}
                    />
                    {errors.zip && (
                      <div className="text-danger small mt-1">
                        {errors.zip.message}
                      </div>
                    )}
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
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <div className="text-danger small mt-1">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                    {errors.email && (
                      <div className="text-danger small mt-1">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional info */}
                <div className="mt-4">
                  <h5 className="checkout-section-title mb-2">
                    Additional information
                  </h5>
                  <label className="form-label">
                    Order notes{" "}
                    <span className="text-muted">(optional)</span>
                  </label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    {...register("notes")}
                  />
                  {errors.notes && (
                    <div className="text-danger small mt-1">
                      {errors.notes.message}
                    </div>
                  )}
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
                <div className="d-flex justify-content-between py-2 small border-bottom">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between py-2 small fw-semibold border-bottom">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
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
                  form="checkout-form"
                  className="btn btn-danger w-100 checkout-place-btn"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Placing order..." : "Place order"}
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