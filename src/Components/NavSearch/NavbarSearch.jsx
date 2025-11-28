import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../Store/apislice"; 
import { FaSearch, FaTimes } from "react-icons/fa"; 

const NavbarSearch = () => {
  const [isOpen, setIsOpen] = useState(false); // if the search bar is open or not
  const [searchTerm, setSearchTerm] = useState(""); // store search word
  const { data: products } = useGetProductsQuery(); // suggestions products
  const navigate = useNavigate();

  // bring 5 products from the store
  const suggestions =
    searchTerm.length > 0 && products
      ? products
          .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .slice(0, 5)
      : [];

  // after clicking on search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setIsOpen(false); // close suggestions
      navigate(`/search?q=${searchTerm}`); // navigate to search page
      setSearchTerm(""); // clear search 
    }
  };

  return (
    <div className="position-relative d-flex align-items-center">
      {/* open || close search */}
      <button
        className="btn btn-link text-dark p-0 border-0"
        onClick={() => setIsOpen(!isOpen)}
        style={{ fontSize: "1.2rem" }}
      >
        {isOpen ? <FaTimes /> : <FaSearch />}
      </button>

      {/* dropdown list for the suggestions  */}
      {isOpen && (
        <div 
            className="position-absolute bg-white shadow p-2 rounded"
            style={{ top: "45px", right: "0", width: "300px", zIndex: 1000 }}
        >
          <form onSubmit={handleSearch} className="d-flex">
            <input
              type="text"
              className="form-control form-control-sm shadow-none"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit" className="btn btn-danger btn-sm ms-2">Go</button>
          </form>

          {/* suggestions */}
          {suggestions.length > 0 && (
            <ul className="list-group mt-2 mb-0">
              {suggestions.map((item) => (
                <li 
                  key={item.id} 
                  className="list-group-item list-group-item-action border-0 px-2 py-1"
                  onClick={() => {
                    navigate(`/products/${item.id}`); // go to the product page
                    setIsOpen(false);
                  }}
                  style={{ cursor: "pointer", fontSize: "0.9rem" }}
                >
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt="" style={{width: '25px', marginRight: '10px'}}/>
                    <small>{item.title.substring(0, 25)}...</small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarSearch;