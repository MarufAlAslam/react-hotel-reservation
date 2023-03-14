import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";
import Rooms from "../pages/Rooms";

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
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default routes;
