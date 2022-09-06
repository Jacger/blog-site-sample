import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.component";
import { AuthenticationRoute as LoginRoute } from "./routes/AuthenticationRoute.component";
import RegisterRoute from "./routes/RegisterRoute.component";
import NavigationRoute from './routes/NavigationRoute.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationRoute />}>
        <Route index element={<HomeRoute />} />
        <Route path="login" element={<LoginRoute />} />
        <Route path="register" element={<RegisterRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
