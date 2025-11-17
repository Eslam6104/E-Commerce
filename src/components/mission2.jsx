import { Link } from "react-router-dom";
import "./mission2.css";
import missionImg from "../assets/images/mission2.webp";
const Mission = () => {
  const description =
    "Description for this block. Use this space for describing your block. Any text will do. Description for this block. You can use this space for describing your block.";

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

          {/* details and summary*/}
          <div className="mission-accordion">
            <details className="mission-item">
              <summary>
                Pellentesque tincidunt tristique neque?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>

            <details className="mission-item">
              <summary>
                Suspendisse sed ultricies nisl, pharetra rutrum mauris?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>

            <details className="mission-item">
              <summary>
                Fusce at egestas libero convallis egestasullamcorper?
                <span className="mission-toggle" />
              </summary>
              <p className="mission-desc">{description}</p>
            </details>
          </div>
          <Link to="/news" className="mission-btn">
            MORE DETAILS
          </Link>
        </div>
        {/* Image */}
        <div className="mission-image-container">
          <img
            src={missionImg}
            alt="Clothes on hangers"
            className="mission-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
