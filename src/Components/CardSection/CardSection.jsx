import React from "react";
import Card from "../Card/Card.jsx";
function CardSection({ data }) {
  if (!data || data.length === 0) {
    return <h4 className="text-center">No products found</h4>;
  }
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {data.map((item) => (
          <div
            className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex"
            key={item.id}
          >
            <Card product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;
