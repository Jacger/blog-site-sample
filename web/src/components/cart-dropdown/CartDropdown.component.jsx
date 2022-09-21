import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import "./CartDropdown.style.scss";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  let navigate = useNavigate();
  console.log('CartDropdown');

  const goToCheckoutHandler = () => {
    navigate('checkout');
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;
