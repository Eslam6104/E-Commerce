// src/components/ContactSection.jsx
import React from "react";
import ContactForm from "./ContactForm";

const CONTACT_IMAGE =
  "https://res.cloudinary.com/dah254u09/image/upload/v1764340198/WhatsApp_Image_2025-11-28_at_3.33.33_PM_vqmrji.jpg";

function ContactSectionForm() {
  return (
    <section className="py-5">
      <div className="container">
        {/* عنوان بسيط */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
        </div>

        {/* الصورة + الفورم */}
        <div className="row align-items-start justify-content-center">
          {/* LEFT: IMAGE */}
          <div className="col-12 col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
            <div
              className="w-100"
              style={{
                maxWidth: "420px",
                backgroundColor: "#f44336",
              }}
            >
              <img
                src={CONTACT_IMAGE}
                alt="Contact"
                className="img-fluid w-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="col-12 col-lg-5">
            <h4 className="fw-bold mb-4">Contact with us</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionForm;
