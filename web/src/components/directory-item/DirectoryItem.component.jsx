import "./DirectoryItem.style.scss";

function DirectoryItem({ category }) {
  const { title, imageUrl } = category;
  console.log("DirectoryItem");

  return (
    <div className="directory-item-container">
      <div
        className="category-background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;
