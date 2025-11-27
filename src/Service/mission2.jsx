import React, { useState } from "react";
import "../assets/style/mission2.css";
import missionImg from "../assets/images/mission2.webp";

const Mission = () => {
  const description =
    "Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.";

  const items = [
    "Pellentesque tincidunt tristique neque?",
    "Suspendisse sed ultricies nisl, pharetra rutrum mauris?",
    "Fusce at egestas libero convallis egestas ullamcorper?",
  ];

  const [openIndex, setOpenIndex] = useState();

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Text */}
        <div className="mission-text">
          <p className="mission-label">OUR MISSION</p>

          <h2 className="mission-title">
            Condimentum Mattis
            <br />
            Pellentesque Bibendum
          </h2>

          <p className="mission-intro">
            Integer at faucibus urna. Nullam condimentum leo id elit sagittis
            auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam
            elementum. Etiam elementum euismod commodo.
          </p>

          <div className="mission-accordion">
            {items.map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  className={`mission-item ${isOpen ? "is-open" : ""}`}
                  key={index}
                >
                  <button
                    type="button"
                    className="mission-summary"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{question}</span>
                    <span className="mission-toggle" />
                  </button>

                  <div className="mission-panel">
                    <p className="mission-desc">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="mission-btn">MORE DETAILS</button>
        </div>

        <img
          src={missionImg}
          alt="Clothes on hangers"
          className="mission-image"
        />
      </div>
    </section>
  );
};

export default Mission;
