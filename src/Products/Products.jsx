import React from "react";
import Filter from "./Filter";
import { useGetProductsQuery } from "../Store/apislice";

function Products() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error loading products</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <Filter products={products} />
    </div>
  );
}

export default Products;
