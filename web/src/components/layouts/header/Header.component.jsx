import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../../components/cart-icon/CartIcon.component";
import "./header.style.scss";

function Header() {
  const { currentUser, saveUserInfo } = useContext(UserContext);
  console.log('Header');

  const signOutHandler = () => {
    signOutUser();
    saveUserInfo(null);
  }

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="nav-link" onClick={signOutHandler}>
            SIGN OUT
          </div>
        ) : (
          <Link className="nav-link" to="/auth0">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;
