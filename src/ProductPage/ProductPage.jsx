import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../Store/apislice";
import { parseProductSlug } from "../Components/slug";
import MainInfo from "./MainInfo/MainInfo";
function ProductPage() {
  const { slug } = useParams();
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="container py-5">
        <h2>Loading product...</h2>
      </div>
    );
  }

  if (isError || !Array.isArray(products)) {
    return (
      <div className="container py-5">
        <h2>Error loading product.</h2>
      </div>
    );
  }

  const { id, title } = parseProductSlug(slug);

  let product = null;

  if (id) {
    product = products.find((p) => p.id === id);
  }

  if (!product && title) {
    const t = title.toLowerCase();
    product = products.find((p) => p.title.toLowerCase() === t);
  }

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product not found</h2>
        <p className="text-muted">
          We couldn&apos;t find a product matching this URL.
        </p>
      </div>
    );
  }
  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Main Info Section */}
        <div className="col-12">
          <MainInfo product={product} />
        </div>  
        
      </div>
    </div>
  );
}

export default ProductPage;
