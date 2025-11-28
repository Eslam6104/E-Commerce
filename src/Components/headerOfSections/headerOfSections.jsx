import React from "react";

const HeaderOfSections = ({ title, breadcrumbs = [] }) => {
  return (
    <div
      className="bg-light text-center w-100"
      style={{ paddingTop: "50px", paddingBottom: "150px" }}
    >
      <div className="container ">
        
        {/* Breadcrumbs Logic */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center mb-2 pt-5">
            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`breadcrumb-item ${!item.href ? "active text-dark fw-bold" : ""}`}
                {...(!item.href && { "aria-current": "page" })}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted text-decoration-none"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h2 className="fw-bold display-1">{title}</h2>
        
      </div>
    </div>
  );
};

export default HeaderOfSections;