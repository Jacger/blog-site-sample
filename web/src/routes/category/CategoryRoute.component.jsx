import { useContext, useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-cart/ProductCard.component";
import { CategoriesContext } from "../../contexts/categories.context";
import "./category.style.scss";

function CategoryRoute() {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
}

export default CategoryRoute;
