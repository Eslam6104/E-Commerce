import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetProductsQuery } from "../../Store/apislice"; 
import CardSection from "../CardSection/CardSection"; // eslam cards

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q"); // the word from url
  const { data: products, isLoading } = useGetProductsQuery();

  // filter products by title
  const filteredProducts = products
    ? products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (isLoading) return <div className="text-center py-5 mt-5">Loading...</div>;

  return (
    <>
        <div className="py-5 mt-5">
      <div className="container mb-4">
        <h3>
          Search Results for: <span className="text-danger">"{query}"</span>
        </h3>
        <p className="text-muted">
           Found {filteredProducts.length} items
        </p>
      </div>

      <CardSection data={filteredProducts} />
      
    </div>
    </>

  );
};

export default SearchResults;