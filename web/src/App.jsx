import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/home/HomeRoute.component";
import AuthenticationRoute from "./routes/authentication/AuthenticationRoute.component";
import NavigationRoute from "./routes/navigation/NavigationRoute.component";
import ShopRoute from "./routes/shop/ShopRoute.component";
import CheckoutRoute from './routes/checkout/CheckoutRoute.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="auth" element={<AuthenticationRoute />} />
        <Route path="shop" element={<ShopRoute />} />
        <Route path="checkout" element={<CheckoutRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
