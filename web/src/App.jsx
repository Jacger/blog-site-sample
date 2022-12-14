import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/home/HomeRoute.component";
import AuthenticationRoute from "./routes/authentication/AuthenticationRoute.component";
import AuthRoute from "./routes/auth/AuthRoute.component";
import NavigationRoute from "./routes/navigation/NavigationRoute.component";
import ShopRoute from "./routes/shop/ShopRoute.component";
import CheckoutRoute from './routes/checkout/CheckoutRoute.component';

function App() {
  console.log('App');

  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="auth" element={<AuthenticationRoute />} />
        <Route path="auth0" element={<AuthRoute />} />
        <Route path="shop/*" element={<ShopRoute />} />
        <Route path="checkout" element={<CheckoutRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
