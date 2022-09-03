import { Routes, Route } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.component";
import { AuthenticationRoute as LoginRoute } from "./routes/AuthenticationRoute.component";
import RegisterRoute from "./routes/RegisterRoute.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="login" element={<LoginRoute />} />
      <Route path="register" element={<RegisterRoute />} />
    </Routes>
  );
}

export default App;
