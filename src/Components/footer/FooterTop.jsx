import React from "react";
import { footerData } from "./FooterData";

const FooterTop = () => {
  return (
    <div className="container py-5">
      <div className="row text-center text-md-start">
        {footerData.map((section, index) => (
          <div key={index} className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">{section.title}</h5>

            {/* لو النوع Text */}
            {section.type === "text" &&
              section.paragraphs.map((p, i) => (
                <p key={i} className="small text-muted white-space-pre-line">
                  {p}
                </p>
              ))}

            {/* ولو النوع Links */}
            {section.type === "links" && (
              <ul className="list-unstyled small mb-0">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={link.href}
                      className="text-muted text-decoration-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
