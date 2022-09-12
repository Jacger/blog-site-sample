import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './CheckoutItem.component.scss'

function CheckoutItem({ item }) {
  const { addItemToCart, minusItemFromCart, removeItemFromCart } = useContext(CartContext);
  const { name, quantity, imageUrl, price } = item;

  const increaseHandler = () => addItemToCart(item);
  const decreaseHandler = () => minusItemFromCart(item)
  const removeCartItem = () => removeItemFromCart(item)

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={decreaseHandler}>&#10094;</div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick={increaseHandler}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={removeCartItem}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;
