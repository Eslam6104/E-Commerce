// src/components/ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(3, "Enter a valid name"),
  phone: z.string().min(7, "Enter a valid phone"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("FORM SENT:", data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* Name */}
      <div className="mb-3">
        <label className="form-label">Name *</label>
        <input
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          {...register("name")}
        />
        {errors.name && <small className="text-danger">{errors.name.message}</small>}
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label className="form-label">Phone *</label>
        <input
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          {...register("phone")}
        />
        {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email *</label>
        <input
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          {...register("email")}
        />
        {errors.email && <small className="text-danger">{errors.email.message}</small>}
      </div>

      {/* Message */}
      <div className="mb-3">
        <label className="form-label">Your Message *</label>
        <textarea
          rows="4"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          {...register("message")}
        />
        {errors.message && (
          <small className="text-danger">{errors.message.message}</small>
        )}
      </div>

      {/* Submit */}
      <button className="btn btn-danger px-4">Send Message</button>
    </form>
  );
}

export default ContactForm;
