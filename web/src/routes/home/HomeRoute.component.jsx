import DirectoryItem from '../../components/directory-item/DirectoryItem.component';
import { useEffect, useState } from 'react';
import './home.style.scss'

function HomeRoute() {
  const [categories, setCategories] = useState([]);
  console.log('HomeRoute');

  useEffect(() => {
    const categories = require('../../data/categories.json');
    setCategories(categories);
  }, [])

  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}

export default HomeRoute;
