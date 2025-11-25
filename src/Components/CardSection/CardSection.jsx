import React from "react";
import Card from "../Card/Card.jsx";
import { useGetProductsQuery } from "../../Store/apislice.js";
function CardSection({ limit }) {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error loading products</h4>;
  // If limit exists, slice. If not, use full list.
  const visibleProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="container py-4">
      <div className="row">
        {visibleProducts.map((item) => (
          <div className="col-3 mb-4" key={item.id}>
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

