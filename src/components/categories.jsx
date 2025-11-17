// src/components/Categories.jsx
import "./categories.css";
import categories from "../assets/categories";

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="categories-grid">
        {categories.map((cat) => (
          <article className="category-card" key={cat.id}>
            <div className="category-image-wrap">
              <img
                src={cat.image}
                alt={cat.title}
                className="category-image"
              />
            </div>

            <div className="category-info">
              <p className="category-articles">{cat.articles} articles</p>
              <h3 className="category-title">{cat.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Categories;
