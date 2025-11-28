import React from "react";
import Hero from "./hero.jsx"
import Categories from "./categories.jsx"
import Sales from "./sales.jsx"
import { useGetProductsQuery } from "../Store/apislice.js";
import CardSecBlok from '../Components/CardSecBlock/CardSECBlok.jsx';
function Home() {
    const { data: products } = useGetProductsQuery();
  const newArrivals = products ? products.slice(-4) : [];
const popularProducts = products
  ? [...products]
      .sort((a, b) => {
        const rateA = typeof a.rating === "number" ? a.rating : a.rating?.rate ?? 0;
        const rateB = typeof b.rating === "number" ? b.rating : b.rating?.rate ?? 0;
        return rateB - rateA;  // ترتيب من الأعلى للأقل
      })
      .slice(0, 4)
  : [];  return (
    <>
      <Hero></Hero>

          <CardSecBlok
      title="New Arrivals"
      subtitle="Check out latest products"
      data={newArrivals}
      limit={4}
      viewAllLink="/products"
    />
      <Categories></Categories>
     <CardSecBlok
      title="Popular Products"
      subtitle="Check out latest products"
      data={popularProducts}
      limit={4}
      viewAllLink="/products"
    />
      <Sales></Sales>

    </>
  );
}

export default Home;