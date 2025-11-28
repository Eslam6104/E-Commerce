import React from "react";
import AddToCartButton from "../AddToCartButton";
import { Link } from 'react-router-dom';

function getStars(rating) {
  const numericRating = typeof rating === "number" ? rating : rating?.rate ?? 0;

  const rounded = Math.round(numericRating);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

function Card({ product }) {
  if (!product) return null;
  const { id, title, description, price, rating, category, thumbnail, images } =
    product;
  //  Choose image for both card + cart
  const imageSrc = thumbnail || (Array.isArray(images) ? images[0] : undefined);
  //  This is what will be saved in the cart
  const cartProduct = {   id, title,  price,image: imageSrc, };

  return (
    <div className="card h-100 shadow-sm">
      {/* Image */}
      <div
        className="bg-light d-flex justify-content-center align-items-center"
        style={{ height: "180px", overflow: "hidden" }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="img-fluid"
            style={{
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        )}
      </div>

      <div className="card-body d-flex flex-column">
       <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
         <h5 className="card-title mb-1">{title}</h5>
       </Link>
        <p className="text-muted mb-1" style={{ fontSize: "0.85rem" }}>
          Category: <strong>{category}</strong>
        </p>
        <p className="card-text flex-grow-1" style={{ fontSize: "0.9rem" }}>
          {description}
        </p>
        <p className="mb-2">
          <span style={{ color: "gold", fontSize: "18px" }}>
            {getStars(rating)}
          </span>
        </p>
        <p className="fw-bold mb-3">${price}</p>
        <AddToCartButton product={cartProduct} />
      </div>
    </div>
  );
}

export default Card;
