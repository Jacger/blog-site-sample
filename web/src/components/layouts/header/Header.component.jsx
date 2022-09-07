import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import "./header.style.scss";

function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    try {
      await signOutUser();
      setCurrentUser(null);
    } catch (error) {
      console.log(error.messages);
    }
  }

  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo />
      </Link>
      <div className="link-container">
        <Link className="link" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <div className="link" onClick={signOutHandler}>
            LOG OUT
          </div>
        ) : (
          <Link className="link" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
