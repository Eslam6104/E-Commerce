import React from 'react'

function AboutHero() {
  return (
      <div
        style={{ backgroundColor: "#0d0d0d", color: "#fff" }}
        className="container pb-5"
      >
        <div className="container ">
          <div className="row align-items-center">
            {/* image section */}
            <div className="col-md-5">
              <img
                src="https://res.cloudinary.com/dcwhmrmqa/image/upload/v1763746893/about-us-collection-section_optimized_nsvyil.webp"
                alt="About Shoes"
                className="img-fluid shadow-lg w-100"
                style={{
                  marginTop: "-120px",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* text section */}
            <div className="col-md-7 ps-md-5 mt-4 mt-md-0">
              <h3 className="fw-bold m-4 fs-1">Shoes Collection</h3>
              <div className="row text-secondary text-white mt-5">
                <div className="col-lg-6">
                  <p>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consectetur et luctus et, porta ut dolor. Mauris
                    ultrices ultrices neque eget hendrerit.
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    Fusce at nisi eget dolor rhoncus facilisis. Mauris ante
                    nisl, consectetur et luctus et, porta ut dolor. Mauris
                    ultrices ultrices neque eget hendrerit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AboutHero
