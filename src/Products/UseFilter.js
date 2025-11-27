import { useState, useEffect } from "react";

const useFilter = (products) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300]); // [min, max]

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, priceRange, products]);

  const applyFilters = () => {
    let updatedList = products;
    // catogary filter
    if (selectedCategory !== "All") {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // price filter
    updatedList = updatedList.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    setFilteredProducts(updatedList);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };
  return {
    filteredProducts,
    selectedCategory,
    priceRange,
    handleCategoryChange,
    handleSliderChange,
  };
};

export default useFilter;
