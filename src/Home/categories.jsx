import React from "react";
import "../assets/style/categories.css";
import categoriesData from "../assets/categories";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <article className="category-card" key={cat.id}>
            <div className="category-image-wrap">
              <img src={cat.image} alt={cat.title} className="category-image" />
            </div>

            <Link to={`/products`} className="category-info">
              <p className="category-articles">{cat.articles} articles</p>
              <h3 className="category-title">{cat.title}</h3>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
