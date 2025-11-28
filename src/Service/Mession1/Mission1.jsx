// src/components/MissionSection/MissionSection.jsx
import React from "react";
import { missionSectionData } from "./missionSectionData";

function MissionSection({ data = missionSectionData }) {
  const { tag, title, description, buttonText, buttonLink, image } = data;

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={image}
              alt={title}
              className="img-fluid w-100"
              style={{ objectFit: "cover",maxHeight: "600px" }}
            />
          </div>

          {/* Right: Text */}
          <div className="col-md-6">
            {tag && (
              <p className="text-danger fw-bold text-uppercase mb-2">
                {tag}
            </p>
            )}

            <h2 className="fw-bold mb-3" style={{ fontSize: "2.2rem" }}>
              {title}
            </h2>

            <p className="text-muted mb-4">{description}</p>

            {buttonText && (
              <a
                href={buttonLink || "#"}
                className="btn btn-outline-dark px-4 py-2"
                style={{ borderRadius: 0 }}
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
