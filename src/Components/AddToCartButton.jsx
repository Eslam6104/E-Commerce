import React from "react";
import { useCart } from "react-use-cart";

export default function AddToCartButton({ product, children }) {
  const { addItem } = useCart();

  return (
    <button
      className="addToCart-btn"
      onClick={() => {
        if (!product?.id) {
          console.error("AddToCartButton: product is missing an id");
          return;
        }

        addItem(product);
      }}
    >
      {"Add to cart"}
    </button>
  );
}
