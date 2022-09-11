import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./CartIcon.style.scss";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, totalItems } = useContext(CartContext);

  const toggleCartHanler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartHanler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  );
}

export default CartIcon;
