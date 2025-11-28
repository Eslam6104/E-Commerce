import React from "react";
import { Link } from "react-router-dom";
import CardSection from "../CardSection/CardSection";
function CardSecBlok({ title, subtitle, data, limit, viewAllLink }) {
  return (
    <div className="container my-5">
      {/* Subtitle */}
      {subtitle && (
        <p className="text-muted mb-1" style={{ fontSize: "1rem" }}>
          {subtitle}
        </p>
      )}

      {/* Title + optional View All */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold" style={{ fontSize: "2.2rem" }}>
          {title}
        </h1>

        {viewAllLink && (
          <Link
            to={viewAllLink}
            className="btn btn-outline-dark px-4 py-2"
            style={{ borderRadius: "0" }}
          >
            VIEW ALL
          </Link>
        )}
      </div>
      {/* Card section */}
      <CardSection data={data} limit={limit} />
    </div>
  );
}

export default CardSecBlok;
