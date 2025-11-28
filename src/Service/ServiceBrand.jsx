// src/components/ClientLogos/ClientLogos.jsx
import React from "react";
const SerBrand = [
  "https://startersites.io/blocksy/garderobe/wp-content/uploads/2021/12/client-logo-1.svg",
  "https://startersites.io/blocksy/garderobe/wp-content/uploads/2021/12/client-logo-2.svg",
  "https://startersites.io/blocksy/garderobe/wp-content/uploads/2021/12/client-logo-3.svg",
  "https://startersites.io/blocksy/garderobe/wp-content/uploads/2021/12/client-logo-4.svg",
];
function ServiceBrand({ logos = SerBrand }) {
  return (
    <section className="py-5">
      <div className="container py-1">
        <div className="row justify-content-center align-items-center text-center">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-12 col-lg-3 mb-4 d-flex justify-content-center"
            >
              <img
                src={logo}
                alt={`Client logo ${index}`}
                className="img-fluid"
                style={{ maxHeight: "50px", objectFit: "contain" }}
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServiceBrand;
