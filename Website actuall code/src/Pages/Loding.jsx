import "../assets/Styles/Pages/loding.scss";
import logo from "../assets/images/logo/logo2.png";

function Loding({ isExiting = false }) {
  return (
    <div
      className={`loader ${isExiting ? "is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader__grid" aria-hidden="true" />
      <div className="loader__glow" aria-hidden="true" />

      <div className="loader__inner">
        <div className="loader__mark">
          <span className="loader__ring" aria-hidden="true" />
          <img src={logo} alt="Aleem Developer logo" />
        </div>

        <span className="loader__eyebrow">Portfolio · 2026</span>
        <h1>
          Aleem<span>.</span>
        </h1>
        <p className="loader__role">
          Web developer <i>·</i> Digital designer
        </p>

        <div className="loader__progress">
          <span />
        </div>
        <div className="loader__meta">
          <span>Preparing portfolio</span>
        </div>
      </div>

      <div className="loader__footer">
        <span>Lahore, Pakistan</span>
        <span>Available for select projects</span>
      </div>
    </div>
  );
}

export default Loding;
