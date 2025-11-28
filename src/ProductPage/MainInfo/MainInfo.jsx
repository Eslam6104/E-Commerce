import React from "react";
import AddToCartButton from "../../Components/AddToCartButton";
function MainInfo({ product, onAddToCart }) {
  if (!product) return null;

  return (
    <section className="container py-5">
      <div className="row g-4 align-items-start">
        {/* الصورة الكبيرة */}
        <div className="col-12 col-md-4">
          <div className="border rounded p-3 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
            />
          </div>
        </div>

        {/* التفاصيل الأساسية */}
        <div className="col-12 col-md-5">
          <h2 className="fw-bold mb-2">{product.title}</h2>

          {/* Rating + عدد النجوم */}
          <div className="d-flex align-items-center mb-2">
            <span className="me-2 text-warning">
              {"★".repeat(Math.round(product.rating || 0))}
            </span>
            <span className="text-muted small">
              {product.rating?.toFixed(1) ?? "0.0"} / 5
            </span>
          </div>

          {/* السعر */}
          <div className="d-flex align-items-baseline gap-2 mb-3">
            <h3 className="text-success mb-0">${product.price}</h3>
            {product.discountPercentage && (
              <span className="text-muted text-decoration-line-through small">
                $
                {(
                  product.price /
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
              </span>
            )}
          </div>

          {/* وصف مختصر */}
          <p className="text-muted mb-3">{product.description}</p>

          {/* الحالة (متوفر / مش متوفر) */}
          <p className="mb-3">
            <span className="fw-bold">Status: </span>
            {product.stock > 0 ? (
              <span className="text-success">In stock ({product.stock})</span>
            ) : (
              <span className="text-danger">Out of stock</span>
            )}
          </p>

          {/* الكمية + زرار الكارت (simple UI، تقدر تربطه بالـ cart عندك) */}
          <div className="d-flex flex-wrap align-items-center gap-3">

          <AddToCartButton product={product} />
          </div>

          {/* الكاتيجوري */}
          <p className="mt-3 mb-0 text-muted small">
            <span className="fw-bold">Category: </span>
            {product.category}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainInfo;
