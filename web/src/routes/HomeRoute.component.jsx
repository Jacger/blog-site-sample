import { useEffect, useState } from 'react';
import CategoriesContainer from '../components/categories/CategoriesContainer.component';

function HomeRoute() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categories = require('../data/categories.json');
    console.log(categories);
    setCategories(categories);
  }, [])

  return (
    <CategoriesContainer categories={categories} />
  )
}

export default HomeRoute;
