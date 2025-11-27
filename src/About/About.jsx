import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/jordans.css";
import jordansImg from "../assets/images/jordans.jpeg";
import NewsLetter from "../components/newsLetter";


function About() {
  return (
    <>
    <section className="container-fluid my-5 py-5">
      <div className="row align-items-center">

        {/* left column */}
        <div className="col-lg-6 px-5">
          <h2 className="fw-semibold" style={{ fontSize: "2.5rem" }}>
            Shop The 5 Biggest <br /> Shoe Trends
          </h2>

          <p className="mt-4 mb-4" style={{ fontSize: "1.05rem", color: "#6c757d" }}>
            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci
            dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum
            purus viverra accumsan in nisl.
          </p>

          <button
            className="btn btn-danger fw-semibold"
            style={{ padding: "12px 28px", fontSize: "1rem" }}
          >
            SHOP NOW
          </button>
        </div>

        {/* right column — image */}
        <div className="col-lg-6 text-center">
          <img
            src={jordansImg}
            alt="Jordans"
            className="img-fluid"
            style={{ width: "75%" }}
          />
        </div>

      </div>
    </section>
    <NewsLetter></NewsLetter>
    </>
  );
}

export default About;
