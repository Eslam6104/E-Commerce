import React, { useState } from "react";

function ProductDetailsSection({ product, reviews = [] }) {
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return null;

  return (
    <section className="container pb-5">
      {/* Tabs */}
      <div className="border-bottom mb-4">
        <ul className="nav nav-tabs border-0">
          <li className="nav-item">
            <button
              className={
                "nav-link border-0 " +
                (activeTab === "description" ? "active fw-bold" : "")
              }
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                "nav-link border-0 " +
                (activeTab === "reviews" ? "active fw-bold" : "")
              }
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({reviews.length})
            </button>
          </li>
        </ul>
      </div>

      {/* محتوى الـ tabs */}
      {activeTab === "description" && (
        <div className="row">
          <div className="col-12 col-md-8">
            <p className="text-muted" style={{ lineHeight: 1.8 }}>
              {product.description}
            </p>
            {/* ممكن تحط هنا نص أطول ثابت لو حابب */}
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="row">
          <div className="col-12 col-md-8">
            {reviews.length === 0 && (
              <p className="text-muted">No reviews yet.</p>
            )}

            {reviews.map((review, index) => (
              <div key={index} className="mb-4 border-bottom pb-3">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <strong>{review.reviewerName}</strong>
                  <span className="text-warning small">
                    {"★".repeat(review.rating)}{" "}
                    <span className="text-muted">
                      {review.rating.toFixed(1)}/5
                    </span>
                  </span>
                </div>
                <p className="text-muted mb-1 small">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductDetailsSection;
