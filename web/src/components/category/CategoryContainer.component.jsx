import './category.style.scss'

function CategoryContainer({category}) {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div className="category-background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryContainer;
