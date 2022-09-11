import "./CartItem.style.scss";

function CartItem({ item }) {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <name className="name">{name}</name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
