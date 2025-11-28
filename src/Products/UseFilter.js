import { useState, useEffect } from "react";

export default function useFilter(products = []) {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (!products.length) return;

    // Set max price
    const highest = Math.max(...products.map((p) => p.price));
    setMaxPrice(highest);
    setPriceRange([0, highest]);

    // Set categories
    const uniqueCats = [...new Set(products.map((p) => p.category))];
    setCategories(uniqueCats);

    setFilteredProducts(products);
  }, [products]);

  // APPLY FILTER
  useEffect(() => {
    let list = [...products];

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    setFilteredProducts(list);
  }, [products, selectedCategory, priceRange]);

  return {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    maxPrice
  };
}
