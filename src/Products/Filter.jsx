import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import useFilter from './UseFilter'; 

// data test
const productsData = [
  { id: 1, name: "Nike Air Max", category: "Shoes", price: 120 },
  { id: 2, name: "Adidas T-Shirt", category: "Clothes", price: 40 },
  { id: 3, name: "Puma Running", category: "Shoes", price: 80 },
  { id: 4, name: "Smart Watch", category: "Accessories", price: 200 },
  { id: 5, name: "Jeans Pants", category: "Clothes", price: 60 },
  { id: 6, name: "Cap", category: "Accessories", price: 25 },
];

const FilterComponent = () => {
    // hook use
  const { 
    filteredProducts, 
    selectedCategory, 
    priceRange, 
    handleCategoryChange, 
    handleSliderChange 
  } = useFilter(productsData);

  return (
    <div className="container py-5">
      <div className="row">
        
        {/* Sidebar Filter */}
        <div className="col-md-3">
          <div className="border p-3 rounded">
            <h4>Filter By</h4>
            
            {/* Category Filter */}
            <div className="mb-4">
              <label className="fw-bold mb-2">Category</label>
              <select 
                className="form-select" 
                value={selectedCategory} 
                onChange={handleCategoryChange}
              >
                <option value="All">All Categories</option>
                <option value="Shoes">Shoes</option>
                <option value="Clothes">Clothes</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="mb-4">
              <label className="fw-bold mb-3">Price Range</label>
              <Slider
                range
                min={0}
                max={300}
                defaultValue={[0, 300]}
                value={priceRange}
                onChange={handleSliderChange}
                trackStyle={{ backgroundColor: 'rgb(220, 53, 69)', height: 4 }}
                handleStyle={{ borderColor: 'rgba(118, 18, 28, 1)', backgroundColor: 'white' }}
                railStyle={{ backgroundColor: '#ccc', height: 4 }}
              />
              <div className="d-flex justify-content-between mt-2">
                <span className='p-2 pt-1 pb-1 border border-dark-subtle rounded-3 text-bg-danger text-white fw-bold fs-6'>${priceRange[0]}</span>
                <span className='p-2 pt-1 pb-1 border border-dark-subtle rounded-3 text-bg-danger text-white fw-bold fs-6'>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Display for the test*/}
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                        {/* replace it with image */}
                      <div className="bg-light mb-3" style={{height: '150px'}}></div>  
                      <h5 className="card-title">{product.name}</h5>
                      <p className="text-muted">{product.category}</p>
                      <h6 className="fw-bold text-primary">${product.price}</h6>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-warning text-center">
                No products found.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilterComponent;