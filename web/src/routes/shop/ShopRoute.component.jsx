import { Routes, Route } from "react-router-dom";
import CategoriesPreviewRoute from '../categories-preview/CategoriesPreviewRoute.component';
import CategoryRoute from '../category/CategoryRoute.component';
import './shop.style.scss';

function ShopRoute() {
  console.log('ShopRoute');

  return (
    <Routes>
      <Route index element={<CategoriesPreviewRoute />}/>
      <Route path=":category" element={<CategoryRoute />}/>
    </Routes>
  )
}

export default ShopRoute;
