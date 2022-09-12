import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-cart/ProductCard.component";
import './shop.style.scss';

function ShopRoute() {
  const { products } = useContext(ProductsContext);
  console.log('ShopRoute');

  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ShopRoute;
