import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useFilter from "./UseFilter";
import CardSection from "../Components/CardSection/CardSection";

const Filter = ({ products }) => {
  const {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    maxPrice
  } = useFilter(products);

  return (
    <div className="container py-5">
      <div className="row">

        {/* FILTER SIDEBAR */}
        <div className="col-md-3">
          <div className="border p-3 rounded">

            <h4 className="fw-bold">Filter</h4>

            {/* CATEGORY FILTER */}
            <div className="mb-4">
              <label className="fw-bold mb-2">Category</label>
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All</option>
                {categories.map((cat) => (
                  <option value={cat} key={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* PRICE FILTER */}
            <div className="mb-4">
              <label className="fw-bold mb-2">Price Range</label>

              <Slider
                range
                min={0}
                max={maxPrice}
                value={priceRange}
                onChange={(v) => setPriceRange(v)}
              />

              <div className="d-flex justify-content-between mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

          </div>
        </div>




        {/* PRODUCT LIST HERE */}
        <div className="col-md-9">
          <CardSection data={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
