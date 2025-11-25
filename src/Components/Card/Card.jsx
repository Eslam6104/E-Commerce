import React from "react";

// ⭐ Rating function inside the same file
function getStars(rating) {
  const rounded = Math.round(rating); // 4.3 → 4
  return "★".repeat(rounded) + "☆".repeat(5 - rounded); // Fill the rest with empty stars
}

function Card({ title, description, price, rating, img, category }) {
  return (
    <div className="card h-100" style={{ width: "18rem" }}>
      {/* Image section */}
      <div
        style={{
          backgroundColor: "#e0e0e0",
          width: "100%",
          height: "180px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>

        <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
          Category: <strong>{category}</strong>
        </p>

        <p className="card-text flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {description}
        </p>

        {/* ⭐ Rating section */}
        <p className="mb-2">
          <span style={{ color: "gold", fontSize: "18px" }}>
            {getStars(rating)}
          </span>
        </p>

        {/* Price */}
        <p className="fw-bold mb-3">${price}</p>

        <button className="btn btn-primary w-100 mt-auto">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;
