import { Link } from "react-router-dom";
import "./sales.css";
import salesData from "../assets/salesData";

const Sales = () => {
  return (
    <section className="deals-section">
      <div className="deals-inner">
        {/* left side */}
        <div className="deals-grid">
          {salesData.map((item) => (
            <article className="deal-card" key={item.id}>
              <div className="deal-image-wrap">
                <img src={item.image} alt={item.title} className="deal-image" />
              </div>

              <div className="deal-body">
                <h3 className="deal-title">{item.title}</h3>

                <div className="deal-price-row">
                  <span className="deal-price">${item.price.toFixed(2)}</span>
                  <span className="deal-old-price">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                </div>

                <div className="deal-rating">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>

                <p className="deal-category">{item.category}</p>

                <button className="addToCart-btn">Add to cart</button>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT sidee */}
        <aside className="deals-copy">
          <p className="deals-label">$50 ONLY!</p>
          <h2 className="deals-heading">Final Sale</h2>

          <p className="deals-text">
            Mauris vitae ultricies leo integer malesuada cursus.
          </p>
          <p className="deals-text">
            Odio tempor orci dapibus ultricies in. Egestas diam in arcu cursus
            euismod dictum purus viverra accumsan.
          </p>
          <Link to="/products" className="allDeals-btn">
            ALL DEALS
          </Link>

        </aside>
      </div>
    </section>
  );
};

export default Sales;
