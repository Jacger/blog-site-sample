import { useContext } from "react";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../contexts/cart.context";
import "./CartDropdown.style.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
