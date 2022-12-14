import { useContext } from "react";
import Button from "../button/Button.component";
import { CartContext } from "../../contexts/cart.context";
import "./ProductCard.style.scss";

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  console.log("ProductCard");

  const addItemHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemHandler}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
