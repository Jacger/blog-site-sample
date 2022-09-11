import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.component";
import { AuthenticationRoute } from "./routes/AuthenticationRoute.component";
import NavigationRoute from "./routes/NavigationRoute.component";
import ShopRoute from "./routes/ShopRoute.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="auth" element={<AuthenticationRoute />} />
        <Route path="shop" element={<ShopRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
