import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo2.png";

function Logo({ compact = false, className = "", onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={`brand ${compact ? "brand--compact" : ""} ${className}`.trim()}
      aria-label="Aleem Developer — home"
    >
      <span className="brand__mark">
        <img src={logo} alt="" aria-hidden="true" />
      </span>
      {!compact && (
        <span className="brand__wordmark">
          Aleem<span className="brand__dot">.</span>
          <small>developer</small>
        </span>
      )}
    </Link>
  );
}

export default Logo;
