import CategoryContainer from '../category/CategoryContainer.component';
import './categories.style.scss';

function CategoriesContainer({categories}) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryContainer category={category} key={category.id} />
      ))}
    </div>
  )
}

export default CategoriesContainer;
