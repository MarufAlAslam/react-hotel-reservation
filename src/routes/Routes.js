import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default routes;
