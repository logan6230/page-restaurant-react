import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Restaurantes from "../Restaurantes";
import "./App.css";
import Navbar from "../Componentes/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Restaurantes", element: <Restaurantes /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};
export default App;
