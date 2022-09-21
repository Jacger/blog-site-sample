import { useContext, useState } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
import "./CartIcon.style.scss";

function CartIcon() {
  const { totalItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log("CartIcon");

  const toggleCartHanler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-container">
      <div className="cart-icon-container" onClick={toggleCartHanler}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{totalItems}</span>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default CartIcon;
