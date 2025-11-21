import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

import "../assets/style/hero.css";
import "../assets/style/categories.css";
import "../assets/style/sales.css";

import categories from "../assets/categories.js";
import salesData from "../assets/salesData.js";
import heroImg from "../assets/images/hero.webp";

function Home() {
  const { addItem } = useCart();

  return (
    <>
      {/*  Hero section */}
            <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            {/*  text */}
            <div className="col-lg-6 py-5">
              <h1 className="hero-title mb-4">
                Brand New
                <br />
                Collection
              </h1>

              <p className="hero-subtitle mb-4">
                Mauris vitae ultricies leo integer malesuada tempor orci dapibus
                ultrices diam in arcu cursus euismod purus viverra accumsan.
              </p>

              {/* Check marks */}
              <div className="row mb-4 hero-bullets">
                <div className="col-4 d-flex align-items-center gap-2">
                  <svg
                    className="ugb-custom-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <path
                      fill="#131117"
                      d="M9.8,13.3c-0.4,0.4-0.9,0.4-1.3,0L4.9,9.7c-0.3-0.4-0.3-0.9,0-1.3c0.3-0.3,0.9-0.3,1.2,0 l3,3l7.5-7.5C13.3,0.2,7.6,0,3.9,3.4S0,12.4,3.4,16.1s9.1,3.9,12.7,0.5c3.1-2.9,3.8-7.6,1.6-11.3L9.8,13.3z"
                    />
                  </svg>
                  <span className="px-2">Top Brands</span>
                </div>

                <div className="col-4 d-flex align-items-center gap-2">
                  <svg
                    className="ugb-custom-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <path
                      fill="#131117"
                      d="M9.8,13.3c-0.4,0.4-0.9,0.4-1.3,0L4.9,9.7c-0.3-0.4-0.3-0.9,0-1.3c0.3-0.3,0.9-0.3,1.2,0 l3,3l7.5-7.5C13.3,0.2,7.6,0,3.9,3.4S0,12.4,3.4,16.1s9.1,3.9,12.7,0.5c3.1-2.9,3.8-7.6,1.6-11.3L9.8,13.3z"
                    />
                  </svg>
                  <span className="px-2">High Quality</span>
                </div>

                <div className="col-4 d-flex align-items-center gap-2">
                  <svg
                    className="ugb-custom-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <path
                      fill="#131117"
                      d="M9.8,13.3c-0.4,0.4-0.9,0.4-1.3,0L4.9,9.7c-0.3-0.4-0.3-0.9,0-1.3c0.3-0.3,0.9-0.3,1.2,0 l3,3l7.5-7.5C13.3,0.2,7.6,0,3.9,3.4S0,12.4,3.4,16.1s9.1,3.9,12.7,0.5c3.1-2.9,3.8-7.6,1.6-11.3L9.8,13.3z"
                    />
                  </svg>
                  <span className="px-2">Free Delivery</span>
                </div>
              </div>

              <Link
                to="/products"
                className="btn btn-danger px-4 py-2 hero-btn"
              >
                EXPLORE SHOP
              </Link>
            </div>

            {/* Hero image */}
            <div className="col-lg-6 text-center">
              <img
                src={heroImg}
                alt="Brand new collection"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM black Section */}
      <section className="hero-strip text-white py-4">
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-6 col-md-3 ">
              <svg
                className="ugb-custom-icon "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
                width="32"
                height="32"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M22.8 33.9H6c-1.4 0-2.5-1.2-2.5-2.6V14h43.3v7.6c0 .9.8 1.7 1.7 1.7 1 0 1.8-.7 1.8-1.7v-12c0-3.3-2.7-6.1-6-6.1H6c-3.3 0-6 2.8-6 6.1v21.7c0 3.3 2.7 6.1 6 6.1H22.9c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7zM6 7h38.3c1.4 0 2.5 1.2 2.5 2.6v.9H3.5v-.9C3.5 8.2 4.6 7 6 7zm.6 16c0-1 .8-1.8 1.8-1.8h4.7c1 0 1.8.7 1.8 1.7s-.7 1.8-1.7 1.8H8.4c-1 .1-1.8-.7-1.8-1.7zm0 5.9c0-1 .8-1.8 1.8-1.8h9.4c1 0 1.7.8 1.7 1.8 0 .9-.8 1.7-1.7 1.7H8.4c-1 0-1.8-.8-1.8-1.7zm34.9-4.3c-7.4 0-13.5 6-13.5 13.5 0 7.4 6 13.5 13.5 13.5C49 51.5 55 45.5 55 38c0-7.4-6-13.4-13.5-13.4zm0 24C35.7 48.6 31 43.8 31 38s4.7-10.5 10.5-10.5S52.1 32.2 52.1 38s-4.8 10.6-10.6 10.6zm5.2-14c.6.6.6 1.5 0 2.1l-5.5 5.5c-.3.3-.7.4-1 .4-.4 0-.8-.1-1-.4l-2.8-2.8c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l1.8 1.8 4.4-4.4c.5-.7 1.4-.7 2-.1z"
                />
              </svg>

              <h6 className="fw-bold mb-1 fs-5">Secure Payment</h6>
              <p className="mb-0 small fs-3">100% secure payment</p>
            </div>
            <div className="col-6 col-md-3">
              <svg
                className="ugb-custom-icon "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
                width="32"
                height="32"
                aria-hidden="true"
              >
                {" "}
                <path
                  fill="currentColor"
                  d="M54.8 24.5c-.1-.9-.9-1.5-1.8-1.4-.9.1-1.5.9-1.4 1.8 1.5 13.3-8.2 25.3-21.5 26.8-.9.1-1.8.1-2.7.1-7.5 0-14.6-3.4-19.3-9.3h3.2c.8-.1 1.4-.8 1.4-1.7 0-.8-.6-1.5-1.4-1.6H4.5c-.4 0-.9.1-1.2.4-.3.4-.5.8-.5 1.3v7.3s0 1.2 1.6 1.2c.7.2 1.4-.4 1.6-1.1v-3.4c7.3 8.9 19.3 12.3 30.3 8.7 12.2-4.1 19.9-16.2 18.5-29.1zm-54.6 6c.1.9.9 1.5 1.8 1.4.9-.1 1.5-.9 1.4-1.8C1.9 16.8 11.5 4.8 24.8 3.4c.9-.1 1.8-.1 2.7-.1 7.5 0 14.6 3.4 19.3 9.3h-3.2c-.8.1-1.4.8-1.4 1.7 0 .8.6 1.5 1.4 1.6h6.9c.4 0 .9-.1 1.2-.4.3-.4.5-.8.5-1.3V6.7s0-1.2-1.6-1.2c-.7-.1-1.4.5-1.6 1.2v3.4C41.7 1.3 29.7-2.2 18.8 1.4 6.5 5.5-1.2 17.6.2 30.5zm25.1-3 3.8 2.8c.2.2.3.5.1.8-.1.1-.3.2-.4.2h-1.2c-.3 0-.6-.2-.6-.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 1.7 1.1 3.2 2.8 3.6v.1c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-.1c1.6-.5 2.8-2 2.8-3.7 0-1.2-.6-2.3-1.5-3l-3.8-2.8c-.2-.2-.3-.5-.1-.8.1-.1.3-.2.4-.2h1.2c.3 0 .6.2.6.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1.7-1.1-3.2-2.8-3.6v-.1c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v.1c-2 .6-3.2 2.6-2.6 4.6.2.9.6 1.6 1.3 2.1zm2.9 13.8c7.5 0 13.6-6.1 13.6-13.6s-6.1-13.6-13.6-13.6-13.6 6.1-13.6 13.6 6.1 13.5 13.6 13.6zm0-24c5.7 0 10.4 4.7 10.4 10.4S33.9 38 28.2 38s-10.4-4.7-10.4-10.4 4.6-10.3 10.4-10.3z"
                />
              </svg>

              <h6 className="fw-bold mb-1">30 Days Return</h6>
              <p className="mb-0 small">If goods have problems</p>
            </div>
            <div className="col-6 col-md-3">
              <svg
                className="ugb-custom-icon text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
                width="32"
                height="32"
                aria-hidden="true"
              >
                {" "}
                <path
                  fill="currentColor"
                  d="M27.5 0C14.2 0 3.3 10.8 3.3 24.2v13.1c0 2.7 2.2 4.8 4.8 4.8H10c.9 2.5 3.6 3.8 6.2 2.9 1.9-.7 3.2-2.5 3.2-4.6v-13c0-2.7-2.2-4.8-4.8-4.8-2 0-3.9 1.3-4.6 3.2H8.1c-.5 0-1.1.1-1.6.3v-1.9c-.2-11.6 9-21.1 20.6-21.3 11.6-.2 21.1 9 21.3 20.6V26.1c-.5-.2-1.1-.3-1.6-.3h-1.9c-.9-2.5-3.6-3.8-6.2-2.9-1.9.7-3.2 2.5-3.2 4.6v13.1c0 2.7 2.2 4.8 4.8 4.8.5 0 .9-.1 1.4-.2-.6 2-2.5 3.4-4.6 3.4H32c-.9-2.5-3.7-3.8-6.2-2.9-2.5.9-3.8 3.7-2.9 6.2.9 2.5 3.7 3.8 6.2 2.9 1.4-.5 2.5-1.6 2.9-2.9h5.1c4.4 0 8.1-3.6 8.1-8.1v-1.6h1.6c2.7 0 4.8-2.2 4.8-4.8V24.2C51.7 10.8 40.8 0 27.5 0zM13 27.4c0-.9.8-1.6 1.7-1.6.9 0 1.5.7 1.6 1.6v13.1c0 .9-.8 1.6-1.7 1.6-.9 0-1.5-.7-1.6-1.6V27.4zM8.2 29h1.6v9.9H8.2c-.9 0-1.6-.7-1.6-1.6v-6.7c0-.9.7-1.6 1.6-1.6zm19.3 22.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM42 40.5c0 .9-.8 1.6-1.7 1.6-.9 0-1.5-.7-1.6-1.6V27.4c0-.9.8-1.6 1.7-1.6.9 0 1.5.7 1.6 1.6v13.1zm6.4-3.2c0 .9-.7 1.6-1.6 1.6h-1.6V29h1.6c.9 0 1.6.7 1.6 1.6v6.7z"
                />
              </svg>

              <h6 className="fw-bold mb-1">24/7 Support</h6>
              <p className="mb-0 small">Dedicated support</p>
            </div>
            <div className="col-6 col-md-3">
              <svg
                className="ugb-custom-icon text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 55 55"
                width="32"
                height="32"
                aria-hidden="true"
              >
                {" "}
                <path
                  fill="currentColor"
                  d="m32.8 13.5 3.8 2.8c.2.2.3.5.1.8-.1.1-.3.2-.4.2h-1.2c-.3 0-.6-.2-.6-.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 1.7 1.1 3.2 2.8 3.6v.1c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-.1c1.6-.5 2.8-2 2.8-3.7 0-1.2-.6-2.3-1.5-3l-3.8-2.8c-.2-.2-.3-.5-.1-.8.1-.1.3-.2.4-.2h1.2c.3 0 .6.2.6.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1.7-1.1-3.2-2.8-3.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v.1c-2 .6-3.2 2.6-2.6 4.6.1.8.6 1.5 1.3 2zm2.9 13.7c7.5 0 13.6-6.1 13.6-13.6S43.2 0 35.6 0C28.1 0 22 6.1 22 13.6c.1 7.5 6.1 13.6 13.7 13.6zm0-24C41.4 3.2 46 7.9 46 13.6S41.4 24 35.6 24c-5.7 0-10.4-4.7-10.4-10.4.1-5.7 4.7-10.4 10.5-10.4zm18.2 27.7c-1.7-2.2-4.9-2.7-7.2-1.1l-6.1 4.1c-.9-1.6-2.6-2.7-4.5-2.7h-4.4c-4.8-4.5-12.4-4.3-16.9.5-.7.8-1.3 1.6-1.8 2.5l-.8.5-.2-.6c-.3-.8-1.2-1.3-2-1l-8.9 3c-.8.3-1.3 1.2-1 2l5.4 15.7c.3.8 1.2 1.3 2 1l8.9-3c.8-.3 1.3-1.2 1-2v-.1l14.1-.4c3.8 0 7.5-1.2 10.7-3.4l10.6-7.6c2.4-1.7 2.9-5 1.2-7.3l-.1-.1zM8 51.3 3.7 38.7l5.8-2 4.3 12.7L8 51.3zm42.9-15.6-10.6 7.6c-2.6 1.8-5.7 2.8-8.8 2.8l-15.1.5-3-8.7 1.8-1.1c.3-.2.5-.4.6-.7 2.1-4.3 7.4-6.1 11.7-4 .9.5 1.8 1.1 2.5 1.8.3.3.7.5 1.2.5h5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h-9.1c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h9.1c2.3 0 4.4-1.6 4.9-3.9l7.5-5c.9-.6 2.2-.4 2.8.5.6 1 .4 2.3-.5 2.9z"
                />
              </svg>
              <h6 className="fw-bold mb-1">Free Delivery</h6>
              <p className="mb-0 small">For all order over 80$</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
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

      {/* Sales */}
      <section className="deals-section">
        <div className="deals-inner">
          {/* left side */}
          <div className="deals-grid">
            {salesData.map((item) => (
               <article className="deal-card" key={item.id}>
                <div className="deal-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="deal-image"
                  />
                </div>

                <div className="deal-body">
                  <h3 className="deal-title">{item.title}</h3>

                  <div className="deal-price-row">
                    <span className="deal-price">
                      ${item.price.toFixed(2)}
                    </span>
                    <span className="deal-old-price">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="deal-rating">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>

                  <p className="deal-category">{item.category}</p>

                 
                  <button
                    className="addToCart-btn"
                    onClick={() => {
                      
                      addItem({
                        id: item.id,
                        price: item.price,
                        title: item.title,
                        image: item.image,
                        category: item.category,
                      });
                      
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT side */}
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
    </>
  );
}

export default Home;
