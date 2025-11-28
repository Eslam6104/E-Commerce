// src/components/search.jsx
import React, { useState } from "react";
import "../assets/style/search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = input.trim();
    if (!trimmed) return;

    // Redirect to search results page
    navigate(`/search?query=${encodeURIComponent(trimmed)}`);

    // Close overlay and clear input
    setOpen(false);
    setInput("");
  };

  return (
    <>
      <button
        className="search-trigger"
        onClick={() => setOpen(true)}
      >
        <svg
          className="ct-icon"
          aria-hidden="true"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <path d="M14.8,13.7L12,11c0.9-1.2,1.5-2.6,1.5-4.2c0-3.7-3-6.8-6.8-6.8S0,3,0,6.8s3,6.8,6.8,6.8c1.6,0,3.1-0.6,4.2-1.5l2.8,2.8c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2C15.1,14.5,15.1,14,14.8,13.7z M1.5,6.8c0-2.9,2.4-5.2,5.2-5.2S12,3.9,12,6.8S9.6,12,6.8,12S1.5,9.6,1.5,6.8z"></path>
        </svg>
      </button>

      {open && (
        <div className="search-overlay">
          {/* Close button */}
          <button
            className="search-close"
            onClick={() => setOpen(false)}
          >
            X
          </button>

          <form className="search-box" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="search-submit" type="submit">
              <svg
                width="20"
                height="20"
                fill="white"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l4.39 4.38-1.41 1.42-4.39-4.39zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Search;
