import React from "react";
import Card from "../Card/Card.jsx";
import { useGetProductsQuery } from "../../Store/apislice.js";
function CardSection({ limit }) {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error loading products</h4>;
  if (!products) return null;
  const visibleProducts = limit ? products.slice(0, limit) : products;
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        {visibleProducts.map(item => (
          <div
            className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex "
            key={item.id}
          >
            <Card
              title={item.title}
              description={item.description}
              price={item.price}
              rating={item.rating}
              img={item.thumbnail}
              category={item.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;

