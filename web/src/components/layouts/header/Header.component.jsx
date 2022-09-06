import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./header.style.scss";

function Header() {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo />
      </Link>
      <div className="link-container">
        <Link className="link" to="/shop">
          Shop
        </Link>
        <br></br>
        <Link className="link" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;
