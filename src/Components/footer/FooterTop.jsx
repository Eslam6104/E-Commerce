/**
 * Top section of the footer: four columns (about, account, shipping, contact).
 */
import React from "react";
const FooterTop = () => (
  <div className="container py-5">
    <div className="row text-center text-md-start">
      {/* About column */}
      <div className="col-md-3 mb-4">
        <h5>About Us</h5>
        <p className="mb-0 small">
          Mauris vitae ultricies leo integer malesuada. Odio tempor orci
          dapibus ultrices in. Egestas diam in arcu cursus euismod. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt.
        </p>
      </div>

      {/* Account column */}
      <div className="col-md-3 mb-4 ">
        <h5>services</h5>
        <ul className="list-unstyled mb-0 small">
          <li><a href="#">My Account</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><a href="#">My Cart</a></li>
          <li><a href="#">Sign in</a></li>
          <li><a href="#">Check out</a></li>
        </ul>
      </div>

      {/* Shipping column */}
      <div className="col-md-3 mb-4">
        <h5>Shipping</h5>
        <ul className="list-unstyled mb-0 small">
          <li><a href="#">New Products</a></li>
          <li><a href="#">Best Sellers</a></li>
          <li><a href="#">Manufacturers</a></li>
          <li><a href="#">Suppliers</a></li>
          <li><a href="#">Specials</a></li>
        </ul>
      </div>

      {/* Contact column */}
      <div className="col-md-3 mb-4">
        <h5>Contact Us</h5>
        <p className="mb-0 small">
          Phone: (+63) 555 1212
          <br />
          Fax: (+63) 555 0100
          <br />
          <br />
          New York,
          <br />
          96th Street, NY 10129
        </p>
      </div>
    </div>
  </div>
);

export default FooterTop;
