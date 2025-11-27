import React, { useRef } from "react";
import "../assets/style/mission2.css";
import missionImg from "../assets/images/mission2.webp";
import { setupAccordion } from "../components/accordionController";

function Service() {
  const description =
    "Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.";

  const detailsRef = useRef([]);
  const handleToggle = setupAccordion(detailsRef);

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
            <details
              className="mission-item"
              ref={(element) => (detailsRef.current[0] = element)}
              onToggle={() => handleToggle(0)}
            >
              <summary>
                Pellentesque tincidunt tristique neque?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>

            <details
              className="mission-item"
              ref={(element) => (detailsRef.current[1] = element)}
              onToggle={() => handleToggle(1)}
            >
              <summary>
                Suspendisse sed ultricies nisl, pharetra rutrum mauris?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>

            <details
              className="mission-item"
              ref={(element) => (detailsRef.current[2] = element)}
              onToggle={() => handleToggle(2)}
            >
              <summary>
                Fusce at egestas libero convallis egestas ullamcorper?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>
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
}

export default Service;
